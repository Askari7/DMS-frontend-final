import React, { useEffect, useState } from "react";
import {
  Row,Col,Form,Space,Table,Input,Button,Modal,message,notification,Select,Tooltip} from "antd";

import axios from "axios";
import { RiCloseFill, } from "react-icons/ri";
import ProtectedAppPage from "../Protected";
import "react-quill/dist/quill.snow.css";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { UserAdd } from "iconsax-react";
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
       <Tooltip title="Delete">
  <Button
    size="middle"
    icon={<DeleteOutlined />}
    disabled={user?.user?.roleId !== 1}
    onClick={() => deleteModalShow(record)}
  />
</Tooltip>
        <Tooltip title="Add User">
  <Button
    size="middle"
    icon={<UserAdd />}
    disabled={user?.user?.roleId !== 1}
    onClick={() => addUser(record)}
  />
</Tooltip>
      </Space>
      
    ),
  },
];

const handleDelete = async (record) => {
  // Your delete logic here
  const id = record.id
  console.log(id);
  const response = await axios.delete(
    `http://127.0.0.1:8083/api/users?delete=2&recordId=${record.id}`,
    {
      headers: {
        Authorization: user?.accessToken,
        // Add other headers if needed
      },
    }
  );
  message.success(response.data.message)
  
  deleteModalCancel()
  fetchData()
};

const fetchUserData = async () => {
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
    const options = [];
    for (const item of response?.data) {
      options.push({ value: item?.id, label: `${item?.firstName} ${item?.lastName}` });
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
      `http://127.0.0.1:8083/api/departments?companyId=${user?.user?.companyId}`,
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

const userUpdateModalShow = (record) => {
  setUserToUpdate(record)
  console.log(record,'record');
  
  form.setFieldsValue({
    id:userToUpdate.id,
    title: userToUpdate.title,
    suffix: userToUpdate.suffix,
  });
  
  setUserUpdate(true);
};

const userUpdateModalCancel = () => {
  form.setFieldsValue({
    title: "",
    suffix: "",
  });
  setUserUpdate(false);
};

const handleUpdate=async()=>{
try {
  const response  = await axios.put
  (`http://127.0.0.1:8083/api/departments/department_update?companyId=${user?.user.companyId}&departmentId=${form.getFieldValue("id")}`,{
    title:form.getFieldValue("title"),
    suffix:form.getFieldValue("suffix")
  },
  {
    headers: {
      Authorization: user?.accessToken,
      // Add other headers if needed
    },
  }
)
  message.success(response.data.message)
  userUpdateModalCancel()
  fetchData()
} catch (error) {
        console.error("Error updating departments:", error?.message);
}

}

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
  const [selectedUserForAssociation, setSelectedUserForAssociation] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [record, setRecord] = useState(null);
  const [form] = Form.useForm();
  const [associateForm] = Form.useForm();
  const [userUpdate, setUserUpdate] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);

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
  const deleteModalShow = (record) => {
    setRecord(record)
    setDeleteModalVisible(true);
  };
  const deleteModalCancel = () => {
    setDeleteModalVisible(false);
  };

  const userModalCancel = () => {
    setTitle("");
    setUserModalVisible(false);
  };

  const associateUserDepartment = async () => {
    try {
      console.log(userOptions.find(user => user.value === selectedUserForAssociation),);
      const response = await axios.post(
        "http://127.0.0.1:8083/api/departments/associate",
        {
          title,
          companyId: user?.user?.companyId,
          userId: selectedUserForAssociation,
          departmentCreator:0 ,
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
        "http://127.0.0.1:8083/api/departments/",
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
        `http://127.0.0.1:8083/api/departments?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response.data);
      const data = response.data
      const filter = data.filter(item=>item.removed==0)
      setData(filter); // Assuming the response.data is an array of departments
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      addDepartments()
      form.resetFields();
    });
  };

  const handleAddSubmit = () => {
    associateForm.validateFields().then((values) => {
      associateUserDepartment()
      associateForm.resetFields();
    });
  };


  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    fetchData();
  }, []);
  return (
    <>
    <Modal
  title="Delete Department"
  width={416}
  centered
  visible={deleteModalVisible}  // This controls visibility
  onCancel={deleteModalCancel}
  footer={null}
  closeIcon={
    <RiCloseFill className="remix-icon text-color-black-100" size={24} />
  }
>
  <div>
    <p>Are you sure you want to delete this?</p>
  </div>
  <Row>
    <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
      <Button
        block
        type="primary"
        danger
        onClick={() => handleDelete(record)}
      >
        Delete
      </Button>
    </Col>
    <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
      <Button block onClick={deleteModalCancel}>
        Cancel
      </Button>
    </Col>
  </Row>
</Modal>

<Modal
  title="Add Department"
  width={400}
  centered
  visible={departmentModalVisible}  // This controls visibility
  onCancel={departmentModalCancel}
  footer={null}
  closeIcon={
    <RiCloseFill className="remix-icon text-color-black-100" size={24} />
  }
>
        <Row justify="space-between" align="center">
          <Col span={20}>
            <Form form={form} onFinish={handleSubmit} layout="vertical" name="basic">
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
                    // onClick={() => addDepartments()}
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
      title="Update Department"
      width={416}
      centered
      visible={userUpdate}
      onCancel={userUpdateModalCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleUpdate} // Function to handle form submission
      >
        <Form.Item
          label="Department Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the department title' }]}
        >
          <Input placeholder="Enter user department title" />
        </Form.Item>
        <Form.Item
          label="Department Suffix"
          name="suffix"
          rules={[{ required: true, message: 'Please enter the department suffix' }]}
        >
          <Input placeholder="Enter user department suffix" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Update
          </Button>
        </Form.Item>
      </Form>
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
            <Form  form ={associateForm} onFinish = {handleAddSubmit} layout="vertical" name="basic" encType="multipart/form-data">
              <Form.Item
                label="Select User"
                name="selectedUserForAssociation"
                rules={[
                  {
                    required: true,
                    message: "Please select a user",
                  },
                ]}
              >
               <Select
                  options={userOptions}
                  value={selectedUserForAssociation}
                  onChange={(value) => setSelectedUserForAssociation(value)}
                />
              </Form.Item>
              <Row>
                <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    // onClick={() => associateUserDepartment()}
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
