import React from "react";

import { useSelector } from "react-redux";

import { Card, Row, Col } from "antd";
import { ArrowRight } from "iconsax-react";

export default function CtaCardSix() {
  const theme = useSelector(state => state.customise.theme)

  return (
    <Card className="hp-border-color-black-40 hp-card-6 hp-border-radius-xxl hp-overflow-hidden">
      <Row>
        <Col span={24} style={{ top: -24, right: -24 }} className="hp-text-right">
          <svg
            height={264}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M619 152.572 360.292-31l38.104 147.254L224.587-9.869 368.314 247 131.666 81.917l58.159 154.518L10 139.366"
              stroke={theme === 'dark' ? '#ffffff' : '#000000'}
              strokeWidth={40}
              strokeLinejoin="bevel"
            />
          </svg>
        </Col>

        <Col span={24} className="hp-mt-64">
          <Row>
            <Col flex="1 0 0">
              <h3 className="hp-mb-0 hp-font-weight-600 hp-text-color-black-bg hp-text-color-dark-0">
                Knowledge Base
              </h3>
            </Col>

            <Col>
              <ArrowRight
                size="24"
                className="hp-text-color-black-100 hp-text-color-dark-10"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
