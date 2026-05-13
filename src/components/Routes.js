import React from 'react';
import { Segment } from 'semantic-ui-react';

import architecture from '../assets/images/buttons/architecture.jpg';
import religy from '../assets/images/buttons/religy.jpg';
import nature from '../assets/images/buttons/nature.jpg';
import industry from '../assets/images/buttons/industry.jpg';

import { useTranslation } from "react-i18next";

const RoutesBlock = () => {
    const { t } = useTranslation();
    return (
        <div className="block-wrapper">
            <h2>{t('routes_header')}</h2>
            <div className="route-grid">
                <Segment raised as='a'
                    href='https://museumkossovo.by/ru/'
                    rel= 'noopener noreferrer'
                    target='_blank'
                    title= {t('architecture_link')} >
                    <div className="route-left">
                        <div className="route-content">
                            <h3> {t('architecture_header')}</h3>
                            <p>{t('architecture_descr')}</p>
                        </div>
                        <img alt={t('architecture_img')} loading="lazy" src={architecture} title={t('architecture_img')} />
                    </div>
                </Segment>
                <Segment raised as='a'
                    href='https://vetliva.com/tourism/what-to-see'
                    rel= 'noopener noreferrer'
                    target='_blank'
                    title= {t('relygy_link')}>
                    <div className="route-right">
                        <div className="route-content">
                            <h3>{t('relygy_header')}</h3>
                            <p>{t('relygy_descr')}</p>

                        </div>
                        <img alt={t('relygy_img')} loading="lazy" src={religy} title={t('relygy_img')}  />
                    </div>
                </Segment>
                <Segment raised as='a'
                    href='http://belaz.by/about/industrial-tourism/'
                    rel= 'noopener noreferrer'
                    target='_blank'
                    title= {t('industry_link')}>
                    <div className="route-right">
                        <img alt={t('industry_img')} loading="lazy" src={industry} title={t('industry_img')} />
                        <div className="route-content">
                            <h3>{t('industry_header')}</h3>
                            <p>{t('industry_descr')}</p>
                        </div>

                    </div>
                </Segment>
                <Segment raised as='a'
                    href='https://www.wildlife.by/directory/zakazniki/respublikanskiy-landshaftnyy-zakaznik-elnya/'
                    rel= 'noopener noreferrer'
                    target='_blank'
                    title= {t('nature_link')}>
                    <div className="route-left">
                        <img alt={t('nature_img')} loading="lazy" src={nature} title={t('nature_img')} />
                        <div className="route-content">
                            <h3>{t('nature_header')}</h3>
                            <p>{t('nature_descr')}</p>
                        </div>

                    </div>
                </Segment>
            </div>
        </div>

    );

};


export default RoutesBlock;