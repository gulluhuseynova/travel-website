import React from 'react'
import Users from '../../../assets/users/Users'
import classes from './Ratings.module.css'
import Images from '../../../assets/images/Images'
import StarRating from '../../molecules/StarRating/StarRating'

export const Ratings = () => {
    return (
        <>
            <div className={classes.users_img_wrapper}>
                {Users.map((user, index) => (
                    <img
                        key={index}
                        src={user}
                        className={classes[`image_item_${index + 1}`]}
                    ></img>
                ))}
            </div>
            <div className={classes.trust_pilot}>
                <img src={Images.trustPilot}></img>
            </div>
            <StarRating/>
        </>
    )
}
