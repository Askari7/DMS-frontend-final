import React from "react";

import { Card, Row, Col, Divider } from "antd";

export default function VerticalDivider() {
  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <h4>Vertical</h4>

          <p className="hp-p1-body">Use type="vertical" make it vertical.</p>
        </Col>

        <Col span={24}>
          <span className="hp-text-color-dark-0">Text</span>
          
          <Divider type="vertical" />

          <a href="#">Link</a>

          <Divider type="vertical" />

          <a href="#">Link</a>
        </Col>
      </Row>
    </Card>
  );
}
