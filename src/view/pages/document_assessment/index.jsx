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
  Upload,
} from "antd";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from "axios";
import { Checkbox } from "antd";
// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";


export default function DocumentPermissions() {
  const BACKEND_URL = "http://127.0.0.1:8083"; // Update with your backend URL

  const columns = [
    //   {
    //     title: "ID",
    //     dataIndex: "id",
    //     key: "id",
    //   },
      {
        title: "Document Name",
        dataIndex: "docName",
        key: "docName",
      },
    
      {
        title: "MDR Code",
        dataIndex: "masterDocumentCode",
        key: "masterDocumentCode",
      },
      {
        title: "Approver",
        dataIndex: "approver",
        key: "approver",
      },
    
      {
        title: "Reviewer",
        dataIndex: "reviewer",
        key: "reviewer",
      },
      
      {
        title: "Your Role",
        dataIndex: "yourRole",
        key: "yourRole",
      },
      {
        title: "Your Status",
        dataIndex: "yourStatus",
        key: "yourStatus",
      },
    
      {
        title: "Overall Approver Status",
        dataIndex: "approverStatuss",
        key: "approverStatuss",
      },
      {
        title: "Overall Reviewer Status",
        dataIndex: "reviewerStatuss",
        key: "reviewerStatuss",
      },
    
      {
        title: "Creator",
        dataIndex: "allowCreate",
        key: "allowCreate",
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
           
              <a onClick={() => handleOpen(record)}>Open</a>
              <a onClick={() => statusModalShow(record)}>Add Status</a>
                  <a onClick={() => clientModalShow(record)}>Send to Client</a>
            
          </Space>
        ),
      }
    ];
    const permissionsOptions = [
      {
        label: "Reviewer",
        value: "Reviewer",
      },
      {
        label: "Approver",
        value: "Approver",
      },
      {
        label: "Creator",
        value: "Creator",
      },
    ];
    const [selectedStatus, setSelectedStatus] = useState("");
    const [rejectionMarks,setRejectionMarks] = useState("")
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [statusModalVisible, setStatusModalVisible] = useState(false);
    const [clientModalVisible, setClientModalVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState([]);
    const [record, setRecord] = useState();

  const [DocumentPermissionModalVisible, setDocumentPermissionModalVisible] =
    useState(false);
  const [mdrOptions, setMdrData] = useState([]);
  const [userOptions, setUserData] = useState([]);
  const [permissionUser, setpermissionUser] = useState("");

  const [mdr, setMDR] = useState("");

  const [permissionModalVisible, setPermissionModalVisible] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [clients, setClients] = useState([]);

  const [DocumentPermissionOptions, setDocumentPermissions] = useState([]);
  const [checked, setChecked] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [appStatusArr, setAppStatusArr] = useState([]);
  const [revStatusArr, setRevStatusArr] = useState([]);
  const [appCommentArr, setAppCommentArr] = useState([]);
  const [revCommentArr, setRevCommentArr] = useState([]);
  const [appIdArr, setAppIdArr] = useState([]);
  const [revIdArr, setRevIdArr] = useState([]);
  const [showRemarksInput, setShowRemarksInput] = useState(false);

  const [index, setIndex] = useState("");



  const statusModalShow = (record) => {
    setSelectedDocument(record);
    setStatusModalVisible(true);
  };
  const statusModalCancel = () => {
    setSelectedStatus("");
    setStatusModalVisible(false);
  };
  
  const handleStatus = (status) => {
    setSelectedStatus(status);
    if (status === 'Reject') {
      setShowRemarksInput(true);
    } else {
      setShowRemarksInput(false);
    }

    // Your other status change logic here
  };

  const clientModalShow = (record) => {
    console.log(record,"record");
    const serializedRecord = JSON.stringify(record);
    console.log(serializedRecord,"record");
    setRecord(serializedRecord)
    fetchClients()
    setClientModalVisible(true);
  };
  const clientModalCancel = () => {
    setClientModalVisible(false);
  };

  const handleStatusChange = async () => {
    console.log("rejection",rejectionMarks);
    // Check if the selected document is available
    if (selectedDocument) {
      // Perform your logic to update the status here
      // You can use the selectedStatus along with the record data
      // to update the status in the data array or make an API call
  
      const updatedRecord = { ...selectedDocument, status: selectedStatus, remarks:rejectionMarks};

      console.log("updated",updatedRecord);
  
      // Update the data array with the modified record
      const updatedDataArray = data.map((item) =>
        item.id === selectedDocument.id ? updatedRecord : item
      );

      console.log(updatedDataArray,"updatedData");
      // Load data from the specific key
   
      // Trigger a re-render with the updated data
      setUpdatedData(updatedDataArray);
     await updateDocStatus(selectedDocument);
  
      // Close the status modal
      statusModalCancel();
    }
  };
  
  const [DocumentPermissionId, setDocumentPermissionId] = useState("");

  const DocumentPermissionModalShow = () => {
    setDocumentPermissionModalVisible(true);
  };

  
  const sendEmail = async()=>{
    try {
      
    } catch (error) {
      console.error("Error Sending Email:", error?.message);

    }
  }

  // const fetchProjects=async()=>{
  //   try {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8083/api/projects?companyId=${user?.user?.companyId}&clientStatus=fetchClients`

  //     )
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const fetchClients = async()=>{
    try {
      console.log(record,"coddd");
      const response = await axios.get(
        `http://127.0.0.1:8083/api/clients?companyId=${user?.user?.companyId}&recordId=${record}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
        
      console.log(response.data,"received");
      const clients = response.data.map(client => ({
        value: client.Email,
        label: client.Email,
      }));
      console.log("clients",clients);
       setClients(clients);
    } catch (error) {
      console.error("Error fetching clients:", error?.message);

    }
  }
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
    const responseData=await fetchAppRev(record.docName);
    console.log('helllooo',responseData);
     // Replace 'John' with the actual doc's name
     const docName = record.docName;
     const url= `${BACKEND_URL}/documents/${docName}-${record.version}.pdf` 
     console.log(user.user.roleId,user.user.firstName,user);
     let allowed='false';
 if(responseData){
 allowed='true';
 }
     // Redirect to the external URL
      window.location.href = `http://127.0.0.1:3001/react-pdf-highlighter/?docName=${docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
   };
  const addPermission = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8083/api/documents/permissions",
        {
          masterDocumentId: mdr,
          userId: permissionUser,
          companyId: user?.user?.companyId,
          createDocument: checked?.includes("Creator"),
          reviewDocument: checked?.includes("Reviewer"),
          approveDocument: checked?.includes("Approver"),
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
      setMDR("");
      setpermissionUser("");
      setChecked([]);
     await fetchData();
      setDocumentPermissionModalVisible(false);
    } catch (error) {
      // Handle errors
      if (error?.message == "Request failed with status code 403") {
        message.error("Permission Denied to create document on this MDR");
      }
    }
  };
  const fetchMDR = async () => {
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
      const options = [];
      for (const item of response?.data) {
        options.push({
          value: item?.id,
          label: item?.title,
          DocumentPermissionId: item?.DocumentPermissionId,
          departmentId: item?.departmentId,
        });
      }

      setMdrData(options); // Assuming the response.data is an array of DocumentPermissions
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setChecked(checkedValues);
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
      console.log(response?.data, "UUUAUA");
      const options = [];
      for (const item of response?.data) {
        options.push({
          value: item?.id,
          label: `${item?.firstName} ${item?.lastName}`,
        });
      }

      setUserData(options); // Assuming the response.data is an array of DocumentPermissions
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const DocumentPermissionModalCancel = () => {
    setMDR("");
    setDocumentPermissionModalVisible(false);
  };

  const permissionModalShow = () => {
    setPermissionModalVisible(true);
  };
  const permissionModalCancel = () => {
    setPermissionModalVisible(false);
  };
  const addDocumentPermission = async () => {};

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/documents/establishment?companyId=${user?.user?.companyId}&userId=${user?.user?.id}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log('response',response.data);
      
      for(let i of response.data){
        const approverStatusArray = i.approverStatus.split(',').map(num => parseInt(num.trim(), 10));
        const reviewerStatusArray = i.reviewerStatus.split(',').map(num => parseInt(num.trim(), 10));
        const reviewerIdArray = i.reviewerId.split(',').map(num => parseInt(num.trim(), 10));
        const approverIdArray = i.approverId.split(',').map(num => parseInt(num.trim(), 10));
        setRevIdArr(i.reviewerId.split(',').map(num => parseInt(num.trim(), 10)));
        setAppIdArr(i.approverId.split(',').map(num => parseInt(num.trim(), 10)));
        setRevStatusArr(i.reviewerStatus.split(',').map(num => parseInt(num.trim(), 10)));
        setAppStatusArr(i.approverStatus.split(',').map(num => parseInt(num.trim(), 10)));
        console.log(revStatusArr,appStatusArr,'hii');

        if(i.approverId.includes(user.user.id) && i.reviewerId.includes(user.user.id)){
          console.log('YESSSSSSSSSSS');
          i['yourRole']='Approver and Reviewer';
          console.log(approverIdArray.indexOf(user.user.id),'jjjjj');
          console.log(approverIdArray,user.user.id,approverStatusArray[approverIdArray.indexOf(user.user.id)],'ssss'+typeof(approverStatusArray));
         if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==1){
           i['yourStatus']='Rejected';

         }
         else if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==2){
           i['yourStatus']='Accepted';
         }
         else if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==0){
           i['yourStatus']='Pending';
         }
       
        }
        else if(approverIdArray.includes(user.user.id) ){
          console.log('YESSSSSSSSSSS');
          i['yourRole']='Approver';
          setIndex(approverIdArray.indexOf(user.user.id));
          console.log(approverIdArray.indexOf(user.user.id),'jjjjj');
          console.log(approverIdArray,user.user.id,approverStatusArray[approverIdArray.indexOf(user.user.id)],'ssss'+typeof(approverStatusArray));
         if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==1){
           i['yourStatus']='Rejected';

         }
         else if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==2){
           i['yourStatus']='Accepted';
         }
         else if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==0){
           i['yourStatus']='Pending';
         }

        }
        else if(reviewerIdArray.includes(user.user.id)){
          console.log('YESSSSSSSSSSS');
          i['yourRole']='Reviewer';
           setIndex(reviewerIdArray.indexOf(user.user.id));
           console.log(reviewerIdArray.indexOf(user.user.id),'jjjjj');
           console.log(reviewerIdArray,user.user.id,reviewerStatusArray[reviewerIdArray.indexOf(user.user.id)],'ssss'+typeof(reviewerStatusArray));
          if(reviewerStatusArray[reviewerIdArray.indexOf(user.user.id)]==1){
            i['yourStatus']='Rejected';

          }
          else if(reviewerStatusArray[reviewerIdArray.indexOf(user.user.id)]==2){
            i['yourStatus']='Accepted';
          }
          else if(reviewerStatusArray[reviewerIdArray.indexOf(user.user.id)]==0){
            i['yourStatus']='Pending';
          }
        }
       
        if (approverStatusArray.every(num => num === 0)) {
          i['approverStatuss']='Pending';
          
        } else if (approverStatusArray.some(num => num !== 0 && num !== 2)) {
          i['approverStatuss']='Rejected';
        } else if (approverStatusArray.every(num => num === 2)) {
          i['approverStatuss']='Sent to Client';
        }


        if (reviewerStatusArray.every(num => num === 0)) {
          i['reviewerStatuss']='Pending';
        } else if (reviewerStatusArray.every(num => num === 1)) {
          i['reviewerStatuss']='Rejected';
        } else if (reviewerStatusArray.every(num => num === 2)) {
          i['reviewerStatuss']='Sent for Approval';
        }
        else{
          i['reviewerStatuss']='Pending';

        }

      }
      setData(response.data); // Assuming the response.data is an array of departments
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const updateDocStatus = async (myrecord) => {
    try {
      var role = 2;
      console.log(revStatusArr,appStatusArr,'hohohoho');
      let revStat = [...revStatusArr];
 
      let appStat = [...appStatusArr];

      let revComment = [...revCommentArr];
 
      let appComment = [...appCommentArr];
      if (myrecord.yourRole === 'Approver and Reviewer' && selectedStatus === 'Accept') {
        role = 1;
        
        appStat[appIdArr.indexOf(user.user.id)] = 2;
        appComment[appIdArr.indexOf(user.user.id)] = "";
        setAppStatusArr(appStat); 
        setAppCommentArr(appComment); 
        revStat[revIdArr.indexOf(user.user.id)] = 2;
        revComment[revIdArr.indexOf(user.user.id)] = "";
        setRevCommentArr(revComment);
      } else if (myrecord.yourRole === 'Approver and Reviewer' && selectedStatus === 'Reject') {
        role = 1;
        appStat[appIdArr.indexOf(user.user.id)] = 1;
        appComment[appIdArr.indexOf(user.user.id)] = myrecord.remarks;
        setAppCommentArr(appStat);
        role = 0;
        revComment[revIdArr.indexOf(user.user.id)] = myrecord.remarks;
        setRevCommentArr(revComment);
              }
      else if (myrecord.yourRole === 'Approver' && selectedStatus === 'Accept') {
        role = 1;
        appStat[appIdArr.indexOf(user.user.id)] = 2;
        setAppStatusArr(appStat);
        
        appComment[appIdArr.indexOf(user.user.id)] = "";
        setAppCommentArr(appComment); 
      
      } else if (myrecord.yourRole === 'Reviewer' && selectedStatus === 'Accept') {
        role = 0;
        revStat[revIdArr.indexOf(user.user.id)] = 2;
        setRevStatusArr(revStat);
        revComment[revIdArr.indexOf(user.user.id)] = "";
        setRevCommentArr(revComment);
              }
         else if (myrecord.yourRole === 'Approver' && selectedStatus === 'Reject') {
        role = 1;
        appStat[appIdArr.indexOf(user.user.id)] = 1;
        setAppStatusArr(appStat);  
        
        appComment[appIdArr.indexOf(user.user.id)] = myrecord.remarks;
        setAppCommentArr(appComment); 
      
      } else if (myrecord.yourRole === 'Reviewer' && selectedStatus === 'Reject') {
        role = 0;
        revStat[revIdArr.indexOf(user.user.id)] = 1;
        setRevStatusArr(revStat);

        revComment[revIdArr.indexOf(user.user.id)] = myrecord.remarks;
        setRevCommentArr(revComment);
              }
      
              console.log(myrecord.yourRole,selectedStatus,revStat.join(','),appStat.join(','));

      const response = await axios.put(
        `http://127.0.0.1:8083/api/documents/establishment`,
        {
          status: selectedStatus,
          revStatusArr: revStat.join(','), // Convert array to string
          appStatusArr: appStat.join(','), // Convert array to string
          reviewerComment:revComment.join(","),
          approverComment:appComment.join(","),
          docName: myrecord.docName,
        },
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
  
      console.log(response.data);
      await fetchData();
    } catch (error) {
      console.error("Error assigning documents:", error);
    }
  };
  
  useEffect(async () => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    await fetchData();
    fetchUsers();
    fetchMDR();
    // fetchClients();
  }, []);
  useEffect(async () => {

    await fetchClients();
  }, [record]);
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
      { label: "Accept", value: "Accept" },
      { label: "Reject", value: "Reject" },
     
            ]}
            value={selectedStatus}
            onChange={(value) => handleStatus(value)}
            />
        </Form.Item>
        {showRemarksInput && (
              <Form.Item
                label="Remarks"
                name="remarks"
                rules={[
                  {
                    required: true,
                    message: 'Please provide remarks for rejection',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Enter remarks for rejection" value={rejectionMarks} onChange={(e)=>setRejectionMarks(e.target.value)}/>
              </Form.Item>
            )}        
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
  title="Send To Client"
  width={400}
  centered
  visible={clientModalVisible}
  onCancel={clientModalCancel}
  footer={null}
  closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
>
  <Row justify="space-between" align="center">
    <Col span={20}>
      <Form layout="vertical" name="basic">

        <Form.Item
          label="Select Emails"
          name="selectedEmails"
          rules={[
            {
              required: true,
              message: "Please select a Email",
            },
          ]}
        >
          <Select
            options={clients}
            value={selectedEmail}
            onChange={(value) => setSelectedEmail(value)}
          />
        </Form.Item>
        <Row>
          <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
            <Button
              block
              type="primary"
              htmlType="submit"
              onClick={() => sendEmail()}
            >
              Send
            </Button>
          </Col>
          <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
            <Button block onClick={clientModalCancel}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  </Row>
</Modal>


      <Modal
        title="Create Permissions"
        width={416}
        centered
        visible={DocumentPermissionModalVisible}
        onCancel={DocumentPermissionModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
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
            label="Users"
            name="users"
            rules={[
              {
                required: true,
                message: "Please select MDR",
              },
            ]}
          >
            <Select
              options={userOptions}
              value={permissionUser}
              onChange={(value) => setpermissionUser(value)}
            />
          </Form.Item>
          <Form.Item label="Permissions" name="permissions">
            <Checkbox.Group
              options={permissionsOptions}
              defaultValue={0}
              onChange={onChange}
            />
          </Form.Item>

          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => addPermission()}
              >
                Add
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={DocumentPermissionModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button
          type="primary"
          onClick={DocumentPermissionModalShow}
          disabled={user?.user?.roleId != 1}
        >
          Add Permissions
        </Button>
      </div>
      <div style={{ overflowX: "auto" }}>
      <Table columns={columns} dataSource={data} bordered
      size="middle"
      title={() => 'All Documents Assessments'}
      footer={() => 'You may filter Documents'}/></div>
    </>
  );
}
