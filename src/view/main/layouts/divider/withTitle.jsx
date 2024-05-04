import React from "react";

import { Card, Row, Col, Divider } from "antd";

export default function DividerWithTitle() {
  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <h4>Divider with title</h4>

          <p className="hp-p1-body">
            Divider with inner title, set orientation="left/right" to align it.
          </p>
        </Col>

        <Col span={24}>
          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>

          <Divider>Text</Divider>

          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>

          <Divider orientation="left">Left Text</Divider>

          <p className="hp-text-color-dark-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>

          <Divider orientation="right">Right Text</Divider>

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
