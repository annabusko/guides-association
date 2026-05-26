import React, { useState } from 'react';

import { useTranslation } from "react-i18next";
import { Icon, Image } from 'semantic-ui-react';

const img_about_main = require('../assets/images/different/training.group.webp');
const imgLogo1 = require('../assets/images/different/logoTraining1.webp');
const imgLogo2 = require('../assets/images/different/logoTraining2.webp');

const CENTER_LINKS = {
    1: 'https://www.belarustourism.by/uslugi/obuchenie/',
    2: 'http://www.uoipd.by/ru/institute/shkola-ekskursovodov-i-gidov-perevodchikov.html',
};

const CENTER_ITEMS = {
    1: [
        { icon: 'graduation cap', key: 'training_center1_text1' },
        { icon: 'calendar alternate outline', key: 'training_center1_text2' },
        { icon: 'book', key: 'training_center1_text3' },
        { icon: 'certificate', key: 'training_center1_text4' },
    ],
    2: [
        { icon: 'graduation cap', key: 'training_center2_text1' },
        { icon: 'book', key: 'training_center2_text2' },
        { icon: 'clipboard list', key: 'training_center2_text3' },
        { icon: 'calendar alternate outline', key: 'training_center2_text4' },
        { icon: 'users', key: 'training_center2_text5' },
        { icon: 'hand paper outline', key: 'training_center2_text6' },
        { icon: 'map marker alternate', key: 'training_center2_text7' },
    ],
};

const CENTER_CONTACT_KEYS = {
    1: 'training_center1_text5',
    2: 'training_center2_text8',
};

const CENTER_CONFIG = {
    1: {
        titleKey: 'training_center1_title',
        logo: imgLogo1,
        sideIcon: 'university',
        watermarkIcon: 'building outline',
    },
    2: {
        titleKey: 'training_center2_title',
        logo: imgLogo2,
        sideIcon: 'users',
        watermarkIcon: 'leaf',
    },
};

const TrainingDetailRow = ({ icon, children }) => (
    <div className="training-detail__row">
        <div className="training-detail__icon" aria-hidden="true">
            <Icon name={icon} />
        </div>
        <p className="training-detail__text">{children}</p>
    </div>
);

const TrainingDetailCard = ({ centerId }) => {
    const { t } = useTranslation();
    const config = CENTER_CONFIG[centerId];
    const items = CENTER_ITEMS[centerId];

    return (
        <article className="training-detail">
            <header className="training-detail__header">
                <a
                    className="training-detail__logo-link"
                    href={CENTER_LINKS[centerId]}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={config.logo} alt="" className="training-detail__logo" width={330} height={120} loading="lazy" />
                </a>
                <div className="training-detail__title-wrap">
                    <h3 className="training-detail__title">{t(config.titleKey)}</h3>
                    <span className="training-detail__accent" aria-hidden="true" />
                </div>
            </header>

            <div className="training-detail__body">
                {items.map(({ icon, key }) => (
                    <TrainingDetailRow key={key} icon={icon}>
                        {t(key)}
                    </TrainingDetailRow>
                ))}
            </div>

            <footer className="training-detail__footer">
                <div className="training-detail__footer-icon" aria-hidden="true">
                    <Icon name="user outline" />
                </div>
                <p>{t(CENTER_CONTACT_KEYS[centerId])}</p>
            </footer>
        </article>
    );
};

const TrainingSideCard = ({ centerId, isActive, onSelect }) => {
    const { t } = useTranslation();
    const config = CENTER_CONFIG[centerId];

    return (
        <button
            type="button"
            className={`training-side-card${isActive ? ' training-side-card--active' : ''}`}
            onClick={() => onSelect(centerId)}
        >
            <Icon
                name={config.watermarkIcon}
                className="training-side-card__watermark"
                aria-hidden="true"
            />
            <div className="training-side-card__icon" aria-hidden="true">
                <Icon name={config.sideIcon} />
            </div>
            <h3 className="training-side-card__title">{t(config.titleKey)}</h3>
            <span className="training-side-card__accent" aria-hidden="true" />
        </button>
    );
};

const TrainingCenters = () => {
    const { t } = useTranslation();
    const [activeCenter, setActiveCenter] = useState(1);

    return (
        <div>
            <div
                className="content-main-image"
                style={{ background: `url(${img_about_main})` }}
            >
                <div>
                    <h1>{t('menu_trainings')}</h1>
                </div>
            </div>

            <div className="content-wrapper content-wrapper-trainings">
                <h2>{t('menu_professional-development')}</h2>

                <div className="training-intro content-text">
                    <p>{t('trainings_centers_text1')}</p>
                    <p>{t('trainings_centers_text2')}</p>
                </div>

                <div className="training-layout">
                    <TrainingDetailCard centerId={activeCenter} />

                    <div className="training-layout__side">
                        <TrainingSideCard
                            centerId={1}
                            isActive={activeCenter === 1}
                            onSelect={setActiveCenter}
                        />
                        <TrainingSideCard
                            centerId={2}
                            isActive={activeCenter === 2}
                            onSelect={setActiveCenter}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingCenters;
