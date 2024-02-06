import React from 'react'

import { Avatar, Col, Row } from 'antd'
import { Heart, Activity, TickSquare } from "react-iconly";

import content1Image from '../../../assets/images/pages/landing/content-1.png'

export default function LandingContent1() {
    return (
        <section className="hp-landing-content-1 hp-border-top-1 hp-border-color-dark-80 hp-overflow-hidden hp-mt-sm-64 hp-mt-120 hp-py-sm-64 hp-py-120">
            <div className="hp-landing-container hp-mr-md-0 hp-mr-120">
                <Row align="middle" justify="space-between">
                    <Col xl={10} lg={14} md={16} span={24}>
                        <h2 className="h1 hp-mb-32">
                            Perfect Solution For Small Business
                        </h2>

                        <p className="h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mb-48 hp-pr-96">
                            Powerfull Template customer service with our tools, hendrerit omittantur mel, es vidit Ius te omittantur meles vidit Ius te altera essent incorrupte.
                        </p>

                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Row align="middle">
                                    <Col>
                                        <Avatar size={60} icon={<Heart set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />} />
                                    </Col>

                                    <Col className="hp-ml-16">
                                        <h3 className="hp-font-weight-500 hp-text-color-black-80 hp-text-color-dark-30 hp-mb-0">Connect with new people</h3>
                                    </Col>
                                </Row>
                            </Col>

                            <Col span={24}>
                                <Row align="middle">
                                    <Col>
                                        <Avatar size={60} icon={<Activity set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />} />
                                    </Col>

                                    <Col className="hp-ml-16">
                                        <h3 className="hp-font-weight-500 hp-text-color-black-80 hp-text-color-dark-30 hp-mb-0">Increase chance to engage</h3>
                                    </Col>
                                </Row>
                            </Col>

                            <Col span={24}>
                                <Row align="middle">
                                    <Col>
                                        <Avatar size={60} icon={<TickSquare set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />} />
                                    </Col>

                                    <Col className="hp-ml-16">
                                        <Row align="middle">
                                            <Col>
                                                <h3 className="hp-font-weight-500 hp-text-color-black-80 hp-text-color-dark-30 hp-mb-0 hp-mr-24">Unlimited storage</h3>
                                            </Col>

                                            <Col>
                                                <span className="hp-px-8 hp-py-6 hp-bg-warning-1 hp-border-radius hp-caption hp-font-weight-400 hp-text-color-black-100">PRO</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={14} lg={10} span={24} className="hp-mt-md-64">
                        <div className="hp-landing-content-1-circle hp-bg-success-1"></div>

                        <div className="hp-landing-content-1-img">
                            <img src={content1Image} alt="Perfect Solution For Small Business" />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
