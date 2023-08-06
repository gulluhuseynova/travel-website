import React from 'react'
import { Button } from 'antd'
import classes from './CabinBtn.module.css'
const CabinBtn = () => {
    return (
        <div>
            <Button className={classes.cabin_btn}>Find avilable cabins</Button>
        </div>
    )
}

export default CabinBtn
