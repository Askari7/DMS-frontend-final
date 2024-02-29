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
  Checkbox,
  
  Upload,
} from "antd";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from "axios";

import ProtectedAppPage from "../Protected";
const handleDelete = (record) => {
  record.delete = true;
  fetchData().catch(error => {
    console.error("Error deleting project:", error);
  });
};


const columns = [
  {
    title: "Project Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Project Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Project Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Client Email",
    dataIndex: "clientEmail",
    key: "clientEmail",
  },
  {
    title: "Author Name",
    dataIndex: "authorName",
    key: "authorName",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "No of Workers",
    dataIndex: "noOfUsers",
    key: "noOfUsers",
  },
  {
    title: "Start Date",
    dataIndex: "startedDate",
    key: "startedDate",
  },

  {
    title: "End Date",
    dataIndex: "endedDate",
    key: "endedDate",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => handleDelete(record)}>Delete</a>
      </Space>
    )
  },
];

export default function Projects() {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [departmentName,setDepartmentName] = useState('')
  const [projectModalVisible, setProjectModalVisible] = useState(false);
  const [permissionModalVisible, setPermissionModalVisible] = useState(false);
  const [projName, setProjName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [startedDate, setStartDate] = useState("");
  const [endedDate, setEndDate] = useState("");
  const [departmentId, setDepartmentId] = useState([]);
  const [status, setStatus] = useState("");
  const [code, setCode] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [projectOptions, setProjects] = useState([]);
  const [clients,setClients] = useState([])
  const [projectId, setProjectId] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const fetchClients = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/clients?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
  
      // Use Set to store unique titles
      const uniqueTitlesSet = new Set();
  
      const options = response?.data.reduce((acc, item) => {
        // Check if the title is not in the Set
        if (!uniqueTitlesSet.has(item.email)) {
          // Add title to the Set
          uniqueTitlesSet.add(item.email);
  
          // Push the option to the result array
          acc.push({ value: item.email, label: item.email, name: item.email });
        }
  
        return acc;
      }, []);
  
      setClients(options); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };

  const projectModalShow = () => {
    setCode( generateUnique4DigitNumber(usedNumbers));

    setProjectModalVisible(true);
  };

  const projectModalCancel = () => {
    setCode("");
    setStatus("");
    setProjName("");
    setClientEmail("")
    setDepartmentName("")
    setDepartmentId([]);
    setProjectModalVisible(false);
  };

  const permissionModalShow = () => {
    setPermissionModalVisible(true);
  };
  const permissionModalCancel = () => {
    setPermissionModalVisible(false);
  };
  const addProject = async () => {
    console.log("inside");
    console.log("dates",startedDate,endedDate);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8083/api/projects/",
        {
          title: projName,
          // departmentId,
          status:"Initialized",
          noOfUsers:0,
          clientEmail,
          code,
          companyId: user?.user?.companyId,
          authorId: user?.user?.id,
          authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
          startedDate,
          endedDate
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
      
      setCode("");
      setStatus("");
      setProjName("");
      setClientEmail("");
      setDepartmentId([]);
      setProjectModalVisible(false);      
      fetchData();
    } catch (error) {
      // Handle errors
      console.error("Error adding projects:", error);
    }
  };
  const fetchData = async () => {
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
      
      console.log('Project response data',response.data);
      const formattedData = response.data.map(project => {
        // Assuming project.startedDate and project.endedDate are DateTime strings
        const formattedStartDate = new Date(project.startedDate).toLocaleDateString('en-GB');
        const formattedEndDate = new Date(project.endedDate).toLocaleDateString('en-GB');
        // Create a new object with formatted dates
        return {
          ...project,
          startedDate: formattedStartDate,
          endedDate: formattedEndDate,
        };
      });
      
      setData(formattedData);
      const options = [];
      for (const item of response?.data) {
        options.push({ value: item?.id, label: item?.title });
      }
      console.log(options);
      setProjects(options); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching projects:", error?.message);
    }
  };
  const fetchDepartments = async () => {
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
        options.push({ value: item?.id, label: item?.title });
      }
      setDepartmentOptions(options)
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchClients();
    fetchDepartments();
    fetchData();
  }, []);
  var usedNumbers = [];

  function generateUnique4DigitNumber(usedNumbers) {
    while (true) {
        const number = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
        if (!usedNumbers.includes(number)) {
            usedNumbers.push(number);
            return number;
        }
    }
}


  return (
    <>
      <Modal
        title="Add Project"
        width={416}
        centered
        onFinish={() => {
          addProject();
          setCode("");
          setStatus("");
          setProjName("");
          setClientEmail("");
          setDepartmentId([]);
          setProjectModalVisible(false);
        }}
        visible={projectModalVisible}
        onCancel={projectModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
        <Form.Item label="Project Code"> <label> {code}</label></Form.Item> 
          <Form.Item label="Project Name" name="projName">
            <Input
              value={projName}
              onChange={(e) => setProjName(e.target.value)}
            />
          </Form.Item>
          {/* <Form.Item label="Project Code" name="code">
            <Input value={code} onChange={(e) => setCode(e.target.value)} />
          </Form.Item> */}
            <Form.Item
                label="Client Email"
                name="clientEmail"
                rules={[
                  {
                    required: true,
                    message: "Please select Client Email",
                  },
                ]}
              >
              <Select

                  options={clients}
                  value={clientEmail}
                  onChange={(value) => setClientEmail(value)}
                />  
                </Form.Item>

      <Form.Item label="Start Date" name="startedDate" rules={[{ required: true, message: 'Please select start date' }]}>
        <DatePicker style={{ width: '100%' }} onChange={handleStartDateChange} />
      </Form.Item>

      <Form.Item label="End Date" name="endedDate" rules={[{ required: true, message: 'Please select end date' }]}>
        <DatePicker style={{ width: '100%' }} onChange={handleEndDateChange} />
      </Form.Item>
         
          {/* <Form.Item label="Start Date" name="startDate" rules={[{ required: true, message: 'Please select start date' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="End Date" name="endDate" rules={[{ required: true, message: 'Please select end date' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item> */}

          {/* <Form.Item label="Status" name="status">
            <Select
              default="ongoing"
              options={[
                { value: "ongoing", label: "Ongoing" },
                { value: "complete", label: "Complete" },
                { value: "notstarted", label: "Not Started" },
              ]}
              value={status}
              onChange={(e) => setStatus(e)}
            />
          </Form.Item> */}
          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => addProject()}
              >
                Add
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={projectModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Modal
        title="Document Permissions"
        width={416}
        centered
        visible={permissionModalVisible}
        onCancel={permissionModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
          <Form.Item label="Project Name" name="projectId">
            <Select
              options={projectOptions}
              value={projectId}
              onChange={(e) => setProjectId(e)}
            />
          </Form.Item>

          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => addProject()}
              >
                Add
              </Button>
            </Col>
            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={projectModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button
          type="primary"
          onClick={projectModalShow}
          disabled={user?.user?.roleId != 1}
        >
          Add Project
        </Button>
      </div>
      <Table columns={columns} dataSource={transformData(data)} />
      <ProtectedAppPage />
    </>
  );
}
const transformData = (originalData) => {
  const groupedData = {};

  // Group data by title
  originalData.forEach((item) => {
    const title = item.title;

    if (!groupedData[title]) {
      groupedData[title] = { ...item, departmentNames: [item.departmentName + ','] };
    } else {
      groupedData[title].departmentNames.push(item.departmentName + ',');
    }
  });

  // Convert the grouped data into an array and join department names with spaces
  const transformedData = Object.values(groupedData).map((item) => ({
    ...item,
    departmentName: item.departmentNames.join(''), // Join without spaces
  }));

  return transformedData;
};
