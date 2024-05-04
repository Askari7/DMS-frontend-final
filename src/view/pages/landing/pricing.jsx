import React, { useState } from 'react'

import { Switch, Button, Col, Row } from 'antd'

export default function LandingPricing() {
    const [billedValue, setBilledValue] = useState(true);
    const billedText = `Billed ${billedValue ? "yearly" : "monthly"}`;

    function onChange(checked) {
        if (checked) {
            setBilledValue(true);
        } else {
            setBilledValue(false);
        }
    }

    const itemValues = [
        {
            title: "Basic",
            subTitle: "Simple explanation",
            price: `$${billedValue ? "99" : "199"}`,
            billed: billedText,
            best: false,
            button: "Try it for free",
            list: ["10gb Space", "1 User", "Team inbox"],
        },
        {
            title: "Starter",
            subTitle: "Simple explanation",
            price: `$${billedValue ? "169" : "269"}`,
            billed: billedText,
            best: true,
            button: "Try it for free",
            list: [
                "10gb Space",
                "1 User",
                "Team inbox",
                "Website Analitcs",
                "Promotional Pop-ups",
            ],
        },
        {
            title: "Advanced",
            subTitle: "Simple explanation",
            price: `$${billedValue ? "349" : "449"}`,
            billed: billedText,
            best: false,
            button: "Try it for free",
            list: [
                "Promotional Pop-ups",
                "Lorem Ipsum",
                "Dolor Sit",
                "Website Analitcs",
                "24/7 Customer Support",
            ],
        },
    ];

    const listSVG = (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.99992 13.6667C3.31792 13.6667 0.333252 10.682 0.333252 7.00004C0.333252 3.31804 3.31792 0.333374 6.99992 0.333374C10.6819 0.333374 13.6666 3.31804 13.6666 7.00004C13.6666 10.682 10.6819 13.6667 6.99992 13.6667ZM6.99992 12.3334C8.41441 12.3334 9.77096 11.7715 10.7712 10.7713C11.7713 9.77108 12.3333 8.41453 12.3333 7.00004C12.3333 5.58555 11.7713 4.229 10.7712 3.2288C9.77096 2.22861 8.41441 1.66671 6.99992 1.66671C5.58543 1.66671 4.22888 2.22861 3.22868 3.2288C2.22849 4.229 1.66659 5.58555 1.66659 7.00004C1.66659 8.41453 2.22849 9.77108 3.22868 10.7713C4.22888 11.7715 5.58543 12.3334 6.99992 12.3334ZM6.33525 9.66671L3.50659 6.83804L4.44925 5.89537L6.33525 7.78137L10.1059 4.01004L11.0493 4.95271L6.33525 9.66671Z"
                fill="#0010F7"
            />
        </svg>
    );

    const listItem = "hp-d-flex-center hp-mt-8";
    const listText = "hp-d-block hp-ml-8 hp-caption hp-font-weight-400 hp-text-color-dark-0";

    const listMap = itemValues.map((item, index) => (
        <Col
            key={index}
            md={8}
            span={24}
        >
            <div className="hp-landing-pricing-item hp-p-24 hp-border-radius hp-bg-black-10 hp-bg-dark-100">
                <div>
                    <Row justify="space-between">
                        <Col lg={item.best ? 15 : 24} md={item.best ? 10 : 24} span={item.best ? 15 : 24}>
                            <h5 className="hp-mb-0">{item.title}</h5>
                            <p className="hp-caption hp-mb-sm-8 hp-text-color-black-60">
                                {item.subTitle}
                            </p>
                        </Col>

                        {item.best && (
                            <Col>
                                <span className="hp-caption hp-border-radius hp-py-4 hp-px-16 hp-bg-color-primary-4 hp-text-color-primary-1">
                                    Best Price
                                </span>
                            </Col>
                        )}
                    </Row>

                    <span className="h1 hp-d-block hp-mt-sm-8 hp-mt-18">{item.price}</span>

                    <p className="hp-caption hp-mt-sm-0 hp-mt-4 hp-mb-0 hp-text-color-black-60">
                        {item.billed}
                    </p>

                    <ul className="hp-mt-24 hp-mb-0 hp-p-0">
                        {item.list.map((item, index) => (
                            <li key={index} className={listItem}>
                                {listSVG}
                                <span className={listText}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <Button className="hp-mt-64" block ghost type="primary">
                    {item.button}
                </Button>
            </div>
        </Col>
    ));

    return (
        <section className="hp-landing-pricing hp-py-sm-64 hp-pt-96 hp-pb-120">
            <div className="hp-landing-container">
                <Row>
                    <Col span={24} className="hp-text-center">
                        <h2 className="h1 hp-mb-4">Pricing & Plans</h2>

                        <p className="hp-p1-body hp-mt-sm-0 hp-mt-32 hp-mb-0">
                            Get unlimited versions with our detailed plans
                        </p>
                    </Col>

                    <Col span={24}>
                        <Row
                            align="middle"
                            justify="center"
                            className="hp-mt-64 hp-mb-32"
                        >
                            <span
                                className={`hp-caption ${billedValue
                                    ? "hp-text-color-black-100 hp-text-color-dark-0"
                                    : "hp-text-color-primary-1"
                                    }`}
                            >
                                Billed monthly
                            </span>

                            <Switch
                                className="hp-mx-8"
                                defaultChecked
                                onChange={onChange}
                            />

                            <span
                                className={`hp-caption ${billedValue
                                    ? "hp-text-color-primary-1"
                                    : "hp-text-color-black-100 hp-text-color-dark-0"
                                    }`}
                            >
                                Billed annually
                            </span>
                        </Row>

                        <Row gutter={[32, 24]}>
                            {listMap}
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
