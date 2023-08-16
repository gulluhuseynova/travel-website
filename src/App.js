import React from 'react'
import Navbar from './components/molecules/Navbar/Navbar'
import HeroSection from './components/molecules/Hero/HeroSection'
import CabinCards from './components/molecules/CabinCards/CabinCards'
import ReviewSection from './components/molecules/ReviewSection/ReviewSection'
import './utility/utility.js'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { setLangFromLocalStorage } from './utility/utility.js'
import About from './components/molecules/About/About'
import Footer from './components/molecules/Footer/Footer'
import Scroll from './components/atoms/Scroll/Scroll'

const App = () => {
    const { i18n } = useTranslation()

    useEffect(() => {
        setLangFromLocalStorage(i18n)
    }, [])

    return (
        <div>
            <Scroll />
            <Navbar />
            <HeroSection />
            <CabinCards />
            <ReviewSection />
            <About />
            <Footer />
        </div>
    )
}

export default App
