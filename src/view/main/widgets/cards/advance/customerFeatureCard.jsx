import React from "react";

import { Card, Row, Col } from "antd";
import { People } from "react-iconly";

export default function CustomerFeatureCard() {
  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-statistic-icon-bg hp-mr-16 hp-mb-xs-16 hp-bg-color-primary-4 hp-bg-color-dark-primary">
          <People className="hp-text-color-primary-1 hp-text-color-dark-primary-2 remix-icon" />
        </Col>

        <Col className="hp-mt-8">
          <h3 className="hp-mb-4">
            243
            <span className="hp-badge-text hp-ml-8 hp-text-color-primary-1 hp-text-color-dark-primary-2">
              +3%
            </span>
          </h3>

          <p className="hp-p1-body hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
            New Customer
          </p>
        </Col>
      </Row>
    </Card>
  );
}