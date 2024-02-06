import React, { useState, useEffect } from "react";

import {
  Button,
  Form,
  Row,
  Col,
  Space,
  Table,
  Select,
  Input,
  DatePicker,
  TimePicker,
  Modal,
  message,
  Upload,
} from "antd";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from "axios";
import { Checkbox } from "antd";

// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "MDR ID",
    dataIndex: "masterDocumentId",
    key: "masterDocumentId",
  },

  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Reviewer",
    dataIndex: "allowReview",
    key: "allowReview",
  },

  {
    title: "Approver",
    dataIndex: "allowApprove",
    key: "allowApprove",
  },

  {
    title: "Creator",
    dataIndex: "allowCreate",
    key: "allowCreate",
  },
];
const permissionsOptions = [
  {
    label: "Reviewer",
    value: "Reviewer",
  },
  {
    label: "Approver",
    value: "Approver",
  },
  {
    label: "Creator",
    value: "Creator",
  },
];

export default function DocumentNumbering() {
  const [DocumentPermissionModalVisible, setDocumentPermissionModalVisible] =
    useState(false);
  const [mdrOptions, setMdrData] = useState([]);
  const [userOptions, setUserData] = useState([]);
  const [permissionUser, setpermissionUser] = useState("");

  const [permissionModalVisible, setPermissionModalVisible] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [DocumentPermissionOptions, setDocumentPermissions] = useState([]);
  const [checked, setChecked] = useState([]);

  const [DocumentPermissionId, setDocumentPermissionId] = useState("");

  const [firstField, setFirstField] = useState("");
  const [secondField, setSecondField] = useState("");
  const [thirdField, setThirdField] = useState("");
  const [fourthField, setFourthField] = useState("");

  const DocumentPermissionModalShow = () => {
    setDocumentPermissionModalVisible(true);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8083/api/documents/format?companyId=${user?.user?.companyId}`,
        {
          documentNumberFormat: `${firstField}-${secondField}-${thirdField}-${fourthField}`,
        },
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      // Handle the response as needed
      console.log(response);
      message.success(response?.data?.message);
      setDocumentPermissionModalVisible(false);
    } catch (error) {
      // Handle errors

      message.error("Some Error Occured");
    }
  };

  const DocumentPermissionModalCancel = () => {
    setMDR("");
    setDocumentPermissionModalVisible(false);
  };

  const permissionModalShow = () => {
    setPermissionModalVisible(true);
  };
  const permissionModalCancel = () => {
    setPermissionModalVisible(false);
  };
  const addDocumentPermission = async () => {};

  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
  }, []);
  return (
    <>
      <div style={{ textAlign: "left", marginBottom: "16px" }}>
        <Form layout="vertical" name="basic">
          <Form.Item
            label="First Field"
            name="firstField"
            rules={[
              {
                required: true,
                message: "Please select first field",
              },
            ]}
          >
            <Select
              style={{ width: "420px" }}
              options={[
                { value: "projectCode", label: "Project Code" },
                { value: "departmentName", label: "Department Name" },
                { value: "docNumber", label: "Document Number" },
                { value: "mdrCode", label: "MDR Code" },
              ]}
              value={firstField}
              onChange={(e) => setFirstField(e)}
            />
          </Form.Item>
          <Form.Item
            label="Second Field"
            name="secondField"
            rules={[
              {
                required: true,
                message: "Please select second field",
              },
            ]}
          >
            <Select
              style={{ width: "420px" }}
              options={[
                { value: "projectCode", label: "Project Code" },
                { value: "departmentName", label: "Department Name" },
                { value: "docNumber", label: "Document Number" },
                { value: "mdrCode", label: "MDR Code" },
              ]}
              value={firstField}
              onChange={(e) => setSecondField(e)}
            />
          </Form.Item>

          <Form.Item
            label="Third Field"
            name="thirdField"
            rules={[
              {
                required: true,
                message: "Please select third field",
              },
            ]}
          >
            <Select
              style={{ width: "420px" }}
              options={[
                { value: "projectCode", label: "Project Code" },
                { value: "departmentName", label: "Department Name" },
                { value: "docNumber", label: "Document Number" },
                { value: "mdrCode", label: "MDR Code" },
              ]}
              value={firstField}
              onChange={(e) => setThirdField(e)}
            />
          </Form.Item>

          <Form.Item
            label="Fourth Field"
            name="fourthField"
            rules={[
              {
                required: true,
                message: "Please select fourth field",
              },
            ]}
          >
            <Select
              style={{ width: "420px" }}
              options={[
                { value: "projectCode", label: "Project Code" },
                { value: "departmentName", label: "Department Name" },
                { value: "docNumber", label: "Document Number" },
                { value: "mdrCode", label: "MDR Code" },
              ]}
              value={firstField}
              onChange={(e) => setFourthField(e)}
            />
          </Form.Item>

          <Row justify="left">
            <Col md={10} span={10} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => {
                  handleSubmit();
                }}
                disabled={user?.user?.roleId != 1}
              >
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
