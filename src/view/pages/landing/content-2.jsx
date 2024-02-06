import React from 'react'

import { Avatar, Col, Row } from 'antd'
import { Document, TicketStar } from "react-iconly";

import content2Image from '../../../assets/images/pages/landing/content-2.svg'

export default function LandingContent2() {
    return (
        <section className="hp-landing-content-2 hp-pt-sm-120 hp-pb-sm-64 hp-pb-120 hp-overflow-hidden">
            <div className="hp-landing-container hp-mt-sm-0 hp-my-64">
                <Row align="middle" justify="space-between">
                    <Col lg={14} span={24}>
                        <div className="hp-landing-content-2-circle hp-position-relative hp-bg-info-1">
                            <img src={content2Image} alt="Work anywhere, with any device" className="hp-position-absolute-center" />
                        </div>
                    </Col>

                    <Col lg={10} md={16} span={24}>
                        <h2 className="h1 hp-mb-32">
                            Work anywhere, with any device
                        </h2>

                        <p className="h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mb-48">
                            These companies release their own versions of the operating systems with minor changes, and yet always with the same bottom line.
                        </p>

                        <Row gutter={[16, 16]} className="hp-landing-content-2-list">
                            <Col span={24}>
                                <Row align="middle" className="hp-border-1 hp-border-color-dark-80 hp-border-radius hp-p-24">
                                    <Col>
                                        <Avatar className="hp-bg-danger-4 hp-bg-dark-danger hp-text-color-danger-1" size={55} icon={<Document set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />} />
                                    </Col>

                                    <Col className="hp-ml-18">
                                        <h4 className="hp-font-weight-500 hp-mb-0">Report Easily</h4>
                                        <h4 className="hp-font-weight-400 hp-mb-0">export & import</h4>
                                    </Col>
                                </Row>
                            </Col>

                            <Col span={24}>
                                <Row align="middle" className="hp-border-1 hp-border-color-dark-80 hp-border-radius hp-p-24">
                                    <Col>
                                        <Avatar className="hp-bg-success-4 hp-bg-dark-success hp-text-color-success-1" size={55} icon={<TicketStar set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />} />
                                    </Col>

                                    <Col className="hp-ml-18">
                                        <h4 className="hp-font-weight-500 hp-mb-0">Unique Controls</h4>
                                        <h4 className="hp-font-weight-400 hp-mb-0">for each user</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}