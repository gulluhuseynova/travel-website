import React from 'react'
import { Card, Row, Col } from 'antd'
import classes from './CabinCard.module.css'

const CabinCard = (props) => {
    const { infoList } = props
    console.log(infoList)
    return (
        <Row justify="center" align="middle">
            {infoList.map((item, index) => (
                <Col
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={8}
                    style={{ display: 'flex', justifyContent: 'center' }}
                    key={`item-${index}`}
                >
                    <Card
                        hoverable
                        style={{ width: 250, minHeight: '470px' }}
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
