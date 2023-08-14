import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './Footer.module.css'
import LangSwitch from '../../atoms/LangSwitch/LangSwitch'
import { Row, Col, Input, Button } from 'antd'
import Logo from '../../atoms/Logo/Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <div className={classes.footer_wrapper}>
            <Row className={classes.links_wrapper}>
                <Col span={6}>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>
                            <h2 className={classes.links_header} to="/#">
                                About us
                            </h2>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Our story
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Why us
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                How it works
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                FAQ
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>
                            <h2 className={classes.links_header} to="/#">
                                Our cabins
                            </h2>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                North of London
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Golden Hideaway
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Oak Treehouse
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Acacia Retreat
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Blue Lagoon
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>
                            <h2 className={classes.links_header} to="/#">
                                Get inspired
                            </h2>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Explore nature
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Hiking trails
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Swimming
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Fishing
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Boating
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Cycling
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>
                            <h2 className={classes.links_header} to="/#">
                                Support
                            </h2>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Help
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Contact us
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Privacy Policy
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Terms of Service
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Link to="/#" className={classes.links}>
                                Complaints Policy
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className={classes.second_wrapper}>
                <Col span={12} xs={24} md={12} className={classes.input_title}>
                    <h3>Sign up to our Newsletter</h3>
                </Col>
                <Col span={12} xs={24} md={12} style={{ display: 'flex' }}>
                    <Input
                        placeholder="ghuseynova.dev@gmail.com"
                        size="large"
                    />
                    <Button className={classes.input_btn} size="large">
                        Join the mailing list
                    </Button>
                </Col>
            </Row>

            <Row className={classes.hr_style}>
                <Col span={24}>
                    <hr className={classes.hr} />
                </Col>
            </Row>

            <Row className={classes.third_row}>
                <Col span={8}>
                    <Logo />
                </Col>
                <Col className={classes.copyright} span={8} align="middle">
                    © 2023 UnwindCabins
                </Col>
                <Col span={8}>
                    <LangSwitch />
                </Col>
            </Row>
        </div>
    )
}

export default Footer
