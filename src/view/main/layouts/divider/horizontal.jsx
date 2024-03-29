import React from "react";

import { Card, Row, Col, Divider } from "antd";

export default function HorizontalDivider() {
  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={12}>
          <h4>Horizontal</h4>

          <p className="hp-p1-body">
            Divider is horizontal by default. You can add text within Divider.
          </p>
        </Col>

        <Col span={24}>
          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          
          <Divider />
          
          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          
          <Divider dashed />
          
          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
        </Col>
      </Row>
    </Card>
  );
}
