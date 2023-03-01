import React, { useState, useCallback } from 'react'
import { IntlProvider } from 'react-intl'
import { Router } from './Router';
import EnglishTranslations from './i18n/en';
import SpanishTranslations from './i18n/es';

export const IntlWrapper = () => {
    const defaultLocale = 'es';
    const [ locale, setLocale ] = useState(defaultLocale);
    const [ messages,  setMessages ] = useState(SpanishTranslations);

    const handleLocaleChange = useCallback(
        ({target: { value }}) => {
            const translations = {
                'en': EnglishTranslations,
                'es': SpanishTranslations
            };

            setMessages(translations[value]);
            setLocale(value);
        },
        [locale, setLocale],
    );

    return (
        <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={messages}>
            <Router onLocaleChange={handleLocaleChange} defaultLocale={defaultLocale}/>
        </IntlProvider>
    );
}
