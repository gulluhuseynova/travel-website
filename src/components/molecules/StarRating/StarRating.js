import React, { useState } from 'react'
import Star from '../../atoms/Star/Star'
import classes from './StarRating.module.css'

const StarRating = () => {
    const [rating, setRating] = useState(0)

    const handleClick = (index) => {
        setRating(index + 1)
    }

    return (
        <div className={classes.star_rating_wrapper}>
            <div>
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        selected={index < rating}
                        onSelect={() => handleClick(index)}
                    />
                ))}
            </div>
            <div className={classes.rating_score}>
                <p>{rating}/5</p>
            </div>
        </div>
    )
}

export default StarRating
