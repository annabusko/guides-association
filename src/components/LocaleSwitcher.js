import React, { Fragment } from 'react';
import { Radio } from 'semantic-ui-react';

import { useTranslation } from "react-i18next";

const LanguageRadio = () => {
    const { i18n } = useTranslation();
    return (
        <Fragment>
            <span>Ru</span>
            <Radio onChange={() => i18n.language ==="ru" ? i18n.changeLanguage('en') : i18n.changeLanguage('ru') } toggle />
            <span>En</span>
        </Fragment>
    );
};


export default LanguageRadio;