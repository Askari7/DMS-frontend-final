import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "antd";

import Line from "./line";
import Header from "./header";
import Footer from "./footer";
import { FormattedMessage } from "react-intl";
import ProtectedAppPage from "../Protected";

export default function PaymentFail() {
  return (
    <Row className="hp-text-center hp-overflow-hidden">
      <Line />

      <Header />

      <Col className="hp-error-content hp-py-32" span={24}>
        <Row className="hp-h-100" align="middle" justify="center">
          <Col>
            <h2 className="h1 hp-mb-16"><FormattedMessage id="pricing-fail-message" /></h2>
            <Link to="/">
              <Button type="primary"><FormattedMessage id="pricing-back-to-home" /></Button>
            </Link>
          </Col>
        </Row>
      </Col>

      <Footer />
      <ProtectedAppPage />
    </Row>
  );
}
