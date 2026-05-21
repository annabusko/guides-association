/**
 * Image optimization script.
 * Generates WebP versions of all source images alongside the originals.
 *
 * Run once before building:
 *   npm run optimize-images
 *
 * Requires: npm install --save-dev sharp  (already in devDependencies)
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

const IMAGES_DIR = path.resolve(__dirname, '../src/assets/images');

/**
 * Each entry defines a source glob relative to IMAGES_DIR,
 * the resize target (null = keep original dimensions), and WebP quality.
 */
const TARGETS = [
  // ── Slider (full-width CSS background, highest impact) ──────────────────
  {
    pattern: 'slider/*.jpg',
    resize: { width: 1600 },
    quality: 82,
  },

  // ── Hero / section backgrounds ───────────────────────────────────────────
  {
    pattern: 'different/about.group.jpg',
    resize: { width: 1400 },
    quality: 82,
  },
  {
    pattern: 'different/training.group.jpg',
    resize: { width: 1400 },
    quality: 82,
  },
  {
    pattern: 'different/contact.group.jpg',
    resize: { width: 1400 },
    quality: 82,
  },
  {
    pattern: 'different/news.jpg',
    resize: { width: 1400 },
    quality: 82,
  },

  // ── Small section images (thumbnail/card context) ─────────────────────
  {
    pattern: 'different/history.jpg',
    resize: { width: 800 },
    quality: 82,
  },
  {
    pattern: 'different/rules.jpg',
    resize: { width: 800 },
    quality: 82,
  },
  {
    pattern: 'different/join.jpg',
    resize: { width: 800 },
    quality: 82,
  },
  {
    pattern: 'different/exam.jpg',
    resize: { width: 800 },
    quality: 82,
  },
  {
    pattern: 'different/guides_small.jpg',
    resize: { width: 800 },
    quality: 82,
  },

  // ── Board / committee photos ───────────────────────────────────────────
  {
    pattern: 'board/*.jpg',
    resize: { width: 400, height: 400, fit: 'cover', position: 'top' },
    quality: 85,
  },

  // ── People / leadership photos ────────────────────────────────────────
  {
    pattern: 'people/*.jpg',
    resize: { width: 300, height: 300, fit: 'cover', position: 'top' },
    quality: 85,
  },

  // ── Route card images ─────────────────────────────────────────────────
  {
    pattern: 'buttons/*.jpg',
    resize: { width: 900 },
    quality: 82,
  },

  // ── Reason/feature icons ──────────────────────────────────────────────
  {
    pattern: 'icons/*.png',
    resize: { width: 200, height: 200, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } },
    quality: 85,
  },

  // ── Training logos ────────────────────────────────────────────────────
  {
    pattern: 'different/logoTraining1.png',
    resize: { width: 300, fit: 'inside' },
    quality: 85,
  },
  {
    pattern: 'different/logoTraining2.png',
    resize: { width: 300, fit: 'inside' },
    quality: 85,
  },

  // ── No-person placeholder ─────────────────────────────────────────────
  {
    pattern: 'different/no-person.png',
    resize: { width: 300, height: 300, fit: 'cover' },
    quality: 85,
  },

  // ── Flag icons (displayed ~24px, kept at 64px to stay crisp) ─────────
  {
    pattern: 'flags/*.png',
    resize: { width: 64, height: 64, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } },
    quality: 90,
  },
];

// ─────────────────────────────────────────────────────────────────────────────

async function optimizeOne(srcPath, resize, quality) {
  const ext = path.extname(srcPath);
  const webpPath = srcPath.replace(ext, '.webp');

  if (fs.existsSync(webpPath)) {
    console.log(`  skip  ${path.relative(IMAGES_DIR, webpPath)} (already exists)`);
    return;
  }

  let pipeline = sharp(srcPath);

  if (resize) {
    const { fit, position, background, ...dimensions } = resize;
    pipeline = pipeline.resize({
      ...dimensions,
      ...(fit ? { fit } : {}),
      ...(position ? { position } : {}),
      ...(background ? { background } : {}),
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality }).toFile(webpPath);

  const srcStat = fs.statSync(srcPath);
  const webpStat = fs.statSync(webpPath);
  const saving = (((srcStat.size - webpStat.size) / srcStat.size) * 100).toFixed(0);
  console.log(
    `  ✓  ${path.relative(IMAGES_DIR, webpPath)}` +
    `  (${kb(srcStat.size)} → ${kb(webpStat.size)}, -${saving}%)`
  );
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function run() {
  console.log('Generating WebP images…\n');

  for (const target of TARGETS) {
    const matches = glob.sync(target.pattern, { cwd: IMAGES_DIR, absolute: true });

    if (matches.length === 0) {
      console.warn(`  warn  no files matched: ${target.pattern}`);
      continue;
    }

    for (const srcPath of matches) {
      try {
        await optimizeOne(srcPath, target.resize, target.quality);
      } catch (err) {
        console.error(`  ERROR  ${srcPath}: ${err.message}`);
      }
    }
  }

  console.log('\nDone.');
}

run();
