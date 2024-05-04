import React from "react";

import { Card, Row, Col, Tooltip } from "antd";

export default function ThemeColors() {
  return (
    <Col className="hp-px-0">
      <div xl={12} lg={24}>
        <h2 className="hp-mb-8">Color Guide</h2>

        <p className="hp-p1-body hp-mb-32">
          We used dynamic colors to clearly convey the actions, situation and
          direction within the interface. They serve to make things simple to
          understand.
        </p>
      </div>

      <Card className="hp-border-color-black-40">
        <Row className="hp-mb-16">
          <h5 className="hp-w-100 hp-mb-8">Theme Colors</h5>

          <p className="hp-p1-body">
            Theme colors can be use with class
            .hp-&#123;css-property&#125;-primary-1. It's available for text,
            background-color, background and border.
          </p>
        </Row>

        <Row className="hp-mr-12" gutter={[16, 16]}>
          <Col xxl={4} md={8} span={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-w-100">
              <Tooltip title="Pr-1 #0010F7">
                <Col flex="1 0 0" className="hp-bg-color-primary-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col flex="0 0 90px">
                <Row className="hp-h-100">
                  <Tooltip title="Pr-4 #EBFAFA">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-primary-4 hp-color-wrapper-sm"></Col>
                  </Tooltip>

                  <Tooltip title="Pr-3 #55B1F3">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-primary-3 hp-color-wrapper-sm"></Col>
                  </Tooltip>

                  <Tooltip title="Pr-2 #0063F7">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-primary-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Primary color</p>
          </Col>

          <Col xxl={4} md={8} span={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-w-100">
              <Tooltip title="Se-1 #C903FF">
                <Col flex="1 0 0" className="hp-bg-color-secondary-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col flex="0 0 90px">
                <Row className="hp-h-100">
                  <Tooltip title="Se-4 #FDEFFC">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-secondary-4 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="Se-3 #F7C2FF">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-secondary-3 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="Se-2 #E26BF5">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-secondary-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Secondary Color</p>
          </Col>

          <Col xxl={4} md={8} span={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-w-100">
              <Tooltip title="hp-1 #FF0022">
                <Col flex="1 0 0" className="hp-bg-color-danger-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col flex="0 0 90px">
                <Row className="hp-h-100">
                  <Tooltip title="hp-4 #FFE7EA">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-danger-4 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="hp-3 #FF8B9A">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-danger-3 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="hp-2 #FF455E">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-danger-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Danger Color</p>
          </Col>

          <Col xxl={4} md={8} span={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-w-100">
              <Tooltip title="Su-1 #00F7BF">
                <Col flex="1 0 0" className="hp-bg-color-success-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col flex="0 0 90px">
                <Row className="hp-h-100">
                  <Tooltip title="Su-4 #EAFFF8">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-success-4 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="Su-3 #98FFE0">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-success-3 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="Su-2 #5BFFCE">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-success-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Success Color</p>
          </Col>

          <Col xxl={4} md={8} span={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-w-100">
              <Tooltip title="Wa-1 #FFC212">
                <Col flex="1 0 0" className="hp-bg-color-warning-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col flex="0 0 90px">
                <Row className="hp-h-100">
                  <Tooltip title="Wa-4 #FFF9E9">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-warning-4 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="Wa-3 #FFE393">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-warning-3 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="Wa-2 #FFD252">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-warning-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Warning Color</p>
          </Col>

          <Col xxl={4} md={8} span={24}>
            <Row className="hp-border-radius hp-overflow-hidden hp-mb-8 hp-w-100">
              <Tooltip title="In-1 #1BE7FF">
                <Col flex="1 0 0" className="hp-bg-color-info-1 hp-color-wrapper-xl"></Col>
              </Tooltip>

              <Col flex="0 0 90px">
                <Row className="hp-h-100">
                  <Tooltip title="In-4 #EAFCFF">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-info-4 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="In-3 #97F4FF">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-info-3 hp-color-wrapper-sm"></Col>
                  </Tooltip>
                  <Tooltip title="In-2 #59EDFF">
                    <Col flex="1 0 0" className="hp-h-100 hp-bg-color-info-2 hp-color-wrapper-sm hp-border-radius-br"></Col>
                  </Tooltip>
                </Row>
              </Col>
            </Row>

            <p className="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0">Info Color</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
