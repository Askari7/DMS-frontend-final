import React from "react";

import { Row, Col } from "antd";

import mastercardLogo from "../../../../../assets/images/dasboard/mastercard-logo.png";

export default function SmallCardItem(props) {
  const { logo, bg, number, value, title } = props

  return (
    <div
      className="hp-d-flex hp-d-flex-between hp-d-flex-column hp-border-radius-xxl hp-overflow-hidden hp-card-1 hp-p-18"
      style={{ backgroundImage: "url(" + bg + ")", backgroundSize: "cover", backgroundPosition: "center right" }}
    >
      <Row justify="space-between">
        <Col>
          <Row align="middle">
            <Col>
              <img src={logo} alt={title} height={25} />
            </Col>

            <Col>
              <span className="hp-ml-12 hp-p1-body hp-text-color-black-0">{title}</span>
            </Col>
          </Row>
        </Col>

        <Col>
          <span className="hp-p1-body hp-text-color-black-0">**** **** {number}</span>
        </Col>
      </Row>

      <Row align="middle" justify="space-between">
        <Col>
          <span className="h4 hp-text-color-black-0">{value}</span>
        </Col>

        <Col>
          <img src={mastercardLogo} alt="Mastercard" />
        </Col>
      </Row>
    </div>
  );
}
