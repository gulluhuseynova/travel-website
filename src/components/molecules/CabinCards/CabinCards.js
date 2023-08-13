import React from 'react'
import CabinCardTitle from './../../atoms/CabinCardTitle/CabinCardTitle'
import CabinCard from '../../atoms/CabinCard/CabinCard'
import Images from '../../../assets/images/Images'
import classes from './CabinCards.module.css'
import { useTranslation } from 'react-i18next'

const CabinCards = () => {
    const { t } = useTranslation()

    const infoList = [
        {
            header: t('cabin_cards_header'),
            title: t('cabin_cards_title'),
            description: t('cabin_cards_description'),
            img: Images.first,
        },
        {
            header: t('cabin_cards_second_header'),
            title: t('cabin_cards_second_title'),
            description: t('cabin_cards_second_description'),
            img: Images.second,
        },
        {
            header: t('cabin_cards_third_header'),
            title: t('cabin_cards_third_title'),
            description: t(t('cabin_cards_third_description')),
            img: Images.third,
        },
    ]

    return (
        <div className={classes.wrapper}>
            <CabinCardTitle />
            <CabinCard infoList={infoList} />
        </div>
    )
}

export default CabinCards
