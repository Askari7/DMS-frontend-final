import React, { useState } from "react";

import { Row, Col, Divider, Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPassword } from "../../../redux/auth/authActions";
import { FormattedMessage } from "react-intl";

export default function PasswordProfile() {
  const dividerClass = "hp-border-color-black-40 hp-border-color-dark-80";
  const [oldPassword1, setOldPassword1] = useState("")
  const [oldPassword2, setOldPassword2] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const user = useSelector((state) => state.auth?.user);

  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  const userPasswordChange = () =>{
    dispatch(updateUserPassword({previousPassword: oldPassword1, password: newPassword ,id: user?.id }))
    setOldPassword1('')
    setOldPassword2("")
    setNewPassword("")
  }
  return (
    <Row>
      <Col span={24}>
        <h2><FormattedMessage id="pc-cp" /></h2>
        <p className="hp-p1-body hp-mb-0">
          <FormattedMessage id="pc-setUnique" />
         </p>

        <Divider className={dividerClass} />
      </Col>

      <Col xxl={5} xl={10} md={15} span={24}>
        <Form layout="vertical" name="basic"
             onFinish={userPasswordChange}
             form={form}
             onFinishFailed={onFinishFailed}
             initialValues={{ remember: true }}
        >
          <Form.Item
            label={
              <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
               <FormattedMessage id="pc-old" />
              </span>
            }
            name="old-password-1"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
                min: 8,
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
            <Input.Password placeholder="Placeholder text" id="old-password-1" value={oldPassword1} onChange={(e)=>setOldPassword1(e.target.value)} />
          </Form.Item>

          <Form.Item
            label={
              <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
                <FormattedMessage id="pc-new" />
              </span>
            }
            name="new-password"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
                min: 8,
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
              }
            ]}
          >
            <Input.Password placeholder="Placeholder text" id="new-password" value={oldPassword2} onChange={(e)=>setOldPassword2(e.target.value)} />
          </Form.Item>

          <Form.Item
            label={
              <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
               <FormattedMessage id="pc-confirm" />
              </span>
            }
            rules={[
              {
                required: true,
              },
              {
                type: "string",
                min: 8,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('new-password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The new password that you entered do not match!'));
                },
              }),
            ]}
            name="confirm-new-password"
          >
            <Input.Password placeholder="Placeholder text" id="confirm-new-password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
            <FormattedMessage id="pc-cp" />
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}