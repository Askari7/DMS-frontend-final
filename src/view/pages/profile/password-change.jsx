import React, { useState } from "react";

import { Row, Col, Divider, Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPassword } from "../../../redux/auth/authActions";
import { FormattedMessage } from "react-intl";
import axios from "axios";
export default function PasswordProfile() {
  const dividerClass = "hp-border-color-black-40 hp-border-color-dark-80";
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  
  // const user = useSelector((state) => state.auth?.user);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));

  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  // const userPasswordChange = () =>{
  //   dispatch(updateUserPassword({previousPassword: oldPassword, password: newPassword ,id: user?.id }))
  //   setOldPassword('')
  //   setNewPassword("")
  //   setConfirmNewPassword("")
  // }

  const updateUserPassword = async () => {
    const obj = {};
    if (oldPassword) {
      obj.oldPassword = oldPassword;
    }
    if (newPassword) {
      obj.newPassword = newPassword;
    }

    try {
      const response = await axios.put(
        `http://54.81.250.98:8083/api/users/${user?.user?.id}`,
        obj,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },

        }
      );
      // Handle the response as needed
      console.log("response", response);
      if (response?.status == 200) {
        message.success("User Updated Successfully");
        localStorage?.setItem("user", JSON.stringify(response?.data));
        window.location.reload();
      }
    } catch (error) {
      if (error?.message == "Request failed with status code 401") {
        message.error("Unauthorized");
      }
      console.error("Error updating:", error?.message);
    }
    setOldPassword("")
    setNewPassword("")
    setConfirmNewPassword("")
  };


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
             onFinish={updateUserPassword}
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
            name="old-password"
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
            <Input.Password placeholder="Placeholder text" id="old-password" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} />
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
            <Input.Password placeholder="Placeholder text" id="new-password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
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
            <Input.Password placeholder="Placeholder text" id="confirm-new-password" value={confirmNewPassword} onChange={(e)=>setConfirmNewPassword(e.target.value)} />
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