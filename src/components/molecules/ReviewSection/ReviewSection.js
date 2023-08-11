import React from 'react'
import Images from './../../../assets/images/Images'
import classes from './ReviewSection.module.css'

const ReviewSection = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.wrapper} src={Images.purplewoman}></img>
            <div className={classes.title_wrapper}>
                <h2 className={classes.review_title}>
                    A truly wonderful <br />
                    experience
                </h2>
                <p className={classes.review_description}>
                    Brilliant for anyone looking to get away from the hustle and
                    <br />
                    bustle of city life or detox from their tech for a few days.
                    <br />I could have stayed another week! <br />
                    They really have thought about everything <br />
                    here down to the finest details.
                </p>
            </div>
            <div className={classes.mobile_title_wrapper}>
                <h2 className={classes.mobile_review_title}>
                    A truly wonderful <br />
                    experience
                </h2>
                <p className={classes.mobile_review_description}>
                    Brilliant for anyone looking to get away
                    <br /> from the hustle and bustle of city life
                    <br /> or detox from their tech for a few days.
                    <br />I could have stayed another week!
                    <br /> They really have thought about everything <br /> here
                    down to the finest details.
                </p>
            </div>
        </div>
    )
}

export default ReviewSection
