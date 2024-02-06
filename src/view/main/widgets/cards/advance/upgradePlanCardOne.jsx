import React from "react";

import { Card, Row, Col, Button } from "antd";
import { RiArrowRightSLine } from "react-icons/ri";

export default function UpgradePlanCardOne() {
  return (
    <Card className="hp-border-color-black-40 hp-card-1 hp-py-2 hp-upgradePlanCardOne">
      <Row align="middle" className="hp-mt-8">
        <Col span={24} className="hp-mb-4">
          <Row align="middle" justify="space-between">
            <Col span={20}>
              <h5 className="hp-mb-8">
                Get exclusive discounts for any payment method
              </h5>

              <p className="hp-p1-body hp-mb-0">
                by upgrading your plan to premium
              </p>
            </Col>

            <Button
              className="hp-float-right hp-mt-xs-16"
              shape="circle"
              icon={<RiArrowRightSLine className="remix-icon" />}
              type="primary"
            />
          </Row>

          <div className="hp-dot-1 hp-bg-color-black-20 hp-bg-color-dark-90"></div>
          <div className="hp-dot-2 hp-bg-color-black-20 hp-bg-color-dark-90"></div>
          <div className="hp-dot-3 hp-bg-color-success-4 hp-bg-color-dark-success"></div>
        </Col>
      </Row>
    </Card>
  );
}
