import React from "react";

import { Card, Row, Col, Switch } from "antd";
import { RiShieldKeyholeLine } from "react-icons/ri";

export default function NotificationCardTwo() {
  return (
    <Card className="hp-border-color-black-40 hp-card-5">
      <Row>
        <Col span={24}>
          <h5 className="hp-mb-32">Notification</h5>

          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Row align="middle">
                    <RiShieldKeyholeLine
                      size={24}
                      className="hp-text-color-primary-1 hp-mr-16"
                    />

                    <Col>
                      <h5 className="hp-mb-0">Security Setting</h5>
                      <p className="hp-mb-0 hp-badge-text hp-font-weight-400">
                        Secured by jobconnect
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Switch defaultChecked />
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Row align="middle">
                    <RiShieldKeyholeLine
                      size={24}
                      className="hp-text-color-primary-1 hp-mr-16"
                    />

                    <Col>
                      <h5 className="hp-mb-0">Wi-Fi</h5>
                      <p className="hp-mb-0 hp-badge-text hp-font-weight-400">
                        jobconnect
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Switch />
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Row align="middle">
                    <RiShieldKeyholeLine
                      size={24}
                      className="hp-text-color-primary-1 hp-mr-16"
                    />

                    <Col>
                      <h5 className="hp-mb-0">Finger Pring</h5>
                      <p className="hp-mb-0 hp-badge-text hp-font-weight-400">
                        Touch ID
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Switch />
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Row align="middle">
                    <RiShieldKeyholeLine
                      size={24}
                      className="hp-text-color-primary-1 hp-mr-16"
                    />

                    <Col>
                      <h5 className="hp-mb-0">Lock</h5>
                      <p className="hp-mb-0 hp-badge-text hp-font-weight-400">
                        Not recommended
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Switch defaultChecked />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
