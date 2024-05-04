import React from "react";

import { Row, Col, Card, Avatar } from "antd";
import { RiArrowRightLine } from "react-icons/ri";

import marketingImg1 from "../../../../../assets/images/dasboard/analytics-marketing-team-1.svg";
import marketingImg2 from "../../../../../assets/images/dasboard/analytics-marketing-team-2.svg";
import marketingImg3 from "../../../../../assets/images/dasboard/analytics-marketing-team-3.svg";
import marketingImg4 from "../../../../../assets/images/dasboard/analytics-marketing-team-4.svg";
import marketingImg5 from "../../../../../assets/images/dasboard/analytics-marketing-team-5.svg";
import marketingImg6 from "../../../../../assets/images/dasboard/analytics-marketing-team-6.svg";

export default function BestTeamCard() {
  return (
    <Card className="hp-border-color-black-40">
      <Row justify="space-between">
        <Col md={12} span={24}>
          <h5>Best team</h5>
          <p className="hp-p1-body hp-text-color-black-60 hp-text-color-dark-50 hp-mb-0">
            Highest income this month
          </p>

          <Row align="middle">
            <h4 className="hp-mb-0">$442.98</h4>
            <p className="hp-p1-body hp-text-color-black-60 hp-text-color-dark-50 hp-ml-8 hp-mb-0">
              Highest income this month
            </p>
          </Row>
        </Col>

        <Col md={12} span={24} className="hp-mt-sm-32">
          <h5 className="hp-text-center">Marketing team</h5>

          <Row align="middle" justify="center">
            <Avatar
              size={36}
              src={marketingImg1}
              className="hp-mr-8 hp-bg-color-primary-3"
            />

            <Avatar
              size={36}
              src={marketingImg2}
              className="hp-mr-8 hp-bg-color-info-3"
            />

            <Avatar
              size={36}
              src={marketingImg3}
              className="hp-mr-8 hp-bg-color-black-60"
            />

            <Avatar
              size={36}
              src={marketingImg4}
              className="hp-mr-8 hp-bg-color-danger-3"
            />

            <Avatar
              size={36}
              src={marketingImg5}
              className="hp-mr-8 hp-bg-color-secondary-3"
            />

            <Avatar
              size={36}
              src={marketingImg6}
              className="hp-mr-16 hp-bg-color-warning-3"
            />

            <RiArrowRightLine className="remix-icon hp-text-color-dark-30" size={24} />
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
