import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from 'react-router-dom'; 
import { DownOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {
  Row,
  Col,
  Divider,
  Dropdown,
  Form,
  Space,
  Table,
  Menu,
  Select,
  Tag,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Modal,
  message,
  Upload,
  Checkbox
} from "antd";
import { Radio } from "antd";
import axios from "axios";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ProtectedAppPage from "../Protected";
import { useLocation } from 'react-router-dom';
import { string } from "prop-types";
import ProgressComp from "./Progress";



const uploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function MDR() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const [documentModalVisible, setDocumentModalVisible] = useState(false);
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [showModalVisible, setShowModalVisible] = useState(false);
  const [params,setParams] = useState()


  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [mdrCode, setMdrCode] = useState("");
  const [noOfDocuments, setNoOfDocuments] = useState("");
  const [pro, setPro] = useState([]);
  const [status, setStatus] = useState("");
  const [projectOptions, setProjects] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedReviewer, setSelectedReviewer] = useState([]);
  const [docData, setDocData] = useState([]);

  const [assignedEmployees, setAssignedEmployees] = useState([]);
  const [selectedApprover, setSelectedApprover] = useState([]);
  const[allUsers,setAllUsers] = useState([])
  const [mdrTemplateVisible, setMdrTemplateVisible] = useState(false);
  const [departmentOptions,setDepartmentOptions] = useState([])

  const [departmentOption,setDepartmentOption] = useState([])
  const [userOptions, setUserData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userOption, setUserDatalist] = useState([]);
  const [record,setRecord] = useState()
  const [projectCode,setProjectCode] = useState()
  const location = useLocation();
  const { matchingRecord } = location.state || {}
  // console.log(matchingRecord,"recordinggggg");
  // console.log(location,"location");

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const handleAll=()=>{
    setData(dataArray)
  }

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

  const handleCompleted=()=>{
    const completedData = dataArray.filter(item => item.status === 'completed');
    setData(completedData)
  }
  const handleOnGoing=()=>{
    const ongoingData = dataArray.filter(item => item.status === 'Ongoing');
    setData(ongoingData)

  }
