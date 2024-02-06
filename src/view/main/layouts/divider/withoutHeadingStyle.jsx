import React from "react";

import { Card, Row, Col, Divider } from "antd";

export default function DividerWithoutHedingStyle() {
  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <h4>Text without heading style</h4>

          <p className="hp-p1-body">
            You can use non-heading style of divider text by setting plain.
          </p>
        </Col>

        <Col span={24}>
          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>

          <Divider plain>Text</Divider>

          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>

          <Divider orientation="left" plain>
            Left Text
          </Divider>

          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>

          <Divider orientation="right" plain>
            Right Text
          </Divider>

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
