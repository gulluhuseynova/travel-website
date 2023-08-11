import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import './LangSwitch.css'
import { useTranslation } from 'react-i18next'

export default function LangSwitch() {
    const [select, setSelect] = useState('GB')
    const onSelect = (code) => setSelect(code)
    const { i18n } = useTranslation()

    const switchLanguage = (langToSet) => {
        i18n.changeLanguage(langToSet)
        localStorage.setItem('language', langToSet)
    }
    return (
        <div className="App">
            <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                countries={['GB', 'AZ']}
                showOptionLabel={false}
                showSelectedLabel={null}
                fullWidth={false}
                /*
        selectedSize={selectedSize}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        disabled={disabled} */
            />
            <br />
        </div>
    )
}
