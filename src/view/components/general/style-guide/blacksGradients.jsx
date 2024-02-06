import React from "react";

import { Card, Row, Col, Tooltip } from "antd";

export default function BlackGradients() {
  return (
    <Card className="hp-border-color-black-40">
      <Row className="hp-mb-16">
        <h5 className="hp-w-100 hp-mb-8">Blacks & Gradients</h5>

        <p className="hp-p1-body">
          Black tags can be use with class
          .hp-&#123;css-property&#125;-black-dark-bg, Gradients can be used with
          class .hp-&#123;css-property&#125;-primary-gradient. Gradients is used
          for background instead of backgroun-color.
        </p>
      </Row>

      <Row justify="space-between" className="hp-border-radius hp-overflow-hidden hp-border-color-black-40 hp-mb-24">
        <Col flex="1 0 0">
          <Tooltip title="Dark-Bg #111314">
            <div className="hp-w-100 hp-bg-color-black-bg hp-color-wrapper hp-border-radius-l hp-mb-8 hp-border-left-1 hp-border-top-1 hp-border-bottom-1 hp-border-color-dark-80"></div>
          </Tooltip>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> Dark-Bg</p>
        </Col>

        <Col flex="1 0 0">
          <Tooltip title="B-100 #2D3436">
            <div className="hp-w-100 hp-bg-color-black-100 hp-color-wrapper hp-mb-8 hp-border-left-1 hp-border-top-1 hp-border-bottom-1 hp-border-color-dark-80"></div>
          </Tooltip>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-100</p>
        </Col>

        <Col flex="1 0 0">
          <Tooltip title="B-80 #636E72">
            <div className="hp-w-100 hp-bg-color-black-80 hp-color-wrapper hp-mb-8 hp-border-left-1 hp-border-top-1 hp-border-bottom-1 hp-border-color-dark-80"></div>
          </Tooltip>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-80</p>
        </Col>

        <Col flex="1 0 0">
          <Tooltip title="B-60 #B2BEC3">
            <div className="hp-w-100 hp-bg-color-black-60 hp-color-wrapper hp-mb-8 hp-border-left-1 hp-border-top-1 hp-border-bottom-1 hp-border-color-dark-80"></div>
          </Tooltip>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-60</p>
        </Col>

        <Col flex="1 0 0">
          <Tooltip title="B-40 #DFE6E9">
            <div className="hp-w-100 hp-bg-color-black-40 hp-color-wrapper hp-mb-8 hp-border-left-1 hp-border-top-1 hp-border-bottom-1 hp-border-color-dark-80"></div>
          </Tooltip>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-40</p>
        </Col>

        <Col flex="1 0 0">
          <Tooltip title="B-20 #F0F3F5">
            <div className="hp-w-100 hp-bg-color-black-20 hp-color-wrapper hp-mb-8 hp-border-left-1 hp-border-top-1 hp-border-bottom-1 hp-border-color-dark-80"></div>
          </Tooltip>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-20</p>
        </Col>

        <Col flex="1 0 0">
          <Tooltip title="B-10 #F7FAFC">
            <div className="hp-w-100 hp-bg-color-black-10 hp-color-wrapper hp-mb-8 hp-border-left-1 hp-border-top-1 hp-border-bottom-1 hp-border-color-dark-80"></div>
          </Tooltip>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-10</p>
        </Col>

        <Col flex="1 0 0">
          <Tooltip title="B-0 #FFFFFF">
            <div className="hp-w-100 hp-bg-color-black-10 hp-color-wrapper hp-border-radius-r hp-mb-8 hp-border-1 hp-border-color-dark-80"></div>
          </Tooltip>
          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"> B-0</p>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col lg={4} span={12}>
          <Tooltip title="#0010f7 - #1be7ff">
            <div className="hp-w-100 hp-bg-primary-gradient hp-color-wrapper hp-border-radius hp-mb-8"></div>
          </Tooltip>

          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Primary Gradient
          </p>
        </Col>

        <Col lg={4} span={12}>
          <Tooltip title="#a210ba - #ff00c7">
            <div className="hp-w-100 hp-bg-secondary-gradient hp-color-wrapper hp-border-radius hp-mb-8"></div>
          </Tooltip>

          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Secondary Gradient
          </p>
        </Col>

        <Col lg={4} span={12}>
          <Tooltip title="#ff0022 - #ff5c00">
            <div className="hp-w-100 hp-bg-danger-gradient hp-color-wrapper hp-border-radius hp-mb-8"></div>
          </Tooltip>

          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Danger Gradient
          </p>
        </Col>

        <Col lg={4} span={12}>
          <Tooltip title="#1be7ff - #c2f4ff">
            <div className="hp-w-100 hp-bg-info-gradient hp-color-wrapper hp-border-radius hp-mb-8"></div>
          </Tooltip>

          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Info Gradient
          </p>
        </Col>

        <Col lg={4} span={12}>
          <Tooltip title="#00f7bf - #98ffa2">
            <div className="hp-w-100 hp-bg-success-gradient hp-color-wrapper hp-border-radius hp-mb-8"></div>
          </Tooltip>

          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Success Gradient
          </p>
        </Col>

        <Col lg={4} span={12}>
          <Tooltip title="#ffc212 - #faff00">
            <div className="hp-w-100 hp-bg-warning-gradient hp-color-wrapper hp-border-radius hp-mb-8"></div>
          </Tooltip>

          <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">
            Warning Gradient
          </p>
        </Col>
      </Row>
    </Card>
  );
}
