import React from 'react'
import Images from '../../../assets/images/Images'
import classes from './HeroSection.module.css'
import { Row, Col } from 'antd'
const HeroSection = () => {
    return (
        <div className={classes.container}>
            <div className={classes.img_container}>
                <img
                    src={Images.hero}
                    className={classes.hero_img}
                    alt="Hero"
                ></img>
            </div>
            <div className={classes.empty_div}></div>
        </div>
    )
}

export default HeroSection
