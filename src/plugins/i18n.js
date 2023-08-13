import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import EN from '../locales/en.json'
import TR from '../locales/tr.json'

const resources = {
    EN: { translation: EN },
    TR: { translation: TR },
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: 'EN',
        resources,
        interpolation: {
            escapeValue: false,
        },
        fallbackLng: ['EN', 'TR'],
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
    })

export default i18n
