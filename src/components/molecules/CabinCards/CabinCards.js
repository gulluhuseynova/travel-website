import React from 'react'
import CabinCardTitle from './../../atoms/CabinCardTitle/CabinCardTitle'
import CabinCard from '../../atoms/CabinCard/CabinCard'
import Images from '../../../assets/images/Images'
import classes from './CabinCards.module.css'

const CabinCards = () => {
    const infoList = [
        {
            header: 'For those who love',
            title: 'To Explore nature',
            description:
                'Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.',
            img: Images.first,
        },
        {
            header: 'For those who want',
            title: 'To Relax, rest & re-set',
            description:
                'Experience mind and body connection through breathing exercises and relaxation with our Yoga inspired get away for you and the family.',
            img: Images.second,
        },
        {
            header: 'For those who have',
            title: 'Four-legged friends',
            description:
                'When going on holiday nobody wants to put their dog in a kennel. So, lets keep the family together with our pet friendly cabins.',
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
