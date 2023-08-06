import React from 'react'
import Navbar from './components/molecules/Navbar/Navbar'
import HeroSection from './components/molecules/Hero/HeroSection'
import CabinCards from './components/molecules/CabinCards/CabinCards'
const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CabinCards />
        </div>
    )
}

export default App
