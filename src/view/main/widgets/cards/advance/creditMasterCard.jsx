import React from "react";

import { Card, Row, Col, Progress } from "antd";
import { RiMoneyEuroCircleLine, RiMastercardFill } from "react-icons/ri";

export default function CreditMasterCard() {
  return (
    <Card className="hp-border-color-black-40 hp-card-3">
      <Row>
        <Col span={24}>
          <Row justify="space-between">
            <Col>
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">Balance</h5>
              <Row align="middle">
                <RiMoneyEuroCircleLine size={24} className="hp-text-color-dark-0" />
                <h2 className="hp-mb-0 hp-ml-4">23.900</h2>
              </Row>
            </Col>

            <RiMastercardFill size={64} className="hp-text-color-primary-1" />
          </Row>

          <Row className="hp-mt-48">
            <Col span={18}>
              <p className="hp-mb-0 hp-text-color-dark-0">Limit</p>
              <Progress percent={50} showInfo={false} strokeWidth={4} />
            </Col>
          </Row>

          <Row className="hp-mt-24">
            <Col className="hp-mr-64">
              <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">
                Name on Card
              </p>
              <h5 className="hp-mb-0">Edward Lightning</h5>
            </Col>

            <Col>
              <p className="hp-mb-0 hp-caption hp-text-color-black-80 hp-text-color-dark-30">
                Expires
              </p>
              <h5 className="hp-mb-0">12/23</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
