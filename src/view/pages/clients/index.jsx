
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
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
  Select,Divider,
  DatePicker
} from "antd";
import { RiMore2Line, RiMenuFill, RiCloseFill } from "react-icons/ri";

import Breadcrumbs from "../../../layout/components/content/breadcrumbs";
import CustomizedTables from "../../common/BaseTable";
import { options } from "less";
// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";


export default function Projects() {
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));


  const columns = [
    {
      title: "Client Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "clientName",
      key: "clientName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Client Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Change Actions</a>
          <a onClick={() => statusModalShow(record)}>Add Status</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
 
  const options = [
    { label: "On-going", value: "on-going" },
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
  ];
  const [statusModalVisible, setStatusModalVisible] = useState(false);
const [selectedStatus, setSelectedStatus] = useState("");
const [ clientModalVisible,setClientModalVisible] = useState(false)
const[clientName,setClientName] = useState("")
const[email,setEmail] = useState("")
const[projects,setProjects] = useState([])
const [data, setData] = useState([]);
const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://54.81.250.98:8083/api/clients?companyId=${user?.user?.companyId}`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
      console.log(response.data);
      setData(response.data)
  } catch (error) {
   
    console.error("Error fetching clients:", error?.message);
  }
};

const addClient = async () => {
  try {

    const response = await axios.post(
      `https://54.81.250.98:8083/api/clients`,
      {
        clientName,
        companyId:user?.user?.companyId,
        email,
        // departmentId,
        // inHouseStatus,
        // clientStatus,
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
    clientModalCancel();
  } catch (error) {
    // Handle errors
    console.error("Error adding client:", error);
    // message.error("Error adding user");
  }
}
const fetchProjects = async () => {
  try {
    const response = await axios.get(
      `https://54.81.250.98:8083/api/projects?companyId=${user?.user?.companyId}`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
    console.log(response);

    // Use Set to store unique titles
    const uniqueTitlesSet = new Set();

    const options = response?.data.reduce((acc, item) => {
      // Check if the title is not in the Set
      if (!uniqueTitlesSet.has(item.title)) {
        // Add title to the Set
        uniqueTitlesSet.add(item.title);

        // Push the option to the result array
        acc.push({ value: item.id, label: item.title, code: item.code });
      }

      return acc;
    }, []);
    setProjects(options); // Assuming the response.data is an array of projects
  } catch (error) {
    console.error("Error fetching departments:", error?.message);
  }
};

useEffect(()=>{
  setUser(JSON.parse(localStorage?.getItem("user")));
  fetchProjects()
  fetchData()

},[])

const clientModalShow = () => {
  setClientModalVisible(true);
};

const clientModalCancel = () => {
  setClientModalVisible(false);
};
const statusModalShow = () => {
  setStatusModalVisible(true);
};

const statusModalCancel = () => {
  setSelectedStatus("");
  setStatusModalVisible(false);
};
const handleStatusChange = (selectedStatus) => {
  // Perform your logic to update the status here
  // You can use the selectedStatus along with the record data
  // to update the status in the data array or make an API call
  // After updating, close the modal using statusModalCancel()
  statusModalCancel();
};
  return <>
<Modal
  title="Change Status"
  width={400}
  centered
  visible={statusModalVisible}
  onCancel={statusModalCancel}
  footer={null}
  closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
>
  <Row justify="space-between" align="center">
    <Col span={20}>
      <Form layout="vertical" name="basic">
        <Form.Item
          label="Select Status"
          name="selectedStatus"
          rules={[
            {
              required: true,
              message: "Please select a status",
            },
          ]}
        >
          <Select
            options={[
              { label: "On-going", value: "on-going" },
              { label: "Completed", value: "completed" },
              { label: "Pending", value: "pending" },
              // ... (add other status options)
            ]}
            value={selectedStatus}
            onChange={(value) => setSelectedStatus(value)}
          />
        </Form.Item>


        {/* ... (your existing code) */}
        <Row>
          <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
            <Button
              block
              type="primary"
              htmlType="submit"
              onClick={() => handleStatusChange(selectedStatus)}
            >
              Submit
            </Button>
          </Col>
          <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
            <Button block onClick={statusModalCancel}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  </Row>
</Modal>


<Modal
        title="Add Client"
        width={416}
        centered
        visible={clientModalVisible}
        onCancel={clientModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
          <Form.Item
            label="Client Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your firstName!",
              },
            ]}
          >
            <Input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
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
                      {/* <Form.Item
                label="Project Name"
                name="projectName"
                rules={[
                  {
                    required: true,
                    message: "Please select Project Name",
                  },
                ]}
              >
              <Select
                  options={projects}
                  value={projectId}
                  onChange={(value) => setProjectId(value)}
                />              
                </Form.Item> */}

          {/* <Form.Item label="InHouse Status"  name="inhHouseStatus">
            <Select
              defaultValue="Pending"
              options={options}
              value={inHouseStatus}
              onChange={(e) => setInHouseStatus(e)}
            /></Form.Item>
                      <Form.Item label="CLient Status"  name="clientStatus">
            <Select
              defaultValue="Pending"
              options={options}
              value={clientStatus}
              onChange={(e) => setClientStatus(e)}
            /></Form.Item> */}

          {/* <Form.Item
          label="Select Department"
          rules={[
           
            {
              required: true,
              message: "Please select one department!",
            },
          ]}>
          <Checkbox.Group options={departmentOptions} value={selectedDepartments} onChange={setSelectedDepartments} />
        </Form.Item> */}

  {/* <Form.Item label="Start Date" name="startDate" rules={[{ required: true, message: 'Please select start date' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="End Date" name="endDate" rules={[{ required: true, message: 'Please select end date' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item> */}

          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => addClient()}
              >
                Add Client
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={clientModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button
          type="primary"
          onClick={clientModalShow}
          disabled={user?.user?.roleId != 1}
        >
          Add Client
        </Button>
      </div>
{user?.user?.roleId === 1 ? (
  
        <Table columns={columns} dataSource={data} />
      ) : (
        <div>
          <Divider />
          <p>You do not have permissions to view.</p>
        </div>
      )}
  
  </>;
}