const menu = (
  <Menu>
    <Menu.Item onClick={() => handleAll()}>All</Menu.Item>
    <Menu.Item onClick={() => handleCompleted()}>Completed</Menu.Item>
    <Menu.Item onClick={() => handleOnGoing()}>Ongoing</Menu.Item>
  </Menu>
);
  const showMdrTemplate = () => {
    setMdrTemplateVisible(true);
  };

  const hideMdrTemplate = () => {
    setMdrTemplateVisible(false);
  };

  const serializedDepartmentOption = JSON.stringify(departmentOption);
  // console.log("serialized",serializedDepartmentOption)

  const history = useHistory();
  const navigateToMdrTemplate = () => {
    const project = projectOptions.find((item) => item?.value == projectId);
    // console.log('departmentOptions',departmentOptions);
    const serializedDepartmentOptions = JSON.stringify(departmentOptions);
    const serializedDepartmentOption = JSON.stringify(departmentOption);
    // console.log("serialized",serializedDepartmentOption)
    const serializedProjectOptions = JSON.stringify(projectOptions);
    const serializedSelectedApprover = JSON.stringify(selectedApprover);
    const serializedSelectedReviewer = JSON.stringify(selectedReviewer);
    history.push(`/pages/initialMDR?projectCode=${project.code}&mdrCode=${mdrCode}
    &departmentOption=${serializedDepartmentOption}&departmentOptions=${serializedDepartmentOptions}
    &projectOptions=${serializedProjectOptions}&projectId=${projectId}&projectCode=${projectCode}
    &departmentId=${selectedDepartments}&title=${title}&approver=${serializedSelectedApprover}&reviewer=${serializedSelectedReviewer}`)};
    
    const navigateToMdrTemplateForUpdate = () => {
      const project = projectOptions.find((item) => item?.value == projectId);
      // console.log('departmentOptions',departmentOptions);
      const serializedDepartmentOptions = JSON.stringify(departmentOptions);
      const serializedDepartmentOption = JSON.stringify(departmentOption);
      const serializedRecord = JSON.stringify(record);
      // console.log(serializedRecord,"serializedRecord");
      // console.log("serialized",serializedDepartmentOption)
      const serializedProjectOptions = JSON.stringify(projectOptions);
      const serializedSelectedApprover = JSON.stringify(selectedApprover);
      const serializedSelectedReviewer = JSON.stringify(selectedReviewer);
      history.push(`/pages/initialMDR?projectCode=${project.code}&mdrCode=${mdrCode}
      &departmentOption=${serializedDepartmentOption}&departmentOptions=${serializedDepartmentOptions}
      &projectOptions=${serializedProjectOptions}&projectId=${projectId}&projectCode=${projectCode}
      &departmentId=${selectedDepartments}&title=${title}&approver=${serializedSelectedApprover}
      &reviewer=${serializedSelectedReviewer}&record=${serializedRecord}`)};
  

    const navigate = () => {
    const project = record.projectId;
    const serializedDepartmentOptions = JSON.stringify(departmentOptions);
    const serializedDepartmentOption = JSON.stringify(departmentOption);
    const serializedProjectOptions = JSON.stringify(projectOptions);
    const serializedSelectedApprover = JSON.stringify(selectedApprover);
    const serializedSelectedReviewer = JSON.stringify(selectedReviewer);

    history.push(`/pages/initialMDR?projectCode=${record.projectCode}&mdrCode=${record.mdrCode}
    &departmentOption=${serializedDepartmentOption}&departmentOptions=${serializedDepartmentOptions}
    &projectOptions=${serializedProjectOptions}&projectId=${projectId}&projectCode=${projectCode}
    &departmentId=${selectedDepartments}&title=${title}&approver=${serializedSelectedApprover}&reviewer=${serializedSelectedReviewer}`)};
    
  const documentModalShow = () => {
    setDocumentModalVisible(true);
  };

  const documentModalShowing = (record) => {
    // console.log("record",record);
    setRecord(record);
    setDocumentModalVisible(true);
  };
  const documentModalCancel = () => {
    setTitle("");
    setProjectId("");
    setDepartmentId("");
    setDocumentModalVisible(false);
  };


  const assignModalShow = () => {
    setAssignModalVisible(true);
  };

  const assignModalCancel = () => {
    setAssignModalVisible(false);
  };
let count=0;
  const createModalShow = (record) => {
    // console.log("record",record)
    setRecord(record)
    setDocumentModalVisible(true);
  };

  const showModalShow = (record) => {
    // console.log(record)
    setRecord(record)
    showDocs(record)
    setShowModalVisible(true);
  };

  const showModalCancel = () => {
    setShowModalVisible(false);
  };
  const createModalCancel = () => {
    setCreateModalVisible(false);
  };
const showDocs = async(record)=>{
  // console.log("record",record);

  fetchDepartmentDocs(record)
}

// const convertToCSV = (data) => {
//   console.log(data,"data");
//   const csvRows = [];
//   const headers = Object.keys(data[0]);
//   console.log(headers,"headers");
//   csvRows.push(headers.join(','));

//   data.forEach((object) => {
//     const values = headers.map(header => {
//       const needsQuotes = typeof object[header] === 'string' && object[header].includes(',');
//       if (needsQuotes) {
//         return `"${object[header].replace(/"/g, '""')}"`;
//       }
//       return object[header];
//     });
//     csvRows.push(values.join(','));
//   });

//   return csvRows.join('\n');
// };

// const convertToCSV = (data) => {
//   const csvRows = [];
  
//   // Iterate over each key in the data
//   data.forEach((obj) => {
//     const key = Object.keys(obj)[0]; // Extract the key
//     const titles = obj[key]; // Extract the array of document titles

//     console.log(titles,"titles");
//     csvRows.push('Document Titles');    
//     // Add key as heading
//     csvRows.push(`Key,${key}`);
    
//         // Add document titles to the CSV
//     titles.forEach(title => csvRows.push(`,${title}`));
    
//     // Separate each key's data with an empty line
//     csvRows.push('');
//   });

//   return csvRows.join('\n');
// };


