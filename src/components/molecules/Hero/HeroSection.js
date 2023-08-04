import React from 'react'
import Images from '../../../assets/images/Images'
import '../../../assets/fonts/Fonts.scss'
import classes from './HeroSection.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Ratings } from '../../atoms/Ratings/Ratings'

const HeroSection = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.row_wrapper}>
                    <div className={classes.hero_title}>
                        <h2>
                            <span>
                                Leave the office behind <br />
                                and
                            </span>
                            <span className={classes.hero_title_yellow}>
                                unwind
                            </span>
                        </h2>
                    </div>
                    <div className={classes.hero_caption}>
                        <p>
                            Welcome to our cozy cabin nestled in the heart of
                            the mountains! <br /> Our cabin is the perfect
                            getaway for those seeking peace and <br />
                            relaxation in a natural setting.
                        </p>
                    </div>
                </div>
                <Ratings />
                <div className={classes.img_container}>
                    <img
                        src={Images.hero}
                        className={classes.hero_img}
                        alt="Hero"
                    ></img>
                </div>
                <div className={classes.empty_div}></div>
            </div>
            <SearchBar />
        </>
    )
}

export default HeroSection
