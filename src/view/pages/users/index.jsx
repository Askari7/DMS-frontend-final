import React, { useState, useEffect } from "react";

import {
  Button,
  Form,
  Row,
  Col,
  Space,
  Table,
  Input,
  Modal,
  message,
  Checkbox,
  Select
} from "antd";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from "axios";
// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";
import ProtectedAppPage from "../Protected";
const columns = [
  {
    title: "User ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "roleTitle",
    key: "roleTitle",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

export default function Users() {
  const [selectedDepartments, setSelectedDepartments] = useState("");
  // const departmentOptions = [
  //   { label: 'Project Management', value: 'projectManagement' },
  //   { label: 'Process', value: 'process' },
  //   { label: 'Mechanical', value: 'mechanical' },
  //   { label: 'Electrical', value: 'electrical' },
  //   { label: 'Instrumentation', value: 'instrumentation' },
  //   { label: 'Civil / Structure', value: 'civilStructure' },
  //   { label: 'Finance', value: 'finance' },
  //   { label: 'HR / Admin', value: 'hrAdmin' },
  //   { label: 'Quality', value: 'quality' },
  // ];
  const [ departmentOptions,setDepartmentOptions]= useState([])
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/departments?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers 
          },
        }
      );
      const options = [];
      for (const item of response?.data) {
        options.push({ value: item?.id, label: item?.title });
      }
      setDepartmentOptions(options); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const UserModalShow = () => {
    setUserModalVisible(true);
  };

  const UserModalCancel = () => {
    setUserModalVisible(false);
  };

  const addUser = async () => {
    try {
      const roleOptions = {
        "head":2,
        "seniorEngineer":3,
        "juniorEngineer":4,
        "designer":5
      }
      const response = await axios.post(
        `http://127.0.0.1:8083/api/users`,
        {
          roleId:roleOptions[role],
          companyId:user?.user?.companyId,
          department:selectedDepartments[0],
          email,
          firstName,
          lastName,
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
      fetchData();
      UserModalCancel();
    } catch (error) {
      // Handle errors
      console.error("Error adding user:", error);
      // message.error("Error adding user");
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/users?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response.data);
      setData(response.data); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchDepartments();
    fetchData();
  }, []);

  return (
    <>
      <Modal
        title="Add User"
        width={416}
        centered
        visible={userModalVisible}
        onCancel={UserModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your firstName!",
              },
            ]}
          >
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your lastName!",
              },
            ]}
          >
            <Input
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
          <Form.Item label="Role"  name="role">
            <Select
              defaultValue="Head"
              options={[
                { value: "head", label: "Head" },
                { value: "seniorEngineer", label: "Senior Engineer" },
                { value: "juniorEngineer", label: "Junior Engineer" },
                { value: "designer", label: "Designer/Draftsmen" },
              ]}
              value={role}
              onChange={(e) => setRole(e)}
            /></Form.Item>
          <Form.Item
          label="Select Department"
          rules={[
           
            {
              required: true,
              message: "Please select one department!",
            },
          ]}>
          <Checkbox.Group options={departmentOptions} value={selectedDepartments} onChange={setSelectedDepartments} />
   </Form.Item>
          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => addUser()}
                disabled={
                  !(
                    email.length &&
                    firstName.length &&
                    lastName.length &&
                    isEmailValid
                  )
                }
                className={
                  !(
                    email.length &&
                    firstName.length &&
                    lastName.length &&
                    isEmailValid
                  )
                    ? "disabled-button"
                    : ""
                }
              >
                Add
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={UserModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button
          type="primary"
          onClick={UserModalShow}
          disabled={user?.user?.roleId != 1}
        >
          Add User
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
      <ProtectedAppPage />
    </>
  );
}



