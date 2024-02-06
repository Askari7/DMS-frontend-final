import React from "react";

import { Card, Row, Col } from "antd";

import watch from "../../../../../assets/images/product/watch-1.png";
import polaroid from "../../../../../assets/images/product/white-cam-1.png";
import headphone from "../../../../../assets/images/product/wireless-bluetooth-1.png";
import xboxController from "../../../../../assets/images/product/xbox-1.png";

export default function categoriesOfTheWeek() {
  const categories = [
    {
      name: "Sports",
      sales: 9000,
      img: <img src={watch} alt="Sports" />,
    },
    {
      name: "Tech",
      sales: 15000,
      img: <img src={xboxController} alt="Tech" />,
    },
    {
      name: "Home",
      sales: 10000,
      img: <img src={headphone} alt="Home" />,
    },
    {
      name: "Style",
      sales: 12000,
      img: <img src={polaroid} alt="Style" />,
    },
  ];

  return (
    <Card className="hp-border-color-black-40 hp-mb-32 hp-card-2">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row justify="space-between" align="top">
            <h5 className="hp-mb-16">Categories of the week</h5>
          </Row>
        </Col>

        <Col span={24}>
          <Row
            className="hp-categoriesOfTheWeek"
            gutter={[24, 24]}
            justify="space between"
          >
            {categories.map((category, index) => (
              <Col key={index} span={12}>
                <Row align="middle">
                  <div className="hp-bg-color-black-20 hp-bg-color-dark-70 hp-p-4 hp-img-container">
                    {category.img}
                  </div>

                  <div>
                    <p className="hp-mb-4 hp-text-color-black-100 hp-text-color-dark-0 hp-badge-text hp-font-weight-500">
                      {category.sales / 1000}K Sales
                    </p>

                    <p className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30 hp-input-description">
                      {category.name}
                    </p>
                  </div>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
