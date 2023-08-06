import React from 'react'
import { Row, Col } from 'antd'
import classes from './CabinCardTitle.module.css'

const CabinCardTitle = () => {
    return (
        <div className={classes.wrapper}>
            <Row className={classes.cabin_title}>
                <Col span={24}>
                    <h2>
                        <span className={classes.discover}>Discover</span>
                        our idyllic countryside cabins
                    </h2>
                </Col>
            </Row>
            <Row className={classes.cabin_link_wrapper}>
                <Col span={12}>
                    <p
                        style={{ whiteSpace: 'nowrap' }}
                        className={classes.link_title}
                    >
                        Fully equipped kitchen and bathroom with plenty of
                        walking and cycling routes to explore.
                    </p>
                </Col>
                <Col span={12} className={classes.link}>
                    <a href="#">View all cabins</a>
                </Col>
            </Row>
            <Row>
                <Col span={24}>salam</Col>
            </Row>
        </div>
    )
}

export default CabinCardTitle
