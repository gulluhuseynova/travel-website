import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageDropdown = () => {
    const { i18n } = useTranslation()

    const switchLanguage = (langToSet) => {
        i18n.changeLanguage(langToSet)
        localStorage.setItem('language', langToSet)
    }

    const flagImages = {
        EN: '/images/uk.png',
        TR: '/images/az.png',
        // Add more languages and their flag image paths here
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {flagImages[i18n.language] && (
                <img
                    src={flagImages[i18n.language]}
                    alt={i18n.language}
                    style={{
                        marginRight: '5px',
                        width: '20px',
                        height: 'auto',
                    }}
                />
            )}

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

export default LanguageDropdown