// const convertToCSV = (data) => {
//   const csvRows = [];

//   // Iterate over each key in the data
//   data.forEach((obj) => {
//     const key = Object.keys(obj)[0]; // Extract the key
//     const documents = obj[key]; // Extract the array of documents

//     // Add key as heading
//     csvRows.push(`Key,${key}`);
    
//     // Add headers for each document
//     const headers = Object.keys(documents[0]);
//     csvRows.push(headers.join(','));

//     // Add fields for each document
//     documents.forEach((document) => {
//       const values = headers.map((header) => document[header]);
//       csvRows.push(values.join(','));
//     });

//     // Separate each key's data with an empty line
//     csvRows.push('');
//   });

//   return csvRows.join('\n');
// };

// Example usage
// const dataforCSV = [
//   { PM: [{ id: 2, title: '2014-01-PM-SP-001', docTitle: '3rd', version: '000', companyId: 1 }] },
//   { SOW: [{ id: 1, title: '2014-01-PM-SOW-001', docTitle: '1st', version: '000', companyId: 1 }] },
// ];

// console.log(convertToCSV(dataforCSV),"checking");

const convertToCSV = (data) => {
  // console.log('data',data);
  const csvRows = [];
  data.forEach((obj) => {
    const key = Object.keys(obj)[0]; // Extract the key
    // console.log("key",key);
    const documents = obj[key]; // Extract the array of documents
    // console.log("objKeys",documents);

    csvRows.push(`Key,${key}`);
    
    const headers = Object.keys(documents[0]);
    csvRows.push(`"${headers.join('","')}"`);

    documents.forEach((document) => {
      const values = headers.map((header) => {
        const cellValue = document[header];
        return Array.isArray(cellValue) ? `"${cellValue.join(',')}"` : `"${cellValue}"`;
      });
      csvRows.push(values.join(','));
    });

    csvRows.push('');
  });

  return csvRows.join('\n');
};

// Example usage
// const dataForCSV = [
//   { PM: [{ id: 2, title: '2014-01-PM-SP-001', docTitle: '1st, 2nd, 3rd', version: '000', companyId: 1 }] },
//   { SOW: [{ id: 1, title: '2014-01-PM-SOW-001', docTitle: '4th', version: '000', companyId: 1 }] },
// ];

// console.log(convertToCSV(dataForCSV),"checked");

