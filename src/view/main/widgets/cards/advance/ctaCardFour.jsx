import React from "react";

import { Card, Row, Col } from "antd";

import line from "../../../../../assets/images/dasboard/line.svg";
import logo from "../../../../../assets/images/logo/logo-blue-shadow.svg";

export default function CtaCardFour() {
  return (
    <Card className="hp-border-color-black-40 hp-card-6 hp-border-radius-xxl hp-overflow-hidden">
      <Row justify="space-between" style={{ flexDirection: 'column' }}>
        <Col className="hp-text-center hp-mt-24" span={24}>
          <div className="hp-position-absolute-top-left" style={{ left: -24, right: -24, top: '45%', transform: 'translate(0, -50%)' }}>
            <img src={line} alt="Upgrade Account" className="hp-w-100" />
          </div>

          <img src={logo} alt="Upgrade Account" className="hp-position-relative" />
        </Col>

        <Col className="hp-text-center hp-mt-42" span={24}>
          <h3 className="hp-mb-12">
            Upgrade Account
          </h3>

          <p className="hp-p1-body hp-mb-0">
            5 integrations, 30 team members, <br /> advanced
            <span className="hp-text-color-primary-1 hp-mx-4 hp-text-color-dark-primary-2">
              features
            </span>
            for teams.
          </p>
        </Col>
      </Row>
    </Card>
  );
}
