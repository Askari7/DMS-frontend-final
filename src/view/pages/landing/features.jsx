import React from 'react'

import Slider from "react-slick";
import { Avatar, Button, Col, Row } from 'antd'
import { Message, Star, Setting, Category, Graph } from "react-iconly";

export default function LandingFeatures() {
    const featuresCard = [
        {
            icon: <Message set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />,
            title: "Find Leads",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.",
        },
        {
            icon: <Star set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />,
            title: "Design And Block.",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.",
        },
        {
            icon: <Setting set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />,
            title: "Easy Customizable",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.",
        },
        {
            icon: <Category set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />,
            title: "Fully Responsive",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.",
        },
        {
            icon: <Graph set="bold" style={{ width: 24, height: 24, marginLeft: 0 }} />,
            title: "Dedicated Storage",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.",
        },
    ];

    const featuresCardMap = featuresCard.map((value, index) => (
        <div key={index} className="hp-px-sm-8 hp-px-16">
            <div className="hp-border-radius hp-bg-black-10 hp-bg-dark-100 hp-p-18">
                <Row gutter={[20]}>
                    <Col>
                        <Avatar className="hp-bg-black-0 hp-bg-dark-90" size={55} icon={value.icon} />
                    </Col>

                    <Col flex="1 0 0">
                        <h4 className="hp-font-weight-500 hp-mb-8">Easy Customizable</h4>
                        <p className="h5 hp-font-weight-500 hp-text-color-black-80 hp-text-color-dark-30 hp-mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.</p>
                    </Col>
                </Row>
            </div>
        </div>
    ));

    return (
        <section className="hp-landing-features hp-pt-24">
            <Row align="middle" justify="center">
                <Col xl={10} lg={14} md={16} span={24} className="hp-px-16 hp-text-center hp-mb-sm-64 hp-mb-96">
                    <h2 className="h1 hp-mb-32">
                        Built With Amazing Features
                    </h2>

                    <p className="h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        These companies release their own versions of the operating systems with minor changes, and yet always.
                    </p>
                </Col>

                <Col span={24}>
                    <Slider
                        dots={false}
                        infinite={true}
                        slidesToShow={3}
                        slidesToScroll={1}
                        arrows={false}
                        speed={800}
                        autoplay={true}
                        autoplaySpeed={4000}
                        centerMode={true}
                        centerPadding={230}
                        responsive={[
                            {
                                breakpoint: 1370,
                                settings: {
                                    centerPadding: 150
                                }
                            },
                            {
                                breakpoint: 1199,
                                settings: {
                                    centerPadding: 80,
                                    slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    centerPadding: 24,
                                    slidesToShow: 1,
                                }
                            }
                        ]}
                    >
                        {featuresCardMap}
                    </Slider>
                </Col>

                <Col span={24} className="hp-px-16 hp-text-center hp-mt-sm-32 hp-mt-64">
                    <Button type="primary">Learn More</Button>
                </Col>
            </Row>
        </section>
    )
}
