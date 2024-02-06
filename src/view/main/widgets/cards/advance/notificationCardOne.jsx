import React from "react";

import { Card, Row, Col, Timeline } from "antd";

export default function NotificationCardOne() {
  return (
    <Card className="hp-border-color-black-40 hp-card-5">
      <Row>
        <Col span={24}>
          <h5 className="hp-mb-32">Notification</h5>
          
          <Timeline className="hp-p2-body">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01 </Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </Card>
  );
}
