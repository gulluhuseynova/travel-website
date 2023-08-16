import React from 'react'
import classes from './SearchBar.module.css'
import TimePicker from '../DatePicker/TimePicker'
import { Button } from 'antd'
import CabinBtn from '../../atoms/CabinBtn/CabinBtn'
import { useTranslation } from 'react-i18next'

const App = () => {
    const { t } = useTranslation()

    return (
        <div className={classes.searchBar_wrapper}>
            <div className={classes.searchBar_card}>
                <div>
                    <TimePicker />
                </div>
                <div className={classes.travel_btn_wrapper}>
                    <Button className={classes.travel_btn}>
                        {t('travellers')}
                    </Button>
                </div>
                <div>
                    <CabinBtn />
                </div>
            </div>
        </div>
    )
}
export default App
