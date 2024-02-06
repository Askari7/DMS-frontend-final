import React from 'react'

import { Col, Row } from 'antd'

import peopleEmoji1 from '../../../assets/images/pages/landing/people-emoji-1.png'
import peopleEmoji2 from '../../../assets/images/pages/landing/people-emoji-2.png'
import peopleEmoji3 from '../../../assets/images/pages/landing/people-emoji-3.png'
import peopleEmoji4 from '../../../assets/images/pages/landing/people-emoji-4.png'
import peopleEmoji5 from '../../../assets/images/pages/landing/people-emoji-5.png'
import peopleEmoji6 from '../../../assets/images/pages/landing/people-emoji-6.png'

export default function LandingPeople() {
    const peopleValues = [
        {
            avatar: peopleEmoji1,
            name: "Aaron Almaraz",
            title: "CEO & Founder at Gearat",
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
            avatar: peopleEmoji2,
            name: "Phet Putrie",
            title: "Freelancer",
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
            avatar: peopleEmoji3,
            name: "Lara Madrigal",
            title: "Marketing Specialist",
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
            avatar: peopleEmoji4,
            name: "Marleah Eagleston",
            title: "Founder at Spicenet",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
        },
        {
            avatar: peopleEmoji5,
            name: "Prescott MacCaffery",
            title: "Writer",
            comment: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
        },
        {
            avatar: peopleEmoji6,
            name: "Waiapi Karaka",
            title: "Marketing Specialist",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
        },
    ];

    const peopleListMap = peopleValues.map((item, index) => (
        <Col key={index} md={8} span={24}>
            <div className="hp-landing-people-item hp-position-relative hp-border-radius hp-bg-black-0 hp-bg-dark-90 hp-p-sm-16 hp-p-24">
                <div className="hp-landing-people-item-twitter">
                    <svg fill="#21C6DD" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px">
                        <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                    </svg>
                </div>

                <Row align="middle">
                    <Col>
                        <img src={item.avatar} alt={item.name} className="hp-landing-people-item-img" />
                    </Col>

                    <Col className="hp-landing-people-item-title">
                        <span className="hp-d-block h5 hp-font-weight-400">{item.name}</span>
                        <span className="hp-d-block hp-caption hp-font-weight-400 hp-text-color-black-60 hp-text-color-dark-40">{item.title}</span>
                    </Col>
                </Row>

                <p className="h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16 hp-mb-0">
                    {item.comment}
                </p>
            </div>
        </Col>
    ));

    return (
        <section className="hp-landing-people hp-py-sm-64 hp-pt-96 hp-pb-120 hp-bg-black-10 hp-bg-dark-100 hp-position-relative hp-overflow-hidden">
            <div className="hp-landing-people-circle hp-bg-success-1"></div>

            <div className="hp-landing-container">
                <Row justify="center">
                    <Col xl={10} lg={15} md={18} span={24} className="hp-text-center">
                        <h2 className="h1 hp-mb-4">10,000+ people love us</h2>

                        <p className="h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-sm-0 hp-mt-32 hp-mb-0">
                            These companies release their own versions of the operating systems with minor changes, and yet always.
                        </p>
                    </Col>

                    <Col span={24} className="hp-mt-64">
                        <Row gutter={[32, 32]}>
                            {peopleListMap}
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
