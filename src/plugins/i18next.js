import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '../locales/en.json'
import az from '../locales/az.json'

const resources = {
    en: { translation: en },
    az: { translation: az },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: ['en', 'az'],
})

export default i18n
