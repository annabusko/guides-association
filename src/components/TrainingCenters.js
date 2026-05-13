import React from 'react';

import { useTranslation } from "react-i18next";
import { Tab, Menu, Image } from 'semantic-ui-react';

const img_about_main = require('../assets/images/different/training.group.jpg');
const img1 = require('../assets/images/different/logoTraining1.png');
const img2 = require('../assets/images/different/logoTraining2.png');
const img3 = require('../assets/images/different/logoTraining3.jpg');

const MenuTitle = ({ title }) => {
    const { t } = useTranslation();
    return <h3>{t(title)}</h3>;
};

const TrainingCenter1 = () => {
    const { t } = useTranslation();
    return (
        <div className="content-text">
            <h4>{t('training_center1_title')}</h4>
            <Image
                className="image-link"
                src={img1}
                alt='Переход на сайт'
                as='a'
                size='small'
                href='https://www.belarustourism.by/uslugi/obuchenie/'
                rel='noopener noreferrer'
                target='_blank'
                floated='left'
                title="Go to the official page"
            />
            <p>{t('training_center1_text1')}</p>
            <p>{t('training_center1_text2')}</p>
            <p>{t('training_center1_text3')}</p>
            <p>{t('training_center1_text4')}</p>
            <p>{t('training_center1_text5')}</p>

        </div>);
};

const TrainingCenter2 = () => {
    const { t } = useTranslation();
    return (
        <div className="content-text">
            <h4>{t('training_center2_title')}</h4>
            <Image
                className="image-link"
                src={img2}
                alt='Переход на сайт'
                as='a'
                size='small'
                href='http://www.uoipd.by/ru/institute/shkola-ekskursovodov-i-gidov-perevodchikov.html'
                rel='noopener noreferrer'
                target='_blank'
                floated='left'
                title="Go to the official page"
            />
            <p>{t('training_center2_text1')}</p>
            <p>{t('training_center2_text2')}</p>
            <p>{t('training_center2_text3')}</p>
            <p>{t('training_center2_text4')}</p>
            <p>{t('training_center2_text5')}</p>
            <p>{t('training_center2_text6')}</p>
            <p>{t('training_center2_text7')}</p>
            <p>{t('training_center2_text8')}</p>

        </div>);
};

const TrainingCenter3 = () => {
    const { t } = useTranslation();
    return (
        <div className="content-text">
            <h4>{t('training_center3_title')}</h4>
            <Image
                className="image-link"
                src={img3}
                alt='Переход на сайт'
                as='a'
                size='small'
                href='http://nihe.bsu.by/index.php/ru/obrazovatelnaya-deyatelnost/povyshenie-kvalifikatsii'
                rel='noopener noreferrer'
                target='_blank'
                floated='left'
                title="Go to the official page"
            />
            <p>{t('training_center3_text1')}</p>
            <p>{t('training_center3_text2')}</p>
            <p>{t('training_center3_text3')}</p>
            <p>{t('training_center3_text4')}</p>
            <p>{t('training_center3_text5')}</p>
            <p>{t('training_center3_text6')}</p>
            <p>{t('training_center3_text7')}</p>
            <p>{t('training_center3_text8')}</p>
            <p>{t('training_center3_text9')}</p>
            <p>{t('training_center3_text10')}</p>
            <p>{t('training_center3_text11')}</p>
            <p>{t('training_center3_text12')}</p>
            <p>E-mail: kafedra319@yandex.by</p>
            <p>{t('training_center3_text13')}</p>

        </div>);
};
const panes = [
    {
        menuItem: (<Menu.Item key='center1'>
            <MenuTitle title='training_center1_title' />
        </Menu.Item>), render: () => <Tab.Pane>
            <TrainingCenter1 />
        </Tab.Pane>
    },
    {
        menuItem: (<Menu.Item key='center2'>
            <MenuTitle title='training_center2_title' />
        </Menu.Item>),
        render: () =>
            <Tab.Pane>
                 <TrainingCenter2 />
        </Tab.Pane>
    },
    {
        menuItem: (<Menu.Item key='center3'>
            <MenuTitle title='training_center3_title' />
        </Menu.Item>),
        render: () =>
            <Tab.Pane>
                 <TrainingCenter3 />
        </Tab.Pane>
    },
];

const TrainingCenters = () => {

    const { t } = useTranslation();
    return (
        <div>
            <div className="content-main-image"
                style={{
                    background: `url(${img_about_main})`
                }} >
                <div>
                    <h1>{t('menu_trainings')}</h1>
                </div>
            </div>
            <div className="content-wrapper content-wrapper-trainings">
                <h2>{t('menu_professional-development')}</h2>
                <div className="content-text">
                    <p>{t('trainings_centers_text1')}</p>
                    <p>{t('trainings_centers_text2')}</p>
                    <p>{t('trainings_centers_text3')}</p>
                </div>

                <div className="content-wrapper-tab">
                    <Tab
                        className="trainingTab"
                        menu={{ fluid: true, vertical: true }}
                        grid={{ paneWidth: 11, tabWidth: 5 }}
                        defaultActiveIndex={0}
                        menuPosition='right'
                        panes={panes}
                    />
                </div>
            </div>
        </div>
    )
}

export default TrainingCenters;