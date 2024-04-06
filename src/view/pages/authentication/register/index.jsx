import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Row, Col, Form, Input, Button, message, Spin } from "antd";

import LeftContent from "../leftContent";
import Footer from "../footer";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../redux/auth/authActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FormattedMessage } from "react-intl";

export default function SignUp() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.auth.loading);
  const authMessage = useSelector((state) => state.auth.message);

  const [form] = Form.useForm();
  const history = useHistory();

  // useEffect(()=>{
  //   // if(error){
  //   //   message.error(error);
  //   //   dispatch({
  //   //     type: "SET_ERROR",
  //   //     error: "",
  //   //   });
  //   // }
  //   if(authMessage){
  //     message.success(authMessage);
  //     history.push('/pages/authentication/login')
  //     dispatch({
  //       type: "SET_MESSAGE",
  //       error: "",
  //     });
  //   }

  // },[ authMessage ])

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setCompanyName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const register = async () => {
    try {
      // Make the POST request using Axios with async/await
      const response = await axios.post(
        "http://127.0.0.1:8083/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
          name
        }
      );
        console.log(response);
      // Handle success, you can access the response data in the 'data' property
      console.log("Response:", response);

      if (response?.data) {
        message.success(response?.data?.message);
        localStorage.setItem("user", JSON.stringify(response?.data));
        history.push("/pages/config_dept");
      }
      // message.success("Registered");
    } catch (error) {
      // Handle error, you can access the error information in the 'response' property
      if (error?.message == "Request failed with status code 409") {
        message.error(response?.data?.message);
      }
      console.error("Error:", error);
    }
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
            <span className="hp-d-block hp-p1-body hp-text-color-dark-0 hp-text-color-black-100 hp-font-weight-500 hp-mb-6">
              <FormattedMessage id="signup-free" />
            </span>
            <h1>Create Account</h1>
            <p className="hp-mt-8 hp-text-color-black-60">
              <FormattedMessage id="signup-intro" />
            </p>

            <Form
              layout="vertical"
              name="basic"
              form={form}
              className="hp-mt-sm-16 hp-mt-32"
              onFinish={register}
              onFinishFailed={onFinishFailed}
            >

              <Form.Item
                label={<FormattedMessage id="first-name" />}
                name="firstName"
                rules={[{ required: true }, { type: "string", min: 4 }]}
              >
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label={<FormattedMessage id="last-name" />}
                name="lastName"
                rules={[{ required: true }, { type: "string", min: 4 }]}
              >
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="E-mail :"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={<FormattedMessage id="company-name" />}
                name="name"
                rules={[{ required: true }, { type: "string", min: 3 }]}
              >
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Item>
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
                      /^(?=.*[A-Z])(?=.*\d).+$/.test(value)
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error(
                              "Password must contain at least one uppercase letter and one number."
                            )
                          ),
                  },
                ]}
              >
                <Input.Password
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Item>
              {/* {loading && <Spin />} */}
              <Form.Item className="hp-mt-16 hp-mb-8">
                <Button
                  loading={loading}
                  block
                  type="primary"
                  htmlType="submit"
                >
                  Sign up
                </Button>
              </Form.Item>
            </Form>

            <div className="hp-form-info hp-text-center">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
                <FormattedMessage id="signup-have-account" />
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
