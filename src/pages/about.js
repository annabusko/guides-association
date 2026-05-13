import React, { Fragment } from 'react';
import { Button, Icon } from 'semantic-ui-react';

import AboutBlock from '../components/About';
import { useTranslation } from "react-i18next";

import statement_doc from "../assets/documents/statement.doc";
import statement_pdf from "../assets/documents/statement.pdf";

const img_about_main = {
    url: require('../assets/images/different/about.group.jpg')
};

const img_hystory_small = {
    src: require('../assets/images/different/history.jpg'),
    alt: "карта Великого княжества Литовского 1613-1630 Николая Криштофа Радзивилла (Сиротка)."
};

const img_rules_small = {
    src: require('../assets/images/different/rules.jpg'),
    alt: "устав"
};

const img_join_small = {
    src: require('../assets/images/different/join.jpg'),
    alt: "устав"
};

const Title = () => {
    const { t } = useTranslation();
    return <h1>{t('menu_about')}</h1>;
}

const HistoryBlock = () => {
    const { t } = useTranslation();

    return (
        <AboutBlock image_main={img_about_main} image_small={img_hystory_small} title={<Title />}>
            <h2>{t('menu_history')}</h2>
            <p>{t('about_history1')}</p>
            <p>{t('about_history2')}</p>
        </AboutBlock>
    )
};
const RulesBlock = () => {
    const { t } = useTranslation();
    return (
        <AboutBlock image_main={img_about_main} image_small={img_rules_small} title={<Title />}>
            <h2>{t('menu_rules')}</h2>
            <p>{t('about_rules1')}</p>
            <p>{t('about_rules2')}</p>
            <ul>
                <p>{t('about_rules3')}</p>
                <li>{t('about_rules3_1')} </li>
                <li>{t('about_rules3_2')} </li>
            </ul>
            <ul>
                <p>{t('about_rules4')}</p>
                <li>{t('about_rules4_1')} </li>
                <li>{t('about_rules4_2')} </li>
                <li>{t('about_rules4_3')} </li>
                <li>{t('about_rules4_4')} </li>
                <li>{t('about_rules4_5')} </li>
                <li>{t('about_rules4_6')} </li>
            </ul>
            <ul>
                <p>{t('about_rules5')}</p>
                <li>{t('about_rules5_1')} </li>
                <li>{t('about_rules5_2')} </li>
                <li>{t('about_rules5_3')} </li>
                <li>{t('about_rules5_4')} </li>
                <li>{t('about_rules5_5')} </li>
                <li>{t('about_rules5_6')} </li>
                <li>{t('about_rules5_7')} </li>
                <li>{t('about_rules5_8')} </li>
            </ul>
        </AboutBlock>

    )
};

const JoinBlock = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <AboutBlock image_main={img_about_main} image_small={img_join_small} title={<Title />}>
                <h2>{t('menu_how_join')}</h2>
                <p>{t('about_join1')}</p>
                <p>{t('about_join2')}</p>
                <p>{t('about_join3')}</p>
                <p>{t('about_join4')}</p>
            </AboutBlock>
            <div className="button-group">
                <Button.Group size='massive' >
                    <Button animated='fade' size='massive' as='a'
                        href={statement_doc}>
                        <Button.Content visible>{t('application_title')}(.doc)</Button.Content>
                        <Button.Content hidden> <Icon name='down arrow' />{t('application_download')}</Button.Content>
                    </Button>
                    <Button.Or />
                    <Button animated='fade' size='massive' as='a'
                        href={statement_pdf}
                        target="_blank">
                        <Button.Content visible>{t('application_title')}(.pdf)</Button.Content>
                        <Button.Content hidden> <Icon name='down arrow' />{t('application_download')}</Button.Content>
                    </Button>
                </Button.Group>
            </div>
        </Fragment>
    )
};

export { HistoryBlock, RulesBlock, JoinBlock };