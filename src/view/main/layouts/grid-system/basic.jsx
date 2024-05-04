import React from "react";

import { Card, Row, Col } from "antd";

export default function BasicGrid() {
  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <h4>Basic Grid</h4>

          <p className="hp-p1-body">
            You can create a basic grid system by using a single set of Row and
            Col grid assembly, all of the columns (Col) must be placed in Row.
          </p>
        </Col>

        <Col span={24}>
          <Row>
            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-1 hp-mb-8"
              span={24}
            >
              Col
            </Col>
          </Row>

          <Row>
            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-1 hp-mb-8"
              span={12}
            >
              Col-12
            </Col>

            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-2 hp-mb-8"
              span={12}
            >
              Col-12
            </Col>
          </Row>

          <Row>
            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-1 hp-mb-8"
              span={8}
            >
              Col-8
            </Col>

            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-2 hp-mb-8"
              span={8}
            >
              Col-8
            </Col>

            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-1 hp-mb-8"
              span={8}
            >
              Col-8
            </Col>
          </Row>

          <Row>
            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-1 hp-mb-8"
              span={6}
            >
              Col-6
            </Col>

            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-2 hp-mb-8"
              span={6}
            >
              Col-6
            </Col>

            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-1 hp-mb-8"
              span={6}
            >
              Col-6
            </Col>

            <Col
              className="hp-p-16 hp-text-center hp-text-color-black-0 hp-bg-primary-2 hp-mb-8"
              span={6}
            >
              Col-6
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
