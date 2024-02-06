import React from 'react'

import { Col, Row } from 'antd'

import geekWire from '../../../assets/images/pages/landing/geekWire.png'
import slack from '../../../assets/images/pages/landing/slack.png'
import envato from '../../../assets/images/pages/landing/envato.png'
import usaToday from '../../../assets/images/pages/landing/usaToday.png'
import forbes from '../../../assets/images/pages/landing/forbes.png'

export default function LandingCompanies() {
    return (
        <section className="hp-landing-companies hp-overflow-hidden hp-pt-64 hp-pb-sm-64 hp-pb-120">
            <div className="hp-landing-container">
                <Row gutter={[50, 24]} align="middle" justify="center">
                    <Col>
                        <img src={geekWire} alt="GeekWire" />
                    </Col>

                    <Col>
                        <img src={slack} alt="Slack" />
                    </Col>

                    <Col>
                        <img src={envato} alt="Envato" />
                    </Col>

                    <Col>
                        <img src={usaToday} alt="USA Today" />
                    </Col>

                    <Col>
                        <img src={forbes} alt="Forbes" />
                    </Col>
                </Row>
            </div>
        </section>
    )
}
