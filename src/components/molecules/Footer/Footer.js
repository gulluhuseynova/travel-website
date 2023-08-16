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
        <div className={classes.footer_wrapper} id="footer">
            <Row className={classes.links_wrapper}>
                <Col span={6}>
                    <Row className={classes.footer_gutter}>
                        <Col span={24} className={classes.links_header_about}>
                            <h2 className={classes.links_header}>
                                {t('about_us')}
                            </h2>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('story')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('why_us')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('how_it_works')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('faq')}
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <h2 className={classes.links_header}>
                                {t('our_cabins')}
                            </h2>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                North of London
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                Golden Hideaway
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                Oak Treehouse
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                Acacia Retreat
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                Blue Lagoon
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <h2 className={classes.links_header}>
                                {t('get_inspired')}
                            </h2>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('explore_nature')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('hiking_trails')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('swimming')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('fishing')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('boating')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('cycling')}
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row className={classes.support_links}>
                        <Col span={24}>
                            <h2 className={classes.links_header}>
                                {t('support')}
                            </h2>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('help')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('contact')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('privacy_policy')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('terms_of_service')}
                            </Link>
                        </Col>
                        <Col span={24} className={classes.links_col}>
                            <Link to="/#" className={classes.links}>
                                {t('complaints_policy')}
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className={classes.second_wrapper}>
                <Col span={12} xs={24} md={12} className={classes.input_title}>
                    <h3>{t('sign_up')}</h3>
                </Col>
                <Col span={12} xs={24} md={12} style={{ display: 'flex' }}>
                    <Input
                        placeholder="ghuseynova.dev@gmail.com"
                        size="large"
                    />
                    <Button className={classes.input_btn} size="large">
                        {t('mail_btn')}
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
                    © 2023 Gullu Huseynova
                </Col>
                <Col span={8}>
                    <LangSwitch />
                </Col>
            </Row>
        </div>
    )
}

export default Footer
