import React from "react";

import { Card, Row, Col } from "antd";
import { Discount } from "react-iconly";

export default function ProfitFeatureCard() {
  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-statistic-icon-bg hp-mr-16 hp-mb-xs-16 hp-bg-color-danger-4 hp-bg-color-dark-danger">
          <Discount className="hp-text-color-danger-1 remix-icon" />
        </Col>

        <Col className="hp-mt-8">
          <h3 className="hp-mb-4">
            $ 1,32
            <span className="hp-badge-text hp-ml-8 hp-text-color-danger-1">
              +3%
            </span>
          </h3>

          <p className="hp-p1-body hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
            Gross Profit
          </p>
        </Col>
      </Row>
    </Card>
  );
}