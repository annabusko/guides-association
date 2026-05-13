import React from 'react';
import { useTranslation } from "react-i18next";
import appeal from "../assets/documents/appeal.pdf";
const img_news_main = require('../assets/images/different/news.jpg');

const NewsBlock = () => {
    const { t } = useTranslation();
    return (
        <div className="news-container">
            <div className="content-main-image"
                style={{
                    background: `url(${img_news_main})`
                }} >
                <div>
                    <h1>{t('menu_news')}</h1>
                </div>
            </div>
            <iframe className="iframe-appeal" title="appeal" src={appeal} width="90%" height="1000px"> </iframe>
        </div>
    )
};

export default NewsBlock;