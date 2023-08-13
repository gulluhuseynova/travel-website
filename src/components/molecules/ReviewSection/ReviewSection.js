import React from 'react'
import Images from './../../../assets/images/Images'
import classes from './ReviewSection.module.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Star from '../../atoms/Star/Star'

const ReviewSection = () => {
    const [rating, setRating] = useState(0)

    const handleClick = (index) => {
        setRating(index + 1)
    }
    const { t } = useTranslation()
    return (
        <div className={classes.wrapper}>
            <img className={classes.wrapper} src={Images.purplewoman}></img>
            <div className={classes.title_wrapper}>
                <div className={classes.review_wrapper}>
                    <h2 className={classes.review_title}>
                        {t('review_title_1')}
                        {t('review_title_2')}
                    </h2>
                    <p className={classes.review_description}>
                        {t('review_descrip_1')} <br />
                        {t('review_descrip_2')}
                        <br />
                        {t('review_descrip_3')} <br />
                        {t('review_descrip_4')}
                        <br />
                        {t('review_descrip_5')}
                    </p>
                    <div className={classes.star_rating_wrapper}>
                        <div>
                            {[...Array(5).keys()].map((index) => (
                                <Star
                                    key={index}
                                    selected={true}
                                    onSelect={() => handleClick(index)}
                                />
                            ))}
                        </div>
                        <div style={{ color: 'white' }}>01 Jan 2023</div>
                    </div>
                </div>
            </div>
            <div className={classes.mobile_title_wrapper}>
                <h2 className={classes.mobile_review_title}>
                    {t('review_title_1')}
                    {t('review_title_2')}
                </h2>
                <p className={classes.mobile_review_description}>
                    {t('review_descrip_1')}
                    {t('review_descrip_2')}
                    {t('review_descrip_3')}
                    {t('review_descrip_4')}
                </p>
                <div className={classes.star_rating_wrapper}>
                    <div>
                        {[...Array(5).keys()].map((index) => (
                            <Star
                                key={index}
                                selected={true}
                                onSelect={() => handleClick(index)}
                            />
                        ))}
                    </div>
                    <div
                        style={{
                            color: 'white',
                            fontSize: '12px',
                            alignSelf: 'center',
                        }}
                    >
                        01 Jan 2023
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSection
