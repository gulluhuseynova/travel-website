import React from 'react'
import Images from '../../../assets/images/Images'
import '../../../assets/fonts/Fonts.scss'
import classes from './HeroSection.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Ratings } from '../../atoms/Ratings/Ratings'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
    const { t } = useTranslation()

    return (
        <div className={classes.container} id="cabins">
            <div className={classes.row_wrapper}>
                <div className={classes.hero_title}>
                    <h2>
                        <span>
                            {t('hero_title')} <br />
                            {t('hero_and')}
                        </span>
                        <span className={classes.hero_title_yellow}>
                            {t('hero_unwind')}
                        </span>
                    </h2>
                </div>
                <div className={classes.hero_caption}>
                    <p>
                        {t('first_hero_caption')} <br />
                        {t('second_hero_caption')}
                        {t('third_hero_caption')} <br />
                        {t('fourth_hero_caption')}
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
            <div className={classes.gradient}></div>
            <SearchBar />
        </div>
    )
}

export default HeroSection
