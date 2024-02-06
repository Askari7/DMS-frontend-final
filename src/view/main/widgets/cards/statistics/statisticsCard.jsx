import React from "react";

import { Card, Row, Col } from "antd";
import {
  RiHandCoinLine,
  RiMoneyDollarCircleLine,
  RiUserAddLine,
  RiUserStarLine,
} from "react-icons/ri";

export default function StatisticsCard() {
  return (
    <Card className="hp-border-color-black-40 hp-card-2">
      <Row gutter={16} align="middle">
        <Col className="hp-mb-36" span={24}>
          <Row justify="space-between">
            <h5 className="hp-mr-8">Statistics</h5>

            <p className="hp-caption-text hp-text-color-black-80 hp-text-color-dark-30">
              Updated 1 month ago
            </p>
          </Row>
        </Col>

        <Col sm={6} xs={12} className="hp-mb-xs-32">
          <Row>
            <Col className="hp-statistic-icon-bg hp-mr-lg-8 hp-mb-xs-16 hp-bg-color-primary-4 hp-bg-color-dark-primary">
              <RiHandCoinLine
                className="hp-text-color-primary-1 hp-text-color-dark-primary-2 remix-icon"
                size={24}
              />
            </Col>

            <Col>
              <h5 className="hp-mb-4">14.000 $</h5>
              <p className="hp-badge-text hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                Revenue
              </p>
            </Col>
          </Row>
        </Col>

        <Col sm={6} xs={12} className="hp-mb-xs-32">
          <Row>
            <Col className="hp-statistic-icon-bg hp-mr-lg-8 hp-mb-xs-16 hp-bg-color-warning-4 hp-bg-color-dark-warning">
              <RiMoneyDollarCircleLine
                className="hp-text-color-warning-1 remix-icon"
                size={24}
              />
            </Col>

            <Col>
              <h5 className="hp-mb-4">94.000 $</h5>
              <p className="hp-badge-text hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                Sales
              </p>
            </Col>
          </Row>
        </Col>

        <Col sm={6} xs={12}>
          <Row>
            <Col className="hp-statistic-icon-bg hp-mr-lg-8 hp-mb-xs-16 hp-bg-color-secondary-4 hp-bg-color-dark-secondary">
              <RiUserAddLine
                className="hp-text-color-secondary-1 remix-icon"
                size={24}
              />
            </Col>

            <Col>
              <h5 className="hp-mb-4">+120</h5>
              <p className="hp-badge-text hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                Customer
              </p>
            </Col>
          </Row>
        </Col>

        <Col sm={6} xs={12}>
          <Row>
            <Col className="hp-statistic-icon-bg hp-mr-lg-8 hp-mr-xs-8 hp-mb-xs-16 hp-bg-color-danger-4 hp-bg-color-dark-danger">
              <RiUserStarLine
                className="hp-text-color-danger-1 remix-icon"
                size={24}
              />
            </Col>

            <Col>
              <h5 className="hp-mb-4">24,500</h5>
              <p className="hp-badge-text hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                Customer
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
