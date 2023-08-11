import React from 'react'
import { Row, Col } from 'antd'
import classes from './CabinCardTitle.module.css'

const CabinCardTitle = () => {
    return (
        <div>
            <Row className={classes.cabin_title}>
                <Col span={24}>
                    <h2>
                        <span className={classes.discover}>Inspiration</span>
                        for your next getaway
                    </h2>
                </Col>
            </Row>
            <Row className={classes.cabin_link_wrapper}>
                <Col span={12}>
                    <p
                        style={{ whiteSpace: 'nowrap' }}
                        className={classes.link_title}
                    >
                        We’ve curated some amazing experiences to help you find
                        your next getaway.
                    </p>
                </Col>
                <Col span={12} className={classes.link}>
                    <a href="#">View all experiences</a>
                </Col>
            </Row>
        </div>
    )
}

export default CabinCardTitle
