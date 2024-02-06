import React from "react";

import { Row, Col } from "antd";
import { RiVisaLine } from "react-icons/ri";

import logoBlue from "../../../../assets/images/logo/logo-blue.svg";

export default function CreditCard() {
  return (
    <div className="hp-overflow-hidden hp-position-relative hp-border-radius-xxl hp-bg-primary-1 hp-pt-24 hp-px-24 hp-pb-18" style={{ minHeight: 200 }}>
      <div className="hp-position-absolute-bottom-left hp-w-100" style={{ height: '90%' }}>
        <svg
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M370.717 85.179 180.539 10.257l46.817 86.462L99.151 44.63l129.884 138.803L55.517 116.68l60.47 87.899-127.415-32.922"
            stroke="url(#a)"
            strokeWidth={20}
            strokeLinejoin="bevel"
          />
          <defs>
            <linearGradient
              id="a"
              x1={151.96}
              y1={17.382}
              x2={195.449}
              y2={191.807}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={0.737} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Row>
        <Col span={24}>
          <img src={logoBlue} alt="Yoda" />
        </Col>

        <Col span={24} className="hp-mt-32">
          <span className="h4 h-d-block hp-text-color-black-0">4512 0000 0000 0000 0000</span>
        </Col>

        <Col span={24} className="hp-mt-16" style={{ marginBottom: -16 }}>
          <Row align="middle" justify="space-between">
            <Col>
              <span className="hp-caption hp-font-weight-500 hp-text-color-black-0">Edward Adams</span>
            </Col>

            <Col className="hp-d-flex">
              <RiVisaLine size={64} className="hp-text-color-black-0" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
