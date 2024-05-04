import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "antd";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/auth/authActions";
import Line from "./line";
import Header from "./header";
import Footer from "./footer";
import ProtectedAppPage from "../Protected";
export default function PaymentSuccess() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth?.user);
  const searchParams = new URLSearchParams(document.location.search)


  useEffect(()=>{
    dispatch(updateUser({id: user?.id}))
  },[])
  return (
    <Row className="hp-text-center hp-overflow-hidden">
      <Line />

      <Header />

      <Col className="hp-error-content hp-py-32" span={24}>
        <Row className="hp-h-100" align="middle" justify="center">
          <Col>
            <h2 className="h1 hp-mb-16"><FormattedMessage id="pricing-success-message" /></h2>

            <h3 className="hp-mb-10 hp-text-color-black-100 hp-text-color-dark-0"><FormattedMessage id="previous-balance-tokens" />: {searchParams.get('currentToken')}</h3>
            <h3 className="hp-mb-10 hp-text-color-black-100 hp-text-color-dark-0"><FormattedMessage id="purchased-tokens" />: {searchParams.get('addToken')}</h3>
            <h3 className="hp-mb-10 hp-text-color-black-100 hp-text-color-dark-0"><FormattedMessage id="total-tokens" />: { Number(searchParams.get('currentToken') || 0) +  Number(searchParams.get('addToken') || 0)}</h3>

            <Link to="/">
              <Button type="primary"><FormattedMessage id="pricing-back-to-home" /></Button>
            </Link>
          </Col>
        </Row>
      </Col>
      <ProtectedAppPage />
      <Footer />
    </Row>
  );
}
