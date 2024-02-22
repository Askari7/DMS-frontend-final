import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, message } from "antd";

import LeftContent from "../leftContent";
import Footer from "../footer";
import axios from "axios";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [form] = Form.useForm();

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const token = params.get('token');

  console.log(token)
  const onFinish = () => {
    axios.post(`http://54.81.250.98:3001/v1/auth/reset-password?token=${token}`, {password})
    .then(response=> {
      console.log(response.data)
      if(response.status == 204){
        message.success("Password is resseted")
      }
    }).catch(e=>{
      console.log(e.response.data.message)
      message.error(e.response.data.message)
    })
  };
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

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
            <h1>Reset Password</h1>
            <p className="hp-mt-8 hp-text-color-black-60">
              Email verification is done. Please choose another password
            </p>

            <Form
              layout="vertical"
              name="basic"
              className="hp-mt-sm-16 hp-mt-32"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Password :"
                name="password"
                rules={[
                  {
                    required: true,
                  },
                  {
                    type: "string",
                    min: 6,
                  },
                  {
                    validator: (_, value) =>
                      /^(?=.*[A-Z])(?=.*\d).+$/.test(value) ? Promise.resolve() : Promise.reject(new Error("Password must contain at least one uppercase letter and one number."))
                  },
                ]}
              >
                <Input.Password
                  id="password"
                  value={password}
                  onChange={e=> setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password :"
                name="confirm-password"
                rules={[
                  {
                    required: true,
                  },
                  {
                    type: "string",
                    min: 6,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  id="confirm-password"
                  placeholder="At least 6 characters"
                  value={confirmPassword}
                  onChange={e=> setConfirmPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item className="hp-mt-16 hp-mb-8">
                <Button block type="primary" htmlType="submit">
                  Reset Password
                </Button>
              </Form.Item>
            </Form>

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
