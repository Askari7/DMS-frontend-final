import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Form, Input, Button, message, Spin } from "antd";

import LeftContent from "../leftContent";
import Footer from "../footer";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function VerifyEmail() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const token = params.get("token");
    const [verified, setVerified] = useState(false);
    const history = useHistory();
    console.log(token)
    useEffect(() => {
      axios
        .post(`${window.location.origin}/v1/auth/verify-email?token=${token}`)
        .then((response) => {
          console.log(response.data);
          if (response.status == 204) {
            message.success("Email is Verified");
            setVerified(true);
            history.push("/pages/authentication/login");
          }
        })
        .catch((e) => {
          console.log(e.response.data.message);
          message.error(e.response.data.message);
        });
    }, []);
  
  return (
    <Row gutter={[32, 0]} className="hp-authentication-page">
      <LeftContent />

      <Col lg={12} span={24} className="hp-py-sm-0 hp-py-md-64">
        <Row className="hp-h-100" align="middle" justify="center">
          <Col
            xxl={11}
            xl={15}
            lg={20}
            md={20}
            sm={24}
            className="hp-px-sm-8 hp-pt-24 hp-pb-48"
          >
            <h1 className="hp-mb-sm-0">Verify Email</h1>

           
            {!verified && <Spin />}

            <div className="hp-form-info hp-text-center">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
                Go back to
              </span>

              <Link
                to="/pages/authentication/login"
                className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
              >
                Login
              </Link>
            </div>

            <Footer />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
