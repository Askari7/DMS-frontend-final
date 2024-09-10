import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from 'react-router-dom'; 
import { DownOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import ExcelJS from "exceljs";
import Highlighter from 'react-highlight-words';
import Logo from "./pec.png";
import smallLogo from "./novacon.png";

import {
  notification,
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
  Checkbox,
  Typography,
  Tooltip
} from "antd";
const { Title, Text } = Typography;
const imageUrl = '..//..//..//assets/images/logo/novacon.png'
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
import { DeleteOutlined, DocumentScannerOutlined, EditOutlined, OpenInFull, OpenInFullOutlined, OpenInFullSharp, Update, UpdateSharp } from "@mui/icons-material";
import { version } from "less";



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
  const [form] = Form.useForm();

  const [documentModalVisible, setDocumentModalVisible] = useState(false);
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [showModalVisible, setShowModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const [params,setParams] = useState()

  const [AssignForm] = Form.useForm();
  const [CreateForm] = Form.useForm();


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
  const [userOptionForCSV, setUserOptions] = useState([]);

  const [userOption, setUserDatalist] = useState([]);
  const [record,setRecord] = useState()

  const [updateModalVisible,   setUpdateModalVisible] =useState(false);
  
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [recordMdr,setRecordMdr] = useState()
  const [recordMDR,setRecordMDR] = useState()

  const [projectCode,setProjectCode] = useState()
  const location = useLocation();
  const { matchingRecord } = location.state || {}
  const BACKEND_URL = "http://127.0.0.1:8083"; // Update with your backend URL

  // console.log(matchingRecord,"recordinggggg");
  // console.log(location,"location");

  const handleSubmit = () => {
    AssignForm.validateFields().then((values) => {
      assignMDR(assignedEmployees,allUsers)
      AssignForm.resetFields();
    });
  };

  const handleCreateSubmit = () => {
    CreateForm.validateFields().then((values) => {
      // assignMDR(assignedEmployees,allUsers)
      CreateForm.resetFields();
    });
  };


  const handleUpdate=async()=>{
    try {
      const response  = await axios.put
      (`http://127.0.0.1:8083/api/documents/mdr_update?companyId=${user?.user.companyId}&id=${form.getFieldValue("id")}`,
      {
        title:form.getFieldValue("title"),
        mdrCode:form.getFieldValue("mdrCode"),
      },
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    )
      message.success(response.data.message)
      editModalCancel()
      fetchData()
    } catch (error) {
            console.error("Error updating departments:", error?.message);
    }
  }

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const handleDelete = async (record) => {
    // Your delete logic here
    const id = record.id
    console.log(id);
    const response = await axios.delete(
      `http://127.0.0.1:8083/api/users?delete=4&recordId=${record.id}`,
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
    if (!title || !projectId ||!selectedReviewer ||!selectedApprover ) {
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
    &departmentId=${selectedDepartments}&title=${title}&approver=${serializedSelectedApprover}&reviewer=${serializedSelectedReviewer}`)
  
  };
    
    const navigateToMdrTemplateForUpdate = () => {
      if (!title || !projectId ||!selectedReviewer ||!selectedApprover ) {
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
  


      const navigateToUpdate = () => {
        if (!title || !projectId ||!selectedReviewer ||!selectedApprover ) {
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
     console.log("record",record)
    setRecord(record)
    setDocumentModalVisible(true);
  };

  const deleteModalShow = (record) => {
    setRecord(record)
    setDeleteModalVisible(true);
  };
  const deleteModalCancel = () => {
    setDeleteModalVisible(false);
  };


  const showModalShow = (record) => {
     console.log('record',record)
    setRecord(record)
    showDocs(record)
    setShowModalVisible(true);
  };


  const updateModalShow = (record) => {
    console.log('record',record)
   setRecord(record)
  //  showDocs(record)
   setUpdateModalVisible(true);
 };

  const editModalShow = (record) => {
    setRecordMDR(record)
    console.log(recordMDR.mdrCode,'mdrCode');
    
    form.setFieldsValue({
      id:recordMDR.id,
      title:recordMDR.title||"",
      mdrCode: recordMDR.mdrCode || "",
    });

    setEditModalVisible(true);
  };

  const editModalCancel = () => {
    setEditModalVisible(false);
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
//   // console.log('data',data);
//   const csvRows = [];
//   data.forEach((obj) => {
//     const key = Object.keys(obj)[0]; // Extract the key
//     // console.log("key",key);
//     const documents = obj[key]; // Extract the array of documents
//     // console.log("objKeys",documents);

//     csvRows.push(`Key,${key}`);
    
//     const headers = Object.keys(documents[0]);
//     csvRows.push(`"${headers.join('","')}"`);

//     documents.forEach((document) => {
//       const values = headers.map((header) => {
//         const cellValue = document[header];
//         return Array.isArray(cellValue) ? `"${cellValue.join(',')}"` : `"${cellValue}"`;
//       });
//       csvRows.push(values.join(','));
//     });

//     csvRows.push('');
//   });

//   return csvRows.join('\n');
// };



// const handleExport = async (record) => {
//   await fetchDepartmentDocs(record);

//   if (docData.length > 0) {
//     // console.log(docData,"docData");
//     const csvData = convertToCSV(docData);

//     // console.log(csvData,"data for csv");
//     const blob = new Blob([csvData], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', `MDR ${docData[0].masterDocumentId}.csv`);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
// };


const convertToCSV = (data) => {
  const csvRows = [];

  // Add image URL as the first row
  
  csvRows.push(`Novacon`);

  data.forEach((obj) => {
    const key = Object.keys(obj)[0];
    const documents = obj[key];

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

const handleExport = async (record, imageUrl) => {
  await fetchDepartmentDocs(record);

  if (docData.length > 0) {
    const csvData = convertToCSV(docData);

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

// const generateHTML = (data, logoBase64) => {
//   const csvContent = convertToCSV(data,logoBase64);

//   // Construct HTML content
//   const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>CSV Export</title>
//     </head>
//     <body>
//       <img src="${logoBase64}" alt="Logo">
//       <h1>CSV Data</h1>
//       <pre>${csvContent}</pre>
//     </body>
//     </html>
//   `;

//   return htmlContent;
// };
// const getImageBase64FromUrl = async (url) => {
//   try {
//     // Fetch the image as a Blob
//     const response = await fetch(url);
//     const blob = await response.blob();

//     // Convert the Blob to base64
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(blob);
//       reader.onloadend = () => {
//         const base64String = reader.result.split(',')[1];
//         resolve(base64String);
//       };
//       reader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   } catch (error) {
//     console.error('Error fetching or converting image:', error);
//     return null;
//   }
// };

// const handleExport = async (record, imageUrl) => {
//   await fetchDepartmentDocs(record);
//   const logoBase = await getImageBase64FromUrl(imageUrl); // Added 'await' here
//   if (docData.length > 0) {
//     const htmlContent = generateHTML(docData, logoBase);

//     // Create a Blob from the HTML content
//     const blob = new Blob([htmlContent], { type: 'text/html' });

//     // Create a URL for the Blob
//     const url = window.URL.createObjectURL(blob);

//     // Create a link element and trigger download
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', `MDR ${docData[0].masterDocumentId}.html`);
//     document.body.appendChild(link);
//     link.click();

//     // Cleanup
//     document.body.removeChild(link);
//   }
// };


const fetchDepartmentDocs = async (record) => {
  try {
    console.log('recorddd',record);
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
  const {companyId, departmentId, projectId, masterDocumentId, masterDocumentName, content, extension, fileName, ...newObj } = obj;
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
    if (!projectId || !assignedEmployees ) {
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
      notification.success({
        message: 'Successfully Created',
        description: `${response.data.message}`,
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
          description: 'A MDR with this name or code already exists. Please choose a different name or code.',
          style: {
            backgroundColor: '#f5222d', // Red color background
            color: '#fff', // White text color
          },
        });
      } else {
        // Handle other errors
        notification.error({
          message: 'Error',
          description: 'An error occurred while adding the MDR. Please try again.',
          style: {
            backgroundColor: '#f5222d', // Red color background
            color: '#fff', // White text color
          },
        });
      }
    }
  }
  const handleEdit = async()=>{
    try {
      console.log(recordMDR,"recordMdr");
    } catch (error) {
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
        `http://127.0.0.1:8083/api/documents/mdr?companyId=${user?.user?.companyId}&roleId=${user?.user.roleId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      
      console.log(response.data,"response aya");
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
          item.departmentId.split(",").includes((user?.user?.departmentId))  || item.authorId === user?.user?.id    
          );       
console.log('dataaaaaa',data);
        const d =  data.map((d)=>d.projectId)

        setPro(d)

        setData(data);
        setDataArray(data);
      }
      else if(user?.user?.roleId ===6){
        
        console.log(user?.user?.departmentId,'departmentId')
        const data = response.data.filter(item => 
          item.clientId == user?.user.companyId    
          );       
        console.log('dataaaaaa',data);
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


  
  const getBase64Image = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };
      img.onerror = (error) => {
        reject(error);
      };
      img.src = url;
    });
  };

  
  
  const exportToCSV = async(record) => {
    const response = await axios.get(
      `http://127.0.0.1:8083/api/documents?masterDocumentId=${record.mdrCode}&projectId=${record.projectId}&companyId=${record.companyId}`,
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
  
    const modified = response.data.map((obj) => {
      const { version, companyId, departmentId, projectId, masterDocumentId, masterDocumentName, content, extension, fileName, createdAt, updatedAt,...newObj } = obj;
      return newObj;
    });
    const formatDate = (date) => {
      if (!date) return '';
      const formattedDate = new Date(date).toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
      return formattedDate;
    };
  
  
    console.log(modified, "modified");
  
    const result = Object.keys(modified[0]).map(key => ({
      header: key.toUpperCase(),
      key: key,
      width: 20
    }));
  
    console.log(result, 'resultresult');
  
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("MDR Data");
    sheet.properties.defaultRowHeight = 90;
    sheet.columns = result;
    sheet.getRow(1).font = { bold: true, size: 14 }; // Set font size and make bold
    // Convert the image to Base64 and add it to the sheet
    try {
      const logoBase64 = await getBase64Image(Logo); // Replace with your image URL or path
  
      console.log(logoBase64, 'logoBase64');
  
      const imageId = workbook.addImage({
        base64: logoBase64,
        extension: 'png',
      });
  
      // Add the logo before the headers
      sheet.addImage(imageId, {
        tl: { col: 0, row: 0 },
        ext: { width: 150, height: 50 },
      });
    } catch (error) {
      console.error('Error loading image:', error);
    }
  
    // Now add the headers
  
    // Add data rows after headers
    modified.forEach(item => {
      sheet.addRow({
        assignedBy: userOptionForCSV[item.assignedBy],
        assignedFrom: userOptionForCSV[item.assignedFrom],
        assignedTo: userOptionForCSV[item.assignedTo],
        docTitle: item.docTitle,
        expectedEndedDate: formatDate(item.expectedEndedDate),
        startedDate: formatDate(item.startedDate),
        status: item.status,
        title: item.title,
      });
    });
  
    // Add the footer text with a small logo
    const smallLogoBase64 = await getBase64Image(smallLogo); // Replace with your small logo URL or path
  
    const footerRow = sheet.addRow(["Powered by Novacon"]);
    sheet.mergeCells(`A${footerRow.number}:J${footerRow.number}`); // Adjust according to the number of columns
    footerRow.getCell(1).alignment = { horizontal: "center" };
    footerRow.getCell(1).font = { bold: true, size: 12 };
  
      
  
      const smallLogoId = workbook.addImage({
        base64: smallLogoBase64,
        extension: 'png',
      });
  
      // Calculate the approximate position within the cell
      const cellStart = sheet.getColumn(1).width * 1.3; // Adjust this factor to fine-tune positioning
      sheet.addImage(smallLogoId, {
        tl: { col: 5, row: footerRow.number - 1, offsetX: cellStart, offsetY: 10 },
        ext: { width: 50, height: 50 },
      });
    // Generate Excel file and trigger download
    workbook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'download.xlsx';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }


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
  const handleOpen = async (record) => {
    console.log(record, 'record');
    
    const responseData = await fetchAppRev(record.title);
    console.log('helllooo', responseData);
    
    const docName = record.title;
    const url = `${BACKEND_URL}/uploads/${docName}-${record.version}.pdf`;
    console.log(user.user.roleId, user.user.firstName, user);
    
    let allowed = 'false';
    if (responseData) {
      allowed = 'true';
    }
  
    // Check if the document exists
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/documents/checkDocuments?companyId=${user?.user?.companyId}&docName=${docName}&version=${record.version}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      if (response.data.status) {
        // Document exists, proceed with redirect
        window.location.href = `http://127.0.0.1:3001/react-pdf-highlighter/?docName=${docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
      } else {
        // Document does not exist, show an alert
        message.warning('Document not uploaded yet.');
      }
    } catch (error) {
      console.error('Error checking document:', error);
      alert('An error occurred while checking the document.');
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
      const users = []

      for (const item of response?.data) {
        var role='Engineer'
        if(item.roleId==1){
           role ='CEO'
          users[item.id] = `${item.firstName} ${item.lastName}`
           options.push({
            value: {id:item?.id,name:item.firstName,departmentId:item?.departmentId,department:item.department},
            label: `${item?.firstName} ${role} `,
          });
        
        } if(item.roleId==2){
          role =`HEAD of ${item.department}`
          users[item.id] = `${item.firstName} ${item.lastName}`

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
        users[item.id] = `${item.firstName} ${item.lastName}`

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
       users[item.id] = `${item.firstName} ${item.lastName}`

    }
    if(item.roleId==5){
      role ='Designer/Draughtsmen'
      users[item.id] = `${item.firstName} ${item.lastName}`

   } 

   setUserOptions(users)

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
                {/* <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button block onClick={navigateToMdrTemplate} type="primary"htmlType="submit">Create Custom</Button>
                </Col> */}
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>
      <Modal
  title="Delete Project"
  width={416}
  centered
  visible={deleteModalVisible}
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
            <Form form={AssignForm}  onFinish={handleSubmit}layout="vertical" name="basic">
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
                  <Button block 
                  // onClick={()=>assignMDR(assignedEmployees,allUsers)} 
                  type="primary"htmlType="submit">Assigned</Button>
                </Col>
              </Row>

              <Row>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>
      
      {/* <Modal
  title="MDR Information"
  width={400}
  centered
  visible={editModalVisible}
  onCancel={editModalCancel}
  footer={null}
  closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
> */}

  {/* {recordMdr ? (
    <div style={{ textAlign: "center" }}>
      <div style={{ textAlign: "left" }}>
    <Title level={3}>Title: {recordMdr.title || null}</Title><br />
      <Text strong>Author Name: </Text>
      <Text>{recordMdr.authorName || null}</Text><br />
      <Text strong>Department ID: </Text>
      <Text>{recordMdr.departmentId || null}</Text><br />
      <Text strong>Project Code: </Text>
      <Text>{recordMdr.projectCode || null}</Text><br />
      <Text strong>MDR Code: </Text>
      <Text>{recordMdr.mdrCode || null}</Text><br />
      <Text strong>No of Documents: </Text>
      <Text>{recordMdr.noOfDocuments || null}</Text><br />
      <Text strong>Percentage: </Text>
      <Text>{recordMdr.percentage || null}</Text><br />

      <Text strong>Status: </Text>
      <Text>{recordMdr.status}</Text><br />
      <Text strong>Created At: </Text>
      <Text>{recordMdr.createdAt}</Text>
      <br /><br />
      </div>
      <Button type="primary" style={{ marginTop: "16px" }} onClick={handleEdit}>Add More Documents</Button>
    </div>
  ) : null} */}

{/* <Row justify="space-between" align="center">
          <Col span={20}>
            <Form layout="vertical" name="basic" form={form} onFinish={handleEdit}>
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
                placeholder="Enter title"
                  onChange={(e) => form.setFieldsValue({ title: e.target.value })}
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
                placeholder="Enter mdr Code"
                  onChange={(e) => form.setFieldsValue({ mdrCode: e.target.value })}
                />
              </Form.Item>
              
              <Row>           
              <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button block onClick={navigateToMdrTemplateForUpdate} type="primary"htmlType="submit">MDR template</Button>
                </Col>
          
              </Row>
            </Form>
          </Col>
        </Row>
</Modal> */}




<Modal
      title="Update MDR"
      width={416}
      centered
      visible={editModalVisible}
      onCancel={editModalCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={
          handleUpdate
        } // Function to handle form submission
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the mdr title' }]}
        >
          <Input placeholder="Enter MDR title" onChange={(e) => form.setFieldsValue({ title: e.target.value })} />
        </Form.Item>
        <Form.Item
          label="MDR Code"
          name="mdrCode"
          rules={[{ required: true, message: 'Please enter mdr code' }]}
        >
          <Input placeholder="Enter MDR code" onChange={(e) => form.setFieldsValue({ mdrCode: e.target.value })} />
        </Form.Item>

        <Form.Item>
        <Row md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
          <Button onClick={navigateToUpdate} type="primary"htmlType="submit">MDR template</Button>
          <Button type="primary" htmlType="submit" >
            Update
          </Button>     
          </Row>
        </Form.Item>
      </Form>
    </Modal>


    <Modal
  title="Show MDR Documents"
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
        <ul>
          {docData.map((doc, index) => (
            <li key={index}>
              {Object.entries(doc).map(([key, values]) => (
                <div key={key}>
                  <strong>{key}:</strong>
                  <ul>
                    {values.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding:"4px"
                        }}
                      >
                        <div>
                        <strong>Document Title:</strong> {item.docTitle} <br />
                    <strong>Code:</strong> {item.title} <br />
                    <strong>Version:</strong> {item.version} <br />
                        </div>
                        <button
                          style={{
                            backgroundColor: "#1890ff",
                            color: "#fff",
                            border: "none",
                            padding: "3px 10px",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleOpen(item)} // Adjust as needed
                        >
                          Open
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
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
            title: "Progress Per Document",
            key: "percentage",
            render: (_, record) => (
              <Space>
                {record.percentage !== null ? (
                  <ProgressComp percentage={record.percentage.toFixed(1)} />
                ) : null}
              </Space>
            )
          },
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <>
                <Space size="middle">

                  {/* <Button
                    key={record?.id}
                    onClick={() => handleExport(record)}
                    disabled={user?.user?.roleId != 1}
                  >
                    Export
                  </Button> */}

                  {
                  //   <Button
                  //   key={record?.id}
                  //   onClick={()=>exportToCSV(record)}
                  //   disabled={user?.user?.roleId != 1}
                  //   icon={<DocumentScannerOutlined/>}
                  // />

                  <Tooltip title="Export CSV">
                  <Button
                    size="middle"
                    icon={<DocumentScannerOutlined />}
                    onClick={() => exportToCSV(record)}
                  />
                </Tooltip>
                    // Export CSV 
                  /* </Button> */
                  
                  }
                  {user.user.roleId !== 1 && record.authorId === user?.user.id  && record.status =="Assigned" &&(
                    <Button
                      key={record?.id}
                      onClick={() => createModalShow(record)}
                    >
                      Create
                    </Button>
                  )}
    
                  <>
                  {/* <Button
                    key={record?.id}
                    onClick={() => {showModalShow(record)}}
                    icon={<OpenInFullSharp/>}
                  /> */}
                  <Tooltip title="View MDR Docs">
  <Button
    size="middle"
    icon={<OpenInFullSharp />}
    onClick={() => showModalShow(record)}
  />
</Tooltip>

                  {/* <Button
                    key={record?.id}
                    onClick={() => {editModalShow(record)}}
                    icon={<EditOutlined/>}
                  /> */}
                    {/* Open */}
                  {/* </Button> */}
                  </>
                  
                   
                            <Tooltip title="Delete">
  <Button
    size="middle"
    icon={<DeleteOutlined />}
    disabled={user?.user?.roleId !== 1}
    onClick={() => deleteModalShow(record)}
  />
</Tooltip>
                  {/* <a onClick={() => deleteModalShow(record)} disabled={user?.user?.roleId !== 1}>Delete</a> */}

                </Space>

              </>
            ),
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



// import React, { useEffect, useRef, useState } from "react";
// import { FormattedMessage } from "react-intl";
// import { useHistory } from 'react-router-dom'; 
// import { DownOutlined } from '@ant-design/icons';
// import { SearchOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';
// import {
//   notification,
//   Row,
//   Col,
//   Divider,
//   Dropdown,
//   Form,
//   Space,
//   Table,
//   Menu,
//   Select,
//   Tag,
//   Input,
//   DatePicker,
//   TimePicker,
//   Button,
//   Modal,
//   message,
//   Upload,
//   Checkbox,
//   Typography
// } from "antd";
// const { Title, Text } = Typography;
// const imageUrl = '..//..//..//assets/images/logo/novacon.png'
// import { Radio } from "antd";
// import axios from "axios";
// import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { UploadOutlined } from "@ant-design/icons";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import ProtectedAppPage from "../Protected";
// import { useLocation } from 'react-router-dom';
// import { string } from "prop-types";
// import ProgressComp from "./Progress";



// const uploadProps = {
//   name: "file",
//   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
//   headers: {
//     authorization: "authorization-text",
//   },
//   onChange(info) {
//     if (info.file.status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === "done") {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

// export default function MDR() {
//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const searchInput = useRef(null);

//   const [documentModalVisible, setDocumentModalVisible] = useState(false);
//   const [assignModalVisible, setAssignModalVisible] = useState(false);
//   const [createModalVisible, setCreateModalVisible] = useState(false);
//   const [showModalVisible, setShowModalVisible] = useState(false);
//   const [editModalVisible, setEditModalVisible] = useState(false);

//   const [params,setParams] = useState()


//   const [title, setTitle] = useState("");
//   const [projectId, setProjectId] = useState("");
//   const [departmentId, setDepartmentId] = useState("");
//   const [mdrCode, setMdrCode] = useState("");
//   const [noOfDocuments, setNoOfDocuments] = useState("");
//   const [pro, setPro] = useState([]);
//   const [status, setStatus] = useState("");
//   const [projectOptions, setProjects] = useState([]);
//   const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
//   const [data, setData] = useState([]);
//   const [dataArray, setDataArray] = useState([]);

//   const [selectedDepartments, setSelectedDepartments] = useState([]);
//   const [selectedReviewer, setSelectedReviewer] = useState([]);
//   const [docData, setDocData] = useState([]);

//   const [assignedEmployees, setAssignedEmployees] = useState([]);
//   const [selectedApprover, setSelectedApprover] = useState([]);
//   const[allUsers,setAllUsers] = useState([])
//   const [mdrTemplateVisible, setMdrTemplateVisible] = useState(false);
//   const [departmentOptions,setDepartmentOptions] = useState([])

//   const [departmentOption,setDepartmentOption] = useState([])
//   const [userOptions, setUserData] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [userOption, setUserDatalist] = useState([]);
//   const [record,setRecord] = useState()
//   const [recordMdr,setRecordMdr] = useState()

//   const [projectCode,setProjectCode] = useState()
//   const location = useLocation();
//   const { matchingRecord } = location.state || {}
//   // console.log(matchingRecord,"recordinggggg");
//   // console.log(location,"location");

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };
//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText('');
//   };

//   const handleAll=()=>{
//     setData(dataArray)
//   }

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           ref={searchInput}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{ marginBottom: 8, display: 'block' }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Search
//           </Button>
//           <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//             Reset
//           </Button>

//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered) => (
//       <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
//     onFilterDropdownOpenChange: (visible) => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//     render: (text) =>
//       searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{
//             backgroundColor: '#ffc069',
//             padding: 0,
//           }}
//           searchWords={[searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ''}
//         />
//       ) : (
//         text
//       ),
//   });

//   const handleCompleted=()=>{
//     const completedData = dataArray.filter(item => item.status === 'completed');
//     setData(completedData)
//   }
//   const handleOnGoing=()=>{
//     const ongoingData = dataArray.filter(item => item.status === 'Ongoing');
//     setData(ongoingData)

//   }
// const menu = (
//   <Menu>
//     <Menu.Item onClick={() => handleAll()}>All</Menu.Item>
//     <Menu.Item onClick={() => handleCompleted()}>Completed</Menu.Item>
//     <Menu.Item onClick={() => handleOnGoing()}>Ongoing</Menu.Item>
//   </Menu>
// );
//   const showMdrTemplate = () => {
//     setMdrTemplateVisible(true);
//   };

//   const hideMdrTemplate = () => {
//     setMdrTemplateVisible(false);
//   };

//   const serializedDepartmentOption = JSON.stringify(departmentOption);
//   // console.log("serialized",serializedDepartmentOption)

//   const history = useHistory();
//   const navigateToMdrTemplate = () => {
//     if (!title || !projectId ||!selectedReviewer ||!selectedApprover ) {
//       // If any required field is missing, display a validation error notification
//       notification.error({
//         message: 'Validation Error',
//         description: 'Please fill in all required fields.',
//         style: {
//           backgroundColor: '#f5222d', // Red color background
//           color: '#fff', // White text color
//         },
//       });
//       return; // Exit early if validation fails
//     }
//     const project = projectOptions.find((item) => item?.value == projectId);
//     // console.log('departmentOptions',departmentOptions);
//     const serializedDepartmentOptions = JSON.stringify(departmentOptions);
//     const serializedDepartmentOption = JSON.stringify(departmentOption);
//     // console.log("serialized",serializedDepartmentOption)
//     const serializedProjectOptions = JSON.stringify(projectOptions);
//     const serializedSelectedApprover = JSON.stringify(selectedApprover);
//     const serializedSelectedReviewer = JSON.stringify(selectedReviewer);
//     history.push(`/pages/initialMDR?projectCode=${project.code}&mdrCode=${mdrCode}
//     &departmentOption=${serializedDepartmentOption}&departmentOptions=${serializedDepartmentOptions}
//     &projectOptions=${serializedProjectOptions}&projectId=${projectId}&projectCode=${projectCode}
//     &departmentId=${selectedDepartments}&title=${title}&approver=${serializedSelectedApprover}&reviewer=${serializedSelectedReviewer}`)};
    
//     const navigateToMdrTemplateForUpdate = () => {
//       if (!title || !projectId ||!selectedReviewer ||!selectedApprover ) {
//         // If any required field is missing, display a validation error notification
//         notification.error({
//           message: 'Validation Error',
//           description: 'Please fill in all required fields.',
//           style: {
//             backgroundColor: '#f5222d', // Red color background
//             color: '#fff', // White text color
//           },
//         });
//         return; // Exit early if validation fails
//       }
//       const project = projectOptions.find((item) => item?.value == projectId);
//       // console.log('departmentOptions',departmentOptions);
//       const serializedDepartmentOptions = JSON.stringify(departmentOptions);
//       const serializedDepartmentOption = JSON.stringify(departmentOption);
//       const serializedRecord = JSON.stringify(record);
//       // console.log(serializedRecord,"serializedRecord");
//       // console.log("serialized",serializedDepartmentOption)
//       const serializedProjectOptions = JSON.stringify(projectOptions);
//       const serializedSelectedApprover = JSON.stringify(selectedApprover);
//       const serializedSelectedReviewer = JSON.stringify(selectedReviewer);
//       history.push(`/pages/initialMDR?projectCode=${project.code}&mdrCode=${mdrCode}
//       &departmentOption=${serializedDepartmentOption}&departmentOptions=${serializedDepartmentOptions}
//       &projectOptions=${serializedProjectOptions}&projectId=${projectId}&projectCode=${projectCode}
//       &departmentId=${selectedDepartments}&title=${title}&approver=${serializedSelectedApprover}
//       &reviewer=${serializedSelectedReviewer}&record=${serializedRecord}`)};
  

//     const navigate = () => {
//     const project = record.projectId;
//     const serializedDepartmentOptions = JSON.stringify(departmentOptions);
//     const serializedDepartmentOption = JSON.stringify(departmentOption);
//     const serializedProjectOptions = JSON.stringify(projectOptions);
//     const serializedSelectedApprover = JSON.stringify(selectedApprover);
//     const serializedSelectedReviewer = JSON.stringify(selectedReviewer);

//     history.push(`/pages/initialMDR?projectCode=${record.projectCode}&mdrCode=${record.mdrCode}
//     &departmentOption=${serializedDepartmentOption}&departmentOptions=${serializedDepartmentOptions}
//     &projectOptions=${serializedProjectOptions}&projectId=${projectId}&projectCode=${projectCode}
//     &departmentId=${selectedDepartments}&title=${title}&approver=${serializedSelectedApprover}&reviewer=${serializedSelectedReviewer}`)};
    
//   const documentModalShow = () => {
//     setDocumentModalVisible(true);
//   };

//   const documentModalShowing = (record) => {
//     // console.log("record",record);
//     setRecord(record);
//     setDocumentModalVisible(true);
//   };
//   const documentModalCancel = () => {
//     setTitle("");
//     setProjectId("");
//     setDepartmentId("");
//     setDocumentModalVisible(false);
//   };


//   const assignModalShow = () => {
//     setAssignModalVisible(true);
//   };

//   const assignModalCancel = () => {
//     setAssignModalVisible(false);
//   };
// let count=0;
//   const createModalShow = (record) => {
//      console.log("record",record)
//     setRecord(record)
//     setDocumentModalVisible(true);
//   };

//   const showModalShow = (record) => {
//      console.log('record',record)
//     setRecord(record)
//     showDocs(record)
//     setShowModalVisible(true);
//   };

//   const editModalShow = (record) => {
//     console.log(recordMdr,"record1");
//     setRecordMdr(record)
//     setEditModalVisible(true);
//     console.log(recordMdr,"record2");

//   };

//   const editModalCancel = () => {

//     setEditModalVisible(false);
//   };
//   const showModalCancel = () => {
//     setShowModalVisible(false);
//   };
//   const createModalCancel = () => {
//     setCreateModalVisible(false);
//   };
// const showDocs = async(record)=>{
//   // console.log("record",record);

//   fetchDepartmentDocs(record)
// }



// // const convertToCSV = (data) => {
// //   // console.log('data',data);
// //   const csvRows = [];
// //   data.forEach((obj) => {
// //     const key = Object.keys(obj)[0]; // Extract the key
// //     // console.log("key",key);
// //     const documents = obj[key]; // Extract the array of documents
// //     // console.log("objKeys",documents);

// //     csvRows.push(`Key,${key}`);
    
// //     const headers = Object.keys(documents[0]);
// //     csvRows.push(`"${headers.join('","')}"`);

// //     documents.forEach((document) => {
// //       const values = headers.map((header) => {
// //         const cellValue = document[header];
// //         return Array.isArray(cellValue) ? `"${cellValue.join(',')}"` : `"${cellValue}"`;
// //       });
// //       csvRows.push(values.join(','));
// //     });

// //     csvRows.push('');
// //   });

// //   return csvRows.join('\n');
// // };



// // const handleExport = async (record) => {
// //   await fetchDepartmentDocs(record);

// //   if (docData.length > 0) {
// //     // console.log(docData,"docData");
// //     const csvData = convertToCSV(docData);

// //     // console.log(csvData,"data for csv");
// //     const blob = new Blob([csvData], { type: 'text/csv' });
// //     const url = window.URL.createObjectURL(blob);
// //     const link = document.createElement('a');
// //     link.href = url;
// //     link.setAttribute('download', `MDR ${docData[0].masterDocumentId}.csv`);
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   }
// // };


// const convertToCSV = (data) => {
//   const csvRows = [];

//   // Add image URL as the first row
  
//   csvRows.push(`Novacon`);

//   data.forEach((obj) => {
//     const key = Object.keys(obj)[0];
//     const documents = obj[key];

//     csvRows.push(`Key,${key}`);

//     const headers = Object.keys(documents[0]);
//     csvRows.push(`"${headers.join('","')}"`);

//     documents.forEach((document) => {
//       const values = headers.map((header) => {
//         const cellValue = document[header];
//         return Array.isArray(cellValue) ? `"${cellValue.join(',')}"` : `"${cellValue}"`;
//       });
//       csvRows.push(values.join(','));
//     });

//     csvRows.push('');
//   });

//   return csvRows.join('\n');
// };

// const handleExport = async (record, imageUrl) => {
//   await fetchDepartmentDocs(record);

//   if (docData.length > 0) {
//     const csvData = convertToCSV(docData);

//     const blob = new Blob([csvData], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', `MDR ${docData[0].masterDocumentId}.csv`);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
// };

// // const generateHTML = (data, logoBase64) => {
// //   const csvContent = convertToCSV(data,logoBase64);

// //   // Construct HTML content
// //   const htmlContent = `
// //     <!DOCTYPE html>
// //     <html lang="en">
// //     <head>
// //       <meta charset="UTF-8">
// //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //       <title>CSV Export</title>
// //     </head>
// //     <body>
// //       <img src="${logoBase64}" alt="Logo">
// //       <h1>CSV Data</h1>
// //       <pre>${csvContent}</pre>
// //     </body>
// //     </html>
// //   `;

// //   return htmlContent;
// // };
// // const getImageBase64FromUrl = async (url) => {
// //   try {
// //     // Fetch the image as a Blob
// //     const response = await fetch(url);
// //     const blob = await response.blob();

// //     // Convert the Blob to base64
// //     return new Promise((resolve, reject) => {
// //       const reader = new FileReader();
// //       reader.readAsDataURL(blob);
// //       reader.onloadend = () => {
// //         const base64String = reader.result.split(',')[1];
// //         resolve(base64String);
// //       };
// //       reader.onerror = (error) => {
// //         reject(error);
// //       };
// //     });
// //   } catch (error) {
// //     console.error('Error fetching or converting image:', error);
// //     return null;
// //   }
// // };

// // const handleExport = async (record, imageUrl) => {
// //   await fetchDepartmentDocs(record);
// //   const logoBase = await getImageBase64FromUrl(imageUrl); // Added 'await' here
// //   if (docData.length > 0) {
// //     const htmlContent = generateHTML(docData, logoBase);

// //     // Create a Blob from the HTML content
// //     const blob = new Blob([htmlContent], { type: 'text/html' });

// //     // Create a URL for the Blob
// //     const url = window.URL.createObjectURL(blob);

// //     // Create a link element and trigger download
// //     const link = document.createElement('a');
// //     link.href = url;
// //     link.setAttribute('download', `MDR ${docData[0].masterDocumentId}.html`);
// //     document.body.appendChild(link);
// //     link.click();

// //     // Cleanup
// //     document.body.removeChild(link);
// //   }
// // };


// const fetchDepartmentDocs = async (record) => {
//   try {
//     // console.log('recorddd',record);
//     const response = await axios.get(
//       `http://127.0.0.1:8083/api/documents?masterDocumentId=${record.mdrCode}&projectId=${record.projectId}&companyId=${record.companyId}`,
//       {
//         headers: {
//           Authorization: user?.accessToken,
//           // Add other headers if needed
//         },
//       }
//     );
// //     const organizedData = {};

// // response.data.forEach(item => {
// //   const key = item.title.split('-')[2]; // Extract the third part of the title (e.g., 'PM')
  
// //   if (!organizedData[key]) {
// //     organizedData[key] = [];
// //   }
  
// //   organizedData[key].push(item.docTitle);
// // });

// // const resultArray = Object.keys(organizedData).map(key => ({ [key]: organizedData[key] }));

// // console.log(resultArray,"result");
// console.log("response",response.data);
// const fieldsToRemove = ['version', 'companyId','departmentId','projectId','masterDocumentId','masterDocumentName','content','extension','fileName'];
// const modified = response.data.map((obj) => {
//   const { version, companyId, departmentId, projectId, masterDocumentId, masterDocumentName, content, extension, fileName, ...newObj } = obj;
//   return newObj;
// });

// const modifiedData = {};

// // Iterate through the data
// modified.forEach(item => {
//   // Extract the key (third part of the title)
//   const key = item.title.split('-')[2];
  
//   // If the key doesn't exist in modifiedData, create an array for it
//   if (!modifiedData[key]) {
//     modifiedData[key] = [];
//   }
  
//   // Add the current item to the array of the corresponding key
//   modifiedData[key].push(item);
// });

// // Convert the modifiedData object to an array of objects
// const result = Object.keys(modifiedData).map(key => ({ [key]: modifiedData[key] }));

// // console.log(result);


//     // console.log(response.data,"received");
//     // setDocData(response.data);
//     setDocData(result)
//     // console.log(docData,'hiiiiiiiii');/

//   } catch (error) {
//     console.error("Error fetching documents:", error?.message);
//   }
// };
// useEffect(() => {
// }, [docData]);
//   const assignMDR = async(assignedEmployees,allUsers)=>{
//     if (!projectId || !assignedEmployees ) {
//       // If any required field is missing, display a validation error notification
//       notification.error({
//         message: 'Validation Error',
//         description: 'Please fill in all required fields.',
//         style: {
//           backgroundColor: '#f5222d', // Red color background
//           color: '#fff', // White text color
//         },
//       });
//       return; // Exit early if validation fails
//     }
//     try {
//       // console.log(allUsers);
//       const assignedUser = allUsers.find(user => user.id == assignedEmployees)      
//       const project = projectOptions.find((item) => item?.value == projectId);
//       const department = departmentOptions.find(
//         (item) => item?.value == departmentId
//       );
//       const response = await axios.post(
//         "http://127.0.0.1:8083/api/documents/mdr",
//         {
//           departmentId:assignedUser.departmentId,
//           projectId,
//           companyId: assignedUser?.companyId,
//           authorId: assignedUser?.id,
//           authorName: assignedUser?.firstName,
//           mdrCode,
//           projectCode: project?.code,
//           departmentName: assignedUser.department,
//           status:"Assigned",
//           noOfDocuments:0
//         },
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
//       notification.success({
//         message: `${response?.data?.message}`,
//         style: {
//           backgroundColor: '#52c41a', // Red color background
//           color: '#fff', // White text color
//         },
//       }
//       )
//       setAssignModalVisible(false)
//       fetchData()
//     } catch (error) {
//       console.error("Error assigning documents:", error);
//     }
//   }
//   const handleEdit = async()=>{
//     try {
//       console.log(recordMdr,"recordMdr");
//     } catch (error) {
      
//     }
//   }
//   const addDocument = async () => {
//     try {
//       const project = projectOptions.find((item) => item?.value == projectId);
//       const department = departmentOptions.find(
//         (item) => item?.value == departmentId
//       );

//       const response = await axios.post(
//         "http://127.0.0.1:8083/api/documents/mdr",
//         {
//           title,
//           selectedDepartments,
//           projectId,
//           noOfDocuments,
//           companyId: user?.user?.companyId,
//           authorId: user?.user?.id,
//           authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
//           mdrCode,
//           projectCode: project?.code,
//           departmentName: department?.label,
//         },
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
//       // Handle the response as needed
//       console.log(response);
//       message.success(response?.data?.message);
//       fetchData();
//       documentModalCancel();
//     } catch (error) {
//       // Handle errors
//       console.error("Error adding documents:", error);
//     }
//   };
//   const exportCSV = async (record) => {
//     try {
//       console.log(record);
//       const response = await axios.post(
//         `http://127.0.0.1:8083/api/documents/export/${record?.id}?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );

//       message.success(response?.data?.message);
//     } catch (error) {
//       console.error("Error fetching documents:", error?.message);
//     }
//   };
//   const mdr = async() =>{
//     console.log(record)
//       try {
//         // console.log(allUsers);
//         const projectId = record.projectId
//         const projectCode = record.projectCode
//         console.log(projectId,projectCode);
//         const response = await axios.put(
//           `http://127.0.0.1:8083/api/documents/mdr?projectId=${projectId}&projectCode=${projectCode}`,
//           {
//                 title,
//                 mdrCode,
//                 status:"Ongoing"
//           },
//           {
//             headers: {
//               Authorization: user?.accessToken,
//               // Add other headers if needed
//             },
//           }
//         );
//         setCreateModalVisible(false)
//         fetchData()
//       } catch (error) {
//         console.error("Error Updating MDR:", error);
//       }
//   }
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8083/api/documents/mdr?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );

//       console.log(response.data,"response aya");
//       // console.log('mdr data',response.data);
//       setProjectCode(response.data.projectCode)
//       if (user?.user?.roleId===3 || user?.user?.roleId ===4) {
//         const data = response.data.filter(item => item.authorId === user?.user?.id);
//         // console.log("data",data);
        
//         const filter = data.filter(item=>item.delete==0)
//         setData(filter);
//         setDataArray(data);

//       }else if(user?.user?.roleId ===2){
        
//         console.log(user?.user?.departmentId,'departmentId')
//         const data = response.data.filter(item => 
//           item.departmentId.split(",").includes((user?.user?.departmentId))  || item.authorId === user?.user?.id    
//           );       
// console.log('dataaaaaa',data);
//         const d =  data.map((d)=>d.projectId)

//         setPro(d)
//         const filter = data.filter(item=>item.delete==0)
//         setData(filter);
//         setDataArray(data);
//       }
//       else{
//         const data = response.data
//         const filter = data.filter(item=>item.delete==0)
//         setData(filter);
//         setDataArray(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching documents:", error?.message);
//     }
//   };
  
//   const fetchDepartments = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8083/api/departments?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
//       const options = [];
//       const option = [];
//       for (const item of response?.data) {
//         options.push({ value: item?.id, label: item?.title });
//         option.push({ value: item?.suffix, label: item?.title });

//       }

//       setDepartmentOptions(options); 
//       setDepartmentOption(option); 

//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };
//   const fetchProjects = async () => {
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
  
//       // Use Set to store unique titles
//       const uniqueTitlesSet = new Set();
  
//       const options = response?.data.reduce((acc, item) => {
//         // Check if the title is not in the Set
//         if (!uniqueTitlesSet.has(item.title)) {
//           // Add title to the Set
//           uniqueTitlesSet.add(item.title);
  
//           // Push the option to the result array
//           acc.push({ value: item.id, label: item.title, code: item.code });
//         }
  
//         return acc;
//       }, []);
  
//       console.log(response.data);
//       setProjects(options); // Assuming the response.data is an array of projects
//       console.log(projectOptions);
//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };

//   const handleDelete = async (record) => {
//     // Your delete logic here
//     const id = record.id
//     console.log(id);
//     const response = await axios.delete(
//       `http://127.0.0.1:8083/api/users?delete=4&recordId=${record.id}`,
//       {
//         headers: {
//           Authorization: user?.accessToken,
//           // Add other headers if needed
//         },
//       }
//     );
//   }

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8083/api/users?companyId=${user?.user?.companyId}&roleId=2`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
//       setAllUsers(response.data)
//       console.log(response?.data, "Users");
//       const options = [];
//       const option = [];

//       for (const item of response?.data) {
//         var role='Engineer'
//         if(item.roleId==1){
//            role ='CEO'

//            options.push({
//             value: {id:item?.id,name:item.firstName,departmentId:item?.departmentId,department:item.department},
//             label: `${item?.firstName} ${role} `,
//           });
        
//         } if(item.roleId==2){
//           role =`HEAD of ${item.department}`
//           options.push({
//             value: {id:item?.id,name:item.firstName},
//             label: `${item?.firstName} ${role} `,
//           });
//           option.push({
//             value:item?.id,
//             label: `${item?.firstName} ${role} `,
//           });
//        }
//        if(item.roleId==3){
//         role =`Senior Engineer ${item.department}`
//         options.push({
//           value: {id:item?.id,name:item.firstName},
//           label: `${item?.firstName} ${role} `,
//         });
//         option.push({
//           value:item?.id,
//           label: `${item?.firstName} ${role} `,
//         });
//      } if(item.roleId==4){
//        role ='Junior'
//     }
//     if(item.roleId==5){
//       role ='Designer/Draughtsmen'
//    } 

//       }
//       const filteredArray = options.filter(item => item.roleId !== 1);

//       setFilteredUsers(filteredArray)

//       setUserData(options);
//       setUserDatalist(option);

//       // console.log('my options',options);

//       // console.log('my users',userOptions);
//        // Assuming the response.data is an array of DocumentPermissions
//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };
//   // const handleCheckboxChange = (checkedValues) => {
//   //   // Concatenate all selected checkboxes into an array
//   //   const concatenatedString = checkedValues.join(' ')
//   //   setSelectedDepartments(concatenatedString);
//   //   console.log(selectedDepartments);
//   // };
//   useEffect(() => {
//     setUser(JSON.parse(localStorage?.getItem("user")));
//     // Fetch data when the component mounts
//     fetchDepartments();
//     fetchProjects();
//     fetchUsers();
//     fetchData();
//     console.log(data);
//     // console.log(user);
//   }, []);
//   return (
//     <>
//       <Modal
//         title="Upload Document"
//         width={400}
//         centered
//         visible={documentModalVisible}
//         onCancel={documentModalCancel}
//         footer={null}
//         closeIcon={
//           <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//         }
//       >
//         <Row justify="space-between" align="center">
//           <Col span={20}>
//             <Form layout="vertical" name="basic">
//               <Form.Item
//                 label="MDR Title"
//                 name="docTitle"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your title",
//                   },
//                 ]}
//               >
//                 <Input
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </Form.Item>

//               <Form.Item
//                 label="MDR Code"
//                 name="docCode"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your code",
//                   },
//                 ]}
//               >
//                 <Input
//                   value={title}
//                   onChange={(e) => setMdrCode(e.target.value)}
//                 />
//               </Form.Item>


//               <Form.Item
//                 label="Project Name"
//                 name="projectName"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please select Project Name",
//                   },
//                 ]}
//               >
//               <Select
//                   options={projectOptions}
//                   value={projectId}
//                   onChange={(value) => setProjectId(value)}
//                 />              </Form.Item>
//               <Form.Item
//                 label="Add Reviewers"
//                 name="reviewers"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please select Reviewers Name",
//                   },
//                 ]}
//               >
//                 <Checkbox.Group options={userOptions} value={selectedReviewer} onChange={setSelectedReviewer} />

//               </Form.Item> <Form.Item
//                 label="Add Approvers"
//                 name="approvers"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please select Approvers Name",
//                   },
//                 ]}
//               >
//                <Checkbox.Group options={userOptions} value={selectedApprover} onChange={setSelectedApprover} />
//               </Form.Item>
//               <Row>           
//               <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//                   <Button block onClick={record?navigateToMdrTemplateForUpdate:navigateToMdrTemplate} type="primary"htmlType="submit">MDR template</Button>
//                 </Col>
//                 {/* <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//                   <Button block onClick={navigateToMdrTemplate} type="primary"htmlType="submit">Create Custom</Button>
//                 </Col> */}
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </Modal>

//       <Modal
//         title="Assign Document"
//         width={400}
//         centered
//         visible={assignModalVisible}
//         onCancel={assignModalCancel}
//         footer={null}
//         closeIcon={
//           <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//         }
//       >
//         <Row justify="space-between" align="center">
//           <Col span={20}>
//             <Form layout="vertical" name="basic">
//               <Form.Item
//                 label="Project Name"
//                 name="projectName"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please select Project Name",
//                   },
//                 ]}
//               >
//               <Select
//                   options={projectOptions}
//                   value={projectId}
//                   onChange={(value) => setProjectId(value)}
//                 />
//                 </Form.Item>
//                 <Form.Item
//                 label="Assigned MDR to"
//                 name="assignMDR"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please Assign MDR",
//                   },
//                 ]}
//               >
//               <Select
//                   options={userOption}
//                   value={assignedEmployees}
//                   onChange={(value) => setAssignedEmployees(value)}
//                 />
//                 </Form.Item>
//               <Row>           
//               <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//                   <Button block onClick={()=>assignMDR(assignedEmployees,allUsers)} type="primary"htmlType="submit">Assigned</Button>
//                 </Col>
//               </Row>

//               <Row>
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </Modal>
      
//       <Modal
//   title="MDR Information"
//   width={400}
//   centered
//   visible={editModalVisible}
//   onCancel={editModalCancel}
//   footer={null}
//   closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
// >

//   {recordMdr ? (
//     <div style={{ textAlign: "center" }}>
//       <div style={{ textAlign: "left" }}>
//     <Title level={3}>Title: {recordMdr.title || null}</Title><br />
//       <Text strong>Author Name: </Text>
//       <Text>{recordMdr.authorName || null}</Text><br />
//       <Text strong>Department ID: </Text>
//       <Text>{recordMdr.departmentId || null}</Text><br />
//       <Text strong>Project Code: </Text>
//       <Text>{recordMdr.projectCode || null}</Text><br />
//       <Text strong>MDR Code: </Text>
//       <Text>{recordMdr.mdrCode || null}</Text><br />
//       <Text strong>No of Documents: </Text>
//       <Text>{recordMdr.noOfDocuments || null}</Text><br />
//       <Text strong>Percentage: </Text>
//       <Text>{recordMdr.percentage || null}</Text><br />

//       <Text strong>Status: </Text>
//       <Text>{recordMdr.status}</Text><br />
//       <Text strong>Created At: </Text>
//       <Text>{recordMdr.createdAt}</Text>
//       <br /><br />
//       </div>
//       <Button type="primary" style={{ marginTop: "16px" }} onClick={handleEdit}>Add More Documents</Button>
//     </div>
//   ) : null}
// </Modal>




//       <Modal
//         title="Show MDR Documents "
//         width={400}
//         centered
//         visible={showModalVisible}
//         onCancel={showModalCancel}
//         footer={null}
//         closeIcon={
//           <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//         }
//       >
//         <Row justify="space-between" align="center">
//           <Col span={20}>
//           <div>
//           <h3>MDR Documents</h3>
//           {/* <ul>
//             {selectedRows.map((row, index) => (
//               <li key={index}>{row+1}</li>
//             ))}
//           </ul> */}
//     <ul>
//       {docData.map((doc, index) => (
//         <li key={index}>
//           {Object.entries(doc).map(([key, values]) => (
//             <div key={key}>
//               <strong>{key}:</strong>
//               <ul>
//                 {values.map((item, itemIndex) => (
//                   <li key={itemIndex}>
//                     <strong>Document Title:</strong> {item.docTitle} <br />
//                     {/* Add other properties as needed */}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </li>
//       ))}
//     </ul>        </div>
//           </Col>
//         </Row>
//       </Modal>
//       <div style={{ textAlign: "right", marginBottom: "16px" }}>
//         {
//           user?.user.roleId == 1 &&       
//           <Button
//           type="primary"
//           onClick={documentModalShow}
//           // disabled={user?.user?.roleId != 1}
//           style={{ marginRight: '10px' }}
//         >
//           Create MDR Yourself
//         </Button>
//         }

//         {
//                     user?.user.roleId == 1 &&   
//                     <Button
//                     type="primary"
//                     onClick={assignModalShow}
//                     // disabled={user?.user?.roleId != 1}
//                   >
//                     Assign MDR 
//                   </Button>
              

//         }

//       {mdrTemplateVisible && <MdrTemplate />}
//       </div>
//       <div style={{ overflowX: "auto" }}>
//       <Table
//         columns={[
//           {
//             title: "Document Title",
//             dataIndex: "title",
//             key: "title",
//             ...getColumnSearchProps('title'),

//           },
//           {
//             title: "Project Code",
//             dataIndex: "projectCode",
//             key: "projectCode",
//             ...getColumnSearchProps('projectCode'),

//           },
//           {
//             title: "Dept Name",
//             dataIndex: "departmentName",
//             key: "departmentName",
//             ...getColumnSearchProps('departmentName'),

//           },

//           {
//             title: "Author Name",
//             dataIndex: "authorName",
//             key: "authorName",
//             ...getColumnSearchProps('authorName'),

//           },
//           {
//             title: "No of Documents",
//             dataIndex: "noOfDocuments",
//             key: "noOfDocuments",
//             sorter: (a, b) => a.noOfDocuments - b.noOfDocuments,

//           },
//           {
//             title: (
//               "Status"
//             ),
//             key: "status",
//             dataIndex: "status",
        
//         filters: [
        
//               {
//                 text: 'Initialized',
//                 value: 'Initialized',
//               },
//               {
//                 text: 'Ongoing',
//                 value: 'Ongoing',
//               },
//               {
//                 text: 'Completed',
//                 value: 'Completed',
//               },
//             ],
//             onFilter:  (value, record) =>record.status === value,
//           },
          
//           {
//             title: "Action",
//             key: "action",
//             render: (_, record) => (
//               <>
//                 <Space size="middle">
//                 <Button
//                     onClick={() => handleDelete(record)}
//                   >
//                     Delete
//                   </Button>
//                   <Button
//                     key={record?.id}
//                     onClick={() => handleExport(record)}
//                     disabled={user?.user?.roleId != 1}
//                   >
//                     Export
//                   </Button>
//                   {user.user.roleId !== 1 && record.authorId === user?.user.id  && record.status =="Assigned" &&(
//                     <Button
//                       key={record?.id}
//                       onClick={() => createModalShow(record)}
//                     >
//                       Create
//                     </Button>
//                   )}
    
//                   {user.user.roleId==1 &&       
//                   <>
//                   <Button
//                     key={record?.id}
//                     onClick={() => {showModalShow(record)                      
//                     }}
//                   >
//                     Open
//                   </Button>
//                   {/* <Button
//                     key={record?.id}
//                     onClick={() => {editModalShow(record)                      
//                     }}
//                   >
//                     Edit
//                   </Button> */}
//                   </>
                  
//                   }       
//                 </Space>
//               </>
//             ),
//           },
//           {
//             title: "Progress Per Document",
//             key: "percentage",
//             render: (_, record) => (
//               <Space>
//                 {record.percentage !== null ? (
//                   <ProgressComp percentage={record.percentage.toFixed(1)} />
//                 ) : null}
//               </Space>
//             )
//           },
             
//         ]}
//         size="middle"
//         bordered
//       title={() => 'All Department Documents'}
//       footer={() => 'You may filter MDR'}
//         dataSource={data}
//         rowClassName={(record) => {
//           if (matchingRecord && record.id === matchingRecord.selectedRecord.id) {
//             return 'highlighted-row'; // Apply CSS class for highlighting
//           }
//           return '';
//         }}
//       /></div>
//       <ProtectedAppPage />
//     </>
//   );
// }
