import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { saveData, loadData, getAllKeys } from '../../storage';
import { useHistory } from 'react-router-dom'; 
import MyTreeView from "../treeview/MyTreeView";
import {Row,Col,Divider,Form,Space,Table,Select,Tag,Input,DatePicker,TimePicker,Button,Modal,message,Upload,
} from "antd";
import { Radio } from "antd";
import axios from "axios";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import ProtectedAppPage from "../Protected";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


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

export default function Document() {
  const BACKEND_URL = "http://54.81.250.98:8083"; // Update with your backend URL

  const history = useHistory();

  const columns = [
    {
      title: "Document Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Document Name",
      dataIndex: "title",
      key: "title",
    }, {
      title: "Version",
      dataIndex: "version",
      key: "version",
    },
    {
      title: "Dept Id",
      dataIndex: "departmentId",
      key: "departmentId",
    },
    {
      title: "Project Id",
      dataIndex: "projectId",
      key: "projectId",
    },
    {
      title: "MDR",
      dataIndex: "title",
      key: "title",
    },
    // {
    //   title: ".exe",
    //   dataIndex: "extension",
    //   key: "extension",
    // },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "assignedTo",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {user.user.roleId != 1 ? record.status=='Initialized'? (
                    <Space size="middle">

            <input type="file" onChange={(e)=>handleFileChange(e,record)}>
             

            </input>
            <a onClick={() => assignModalShow(record)}>Assign Document</a>

            </Space>

            
          ) : user.user.id == record.assignedTo ?(
            <Space size="middle">
            <a onClick={() => handleOpen(record)}>Open</a>
            
            <input type="file" onChange={(e)=>handleFileChange(e,record)}/>
            </Space>

          ): (
            <>
<a onClick={() => handleOpen(record)}>Open</a>
              {/* <a onClick={() => history.push(`/pages/mypdf?documentId=${record.title}`)}>Open</a> */}
              {/* <a onClick={() => statusModalShow(record)}>Add Status</a> */}
            </>
          ):record.status =='Initialized'?              <a onClick={() => assignModalShow(record)}>Assign Document</a>
          :(
            <>
<a onClick={() => handleOpen(record)}>Open</a>
              {/* <a onClick={() => history.push(`/pages/mypdf?documentId=${record.title}`)}>Open</a> */}
              {/* <a onClick={() => statusModalShow(record)}>Add Status</a> */}
            </>
          )}
        </Space>
      ),
    }
  ];
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [documentModalVisible, setDocumentModalVisible] = useState(false);
  const [docTitle, setDocTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [extension, setExtension] = useState("");
  const [mdr, setMDR] = useState("");
  const [file, setFile] = useState(null);
  const [textEditorValue, setTextEditorValue] = useState("");
  const [departmentOptions, setDepartments] = useState([]);
  const [projectOptions, setProjects] = useState([]);
  const [mdrOptions, setMdrData] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [projectCode, setProjectCode] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [deptSuffix, setDeptSuffix] = useState("");
  const [departments,setDepartment] = useState([])
  const [projects,setProject] = useState([])
  const [showTreeView, setShowTreeView] = useState(false);
  const [userOption, setUserDatalist] = useState([]);
  const [assignedEmployees, setAssignedEmployees] = useState([]);
const [myrecord,setMyRecord]=useState({});

  const assignModalShow = async (record) => {
    console.log('recorddddd',record);
    setMyRecord(record);
    console.log('hellloooo',myrecord);
    await  fetchUsers();
   
    setAssignModalVisible(true);

  };

  const assignModalCancel = () => {
    setAssignModalVisible(false);
  };

  const handleProjectWiseClick = () => {
    console.log("clicked");
    setShowTreeView(true);
  };

  const handleDocumentWiseClick = () => {
    console.log("clicked");
    setShowTreeView(false);
  };

  
 
  const documentModalShow = () => {
    setDocumentModalVisible(true);
  };
  const handleOpen = async (record) => {
   const responseData=await fetchAppRev(record.title);
   console.log('helllooo',responseData);
    // Replace 'John' with the actual doc's name
    const docName = record.title;
    const url= `${BACKEND_URL}/uploads/${docName}-${record.version}.pdf` 
    console.log(user.user.roleId,user.user.firstName,user);
    let allowed='false';
if(responseData){
allowed='true';
}
    // Redirect to the external URL
     window.location.href = `http://54.81.250.98:3001/react-pdf-highlighter/?docName=${docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
  };
  const documentModalCancel = () => {
    setMDR("");
    setDocTitle("");
    setExtension("");
    setProjectId("");
    setDepartmentId("");
    setTextEditorValue("");
    setDocumentModalVisible(false);
  };
  
  const fetchAppRev = async (title) => {
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/documents/establishment?companyId=${user?.user?.companyId}&userId=${user.user.id}&docName=${title}`,
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
  const handleFileChange = async (e, record) => {
    const formData = new FormData();

    const uploadedFile = e.target.files[0];
    console.log(record);
    const title=record.title;
    console.log(record.title,record.version);
    if (uploadedFile.name === `${record.title}-${record.version}.pdf`) {
      setFile(uploadedFile);
console.log(formData,'formdata');
      console.log('Uploaded file:', uploadedFile);

      const obj = {
        title: title,
        companyId: user?.user?.companyId,
        roleId: user?.user?.roleId,
        userId: user?.user?.id,
        userName: `${user?.user?.firstName} ${user?.user?.lastName}`,
        "file": uploadedFile
      };
      Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value);
      });
      try {
       
       

        const response = await axios.post(
          `http://54.81.250.98:8083/api/documents/upload`,        
          formData,
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
       
      } catch (error) {
        // Handle errors
  
        message.error(error);
      }

    } else {
      // Show an error message or take appropriate action
      message.error('File name does not match '+ record.title);
      // Clear the file input field
      e.target.value = null;
    }
  };

  const fetchUsers = async () => {

    
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
      console.log(response?.data, "Users");
      const option = [];
let role='';
if(user.user.roleId==1){
  for (const item of response?.data) {
    console.log(myrecord,myrecord.departmentId,item.departmentId);
   if(item.roleId==2  && myrecord.departmentId.indexOf(item.departmentId) !== -1){
    role =`Head of ${item.department}`
    option.push({
      value:item?.id,
      label: `${item?.firstName} ${role} `,
    });
 } 
//    if(item.roleId==4 && item.departmentId==user.user.departmentId){
//      role = `Junior ${item.department}`
//      option.push({
//       value:item?.id,
//       label: `${item?.firstName} ${role} `,
//     });
//   }
//   if(item.roleId==5 && item.departmentId==user.user.departmentId){
//     role ='Designer/Draughtsmen'
//     option.push({
//       value:item?.id,
//       label: `${item?.firstName} ${role} `,
//     });
//  } 
   } }
if(user.user.roleId==2 ){
      for (const item of response?.data) {
       if(item.roleId==3 && item.departmentId==user.user.departmentId){
        role =`Senior Engineer ${item.department}`
        option.push({
          value:item?.id,
          label: `${item?.firstName} ${role} `,
        });
     } 
  //    if(item.roleId==4 && item.departmentId==user.user.departmentId){
  //      role = `Junior ${item.department}`
  //      option.push({
  //       value:item?.id,
  //       label: `${item?.firstName} ${role} `,
  //     });
  //   }
  //   if(item.roleId==5 && item.departmentId==user.user.departmentId){
  //     role ='Designer/Draughtsmen'
  //     option.push({
  //       value:item?.id,
  //       label: `${item?.firstName} ${role} `,
  //     });
  //  } 
       } }
       if(user.user.roleId==3){
        for (const item of response?.data) {
      //    if(item.roleId==3 && item.departmentId==user.user.departmentId){
      //     role =`Senior Engineer ${item.department}`
      //     option.push({
      //       value:item?.id,
      //       label: `${item?.firstName} ${role} `,
      //     });
      //  } 
       if(item.roleId==4 && item.departmentId==user.user.departmentId){
         role = `Junior ${item.department}`
         option.push({
          value:item?.id,
          label: `${item?.firstName} ${role} `,
        });
      }
      if(item.roleId==5 && item.departmentId==user.user.departmentId){
        role ='Designer/Draughtsmen'
        option.push({
          value:item?.id,
          label: `${item?.firstName} ${role} `,
        });
     } 
         } }
         console.log("option",option);
      setUserDatalist(option);
       // Assuming the response.data is an array of DocumentPermissions
    } catch (error) {
      console.error("Error fetching Users:", error?.message);
    }
  };

  const handleFile = (e) => {
    const uploadedFile = e.target.files[0];
    
      setFile(uploadedFile);
      console.log('Uploaded file:', uploadedFile);
   
  };


  const addDocument = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const mdrObj = mdrOptions.find((item) => item?.value == mdr);
      console.log(mdrObj, mdr, user);
      const obj = {
        title: docTitle,
        departmentId: mdrObj?.departmentId,
        projectId: mdrObj?.projectId,
        masterDocumentId: mdr,
        content: textEditorValue,
        extension,
        companyId: user?.user?.companyId,
        roleId: user?.user?.roleId,
        userId: user?.user?.id,
        userName: `${user?.user?.firstName} ${user?.user?.lastName}`,
      };
      Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value);
      });
      console.log(formData);
      const response = await axios.post(
        `http://54.81.250.98:8083/api/documents/?projectCode=${projectCode}&areaCode=${areaCode}&deptSuffix=${deptSuffix}`,        
        formData,
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
     await fetchData();
      documentModalCancel();
    } catch (error) {
      // Handle errors

      if (error?.message == "Request failed with status code 403") {
        message.error("Permission Denied to create document on this MDR");
      }
    }
  };
  const fetchData = async () => {
    
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/documents?companyId=${user?.user?.companyId}&assignedBy=${user.user.roleId}&userId=${user.user.id}&department=${user.user.departmentId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
        


      console.log(response.data,"received");
      // Check if response.data is an array before including it in the setData call
      const newData = Array.isArray(response.data) ? response.data : [];


      setData([...newData]);
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };
  
  const fetchDepartments = async () => {
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
      setDepartment(response.data)
      const options = [];
      for (const item of response?.data) {
        options.push({ value: item?.suffix, label: item?.suffix });
      }
      setDepartments(options); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/projects?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      setProject(response.data)
      const options = [];
      for (const item of response?.data) {
        options.push({ value: item?.code, label: item?.code });
      }
      setProjects(options); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const fetchMDR = async () => {
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/documents/mdr?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      const options = [];
      for (const item of response?.data) {
        options.push({
          value: item?.id,
          label: item?.title,
          projectId: item?.projectId,
          departmentId: item?.departmentId,
        });
      }

      setMdrData(options); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const [statusModalVisible, setStatusModalVisible] = useState(false);
const [selectedStatus, setSelectedStatus] = useState("");
const statusModalShow = (record) => {
  setSelectedDocument(record);
  setStatusModalVisible(true);
};

const statusModalCancel = () => {
  setSelectedStatus("");
  setStatusModalVisible(false);
};
const [updatedData, setUpdatedData] = useState([]);

const handleStatusChange = () => {
  // Check if the selected document is available
  if (selectedDocument) {
    // Perform your logic to update the status here
    // You can use the selectedStatus along with the record data
    // to update the status in the data array or make an API call

    const updatedRecord = { ...selectedDocument, status: selectedStatus };

    // Update the data array with the modified record
    const updatedDataArray = data.map((item) =>
      item.id === selectedDocument.id ? updatedRecord : item
    );
    console.log(selectedDocument)
    saveData(selectedDocument.id, { 'status': selectedStatus });

    // Load data from the specific key
    const loadedData = loadData(selectedDocument.id);
    console.log('status',loadedData);

    // Trigger a re-render with the updated data
    setUpdatedData(updatedDataArray);

    // Close the status modal
    statusModalCancel();
  }
};


useEffect(() => {
  setUser(JSON.parse(localStorage?.getItem("user")));
  // Fetch data when the component mounts
  fetchDepartments();
  fetchProjects();
  fetchMDR();
  fetchData();
  fetchUsers()
}, [myrecord]); // Add updatedData as a dependency

useEffect(() => {
  // Update the data state with the updatedData
  setData(updatedData);
}, [updatedData]);
const assignDoc = async(assignedEmployees,myrecord)=>{
  try {
    console.log('aaaa',myrecord.title);
    // console.log(allUsers);
    // const assignedUser = allUsers.find(user => user.id == assignedEmployees)      
    // console.log(assignedUser);
    const project = projectOptions.find((item) => item?.value == projectId);
    const department = departmentOptions.find(
      (item) => item?.value == departmentId
    );
    const response = await axios.put(
      `http://54.81.250.98:8083/api/documents/?assignedTo=${assignedEmployees}&assignedBy=${user.user.roleId}&assignedFrom=${user.user.id}&docName=${myrecord.title}`,
      {},
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

  return (
    <>
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
              { label: "In-Progress", value: "in-progress" },
      { label: "Hold", value: "hold" },
      { label: "Pending Review (In-House)", value: "pending-review-in-house" },
      { label: "Pending Approval (In-House)", value: "pending-approval-in-house" },
      { label: "Reviewed (In-House)", value: "reviewed-in-house" },
      { label: "Approved (In-House)", value: "approved-in-house" },
      { label: "Pending Review (Client)", value: "pending-review-client" },
      { label: "Pending Endorsement (Client)", value: "pending-endorsement-client" },
      { label: "Endorsed (Client)", value: "endorsed-client" },
      { label: "Document Ready to Publish", value: "ready-to-publish" },
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
                label="Assign Document to"
                name="assignDoc"
                rules={[
                  {
                    required: true,
                    message: "Please Assign Document",
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
                  <Button block onClick={()=>assignDoc(assignedEmployees,myrecord)} type="primary"htmlType="submit">Assigned</Button>
                </Col>
              
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>



      <Modal
        title="Upload Document"
        width={1000}
        centered
        visible={documentModalVisible}
        onCancel={documentModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Row justify="space-between" align="center">
          <Col span={15}>
            <ReactQuill
              style={{ height: "300px" }}
              theme="snow"
              value={textEditorValue}
              onChange={setTextEditorValue}
            />
          </Col>
          <Col span={7}>
            <Form layout="vertical" name="basic">
              <Form.Item
                label="Document Title"
                name="docTitle"
                rules={[
                  {
                    required: true,
                    message: "Please input your title",
                  },
                ]}
              >
                <Input
                  value={docTitle}
                  onChange={(e) => setDocTitle(e.target.value)}
                />
              </Form.Item>


              <Form.Item
                label="MDR"
                name="mdr"
                rules={[
                  {
                    required: true,
                    message: "Please select MDR",
                  },
                ]}
              >
                <Select
                  options={mdrOptions}
                  value={mdr}
                  onChange={(value) => setMDR(value)}
                />
              </Form.Item>

              <Form.Item
                label="Project Code"
                name="projectCode"
                rules={[
                  {
                    required: true,
                    message: "Please select Project Code",
                  },
                ]}
              >
                <Select
                  options={projectOptions}
                  value={projectCode}
                  onChange={(value) => setProjectCode(value)}
                />
              </Form.Item>

              <Form.Item
                label="Area Code"
                name="areaCode"
                rules={[
                  {
                    required: true,
                    message: "Please select Area Code",
                  },
                ]}
              >
                <Select
            options={[
              { label: "01", value: "01" },
              { label: "02", value: "02" },

            ]}
                  value={areaCode}
                  onChange={(value) => setAreaCode(value)}
                />
              </Form.Item>

              <Form.Item
                label="Department Suffix"
                name="deptSuffix"
                rules={[
                  {
                    required: true,
                    message: "Please Add Department Suffix",
                  },
                ]}
              >
                <Select
            options={departmentOptions}
                  value={deptSuffix}
                  onChange={(value) => setDeptSuffix(value)}
                />
              </Form.Item>

              <Form.Item
                label="Extension"
                name="extension"
                rules={[
                  {
                    required: true,
                    message: "Please select Extention",
                  },
                ]}
              >
                <Select
                  options={[
                    { value: ".pdf", label: ".pdf" },
                    { value: ".docx", label: ".docx" },
                  ]}
                  value={extension}
                  onChange={(value) => setExtension(value)}
                />
              </Form.Item>

              {/* <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload> */}
              <input type="file" onChange={handleFile} />
              <Row>
                <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={() => addDocument()}
                  >
                    Submit
                  </Button>
                </Col>

                <Col
                  md={12}
                  span={24}
                  className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12"
                >
                  <Button block onClick={documentModalCancel}>
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Modal>
      <div style={{ textAlign: "right", marginBottom: "16px" ,padding:"15px", gap:"15px"}}>
        <Button
          type="primary"
          onClick={documentModalShow}
          disabled={user?.user?.roleId == 3}
        >
          Add Documents
        </Button>

        <Button
          type="primary"
          onClick={handleProjectWiseClick}
          disabled={user?.user?.roleId == 3}
        >Project Wise
        </Button>

        <Button
          type="primary"
          onClick={handleDocumentWiseClick}
          disabled={user?.user?.roleId == 3}
        >Documents
        </Button>
      </div>
      {
        showTreeView?<MyTreeView />:      <div style={{ overflowX: "auto" }}>
        <Table columns={columns} dataSource={data} /></div>
      }
      
      <ProtectedAppPage />      
    </>
  );
}
