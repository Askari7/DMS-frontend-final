import React from "react";

import { useSelector } from "react-redux";

import { Card, Row, Col } from "antd";

import illustration from "../../../../../assets/images/illustrations/growth.svg";
import illustrationDark from "../../../../../assets/images/illustrations/growth-dark.svg";

export default function CtaCardTwo() {
  const theme = useSelector(state => state.customise.theme)

  return (
    <Card className="hp-border-color-black-40 hp-card-6 hp-pb-10">
      <Row>
        <Col className="hp-text-center" span={24}>
          <img src={theme == "light" ? illustration : illustrationDark} alt="Upgrade Account" />

          <h3 className="hp-mb-0 hp-mt-24 hp-mb-16 hp-mr-4">
            Upgrade Account
          </h3>

          <p className="hp-p1-body hp-mb-0">
            5 integrations, 30 team members, <br /> advanced
            <span className="hp-mx-4 hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-font-weight-500">
            features
            </span>
            for teams.
          </p>
        </Col>
      </Row>
    </Card>
  );
}
