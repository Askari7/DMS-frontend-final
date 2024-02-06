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

export default function DocumentPermissions() {
  const [DocumentPermissionModalVisible, setDocumentPermissionModalVisible] =
    useState(false);
  const [mdrOptions, setMdrData] = useState([]);
  const [userOptions, setUserData] = useState([]);
  const [permissionUser, setpermissionUser] = useState("");

  const [mdr, setMDR] = useState("");

  const [permissionModalVisible, setPermissionModalVisible] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [DocumentPermissionOptions, setDocumentPermissions] = useState([]);
  const [checked, setChecked] = useState([]);

  const [DocumentPermissionId, setDocumentPermissionId] = useState("");

  const DocumentPermissionModalShow = () => {
    setDocumentPermissionModalVisible(true);
  };
  const addPermission = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8083/api/documents/permissions",
        {
          masterDocumentId: mdr,
          userId: permissionUser,
          companyId: user?.user?.companyId,
          createDocument: checked?.includes("Creator"),
          reviewDocument: checked?.includes("Reviewer"),
          approveDocument: checked?.includes("Approver"),
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
      setMDR("");
      setpermissionUser("");
      setChecked([]);
      fetchData();
      setDocumentPermissionModalVisible(false);
    } catch (error) {
      // Handle errors
      if (error?.message == "Request failed with status code 403") {
        message.error("Permission Denied to create document on this MDR");
      }
    }
  };
  const fetchMDR = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/documents/mdr?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      const options = [];
      for (const item of response?.data) {
        options.push({
          value: item?.id,
          label: item?.title,
          DocumentPermissionId: item?.DocumentPermissionId,
          departmentId: item?.departmentId,
        });
      }

      setMdrData(options); // Assuming the response.data is an array of DocumentPermissions
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setChecked(checkedValues);
  };
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/users?companyId=${user?.user?.companyId}&roleId=2`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response?.data, "UUUAUA");
      const options = [];
      for (const item of response?.data) {
        options.push({
          value: item?.id,
          label: `${item?.firstName} ${item?.lastName}`,
        });
      }

      setUserData(options); // Assuming the response.data is an array of DocumentPermissions
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/documents/permissions?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      setData(response.data); // Assuming the response.data is an array of departments
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchData();
    fetchUsers();
    fetchMDR();
  }, []);
  return (
    <>
      <Modal
        title="Create Permissions"
        width={416}
        centered
        visible={DocumentPermissionModalVisible}
        onCancel={DocumentPermissionModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
          <Form.Item
            label="MDR"
            name="mdr"
            rules={[
              {
                required: true,
                message: "Please select MDR",
              },
            ]}
          >
            <Select
              options={mdrOptions}
              value={mdr}
              onChange={(value) => setMDR(value)}
            />
          </Form.Item>
          <Form.Item
            label="Users"
            name="users"
            rules={[
              {
                required: true,
                message: "Please select MDR",
              },
            ]}
          >
            <Select
              options={userOptions}
              value={permissionUser}
              onChange={(value) => setpermissionUser(value)}
            />
          </Form.Item>
          <Form.Item label="Permissions" name="permissions">
            <Checkbox.Group
              options={permissionsOptions}
              defaultValue={0}
              onChange={onChange}
            />
          </Form.Item>

          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => addPermission()}
              >
                Add
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={DocumentPermissionModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button
          type="primary"
          onClick={DocumentPermissionModalShow}
          disabled={user?.user?.roleId != 1}
        >
          Add Permissions
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
