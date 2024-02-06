import React from "react";

import { Card, Row, Col } from "antd";
import { RiArrowRightUpLine } from "react-icons/ri";

import watch from "../../../../../assets/images/product/watch-card.png";

export default function EcommerceCardTwo() {
  return (
    <Card className="hp-border-color-black-40 hp-card-3">
      <Row>
        <Col span={24}>
          <Col className="hp-text-center">
            <img src={watch} alt="Xbox Wireless Game" />
          </Col>

          <Row justify="center">
            <Col className="hp-text-center">
              <h5 className="hp-mb-0 hp-mt-12 hp-mr-4 hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body hp-font-weight-500">
                Xbox Wireless Game
              </h5>

              <h3 className="hp-mb-0 hp-my-8 hp-text-color-primary-1">
                £399
              </h3>

              <Row align="middle" justify="center">
                <RiArrowRightUpLine
                  size={16}
                  className="hp-text-color-success-1"
                />

                <p className="hp-mb-0 hp-mr-8 hp-badge-text hp-text-color-success-1">
                  +4
                </p>

                <p className="hp-mb-0 hp-badge-text">New Item</p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
