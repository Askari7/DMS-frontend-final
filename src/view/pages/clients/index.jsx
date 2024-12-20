
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
  DatePicker,notification,
  Tooltip

} from "antd";
import { RiMore2Line, RiMenuFill, RiCloseFill } from "react-icons/ri";

import Breadcrumbs from "../../../layout/components/content/breadcrumbs";
import CustomizedTables from "../../common/BaseTable";
import { options } from "less";
import FormItem from "antd/lib/form/FormItem";
import { EmojiPeopleOutlined, People, Person } from "@mui/icons-material";
// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";


export default function Projects() {
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [clients, setClients] = useState([]);
  const [form] = Form.useForm();
  const [officialform] = Form.useForm();


  const handleSubmit = () => {
    form.validateFields().then((values) => {
      addClient()
      // onSubmit(values);
      form.resetFields();
    });
  };

  const handleOfficialSubmit = () => {
    officialform.validateFields().then((values) => {
      addClientOfficials()
      // onSubmit(values);
      officialform.resetFields();
    });
  };

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
    },
    {
      title: "Company Contact",
      dataIndex: "companyContact",
      key: "companyContact",
    },
    {
      title: "Action",
      key: "action",
      render: (_, r) => (
        <Space size="middle">
        {/* <Button
          size="middle"
          icon={<People />}
          onClick={() => statusModalShow(r)}
        /> */}
            <Tooltip title="Add Client">
  <Button
    size="middle"
    icon={<Person />}
    // disabled={user?.user?.roleId !== 1}
    onClick={() => showModalShow(r)}
  />
</Tooltip>
        <Tooltip title="View Officials">
  <Button
    size="middle"
    icon={<People />}
    disabled={user?.user?.roleId !== 1}
    onClick={() => statusModalShow(r)}
  />
</Tooltip>
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
  const [record, setRecord] = useState();

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
      `https://novacon.live/api/clients?companyId=${user?.user?.companyId}`,
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
      `https://novacon.live/api/clients/official?companyId=${record.id}`,
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
  // Perform form field validation
  if (!companyName) {
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
    // Make API request to add client
    const response = await axios.post(
      `https://novacon.live/api/clients`,
      {
        companyName,
        companyId: user?.user?.companyId,
        companyAddress,
        companyContact,
      },
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );

    console.log(response);

    // Fetch updated data and close modal
    fetchData();
    clientModalCancel();
    notification.success({
      message: 'Successfully Created',
      description: 'A client with this name is created.',
      style: {
        backgroundColor: '#52c41a', // Green color background
        color: '#fff', // White text color
      },
    });
  } catch (error) {
    if (error.response?.status === 409) {
      // Conflict error (HTTP 409)
      notification.error({
        message: 'Conflict Error',
        description: 'A client with this name already exists. Please choose a different name.',
        style: {
          backgroundColor: '#f5222d', // Red color background
          color: '#fff', // White text color
        },
      });
    } else {
      // Handle other errors
      notification.error({
        message: 'Error',
        description: 'An error occurred while adding the client. Please try again.',
        style: {
          backgroundColor: '#f5222d', // Red color background
          color: '#fff', // White text color
        },
      });
    }
  }
};


const addClientOfficials = async () => {
  if (!clientName || !email ) {
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

    const response = await axios.post(
      `https://novacon.live/api/clients`,
      {
        clientName,
        companyId:record.id,
        Email:email,
        userCompanyId:user.user.companyId
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
    if(response?.data?.message==='This email already exist!'){
      console.log('ERROR');
      
      notification.error({
        message: `${response?.data?.message}`,
        style: {
          backgroundColor: '#ff0000', // Red color background
          color: '#fff', // White text color
        },
      }
    )
    }
    else{
      console.log('SUCCESS');
    notification.success({
      message: `${response?.data?.message}`,
      style: {
        backgroundColor: '#52c41a', // Red color background
        color: '#fff', // White text color
      },
    }
  )}
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
      `https://novacon.live/api/projects?companyId=${user?.user?.companyId}`,
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

const showModalShow = (r) => {
  setRecord(r)
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
        <Form form={form}  onFinish={handleSubmit}layout="vertical" name="basic">
          <Form.Item
            label="Company Name:"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your Company Name!",
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
          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                // onClick={() => addClient()}
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
        <Form form={officialform} onFinish={handleOfficialSubmit} layout="vertical" name="basic">
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

          {/* <Form.Item
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
                 */}
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
                // onClick={() => addClientOfficials()}
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

        {/* <Button
          type="primary"
          onClick={showModalShow}
          disabled={user?.user?.roleId != 1}
        >
          Add Client
        </Button> */}
      </div>
{user?.user?.roleId === 1 ? (
  
        <Table columns={columns} dataSource={data} bordered size="middle"
        title={() => 'All Clients Information'}
        />
      ) : (
        <div>
          <Divider />
          <p>You do not have permissions to view.</p>
        </div>
      )}
  
  </>;
}