import React from 'react';
import { useTranslation } from "react-i18next";

const LanguageRadio = () => {
    const { i18n } = useTranslation();
    const current = (i18n.language?.startsWith('en')) ? 'en' : 'ru';

    return (
        <fieldset className="lang-switcher" aria-label="Language">
            <button
                type="button"
                className={`lang-switcher__btn${current === 'ru' ? ' lang-switcher__btn--active' : ''}`}
                onClick={() => i18n.changeLanguage('ru')}
            >
                Ru
            </button>
            <button
                type="button"
                className={`lang-switcher__btn${current === 'en' ? ' lang-switcher__btn--active' : ''}`}
                onClick={() => i18n.changeLanguage('en')}
            >
                En
            </button>
        </fieldset>
    );
};

export default LanguageRadio;
