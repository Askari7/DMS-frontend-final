import React from "react";

import { Row, Col, Card } from "antd";

export default function IllustrationItem(props) {
  return (
    <Card className="hp-border-color-black-40 hp-text-center">
      <Row>
        <Col span={24}>
          {props.image && (
            <img src={props.image} alt={props.title && (props.title)} height={props.imageHeight && (props.imageHeight)} />
          )}
        </Col>

        <Col span={24}>
          {props.title && (
            <span className="hp-d-block h5 hp-mt-6">{props.title}</span>
          )}
        </Col>
      </Row>
    </Card>
  );
}
