import React from "react";

import { Card, Row, Col } from "antd";

import watch from "../../../../../assets/images/product/watch-1.png";
import polaroid from "../../../../../assets/images/product/white-cam-1.png";
import headphone from "../../../../../assets/images/product/wireless-bluetooth-1.png";
import xboxController from "../../../../../assets/images/product/xbox-1.png";

export default function BestSellingCategories() {
  const categories = [
    {
      name: "Technology",
      sales: 5000,
      total: 45000,

      img: <img src={watch} alt="Technology" />,
    },
    {
      name: "Music",
      sales: 1200,
      total: 25000,

      img: <img src={headphone} alt="Music" />,
    },
    {
      name: "Gaming",
      sales: 560,
      total: 55000,

      img: <img src={xboxController} alt="Gaming" />,
    },
    {
      name: "Photography",
      sales: 1000,
      total: 250000,

      img: <img src={polaroid} alt="Photography" />,
    },
  ];

  return (
    <Card className="hp-border-color-black-40 hp-card-4">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <h5 className="hp-mb-24 hp-font-weight-600">Best Selling Categories</h5>
          </Row>
        </Col>

        <Col span={24}>
          <Row
            className="hp-bestSellingCategories"
            gutter={[16, 16]}
            justify="space between"
          >
            {categories.map((category, index) => (
              <Col key={index} span={24}>
                <Row justify="space-between">
                  <Col>
                    <Row>
                      <div className="hp-bg-color-black-20 hp-bg-color-dark-70 hp-p-4 hp-img-container">

                        {category.img}
                      </div>
                      <Col className="hp-align-self-center">
                        <p className="hp-mb-4 hp-text-color-black-100 hp-text-color-dark-0 hp-badge-text hp-font-weight-500">
                          {category.sales >= 1000
                            ? `${category.sales / 1000}K`
                            : `${category.sales}`}
                          Sales
                        </p>
                        <p className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30 hp-input-description">
                          {category.name}
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col className="hp-align-self-center">
                    <p className="hp-mb-4 hp-p1-body">
                      ${category.total / 1000}K
                    </p>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
