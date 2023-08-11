import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../locales/en.json'
import az from '../locales/az.json'

const resources = {
    en: { translation: en },
    az: { translation: az },
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: 'en',
        resources,
        interpolation: {
            escapeValue: false,
        },
        fallbackLng: ['en', 'az'],
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
    })

export default i18n
