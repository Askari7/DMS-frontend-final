import React from "react";

import { useSelector } from "react-redux";

import { Card, Row, Col, Button } from "antd";

export default function UpgradePlanCardOneLight() {
  // Redux
  const customise = useSelector(state => state.customise)

  return (
    <Card className="hp-border-color-black-40 hp-card-1 hp-border-radius-xxl hp-upgradePlanCardOne">
      <div className="hp-position-absolute-top-right hp-h-100">
        {
          customise.theme === 'light' ? (
            <svg
              className="hp-w-100 hp-h-100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m394.94 86.299-177.9-100.66 34.328 92.136L131.659 8.35l109.303 155.528L78.423 73.626l47.648 95.459L4.478 118.751"
                stroke="url(#UpgradePlanCardOneLight)"
                strokeWidth={20}
                strokeLinejoin="bevel"
              />
              <defs>
                <linearGradient
                  id="UpgradePlanCardOneLight"
                  x1={187.747}
                  y1={-11.283}
                  x2={206.538}
                  y2={167.497}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset={0.737} stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              className="hp-w-100 hp-h-100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m394.94 86.299-177.9-100.66 34.328 92.136L131.659 8.35l109.303 155.528L78.423 73.626l47.648 95.459L4.478 118.751"
                stroke="url(#UpgradePlanCardOneLight)"
                strokeWidth={20}
                strokeLinejoin="bevel"
              />
              <defs>
                <linearGradient
                  id="UpgradePlanCardOneLight"
                  x1={187.747}
                  y1={-11.283}
                  x2={206.538}
                  y2={167.497}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset={0.737} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          )
        }
      </div>

      <Row align="middle" className="hp-mt-8">
        <Col span={24} className="hp-mb-4">
          <Row align="middle" justify="space-between">
            <Col flex="1">
              <h4 className="hp-mb-8 hp-font-weight-700">
                Get exclusive discounts for any payment method
              </h4>

              <p className="hp-p1-body hp-mb-0 hp-text-color-black-100 hp-text-color-dark-0">
                by upgrading your plan to premium
              </p>
            </Col>

            <Button className="hp-float-right hp-mt-xs-16 hp-border-none hp-hover-bg-black-100 hp-bg-black-bg hp-text-color-black-0 hp-hover-bg-dark-10 hp-bg-dark-0 hp-text-color-dark-100">
              Upgrade Now
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
