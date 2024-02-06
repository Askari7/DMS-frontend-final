import React from "react";

import { Card, Row, Col } from "antd";

export default function ClassTags() {
  return (
    <Card className="hp-border-color-black-40">
      <Row className="hp-mb-16">
        <h4>Class Tags</h4>
        
        <p className="hp-p1-body text-primary-2 mt-4px">
          Class tags can be use for, &lt;p&gt; and &lt;span&gt; add .caption,
          .p1-body, p2-body classes, when you want to match the font styling of
          a tag.
        </p>
      </Row>

      <Row className="hp-mb-24">
        <Col span={12}>
          <p className="hp-caption hp-text-color-black-60">Tag</p>
        </Col>

        <Col span={12}>
          <p className="hp-caption hp-mt-1 hp-float-right hp-text-color-black-60">
            Size
          </p>
        </Col>
      </Row>

      <Row className="hp-mb-24">
        <Col span={12}>
          <p className="hp-caption">Caption</p>
        </Col>

        <Col span={12}>
          <p className="hp-caption hp-float-right hp-mt-2">12/18px</p>
        </Col>
      </Row>

      <Row className="hp-mb-24">
        <Col span={12}>
          <p className="hp-p1-body">P1•Body</p>
        </Col>

        <Col span={12}>
          <p className="hp-p1-body hp-mt-3 hp-float-right">14/21px</p>
        </Col>
      </Row>

      <Row className="hp-mb-24">
        <Col span={12}>
          <p className="hp-p2-body">P2•Body</p>
        </Col>

        <Col span={12}>
          <p className="hp-p2-body hp-mt-4 hp-float-right">14/21px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="hp-button">Button</p>
        </Col>

        <Col span={12}>
          <p className="hp-button hp-float-right">14/16px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="hp-placeholder">Placeholder Text</p>
        </Col>

        <Col span={12}>
          <p className="hp-placeholder hp-float-right">14/16px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="hp-input-description">Input Description</p>
        </Col>

        <Col span={12}>
          <p className="hp-input-description hp-float-right">10/12px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="hp-input-label">Input Label</p>
        </Col>

        <Col span={12}>
          <p className="hp-input-label hp-float-right">14/16px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="hp-badge-text">Badge Text</p>
        </Col>

        <Col span={12}>
          <p className="hp-badge-text hp-float-right">12/12px</p>
        </Col>
      </Row>
    </Card>
  );
}
