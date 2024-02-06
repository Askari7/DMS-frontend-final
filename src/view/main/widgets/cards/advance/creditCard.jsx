import React, { useEffect, useState } from "react";

import { Card, Row, Col, Progress } from "antd";
import { Buy } from "react-iconly";

import circleBg from "../../../../../assets/images/dasboard/credit-card-bg-circle.svg"
import paypalLogo from "../../../../../assets/images/dasboard/paypal-logo.svg"
import netflixLogo from "../../../../../assets/images/dasboard/netflix-logo.svg"
import googlePlayLogo from "../../../../../assets/images/dasboard/google-play-logo.svg"
import amazonLogo from "../../../../../assets/images/dasboard/amazon-logo.svg"
import masterCardLogo from "../../../../../assets/images/dasboard/mastercard-logo.png"

export default function CreditCard(props) {
  const { item } = props

  // Progress
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    if (item.progress) {
      setProgressValue(item.progress)
    }
  }, [item])

  return (
    <div type={item.type} className="hp-credit-card hp-p-24 hp-border-none hp-border-radius hp-overflow-hidden hp-position-relative">
      <div
        className="hp-credit-card-circle hp-position-absolute-top-right"
        style={{
          backgroundImage: "url(" + circleBg + ")",
          backgroundSize: "contain",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <Row className="hp-d-flex-column" justify="space-between" style={{ minHeight: 224 }}>
        <Col span={24}>
          <Row justify="space-between">
            <Col style={{ width: 45 }}>
              {
                item.title === "paypal" && (
                  <img src={paypalLogo} alt="Paypal" />
                )
              }

              {
                item.title === "netflix" && (
                  <img src={netflixLogo} alt="Netflix" height={50} />
                )
              }

              {
                item.title === "google-play" && (
                  <img src={googlePlayLogo} alt="Google Play" />
                )
              }

              {
                item.title === "amazon" && (
                  <img src={amazonLogo} alt="Amazon" />
                )
              }
            </Col>

            <Col>
              <span className="hp-p1-body hp-text-color-black-0">**** **** {item.cardNumber}</span>
            </Col>
          </Row>

          <Row align="middle" justify="space-between" className="hp-mt-24">
            <Col>
              <span className="h4 hp-font-weight-500 hp-text-color-black-0">{item.cardValue}</span>
            </Col>

            <Col>
              <img src={masterCardLogo} alt="Mastercard" />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row align="middle" justify="space-between" style={{ marginBottom: -3 }}>
            <Col>
              <span className="hp-d-block hp-caption hp-font-weight-500 hp-text-color-black-20">Limit</span>
            </Col>

            <Col>
              <span className="hp-d-block hp-caption hp-font-weight-500 hp-text-color-black-20">%{progressValue}</span>
            </Col>
          </Row>

          <Progress className="hp-credit-card-progress" percent={progressValue} showInfo={false} />

          <Row justify="space-between" className="hp-mt-18">
            <Col>
              <span className="hp-d-block hp-caption hp-font-weight-500 hp-text-color-black-10">Name on card</span>
              <span className="hp-d-block h5 hp-font-weight-500 hp-text-color-black-0">{item.name}</span>
            </Col>

            <Col className="hp-text-right">
              <span className="hp-d-block hp-caption hp-font-weight-500 hp-text-color-black-10">Expires</span>
              <span className="hp-d-block h5 hp-font-weight-500 hp-text-color-black-0">{item.expires}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div >
  );
}