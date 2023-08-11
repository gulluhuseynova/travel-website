export function setLangFromLocalStorage(i18n) {
    const currentLang = localStorage.getItem('language')
    if (currentLang) {
        i18n.changeLanguage(currentLang)
    }
}
