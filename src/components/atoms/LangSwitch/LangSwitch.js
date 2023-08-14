import React from 'react'
import { useTranslation } from 'react-i18next'

const LangSwitch = () => {
    const { i18n } = useTranslation()

    const switchLanguage = (langToSet) => {
        i18n.changeLanguage(langToSet)
        localStorage.setItem('language', langToSet)
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                bottom: '5px',
                right: '5px',
            }}
        >
            <select
                id="language-select"
                className="pe-2 py-1 bg-white text-gray-800"
                style={{ fontSize: '14px', width: '50px' }}
                value={i18n.language}
                onChange={(e) => switchLanguage(e.target.value)}
            >
                {i18n.languages.map((lang) => (
                    <option value={lang}>{lang}</option>
                ))}
            </select>
        </div>
    )
}

export default LangSwitch
