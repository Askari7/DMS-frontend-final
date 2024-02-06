import React from "react";

import { Card, Row, Col, Progress } from "antd";
import {
  RiMoreFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

export default function SocailMediaCard() {
  return (
    <Card className="hp-border-color-black-40 hp-card-6">
      <Row>
        <Col span={24}>
          <Row justify="space-between">
            <Row align="middle" className="hp-mb-32">
              <h5 className="hp-mb-0 hp-mr-8">Subscribe Goal</h5>
              <p className="hp-mb-0 hp-badge-text">Social Media</p>
            </Row>

            <RiMoreFill className="hp-text-color-dark-0" size={24} />
          </Row>

          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row align="middle" className="hp-mr-16">
                <div className="hp-social-media-logo-wrapper hp-bg-primary-2 hp-mr-16">
                  <RiLinkedinFill
                    size={16}
                    className="hp-text-color-black-0 hp-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="hp-mb-0 hp-placeholder">Linkedin</h5>
                  <Progress
                    percent={30}
                    strokeWidth={4}
                    strokeColor={"#0063F7"}
                  />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" className="hp-mr-16">
                <div className="hp-social-media-logo-wrapper hp-bg-primary-1 hp-mr-16">
                  <RiFacebookFill
                    size={16}
                    className="hp-text-color-black-0 hp-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="hp-mb-0 hp-placeholder">Facebook</h5>
                  <Progress percent={30} strokeWidth={4} />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" className="hp-mr-16">
                <div className="hp-social-media-logo-wrapper hp-bg-danger-1 hp-mr-16">
                  <RiInstagramFill
                    size={16}
                    className="hp-text-color-black-0 hp-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="hp-mb-0 hp-placeholder">Instagram</h5>
                  <Progress
                    percent={30}
                    strokeWidth={4}
                    strokeColor="#FF455E"
                  />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" className="hp-mr-16">
                <div className="hp-social-media-logo-wrapper hp-bg-info-1 hp-mr-16">
                  <RiTwitterFill
                    size={16}
                    className="hp-text-color-black-0 hp-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="hp-mb-0 hp-placeholder">Twitter</h5>
                  <Progress
                    percent={30}
                    strokeWidth={4}
                    strokeColor="#1BE7FF"
                  />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" className="hp-mr-16">
                <div className="hp-social-media-logo-wrapper hp-bg-black-80 hp-mr-16">
                  <SiTiktok
                    size={16}
                    className="hp-text-color-black-0 hp-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="hp-mb-0 hp-placeholder">TikTok</h5>
                  <Progress
                    percent={30}
                    strokeWidth={4}
                    strokeColor="#636E72"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
