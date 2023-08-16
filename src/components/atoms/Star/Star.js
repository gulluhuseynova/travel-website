import React from 'react'
import { FaStar } from 'react-icons/fa'
import classes from './Star.module.css'

const Star = ({ selected, onSelect }) => (
    <FaStar
        color={selected ? '#F5B963' : 'white'}
        onClick={onSelect}
        className={classes.star}
    />
)

export default Star
