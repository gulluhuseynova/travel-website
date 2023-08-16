import React from 'react'
import classes from './About.module.css'
import { Row, Col } from 'antd'
import Images from '../../../assets/images/Images'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()
    return (
        <Row
            gutter={[16, 16]}
            justify="center"
            align="middle"
            id="about"
            className={classes.about_wrapper}
        >
            <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className={classes.center_col}
            >
                <h2 className={classes.about_title}>{t('about_title')}</h2>
                <p className={classes.about_caption}>{t('about_caption')}</p>
            </Col>
            <span style={{ width: '150px' }}></span>
            <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className={classes.center_col}
            >
                <div className={classes.img_wrapper}>
                    <img
                        src={Images.video}
                        alt="Video"
                        className={classes.img}
                    />
                    <img className={classes.detail} src={Images.detail} />
                    <img className={classes.play_icon} src={Images.play} />
                </div>
            </Col>
        </Row>
    )
}

export default About
