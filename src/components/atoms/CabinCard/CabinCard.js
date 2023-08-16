import React from 'react'
import { Card, Row, Col } from 'antd'
import classes from './CabinCard.module.css'

const CabinCard = (props) => {
    const { infoList } = props
    console.log(infoList)
    return (
        <Row className={classes.cabin_card_wrapper}>
            {infoList.map((item, index) => (
                <Col
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                    className={classes.card_col}
                    key={`item-${index}`}
                >
                    <Card
                        hoverable
                        className={classes.card_style}
                        cover={
                            <img
                                alt="img"
                                src={item.img}
                                className={classes.img}
                            />
                        }
                    >
                        <p className={classes.header}>{item.header}</p>
                        <div className={classes.title}>{item.title}</div>
                        <p className={classes.description}>
                            {item.description}
                        </p>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
export default CabinCard
