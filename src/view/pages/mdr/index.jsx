import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from 'react-router-dom'; 

import {
  Row,
  Col,
  Divider,
  Form,
  Space,
  Table,
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
  const [documentModalVisible, setDocumentModalVisible] = useState(false);
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [showModalVisible, setShowModalVisible] = useState(false);



  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [mdrCode, setMdrCode] = useState("");
  const [noOfDocuments, setNoOfDocuments] = useState("");

  const [status, setStatus] = useState("");
  const [projectOptions, setProjects] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
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


  const showMdrTemplate = () => {
    setMdrTemplateVisible(true);
  };

  const hideMdrTemplate = () => {
    setMdrTemplateVisible(false);
  };

  const serializedDepartmentOption = JSON.stringify(departmentOption);
  console.log("serialized",serializedDepartmentOption)

  const history = useHistory();
  const navigateToMdrTemplate = () => {
    const project = projectOptions.find((item) => item?.value == projectId);
    console.log('departmentOptions',departmentOptions);
    const serializedDepartmentOptions = JSON.stringify(departmentOptions);
    const serializedDepartmentOption = JSON.stringify(departmentOption);
    console.log("serialized",serializedDepartmentOption)
const serializedProjectOptions = JSON.stringify(projectOptions);
const serializedSelectedApprover = JSON.stringify(selectedApprover);
const serializedSelectedReviewer = JSON.stringify(selectedReviewer);

    history.push(`/pages/initialMDR?projectCode=${project.code}&mdrCode=${mdrCode}&departmentOption=${serializedDepartmentOption}&departmentOptions=${serializedDepartmentOptions}&projectOptions=${serializedProjectOptions}&projectId=${projectId}&departmentId=${selectedDepartments}&title=${title}&approver=${serializedSelectedApprover}&reviewer=${serializedSelectedReviewer}`);};
 
  
  const documentModalShow = () => {
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

  const createModalShow = (record) => {
    console.log(record)
    setRecord(record)
    setCreateModalVisible(true);
  };

  const showModalShow = (record) => {
    console.log(record)
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
  console.log("record",record);

  fetchDepartmentDocs(record)


}

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
      setDocData(response.data);
      console.log(docData,'hiiiiiiiii');
    console.log(response.data,"received");
    // Check if response.data is an array before including it in the setData call
    // const newData = Array.isArray(response.data) ? response.data : [];
    // setData([...newData]);
  } catch (error) {
    console.error("Error fetching documents:", error?.message);
  }
};

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
        `http://127.0.0.1:8083/api/documents?projectId${record?.projectId}?companyId=${user?.user?.companyId}?masterDocumentId=${record.mdrCode}`,
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

      console.log('mdr data',response.data);
      if (user?.user?.roleId===3 || user?.user?.roleId ===4) {
        const data = response.data.filter(item => item.authorId === user?.user?.id);
        console.log("data",data);
        setData(data);
      }else if(user?.user?.roleId ===2){
        const data = response.data.filter(item => item.authorId === user?.user?.id);
        setData(data);
      }
      else{
        setData(response.data)
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
      console.log("option",option);
      console.log("options",options);

      setDepartmentOptions(options); 
      setDepartmentOption(option); 
      console.log("option",option);

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

      console.log('my options',options);

      console.log('my users',userOptions);
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
        label="Departments"
        name="departmentIds"
        rules={[{ required: true, message: 'Please select at least one department' }]}
      >
        <Checkbox.Group options={departmentOptions} value={selectedDepartments} onChange={setSelectedDepartments} />
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
              {/* <Form.Item label="Status" name="status">
            <Select
              default="ongoing"
              options={[
                { value: "ongoing", label: "Ongoing" },
                { value: "clientReviewPending", label: "Client Review Pending" },
                { value: "complete", label: "Complete" },
              ]}
              value={status}
              onChange={(e) => setStatus(e)}
            />
          </Form.Item> */}
              {/* <Form.Item
                label="No of Documents"
                name="noOfDocuments"
                rules={[
                  {
                    required: true,
                    message: "Please input No of Documents",
                  },
                ]}
              >
                <Input
                  type="number"
                  value={noOfDocuments}
                  onChange={(e) => setNoOfDocuments(e.target.value)}
                />
              </Form.Item> */}

              <Row>           
              <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button block onClick={navigateToMdrTemplate} type="primary"htmlType="submit">MDR template</Button>
                </Col>
                <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button block onClick={navigateToMdrTemplate} type="primary"htmlType="submit">Create Custom</Button>
                </Col>
                
              </Row>

              <Row>
                {/* <Col md={12} span={24} className="hp-pr-sm-0 mt-2 hp-pr-12 ">
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={() => addDocument()}
                  >
                    Submit
                  </Button>
                </Col> */}

                {/* <Col
                  md={12}
                  span={24}
                  className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12"
                >
                  <Button block onClick={documentModalCancel}>
                    Cancel
                  </Button>
                </Col> */}
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

              {/* <Form.Item
                label="Assigned To"
                name="employees"
                rules={[
                  {
                    required: true,
                    message: "Please select Employees Name",
                  },
                ]}
              > 
              <Checkbox.Group options={userOptions} value={assignedEmployees} onChange={setAssignedEmployees} />
              </Form.Item>  */}
              <Row>           
              <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
                  <Button block onClick={()=>assignMDR(assignedEmployees,allUsers)} type="primary"htmlType="submit">Assigned</Button>
                </Col>
              </Row>

              <Row>
                {/* <Col md={12} span={24} className="hp-pr-sm-0 mt-2 hp-pr-12 ">
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={() => addDocument()}
                  >
                    Submit
                  </Button>
                </Col> */}

                {/* <Col
                  md={12}
                  span={24}
                  className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12"
                >
                  <Button block onClick={documentModalCancel}>
                    Cancel
                  </Button>
                </Col> */}
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
      {docData.map((doc,index) => (
        <li key={index}>
          {/* <strong>Category:</strong> {data[index].category} <br /> */}
          {/* <strong>Code:</strong> {data[index].code} <br /> */}
          <strong>Document Title:</strong> {doc.title} <br />
          {/* <strong>Document Number:</strong> {data[index].document} <br /> */}
          {/* Add other properties as needed */}
        </li>
      ))}
    </ul>
        </div>
          </Col>
        </Row>
      </Modal>
      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button
          type="primary"
          onClick={documentModalShow}
          disabled={user?.user?.roleId != 1}
          style={{ marginRight: '10px' }}
        >
          Create MDR Yourself
        </Button>

        <Button
          type="primary"
          onClick={assignModalShow}
          disabled={user?.user?.roleId != 1}
        >
          Assign MDR 
        </Button>

      {mdrTemplateVisible && <MdrTemplate />}
      </div>
      <Table
        columns={[
          {
            title: "Document Title",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Dept Id",
            dataIndex: "departmentId",
            key: "departmentId",
          },
          {
            title: "Dept Name",
            dataIndex: "departmentName",
            key: "departmentName",
          },
          {
            title: "Project Id",
            dataIndex: "projectId",
            key: "projectId",
          },
          {
            title: "Project Code",
            dataIndex: "projectCode",
            key: "projectCode",
          },
          {
            title: "Author Id",
            dataIndex: "authorId",
            key: "authorId",
          },
          {
            title: "Author Name",
            dataIndex: "authorName",
            key: "authorName",
          },
          {
            title: "No of Documents",
            dataIndex: "noOfDocuments",
            key: "noOfDocuments",
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
          },
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <>
                <Space size="middle">

                  <Button
                    key={record?.id}
                    onClick={() => {
                      exportCSV(record);
                    }}
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
        ]}
        dataSource={data}
      />
      <ProtectedAppPage />
    </>
  );
}
