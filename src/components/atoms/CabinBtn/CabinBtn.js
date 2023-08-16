import React from 'react'
import { Button } from 'antd'
import classes from './CabinBtn.module.css'
import { useTranslation } from 'react-i18next'

const CabinBtn = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Button className={classes.cabin_btn}>
                {t('available_cabins')}
            </Button>
        </div>
    )
}

export default CabinBtn
