import React from 'react'
import Navbar from './components/molecules/Navbar/Navbar'
import HeroSection from './components/molecules/Hero/HeroSection'
import CabinCards from './components/molecules/CabinCards/CabinCards'
import ReviewSection from './components/molecules/ReviewSection/ReviewSection'
import LangSwitch from './components/atoms/LangSwitch/LangSwitch'
import './utility/utility.js'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { setLangFromLocalStorage } from './utility/utility.js'

const App = () => {
    const { i18n } = useTranslation()
    useEffect(() => {
        setLangFromLocalStorage(i18n)
    }, [])
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CabinCards />
            <ReviewSection />
            <LangSwitch />
        </div>
    )
}

export default App
