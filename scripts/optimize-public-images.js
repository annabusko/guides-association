const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const TARGET_DIRS = [
  path.join(PUBLIC_DIR, 'guides'),
  path.join(PUBLIC_DIR, 'interpreters'),
];

const JSON_FILES = [
  path.join(PUBLIC_DIR, 'guides.json'),
  path.join(PUBLIC_DIR, 'interpreters.json'),
];

const MAX_WIDTH = 700;
const WEBP_QUALITY = 75;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

async function getJpgFiles(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && /\.jpg$/i.test(entry.name))
    .map((entry) => path.join(dirPath, entry.name));
}

async function convertToWebp(jpgPath) {
  const webpPath = jpgPath.replace(/\.jpg$/i, '.webp');

  if (fs.existsSync(webpPath)) {
    return {
      status: 'skipped',
      jpgPath,
      webpPath,
      beforeBytes: fs.statSync(jpgPath).size,
      afterBytes: fs.statSync(webpPath).size,
    };
  }

  const beforeBytes = fs.statSync(jpgPath).size;

  await sharp(jpgPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 5 })
    .toFile(webpPath);

  const afterBytes = fs.statSync(webpPath).size;

  return {
    status: 'converted',
    jpgPath,
    webpPath,
    beforeBytes,
    afterBytes,
  };
}

function printResult(result) {
  const rel = path.relative(PUBLIC_DIR, result.webpPath);
  const savedBytes = Math.max(result.beforeBytes - result.afterBytes, 0);
  const savedPct = result.beforeBytes > 0
    ? ((savedBytes / result.beforeBytes) * 100).toFixed(1)
    : '0.0';

  if (result.status === 'skipped') {
    console.log(`SKIP      ${rel} (already exists)`);
    return;
  }

  console.log(
    `CONVERTED ${rel} (${formatBytes(result.beforeBytes)} -> ${formatBytes(result.afterBytes)}, -${savedPct}%)`
  );
}

function validateJsonImageReferences() {
  const missing = [];
  let checked = 0;

  for (const jsonPath of JSON_FILES) {
    const raw = fs.readFileSync(jsonPath, 'utf8');
    const rows = JSON.parse(raw);

    for (const row of rows) {
      if (!row || typeof row.img !== 'string') {
        continue;
      }

      checked += 1;
      const resolved = path.join(PUBLIC_DIR, row.img);
      if (!fs.existsSync(resolved)) {
        missing.push({
          jsonFile: path.basename(jsonPath),
          id: row.id,
          img: row.img,
        });
      }
    }
  }

  return { checked, missing };
}

async function run() {
  console.log('Optimizing public JPG images to WebP...');
  console.log(`Settings: width<=${MAX_WIDTH}px, quality=${WEBP_QUALITY}`);

  const jpgFiles = [];
  for (const dirPath of TARGET_DIRS) {
    const files = await getJpgFiles(dirPath);
    jpgFiles.push(...files);
  }

  if (jpgFiles.length === 0) {
    console.log('No JPG files found in target folders.');
    return;
  }

  const results = [];
  for (const jpgPath of jpgFiles) {
    try {
      const result = await convertToWebp(jpgPath);
      results.push(result);
      printResult(result);
    } catch (error) {
      console.error(`ERROR     ${path.relative(PUBLIC_DIR, jpgPath)}: ${error.message}`);
    }
  }

  const converted = results.filter((r) => r.status === 'converted');
  const skipped = results.filter((r) => r.status === 'skipped');

  const totalBefore = converted.reduce((sum, r) => sum + r.beforeBytes, 0);
  const totalAfter = converted.reduce((sum, r) => sum + r.afterBytes, 0);
  const totalSaved = Math.max(totalBefore - totalAfter, 0);
  const avgReductionPct = converted.length > 0
    ? converted.reduce((sum, r) => {
      const one = r.beforeBytes > 0
        ? ((r.beforeBytes - r.afterBytes) / r.beforeBytes) * 100
        : 0;
      return sum + one;
    }, 0) / converted.length
    : 0;

  console.log('\nSummary');
  console.log(`- JPG files found: ${jpgFiles.length}`);
  console.log(`- Converted: ${converted.length}`);
  console.log(`- Skipped existing WebP: ${skipped.length}`);
  console.log(`- Size before (converted only): ${formatBytes(totalBefore)}`);
  console.log(`- Size after (converted only): ${formatBytes(totalAfter)}`);
  console.log(`- Total savings: ${formatBytes(totalSaved)}`);
  console.log(`- Average reduction: ${avgReductionPct.toFixed(1)}%`);

  const verification = validateJsonImageReferences();
  console.log(`\nJSON reference check: ${verification.checked} image paths checked`);

  if (verification.missing.length > 0) {
    console.log(`Missing references: ${verification.missing.length}`);
    for (const miss of verification.missing) {
      console.log(`- ${miss.jsonFile} id=${miss.id} -> ${miss.img}`);
    }
    process.exitCode = 1;
  } else {
    console.log('No broken image paths found in JSON files.');
  }
}

run().catch((error) => {
  console.error(`Fatal error: ${error.message}`);
  process.exitCode = 1;
});
