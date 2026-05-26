import React from 'react';
import { Image } from 'semantic-ui-react';

import { useTranslation } from "react-i18next";
import icon1 from '../assets/images/icons/history.webp';
import icon2 from '../assets/images/icons/nature.webp';
import icon3 from '../assets/images/icons/professional.webp';
import icon4 from '../assets/images/icons/party.webp';
import icon5 from '../assets/images/icons/language2.webp';
import icon6 from '../assets/images/icons/patriot.webp';

const ReasonsBlock = () => {
    const { t } = useTranslation();
    return (
        <div className="block-wrapper">
            <h2>{t('reasons_header')}</h2>
            <div className="block-grid reasons-grid">
                <div className="reasons-column">
                    <Image src={icon1} size='small' centered alt="" loading="lazy" width={118} height={118} />
                    <div className="reasons-content">
                        <p className="reason-title">{t('reasons_title1')}</p>
                        <p>{t('reasons_description1')}</p>
                    </div>
                </div>

                <div className="reasons-column">
                    <Image src={icon2} size='small' centered alt="" loading="lazy" width={118} height={118} />
                    <div className="reasons-content">
                        <p className="reason-title">{t('reasons_title2')}</p>
                        <p>{t('reasons_description2')}</p>
                    </div>
                </div>

                <div className="reasons-column">
                    <Image src={icon3} size='small' centered alt="" loading="lazy" width={118} height={118} />
                    <div className="reasons-content">
                        <p className="reason-title">{t('reasons_title3')}</p>
                        <p>{t('reasons_description3')}</p>
                    </div>
                </div>

                <div className="reasons-column">
                    <Image src={icon4} size='small' centered alt="" loading="lazy" width={118} height={118} />
                    <div className="reasons-content">
                        <p className="reason-title">{t('reasons_title4')}</p>
                        <p>{t('reasons_description4')}</p>
                    </div>
                </div>

                <div className="reasons-column">
                    <Image src={icon5} size='small' centered alt="" loading="lazy" width={118} height={118} />
                    <div className="reasons-content">
                        <p className="reason-title">{t('reasons_title5')}</p>
                        <p>{t('reasons_description5')}</p>
                    </div>
                </div>
                <div className="reasons-column">
                    <Image src={icon6} size='small' centered alt="" loading="lazy" width={118} height={118} />
                    <div className="reasons-content">
                        <p className="reason-title">{t('reasons_title6')}</p>
                        <p>{t('reasons_description6')}</p>
                    </div>
                </div>

            </div>
        </div>
    );

};


export default ReasonsBlock;