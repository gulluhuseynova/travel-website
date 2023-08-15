import React from 'react'
import { Row, Col } from 'antd'
import classes from './CabinCardTitle.module.css'
import { useTranslation } from 'react-i18next'

const CabinCardTitle = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Row className={classes.cabin_title}>
                <Col span={24}>
                    <h4 className={classes.cabin_h2}>
                        <span className={classes.discover}>
                            {t('cabin_inspiration')}
                        </span>
                        {t('cabin_inspo')}
                    </h4>
                </Col>
            </Row>
            <Row className={classes.cabin_link_wrapper}>
                <Col span={12} className={classes.link_col}>
                    <p className={classes.link_title}>
                        {t('cabin_link_title')}
                    </p>
                </Col>
                <Col span={12} className={classes.link}>
                    <a href="#">{t('cabin_link')}</a>
                </Col>
            </Row>
        </div>
    )
}

export default CabinCardTitle