const handleExport = async (record) => {
  await fetchDepartmentDocs(record);

  // console.log(count,'counttt');

  if (docData.length > 0) {
    // console.log(docData,"docData");
    const csvData = convertToCSV(docData);

    // console.log(csvData,"data for csv");

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `MDR ${docData[0].masterDocumentId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const fetchDepartmentDocs = async (record) => {
  try {
    // console.log('recorddd',record);
    const response = await axios.get(
      `http://127.0.0.1:8083/api/documents?masterDocumentId=${record.mdrCode}&projectId=${record.projectId}&companyId=${record.companyId}`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
//     const organizedData = {};

// response.data.forEach(item => {
//   const key = item.title.split('-')[2]; // Extract the third part of the title (e.g., 'PM')
  
//   if (!organizedData[key]) {
//     organizedData[key] = [];
//   }
  
//   organizedData[key].push(item.docTitle);
// });

// const resultArray = Object.keys(organizedData).map(key => ({ [key]: organizedData[key] }));

// console.log(resultArray,"result");
console.log("response",response.data);
const fieldsToRemove = ['version', 'companyId','departmentId','projectId','masterDocumentId','masterDocumentName','content','extension','fileName'];
const modified = response.data.map((obj) => {
  const { version, companyId, departmentId, projectId, masterDocumentId, masterDocumentName, content, extension, fileName, ...newObj } = obj;
  return newObj;
});

const modifiedData = {};

// Iterate through the data
modified.forEach(item => {
  // Extract the key (third part of the title)
  const key = item.title.split('-')[2];
  
  // If the key doesn't exist in modifiedData, create an array for it
  if (!modifiedData[key]) {
    modifiedData[key] = [];
  }
  
  // Add the current item to the array of the corresponding key
  modifiedData[key].push(item);
});

// Convert the modifiedData object to an array of objects
const result = Object.keys(modifiedData).map(key => ({ [key]: modifiedData[key] }));

// console.log(result);


    // console.log(response.data,"received");
    // setDocData(response.data);
    setDocData(result)
    // console.log(docData,'hiiiiiiiii');/

  } catch (error) {
    console.error("Error fetching documents:", error?.message);
  }
};
useEffect(() => {
}, [docData]);
  const assignMDR = async(assignedEmployees,allUsers)=>{
    try {
      // console.log(allUsers);
      const assignedUser = allUsers.find(user => user.id == assignedEmployees)      
      const project = projectOptions.find((item) => item?.value == projectId);
      const department = departmentOptions.find(
        (item) => item?.value == departmentId
      );
      const response = await axios.post(
        "http://127.0.0.1:8083/api/documents/mdr",
        {
          departmentId:assignedUser.departmentId,
          projectId,
          companyId: assignedUser?.companyId,
          authorId: assignedUser?.id,
          authorName: assignedUser?.firstName,
          mdrCode,
          projectCode: project?.code,
          departmentName: assignedUser.department,
          status:"Assigned",
          noOfDocuments:0
        },
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      setAssignModalVisible(false)
      fetchData()
    } catch (error) {
      console.error("Error assigning documents:", error);
    }
  }
  const addDocument = async () => {
    try {
      const project = projectOptions.find((item) => item?.value == projectId);
      const department = departmentOptions.find(
        (item) => item?.value == departmentId
      );

      const response = await axios.post(
        "http://127.0.0.1:8083/api/documents/mdr",
        {
          title,
          selectedDepartments,
          projectId,
          noOfDocuments,
          companyId: user?.user?.companyId,
          authorId: user?.user?.id,
          authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
          mdrCode,
          projectCode: project?.code,
          departmentName: department?.label,
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
      documentModalCancel();
    } catch (error) {
      // Handle errors
      console.error("Error adding documents:", error);
    }
  };
  const exportCSV = async (record) => {
    try {
      console.log(record);
      const response = await axios.post(
        `http://127.0.0.1:8083/api/documents/export/${record?.id}?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );

      message.success(response?.data?.message);
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };
  const mdr = async() =>{
    console.log(record)
      try {
        // console.log(allUsers);
        const projectId = record.projectId
        const projectCode = record.projectCode
        console.log(projectId,projectCode);
        const response = await axios.put(
          `http://127.0.0.1:8083/api/documents/mdr?projectId=${projectId}&projectCode=${projectCode}`,
          {
                title,
                mdrCode,
                status:"Ongoing"
          },
          {
            headers: {
              Authorization: user?.accessToken,
              // Add other headers if needed
            },
          }
        );
        setCreateModalVisible(false)
        fetchData()
      } catch (error) {
        console.error("Error Updating MDR:", error);
      }
  }
  const fetchData = async () => {
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

      // console.log('mdr data',response.data);
      setProjectCode(response.data.projectCode)
      if (user?.user?.roleId===3 || user?.user?.roleId ===4) {
        const data = response.data.filter(item => item.authorId === user?.user?.id);
        // console.log("data",data);
        setData(data);
        setDataArray(data);

      }else if(user?.user?.roleId ===2){
        
        console.log(user?.user?.departmentId,'departmentId')
        const data = response.data.filter(item => 
          item.departmentId.split(",").includes((user?.user?.departmentId))      
          );       

        const d =  data.map((d)=>d.projectId)

        setPro(d)

        setData(data);
        setDataArray(data);
      }
      else{
        setData(response.data)
        setDataArray(response.data);
      }
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
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
      const option = [];
      for (const item of response?.data) {
        options.push({ value: item?.id, label: item?.title });
        option.push({ value: item?.suffix, label: item?.title });

      }

      setDepartmentOptions(options); 
      setDepartmentOption(option); 

    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
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
  
      console.log(response.data);
      setProjects(options); // Assuming the response.data is an array of projects
      console.log(projectOptions);
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
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
      setAllUsers(response.data)
      console.log(response?.data, "Users");
      const options = [];
      const option = [];

      for (const item of response?.data) {
        var role='Engineer'
        if(item.roleId==1){
           role ='CEO'

           options.push({
            value: {id:item?.id,name:item.firstName,departmentId:item?.departmentId,department:item.department},
            label: `${item?.firstName} ${role} `,
          });
        
        } if(item.roleId==2){
          role =`HEAD of ${item.department}`
          options.push({
            value: {id:item?.id,name:item.firstName},
            label: `${item?.firstName} ${role} `,
          });
          option.push({
            value:item?.id,
            label: `${item?.firstName} ${role} `,
          });
       }
       if(item.roleId==3){
        role =`Senior Engineer ${item.department}`
        options.push({
          value: {id:item?.id,name:item.firstName},
          label: `${item?.firstName} ${role} `,
        });
        option.push({
          value:item?.id,
          label: `${item?.firstName} ${role} `,
        });
     } if(item.roleId==4){
       role ='Junior'
    }
    if(item.roleId==5){
      role ='Designer/Draughtsmen'
   } 

      }
      const filteredArray = options.filter(item => item.roleId !== 1);

      setFilteredUsers(filteredArray)

      setUserData(options);
      setUserDatalist(option);

      // console.log('my options',options);

      // console.log('my users',userOptions);
       // Assuming the response.data is an array of DocumentPermissions
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  // const handleCheckboxChange = (checkedValues) => {
  //   // Concatenate all selected checkboxes into an array
  //   const concatenatedString = checkedValues.join(' ')
  //   setSelectedDepartments(concatenatedString);
  //   console.log(selectedDepartments);
  // };
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchDepartments();
    fetchProjects();
    fetchUsers();
    fetchData();
    console.log(data);
    // console.log(user);
  }, []);
  return (
    <>
      <Modal
        title="Upload Document"
        width={400}
        centered
        visible={documentModalVisible}
        onCancel={documentModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Row justify="space-between" align="center">
          <Col span={20}>
            <Form layout="vertical" name="basic">
              <Form.Item
                label="MDR Title"
                name="docTitle"
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
                label="MDR Code"
                name="docCode"
                rules={[
                  {
                    required: true,
                    message: "Please input your code",
                  },
                ]}
              >
                <Input
                  value={title}
                  onChange={(e) => setMdrCode(e.target.value)}
                />
              </Form.Item>


              <Form.Item
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
                  options={projectOptions}
                  value={projectId}
                  onChange={(value) => setProjectId(value)}
                />              </Form.Item>
              <Form.Item
                label="Add Reviewers"
                name="reviewers"
                rules={[
                  {
                    required: true,
                    message: "Please select Reviewers Name",
                  },
                ]}
              >
                <Checkbox.Group options={userOptions} value={selectedReviewer} onChange={setSelectedReviewer} />

              </Form.Item> <Form.Item
                label="Add Approvers"
                name="approvers"
                rules={[
                  {
                    required: true,
                    message: "Please select Approvers Name",
                  },
                ]}
              >
               <Checkbox.Group options={userOptions} value={selectedApprover} onChange={setSelectedApprover} />
              </Form.Item>
              <Row>           
              <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button block onClick={record?navigateToMdrTemplateForUpdate:navigateToMdrTemplate} type="primary"htmlType="submit">MDR template</Button>
                </Col>
                <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button block onClick={navigateToMdrTemplate} type="primary"htmlType="submit">Create Custom</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>

      <Modal
        title="Assign Document"
        width={400}
        centered
        visible={assignModalVisible}
        onCancel={assignModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Row justify="space-between" align="center">
          <Col span={20}>
            <Form layout="vertical" name="basic">
              <Form.Item
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
                  options={projectOptions}
                  value={projectId}
                  onChange={(value) => setProjectId(value)}
                />
                </Form.Item>
                <Form.Item
                label="Assigned MDR to"
                name="assignMDR"
                rules={[
                  {
                    required: true,
                    message: "Please Assign MDR",
                  },
                ]}
              >
              <Select
                  options={userOption}
                  value={assignedEmployees}
                  onChange={(value) => setAssignedEmployees(value)}
                />
                </Form.Item>
              <Row>           
              <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button block onClick={()=>assignMDR(assignedEmployees,allUsers)} type="primary"htmlType="submit">Assigned</Button>
                </Col>
              </Row>

              <Row>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>

      <Modal
        title="Show MDR Documents "
        width={400}
        centered
        visible={showModalVisible}
        onCancel={showModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Row justify="space-between" align="center">
          <Col span={20}>
          <div>
          <h3>MDR Documents</h3>
          {/* <ul>
            {selectedRows.map((row, index) => (
              <li key={index}>{row+1}</li>
            ))}
          </ul> */}
    <ul>
      {docData.map((doc, index) => (
        <li key={index}>
          {Object.entries(doc).map(([key, values]) => (
            <div key={key}>
              <strong>{key}:</strong>
              <ul>
                {values.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>Document Title:</strong> {item.docTitle} <br />
                    {/* Add other properties as needed */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>
      ))}
    </ul>        </div>
          </Col>
        </Row>
      </Modal>
      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        {
          user?.user.roleId == 1 &&       
          <Button
          type="primary"
          onClick={documentModalShow}
          // disabled={user?.user?.roleId != 1}
          style={{ marginRight: '10px' }}
        >
          Create MDR Yourself
        </Button>
        }

        {
                    user?.user.roleId == 1 &&   
                    <Button
                    type="primary"
                    onClick={assignModalShow}
                    // disabled={user?.user?.roleId != 1}
                  >
                    Assign MDR 
                  </Button>
              

        }

      {mdrTemplateVisible && <MdrTemplate />}
      </div>
      <div style={{ overflowX: "auto" }}>
      <Table
        columns={[
          {
            title: "Document Title",
            dataIndex: "title",
            key: "title",
            ...getColumnSearchProps('title'),

          },
          {
            title: "Project Code",
            dataIndex: "projectCode",
            key: "projectCode",
            ...getColumnSearchProps('projectCode'),

          },
          {
            title: "Dept Name",
            dataIndex: "departmentName",
            key: "departmentName",
            ...getColumnSearchProps('departmentName'),

          },

          {
            title: "Author Name",
            dataIndex: "authorName",
            key: "authorName",
            ...getColumnSearchProps('authorName'),

          },
          {
            title: "No of Documents",
            dataIndex: "noOfDocuments",
            key: "noOfDocuments",
            sorter: (a, b) => a.noOfDocuments - b.noOfDocuments,

          },
          {
            title: (
              "Status"
            ),
            key: "status",
            dataIndex: "status",
        
        filters: [
        
              {
                text: 'Initialized',
                value: 'Initialized',
              },
              {
                text: 'Ongoing',
                value: 'Ongoing',
              },
              {
                text: 'Completed',
                value: 'Completed',
              },
            ],
            onFilter:  (value, record) =>record.status === value,
          },
          
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <>
                <Space size="middle">

                  <Button
                    key={record?.id}
                    onClick={() => handleExport(record)}
                    disabled={user?.user?.roleId != 1}
                  >
                    Export
                  </Button>
                  {user.user.roleId!==1 &&       
                  <>
                  <Button
                    key={record?.id}
                    onClick={() => {createModalShow(record)                      
                    }}
                  >
                    Create
                  </Button>
                  </>
                  }      
                  {user.user.roleId==1 &&       
                  <>
                  <Button
                    key={record?.id}
                    onClick={() => {showModalShow(record)                      
                    }}
                  >
                    Open
                  </Button>
                  </>
                  }       
                </Space>
              </>
            ),
          },
          {
            title: "Progress",
            key: "percentage",
            render:(_,record)=>(
              <Space>
                <ProgressComp/>
              </Space>
            )
          },
        ]}
        size="middle"
        bordered
      title={() => 'All Department Documents'}
      footer={() => 'You may filter MDR'}
        dataSource={data}
        rowClassName={(record) => {
          if (matchingRecord && record.id === matchingRecord.selectedRecord.id) {
            return 'highlighted-row'; // Apply CSS class for highlighting
          }
          return '';
        }}
      /></div>
      <ProtectedAppPage />
    </>
  );
}