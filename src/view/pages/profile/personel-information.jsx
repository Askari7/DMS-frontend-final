import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import {
  Row,
  Col,
  Divider,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Modal,
  message,
} from "antd";

import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUser,
  updateUserInformation,
} from "../../../redux/auth/authActions";
import axios from "axios";
export default function InfoProfile() {
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [preferanceModalVisible, setPreferanceModalVisible] = useState(false);

  const listTitle = "hp-p1-body";
  const listResult =
    "hp-mt-sm-4 hp-p1-body hp-text-color-black-100 hp-text-color-dark-0";
  const dividerClass = "hp-border-color-black-40 hp-border-color-dark-80";

  useEffect(() => {
    setFirstName(user?.user?.firstName || "");
    setLastName(user?.user?.lastName || "");
    setPhoneNumber(user?.phoneNumber || "");
    setAddress(user?.address || "");
  }, []);

  const updateUserInfo = async () => {
    const obj = {};
    if (firstName) {
      obj.firstName = firstName;
    }
    if (lastName) {
      obj.lastName = lastName;
    }

    try {
      const response = await axios.put(
        `http://127.0.0.1:8083/api/users/${user?.user?.id}`,
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
    setAddress("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    contactModalCancel();
  };
  const contactModalShow = () => {
    setContactModalVisible(true);
  };

  const contactModalCancel = () => {
    setContactModalVisible(false);
  };

  const preferanceModalShow = () => {
    setPreferanceModalVisible(true);
  };

  const preferanceModalCancel = () => {
    setPreferanceModalVisible(false);
  };

  return (
    <div>
      <Modal
        title="Contact Edit"
        width={416}
        centered
        visible={contactModalVisible}
        onCancel={contactModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
            firstName,
            lastName,
            address,
            phoneNumber,
          }}
        >
          <Form.Item label="First Name" name="firstName">
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Last Name" name="lastName">
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Item>

          {/* <Form.Item label="Date of Birth" name="dateofbirth">
            <DatePicker
              className="hp-w-100"
              suffixIcon={
                <RiCalendarLine className="remix-icon hp-text-color-black-60" />
              }
            />
          </Form.Item> */}

          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={updateUserInfo}
              >
                Edit
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={contactModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Modal
        title="Preferance Edit"
        width={316}
        centered
        visible={preferanceModalVisible}
        onCancel={preferanceModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic" initialValues={{ remember: true }}>
          <Form.Item label="Language" name="language">
            <Input />
          </Form.Item>

          <Form.Item label="Date Format" name="dateformat">
            <DatePicker
              className="hp-w-100"
              suffixIcon={
                <RiCalendarLine className="remix-icon hp-text-color-black-60" />
              }
            />
          </Form.Item>

          <Form.Item label="Timezone" name="timezone">
            <TimePicker className="hp-w-100" />
          </Form.Item>

          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={preferanceModalCancel}
              >
                Edit
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={preferanceModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Divider className={dividerClass} />

      <Row align="middle" justify="space-between">
        <Col md={12} span={24}>
          <h3>
            <FormattedMessage id="sidebar-apps-contact" />
          </h3>
        </Col>

        <Col md={12} span={24} className="hp-profile-action-btn hp-text-right">
          <Button type="primary" ghost onClick={contactModalShow}>
            Edit
          </Button>
        </Col>

        <Col
          span={24}
          className="hp-profile-content-list hp-mt-8 hp-pb-sm-0 hp-pb-42"
        >
          <ul>
            <li>
              <span className={listTitle}>
                <FormattedMessage id="pi-fname" />
              </span>
              <span className={listResult}>
                {user?.user?.firstName} {user?.user?.lastName}
              </span>
            </li>

            <li>
              <span className={listTitle}>
                <FormattedMessage id="pi-fn" />
              </span>
              <span className={listResult}>{user?.user?.firstName}</span>
            </li>
            <li>
              <span className={listTitle}>
                <FormattedMessage id="pi-ln" />
              </span>
              <span className={listResult}>{user?.user?.lastName}</span>
            </li>

            <li className="hp-mt-18">
              <span className={listTitle}>
                <FormattedMessage id="pi-email" />
              </span>
              <span className={listResult}>{user?.user?.email}</span>
            </li>
          </ul>
        </Col>
      </Row>

      <Divider className={dividerClass} />
      <Row align="middle" justify="space-between">
        {/* <Col md={12} span={24}>
          <h3><FormattedMessage id="tokens" /></h3>
        </Col> */}

        {/* <Col
          span={24}
          className="hp-profile-content-list hp-mt-8 hp-pb-sm-0 hp-pb-42"
        >
          <ul>
            <li>
              <span className={listTitle}><FormattedMessage id="total-tokens" /></span>
              <span className={listResult}>{user?.tokens}</span>
            </li>
          </ul>
        </Col> */}
      </Row>
    </div>
  );
}
