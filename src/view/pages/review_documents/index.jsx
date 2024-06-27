import React, { useState, useEffect, useRef } from "react";
import { DownOutlined } from '@ant-design/icons';

import {notification,
  Button,Form,Row,Col,Space,Table,Select,Input,Dropdown,Menu,DatePicker,TimePicker,Modal,message,Checkbox,Upload,
} from "antd";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import ProtectedAppPage from "../Protected";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import NotificationCardOne from "../../main/widgets/cards/advance/notificationCardOne";
export default function Review() {
    const [user,setUser] = useState(JSON.parse(localStorage?.getItem("user")))
    const [data,setData] = useState()
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [timelineModalVisible, setTimelineModalVisible] = useState(false);

    const [thisOne, setThisOne] = useState();
    const [fetched, setFetched] = useState([]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>

        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const timelineModalShow = (record) => {
    setThisOne(record.docName)
    setTimelineModalVisible(true);
  };
  const timelineModalCancel = () => {
    setTimelineModalVisible(false);
  };
const columns = [
  {
    title: "Document Name",
    dataIndex: "docName",
    key: "docName",
    ...getColumnSearchProps('docName'),
  },
  {
    title: "Project ID ",
    dataIndex: "projectId",
    key: "projectId",
    ...getColumnSearchProps('projectId'),
  },
  {
    title: "Version ",
    dataIndex: "version",
    key: "version",
    ...getColumnSearchProps('version'),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
          <a onClick={() => handleOpen(record)}>Open</a>
          <a onClick={() => timelineModalShow(record)}>Show Doc History</a> 

      </Space>
    ),
  }
];
 
//   const fetch = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8083/api/projects?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
  
//       const departmentOptions = [];
//       const clientOptions = [];
//       const clientOption = {};
//       const client = {};

//       const departmentOption = {};

//       // Process department options
//       for (const item of response?.data.data.departments) {
//         departmentOptions.push({ value: item?.id, label: item?.title });
//         departmentOption[item?.id] = item?.title;
//       }
  
//       // Process client options and create a clientOption mapping
//       for (const item of response?.data.data.clients) {
//         clientOptions.push({ value: item?.id, label: item?.companyName });
//         clientOption[item?.id] = item?.companyName;
//         client[item?.id] = item?.id;

//       }
  
//       console.log(response.data.data.projects, "data");
//       console.log(response.data.data.clients, "clients");
//       console.log(response.data.data.departments, "departments");
  
//       setClients(clientOptions);
//       setDepartmentOptions(departmentOptions);
  
//       const projects = response.data.data.projects;
  
//       // Assign clientName to each project based on clientId
//       projects.forEach((pro) => {
//         pro.clientName = clientOption[pro.clientId] || 'Unknown';
//       });
      
//       projects.forEach((pro) => {
//         console.log(pro.departmentIds);
//         const departments = pro.departmentIds.split(",");
//         console.log(departments,"departments");
//         const departmentName = departments.map(deptId => departmentOption[deptId] || 'Unknown');
//         console.log(departmentName,"departmentNames");
//         pro.departmentNames = departmentName.join(", ");
//         console.log(pro.departmentNames,"departmentNames");
//         pro.startedDate = new Date(pro.startedDate).toLocaleDateString('en-GB');
//         pro.endedDate = new Date(pro.endedDate).toLocaleDateString('en-GB');
//       });
//       console.log(projects,"projects");
//       console.log(user?.user.companyId);
//       const filteredProjects = projects.filter(project => project.clientId==user?.user.companyId);
//       user?.user.roleId==6?setData(filteredProjects):setData(projects);
//       console.log('Project response data from fetch', response.data);
//     } catch (error) {
//       console.error("Error fetching projects:", error?.message);
//     }
//   };
const BACKEND_URL = "http://127.0.0.1:8083"; // Update with your backend URL

const fetch = async()=>{
  try {
    const establishment = await axios.post(`http://127.0.0.1:8083/api/documents/establishment`,{companyId:user?.user.companyId},
    {
      headers: {
        Authorization: user?.accessToken,
      },
    })
    setFetched(establishment.data);

    
    // Function to organize objects based on docName and store version and createdAt in a dictionary
const organizeByDocName = (data) => {
const docNameDictionary = {};

// Iterate over each object in the data array
data.forEach((item) => {
    const { docName, version, createdAt, reviewerComment, approverComment } = item;

    // Check if docName already exists in the dictionary
    if (!docNameDictionary[docName]) {
        // If docName does not exist, initialize it as an empty array
        docNameDictionary[docName] = [];
    }

    // Push version and createdAt values into the array for the corresponding docName
    docNameDictionary[docName].push({ version, createdAt, reviewerComment,approverComment });
});

return docNameDictionary;
};

// Call the function with the establishment data
const organizedData = organizeByDocName(establishment.data);

// Output the organized data (docName dictionary)
console.log(organizedData,"organizedData");
setFetched(organizedData)
  } catch (error) {
    console.error(error)
  }
}

const fetchAll = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8083/api/documents/establishment?companyId=${user?.user?.companyId}`,
      {
        headers: {
          Authorization: user?.accessToken,
        },
      }
    );

    console.log('response clients',response.data.data.clients);
    console.log('response documents',response.data.data.documents);
    console.log('response users',response.data.data.users);
    console.log('response projects',response.data.data.projects);
    const clients = response.data.data.clients
    const documents = response.data.data.documents
    const users = response.data.data.users
    const projects = response.data.data.projects

    const allEstablishments = projects.reduce((acc, item) => {
      return acc.concat(item.establishments);
    }, []);


    const allOfficials = clients.reduce((acc, item) => {
      return acc.concat(item.clientOfficials);
    }, []);
    const clientOptions = allOfficials.map(client => ({
      value: client.Email,
      label: client.Email,
    }));
    
    // setClients(clientOptions)
    console.log('response clients officials',allOfficials);
    console.log('response establishments',allEstablishments);

    // setData(allEstablishments)


    const approverStatusArrays = []
    const reviewerStatusArrays =[]
    const reviewerIdArrays = []
    const approverIdArrays = []

    setData(allEstablishments);
  } catch (error) {
    console.error("Error fetching departments:", error?.message);
  }
};
  
const handleOpen = async (record) => {
  const responseData=await fetchAppRev(record.title);
  console.log('helllooo',responseData.data.documents[0].title);
   // Replace 'John' with the actual doc's name
   const docName = responseData.data.documents[0].title;
   const url= `${BACKEND_URL}/uploads/${docName}-${record.version}.pdf` 
   console.log(user.user.roleId,user.user.firstName,user);
   let allowed='false';
if(responseData){
allowed='true';
}
   // Redirect to the external URL
    window.location.href = `http://127.0.0.1:3001/react-pdf-highlighter/?docName=${docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
 };

 const fetchAppRev = async (title) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8083/api/documents/establishment?companyId=${user?.user?.companyId}&userId=${user.user.id}&docName=${title}`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
      


    console.log(response.data,"received");
    return response.data;
  
  } catch (error) {
    console.error("Error fetching documents:", error?.message);
  }
};
  useEffect(() => {
    // setUser(JSON.parse(localStorage?.getItem("user")));   
    fetch() 
    fetchAll();
  }, []);



  return (
    <>
    <Modal
  title="Timeline"
  width={400}
  centered
  visible={timelineModalVisible} // Ensure this is true to show the modal
  onCancel={timelineModalCancel}
  footer={null}
  closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
>
<Row justify="space-between" align="center">
  <Col span={20}>
            <NotificationCardOne data={fetched} thisOne = {thisOne} user={user}/>
    </Col>
  </Row>
</Modal>
      {/* <Modal
        title="Add Project"
        width={416}
        centered
        visible={projectModalVisible}
        onCancel={projectModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
        <Form.Item label="Project Code" name="projCode" rules={[
                  {
                    required: true,
                    message: "Please Add Project Code",
                  },
                ]}>
          
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Item>         
           <Form.Item label="Project Name" name="projName" rules={[
                  {
                    required: true,
                    message: "Please Add Project Name",
                  },
                ]}>
            <Input
              value={projName}
              onChange={(e) => setProjName(e.target.value)}
            />
          </Form.Item>
 
            <Form.Item
                label="Client"
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


                <Form.Item
                label="Departments"
                name="departmentIds"
                rules={[{ required: true, message: 'Please select at least one department' }]}
              >
                <Checkbox.Group options={departmentOptions} value={selectedDepartments} onChange={setSelectedDepartments} />
              </Form.Item>
                

      <Form.Item label="Start Date" name="startedDate" rules={[{ required: true, message: 'Please select start date' }]}>
        <DatePicker style={{ width: '100%' }} onChange={handleStartDateChange} />
      </Form.Item>

      <Form.Item label="End Date" name="endedDate" rules={[{ required: true, message: 'Please select end date' }]}>
        <DatePicker style={{ width: '100%' }} onChange={handleEndDateChange} />
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
      </Modal> */}

      {/* <Modal
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
      </Modal> */}

<div style={{ textAlign: "right", marginBottom: "16px" }}>
  {user?.user?.roleId == 1 && (
    <Button type="primary" onClick={projectModalShow}>
      Add Project
    </Button>
  )}
</div>

      <Table
      bordered
      size="middle"
      title={() => 'All Project Details'}
      footer={() => 'You may filter Projects'} 
        columns={columns} 
        dataSource={data} 
        
      />      
      <ProtectedAppPage />
    </>
  );
}
