import React from 'react';
import AboutBlock from './About';
import { useTranslation } from "react-i18next";

const img_guides_main = {
    url: require('../assets/images/different/guides.jpg')
};

const img_guides_small = {
    src: require('../assets/images/different/guides_small.jpg'),
    alt: "Белорусское общество экскурсоводов и гидов-переводчиков"
};

const Title = () => {
    const { t } = useTranslation();
    return <h1>{t('menu_guide')}</h1>;
}

const GuidesMainBlock = () => {
    const { t } = useTranslation();

    return (
        <AboutBlock image_main={img_guides_main} image_small={img_guides_small} title={<Title />}>
            <h2>{t('menu_guide-main')}</h2>
            <p>{t('guides_about1')}</p>
            <p>{t('guides_about2')}</p>
            <p>{t('guides_about3')}</p>
            <p>{t('guides_about4')}</p>
        </AboutBlock>
    )
};

export default GuidesMainBlock;