import React from "react";

import { Row, Col, Card, Avatar } from "antd";

export default function UserIconItem(props) {
  return (
    <Card className="hp-border-color-black-40 hp-text-center">
      <Row>
        <Col span={24}>
          {props.image && (
            <Avatar src={props.image} size={props.imageHeight && (props.imageHeight)} className="hp-m-auto" />
          )}
        </Col>
      </Row>
    </Card>
  );
}
