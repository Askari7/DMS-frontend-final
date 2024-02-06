import React from "react";

import { Row, Col, Button } from "antd";

export default function UpgradeNowCard() {
  return (
    <div className="hp-overflow-hidden hp-position-relative hp-border-radius-xxl hp-bg-black-bg hp-pt-24 hp-px-24 hp-pb-18">
      <div className="hp-position-absolute-bottom-right" style={{ height: '90%', right: -50 }}>
        <svg
          className="hp-w-100 hp-h-100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M384.797 85.179 194.619 10.257l46.816 86.462L113.23 44.63l129.884 138.803L69.597 116.68l60.469 87.899L2.651 171.657"
            stroke="url(#CreditCardNew)"
            strokeWidth={20}
            strokeLinejoin="bevel"
          />
          <defs>
            <linearGradient
              id="CreditCardNew"
              x1={166.04}
              y1={17.382}
              x2={209.529}
              y2={191.807}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={0.737} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Row style={{ minHeight: 158 }}>
        <Col xxl={12} span={16}>
          <p className="h5 hp-mb-0 hp-text-color-black-0">Check the Best Prices of New Models & Boost Your Business</p>

          <Button className="hp-mt-24 hp-border-none hp-hover-bg-black-10 hp-bg-black-0 hp-text-color-black-100">
            Upgrade Now
          </Button>
        </Col>
      </Row>
    </div>
  );
}
