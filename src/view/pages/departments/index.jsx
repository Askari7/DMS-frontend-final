import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import {
  Row,
  Col,
  Form,
  Space,
  Table,
  Input,
  Button,
  Modal,
  message,
  notification,
  Select
} from "antd";

import axios from "axios";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import ProtectedAppPage from "../Protected";
import "react-quill/dist/quill.snow.css";
export default function Depatments() {
const columns = [
  {
    title: "Department Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Department Suffix",
    dataIndex: "suffix",
    key: "suffix",
  },
  {
    title: "Department Owner",
    dataIndex: "headLeads",
    key: "headLeads",
  },
  {
    title: "No of Users",
    dataIndex: "noOfUsers",
    key: "noOfUsers",
    sorter: (a, b) => a.noOfUsers - b.noOfUsers,

  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      
      <Space size="middle">
        <a>Delete</a>
        <a onClick={() => addUser(record)}           disabled={user?.user?.roleId != 1}
>Add User</a>
      </Space>
      
    ),
  },
];
const fetchUserData = async () => {
  try {
    const response = await axios.get(
      `http://54.81.250.98:8083/api/users?companyId=${user?.user?.companyId}&roleId=2`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
    const options = [];
    for (const item of response?.data) {
      options.push({ value: item?.id, label: item?.firstName });
    }
    setUserOptions(options); // Assuming the response.data is an array of projects
  } catch (error) {
    console.error("Error fetching documents:", error?.message);
  }
};
const [department,setDepartment] = useState([])

const fetchDept = async () => {
  try {
    const response = await axios.get(
      `http://54.81.250.98:8083/api/departments?companyId=${user?.user?.companyId}`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
    const options = [];
    for (const item of response?.data) {
      options.push(item);
    }
    setDepartment(options); 
    console.log(department);
  } catch (error) {
    console.error("Error fetching documents:", error?.message);
  }
};

  const addUser = (record) => {
  // You can use the record data if needed
   console.log("Add user for department:", record['id']);
setDepartmentId(record['id']);
  // Show the user modal
  fetchUserData();
  userModalShow();
};
  const [departmentModalVisible, setDepartmentModalVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [title, setTitle] = useState("");
  const [suffix, setSuffix] = useState("");

  const [departmentId, setDepartmentId] = useState("");

  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [userData, setUserData] = useState([]);
  const [userOptions, setUserOptions] = useState([]);

  const [data, setData] = useState([]);
  const departmentModalShow = () => {
    setDepartmentModalVisible(true);
  };

  const departmentModalCancel = () => {
    setTitle("");
    setDepartmentModalVisible(false);
  };
  const userModalShow = () => {
    setUserModalVisible(true);
  };

  const userModalCancel = () => {
    setTitle("");
    setUserModalVisible(false);
  };
  const associateUserDepartment = async () => {
    try {
      console.log(userOptions.find(user => user.value === userData),);
      const response = await axios.post(
        "http://54.81.250.98:8083/api/departments/associate",
        {
          title,
          companyId: user?.user?.companyId,
          userId: userData,
          departmentCreator:0 ,
          noOfUsers:noOfUsers+1,
          departmentId:departmentId
        },
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      // Handle the response as needed
      console.log("association response", response);
      message.success(response?.data?.message);
      fetchData();
      departmentModalCancel();
    } catch (error) {
      if (error?.message == "Request failed with status code 401") {
        message.error("Unauthorized");
      }
      console.error("Error adding departments:", error?.message);
    }
  };
  const noOfUsers = 0
  const addDepartments = async () => {
    if (!title || !suffix ) {
      // If any required field is missing, display a validation error notification
      notification.error({
        message: 'Validation Error',
        description: 'Please fill in all required fields.',
        style: {
          backgroundColor: '#f5222d', // Red color background
          color: '#fff', // White text color
        },
      });
      return; // Exit early if validation fails
    }
    try {
      console.log(user);
      const response = await axios.post(
        "http://54.81.250.98:8083/api/departments/",
        {
          title,
          suffix,
          noOfUsers:noOfUsers,
          companyId: user?.user?.companyId,
          authorId: user?.user?.id,
          authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
        },
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
      console.log("departments response", response);
      notification.success({
        message: `${response?.data?.message}`,
        style: {
          backgroundColor: '#52c41a', // Red color background
          color: '#fff', // White text color
        },
      }
    )
      fetchData();
      departmentModalCancel();
    } catch (error) {
      if (error?.message == "Request failed with status code 401") {
        message.error("Unauthorized");
      }
      console.error("Error adding departments:", error?.message);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/departments?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response.data);
      setData(response.data); // Assuming the response.data is an array of departments
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchData();
  }, []);
  return (
    <>
      <Modal
        title="Add Department"
        width={400}
        centered
        visible={departmentModalVisible}
        onCancel={departmentModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Row justify="space-between" align="center">
          <Col span={20}>
            <Form layout="vertical" name="basic">
              <Form.Item
                label="Department Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input your title",
                  },
                ]}
              >
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Department Suffix"
                name="suffix"
                rules={[
                  {
                    required: true,
                    message: "Please input your suffix",
                  },
                ]}
              >
                <Input
                  value={title}
                  onChange={(e) => setSuffix(e.target.value)}
                />
              </Form.Item>

              <Row>
                <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={() => addDepartments()}
                    disabled={user?.user?.roleId != 1}

                  >
                    Submit
                  </Button>
                </Col>

                <Col
                  md={12}
                  span={24}
                  className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12"
                >
                  <Button block onClick={departmentModalCancel}>
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>
      <Modal
        title="Add User"
        width={400}
        centered
        visible={userModalVisible}
        onCancel={userModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Row justify="space-between" align="center">
          <Col span={20}>
            <Form layout="vertical" name="basic">
              {/* ... (your existing code) */}
              <Form.Item
                label="Select User"
                name="selectedUser"
                rules={[
                  {
                    required: true,
                    message: "Please select a user",
                  },
                ]}
              >
               <Select
                  options={userOptions}
                  value={userData}
                  onChange={(value) => setUserData(value)}
                />
              </Form.Item>
              <Row>
                <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={() => associateUserDepartment()}
                  >
                    Submit
                  </Button>
                </Col>

                <Col
                  md={12}
                  span={24}
                  className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12"
                >
                  <Button block onClick={userModalCancel}>
                    Cancel
                  </Button>
                </Col>
              </Row>
       
            </Form>
          </Col>
        </Row>
      </Modal>
      {user && user?.user.roleId == "1" && (
  <div style={{ textAlign: "right", marginBottom: "16px"}}>
    <Button type="primary" onClick={departmentModalShow}>    
      Add Department
    </Button>
  </div>
)}


      <div style={{ overflowX: "auto" }}>
      <Table columns={columns} dataSource={data}  bordered size="middle"
      title={() => 'All Department Information'}
      footer={() => 'You may filter departments'}/></div>      <ProtectedAppPage />
    </>
  );
}
