
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
import FormItem from "antd/lib/form/FormItem";
// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";


export default function Projects() {
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [clients, setClients] = useState([]);
  const columns = [

    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Company Address",
      dataIndex: "companyAddress",
      key: "companyAddress",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, r) => (
        <Space size="middle">
          {/* <a>Change Actions</a> */}
          <a onClick={() => statusModalShow(r)}>Show Employees</a>
          {/* <a>Delete</a> */}
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
  const [showModalVisible, setShowModalVisible] = useState(false);
// const[record,setRecord ] = useState("")

const [employee,setEmployee] = useState([])
const [selectedStatus, setSelectedStatus] = useState("");
const [ clientModalVisible,setClientModalVisible] = useState(false)
const[companyName,setCompanyName] = useState("")
const[clientName,setClientName] = useState("")

const[email,setEmail] = useState("")
const[clientCompany,setClientCompany] = useState("")

const[companyAddress,setCompanyAddress] = useState("")
const[companyContact,setCompanyContact] = useState("")

const[projects,setProjects] = useState([])
const [data, setData] = useState([]);


const fetchData = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8083/api/clients?companyId=${user?.user?.companyId}`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
      console.log(response.data,"data");
      const companyOptions = response.data.map(company => ({
        value: company.id,
        label: company.companyName,
      }));
      console.log("Options",companyOptions);
      setClients(companyOptions)
      setData(response.data)
  } catch (error) {
   
    console.error("Error fetching clients:", error?.message);
  }
};
const fetchEmployees = async(record)=>{
  try {
    console.log(record,"id");
    const response = await axios.get(
      `http://127.0.0.1:8083/api/clients/official?companyId=${record.id}`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
      console.log(response.data,"data");
      setEmployee(response.data)
  } catch (error) {
    console.error("Error fetching employees:", error?.message);
  }
}
const addClient = async () => {
  try {

    const response = await axios.post(
      `http://127.0.0.1:8083/api/clients`,
      {
        companyName,
        companyId:user?.user?.companyId,
        companyAddress,
        companyContact
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

const addClientOfficials = async () => {
  try {

    const response = await axios.post(
      `http://127.0.0.1:8083/api/clients`,
      {
        clientName,
        companyId:clientCompany,
        Email:email,
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
    showModalCancel();
  } catch (error) {
    // Handle errors
    console.error("Error adding client official:", error);
    // message.error("Error adding user");
  }
}
const fetchProjects = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8083/api/projects?companyId=${user?.user?.companyId}`,
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

const showModalShow = () => {
  setShowModalVisible(true);
};

const showModalCancel = () => {
  setShowModalVisible(false);
};

const statusModalShow = (record) => {
  console.log("record",record);
  // setRecord(record)
  console.log(record,"recordingggg");
  fetchEmployees(record)
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
  title="Employees"
  width={400}
  centered
  visible={statusModalVisible}
  onCancel={statusModalCancel}
  footer={null}
  closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
>
  <Row justify="space-between" align="center">
    <Col span={30}>
      <Form layout="vertical" name="basic">
        <FormItem>
          <h3>Our Employees</h3>
          <ul>
            {employee.map((rec, index) => (
              <li key={index}>
                <strong>{rec.clientName}</strong> - <span style={{ color: 'blue' }}>{rec.Email}</span>
              </li>
            ))}
          </ul>
        </FormItem>        
        <Row>
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
        title="Add Company"
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
            label="Company Name:"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your firstName!",
              },
            ]}
          >
            <Input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Address :"
            name="companyAddress"
          >
            <Input
              id="companyAddress"
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Contact :"
            name="companyContact"
          >
            <Input
              id="companyContact"
              value={companyContact}
              onChange={(e) => setCompanyContact(e.target.value)}
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
                Add Company
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


      <Modal
        title="Add Client"
        width={416}
        centered
        visible={showModalVisible}
        onCancel={showModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
          <Form.Item
            label="Client Name:"
            name="clientName"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Email :"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
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
                label="Company"
                name="company"
                rules={[
                  {
                    required: true,
                    message: "Please select Company",
                  },
                ]}
              >
              <Select
                  options={clients}
                  value={clientCompany}
                  onChange={(value) => setClientCompany(value)}
                />              
                </Form.Item>
                
          {/* <Form.Item
            label="Contact :"
            name="companyContact"
            rules={[
              {
                required: true,
                message: "Please input your -Contact!",
              },
            ]}
          >
            <Input
              id="companyContact"
              value={companyContact}
              onChange={(e) => setCompanyContact(e.target.value)}
            />
          </Form.Item> */}

          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => addClientOfficials()}
              >
                Add Client
              </Button>
            </Col>
            
            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={showModalCancel}>
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
          style={{ marginRight: '10px' }}

          disabled={user?.user?.roleId != 1}
        >
          Add Company
        </Button>

        <Button
          type="primary"
          onClick={showModalShow}
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