import React from "react";

import { useSelector } from "react-redux";

import { Card, Row, Col } from "antd";

import line from "../../../../../assets/images/dasboard/line.svg";
import lineDark from "../../../../../assets/images/dasboard/lineDark.svg";

export default function CtaCardFive() {
  const theme = useSelector(state => state.customise.theme)

  return (
    <Card className="hp-border-color-black-40 hp-card-6 hp-border-radius-xxl hp-overflow-hidden">
      <Row justify="space-between" style={{ flexDirection: 'column' }}>
        <Col className="hp-text-center hp-mt-12 hp-mb-md-64" style={{ marginLeft: -24, marginRight: -24, maxWidth: 'initial' }}>
          <img src={theme === 'dark' ? line : lineDark} alt="Upgrade Account" className="hp-w-100" />
        </Col>

        <Col className="hp-text-center hp-mt-96 hp-pt-12" span={24}>
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
