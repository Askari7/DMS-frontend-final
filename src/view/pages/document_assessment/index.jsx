// import React, { useState, useEffect, useRef } from "react";

// import {
//   Button,Form, Row,Col,Space,Table,Select,Input,DatePicker,TimePicker,Modal,message,Upload,Timeline} from "antd";
// import { RiCloseFill, RiCalendarLine  } from "react-icons/ri";
// import axios from "axios";
// import { Checkbox } from "antd";
// import { SearchOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';
// import { useHistory ,Link} from 'react-router-dom';
// import { SmileOutlined } from '@ant-design/icons'; // Import SmileOutlined icon
// import NotificationCardOne from "../../main/widgets/cards/advance/notificationCardOne";
// import NotificationCardTwo from "../../main/widgets/cards/advance/notificationCardTwo";
// import SocailMediaCard from "../../main/widgets/cards/advance/socialMediaCard";
// import SubscribeCard from "../../main/widgets/cards/advance/subscribeCard";

// // import InfoProfile from "./personel-information";
// // import MenuProfile from "./menu";
// // import PasswordProfile from "./password-change";
// // import ProtectedAppPage from "../Protected";


// export default function DocumentPermissions() {
//   const history = useHistory();

//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const searchInput = useRef(null);
  
//   // const handleRowClick = (record) => {
//   //   alert("Hello")
//   //   console.log(record);
//   //   return (
//   //     <Link to="/pages/timeline" />
//   //   );
//   // };
//   const handleRowClick = (record) => {
//     alert("hello")
//     history.push('/pages/timeline');
//   };
  
//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };
//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText('');
//   };
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

//   const BACKEND_URL = "https://novacon.live"; // Update with your backend URL

//   const columns = [
//     //   {
//     //     title: "ID",
//     //     dataIndex: "id",
//     //     key: "id",
//     //   },
//       {
//         title: "Document Name",
//         dataIndex: "docName",
//         key: "docName",
//         ...getColumnSearchProps('docName'),

//       },
    
//       {
//         title: "MDR Code",
//         dataIndex: "masterDocumentCode",
//         key: "masterDocumentCode",
//         ...getColumnSearchProps('masterDocumentCode'),

//       },
//       {
//         title: "Approver",
//         dataIndex: "approver",
//         key: "approver",
//         ...getColumnSearchProps('approver'),

//       },
    
//       {
//         title: "Reviewer",
//         dataIndex: "reviewer",
//         key: "reviewer",
//         ...getColumnSearchProps('reviewer'),

//       },
      
//       {
//         title: "Your Role",
//         dataIndex: "yourRole",
//         key: "yourRole",
//       },
//       {
//         title: "Your Status",
//         dataIndex: "yourStatus",
//         key: "yourStatus",
//       },
    
//       {
//         title: "Overall Approver Status",
//         dataIndex: "approverStatuss",
//         key: "approverStatuss",
//       },
//       {
//         title: "Overall Reviewer Status",
//         dataIndex: "reviewerStatuss",
//         key: "reviewerStatuss",
//       },
    
//       {
//         title: "Version",
//         dataIndex: "version",
//         key: "version",
//       },
//       {
//         title: "Action",
//         key: "action",
//         render: (_, record) => (
//           <Space size="middle">
           
//               <a onClick={() => handleOpen(record)}>Open</a>
//               <a onClick={() => statusModalShow(record)}>Add Status</a>
//               <a onClick={() => clientModalShow(record)}>Send to Client</a>
//               <a onClick={() => timelineModalShow(record)}>Show Doc History</a> 
//           </Space>
//         ),
//       }
//     ];
//     const permissionsOptions = [
//       {
//         label: "Reviewer",
//         value: "Reviewer",
//       },
//       {
//         label: "Approver",
//         value: "Approver",
//       },
//       {
//         label: "Creator",
//         value: "Creator",
//       },
//     ];
//     const [selectedStatus, setSelectedStatus] = useState("");
//     const [rejectionMarks,setRejectionMarks] = useState("")
//     const [selectedDocument, setSelectedDocument] = useState(null);
//     const [statusModalVisible, setStatusModalVisible] = useState(false);
//     const [clientModalVisible, setClientModalVisible] = useState(false);
//     const [selectedEmail, setSelectedEmail] = useState([]);
//     const [record, setRecord] = useState();
//     const [timelineModalVisible, setTimelineModalVisible] = useState(false);

    

//   const [DocumentPermissionModalVisible, setDocumentPermissionModalVisible] = useState(false);
//   const [mdrOptions, setMdrData] = useState([]);
//   const [userOptions, setUserData] = useState([]);
//   const [permissionUser, setpermissionUser] = useState("");

//   const [mdr, setMDR] = useState("");

//   const [permissionModalVisible, setPermissionModalVisible] = useState(false);

//   const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
//   const [data, setData] = useState([]);
//   const [fetched, setFetched] = useState([]);

//   const [clients, setClients] = useState([]);

//   const [DocumentPermissionOptions, setDocumentPermissions] = useState([]);
//   const [checked, setChecked] = useState([]);
//   const [updatedData, setUpdatedData] = useState([]);
//   const [appStatusArr, setAppStatusArr] = useState([]);
//   const [revStatusArr, setRevStatusArr] = useState([]);

//   const [appStatusArrOne, setAppStatusArrOne] = useState();
//   const [revStatusArrOne, setRevStatusArrOne] = useState();

//   const [appCommentArr, setAppCommentArr] = useState([]);
//   const [revCommentArr, setRevCommentArr] = useState([]);
//   const [appIdArr, setAppIdArr] = useState([]);
//   const [revIdArr, setRevIdArr] = useState([]);
//   const [showRemarksInput, setShowRemarksInput] = useState(false);

//   const [index, setIndex] = useState("");

//   const [thisOne, setThisOne] = useState("");


//   const statusModalShow = (record) => {
//     setSelectedDocument(record);
//     setStatusModalVisible(true);
//   };
//   const statusModalCancel = () => {
//     setSelectedStatus("");
//     setStatusModalVisible(false);
//   };
//   const timelineModalShow = (record) => {
//     setThisOne(record.docName)
//     setTimelineModalVisible(true);
//   };
//   const timelineModalCancel = () => {
//     setTimelineModalVisible(false);
//   };
//   const handleStatus = (status) => {
//     setSelectedStatus(status);
//     if (status === 'Reject') {
//       setShowRemarksInput(true);
//     } else {
//       setShowRemarksInput(false);
//     }

//     // Your other status change logic here
//   };
// //   useEffect(() => {
// //     if (record) {
// //         sendEmail();
// //     }
// // }, [record]);

//   const clientModalShow = (record) => {
//     console.log(record,"record");
//     const serializedRecord = JSON.stringify(record);
//     console.log(serializedRecord,"record");
//     setRecord(serializedRecord)
//     fetchClients()
//     setClientModalVisible(true);
//   };
//   const clientModalCancel = () => {
//     setClientModalVisible(false);
//   };

//   const handleStatusChange = async (selectedStatus) => {
//     console.log("rejection",rejectionMarks);
//     console.log(selectedStatus,"status bhi aya");
//     // Check if the selected document is available
//     if (selectedDocument) {

//       console.log(selectedDocument,'document');
//       console.log(selectedStatus,"status");

//       console.log(revIdArr,appIdArr,"ye bhi dekh");
//       console.log(revStatusArr,appStatusArr,"ye bhi");

//       // Perform your logic to update the status here
//       // You can use the selectedStatus along with the record data
//       // to update the status in the data array or make an API call
//       // Load data from the specific key
   
//       // Trigger a re-render with the updated data
//       // setUpdatedData(updatedDataArray);

//      await updateDocStatus(selectedDocument);
  
//       // Close the status modal
//       statusModalCancel();
//     }
//   };
  
//   const [DocumentPermissionId, setDocumentPermissionId] = useState("");

//   const DocumentPermissionModalShow = () => {
//     setDocumentPermissionModalVisible(true);
//   };

  
//   const sendEmail = async()=>{
//     const parsedRecord = JSON.parse(record);

//     console.log('Record:', parsedRecord.docName);

//       const responseData=await fetchAppRev(parsedRecord.docName);
//       console.log('helllooo',responseData);
//        // Replace 'John' with the actual doc's name
//        const docName = parsedRecord.docName;
//        const url= `${BACKEND_URL}/uploads/${docName}-${parsedRecord.version}.pdf` 
//        console.log(user.user.roleId,user.user.firstName,user);
//        let allowed='false';
//    if(responseData){
//    allowed='true';
//    }
//        // Redirect to the external URL
//        const myUrl = `https://novacon.live/react-pdf-highlighter/?docName=${docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
     
//     try {
//       const response = await axios.post(
//         `https://novacon.live/api/clients/send-email-client`,
//         {
//           roleId:user.user.roleId,
//           companyId:user?.user?.companyId,
//           url:myUrl,

//           clientName:selectedEmail
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
      
//     } catch (error) {
//       console.error("Error Sending Email:", error?.message);

//     }
//   }

//   // const fetchProjects=async()=>{
//   //   try {
//   //     const response = await axios.get(
//   //       `https://novacon.live/api/projects?companyId=${user?.user?.companyId}&clientStatus=fetchClients`

//   //     )
//   //   } catch (error) {
//   //     console.error(error)
//   //   }
//   // }

//   const fetchClients = async()=>{
//     try {
//       console.log(record,"coddd");
//       const response = await axios.get(
//         `https://novacon.live/api/clients?companyId=${user?.user?.companyId}&recordId=${record}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//           },
//         }
//       );
        
//       console.log(response.data,"received");
//       const clients = response.data.map(client => ({
//         value: client.Email,
//         label: client.Email,
//       }));
//       console.log("clients",clients);
//        setClients(clients);
//     } catch (error) {
//       console.error("Error fetching clients:", error?.message);

//     }
//   }
//   const fetchAppRev = async (title) => {
//     try {
//       const response = await axios.get(
//         `https://novacon.live/api/documents/establishment?companyId=${user?.user?.companyId}&userId=${user.user.id}&docName=${title}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
        


//       console.log(response.data,"received");
//       return response.data;
    
//     } catch (error) {
//       console.error("Error fetching documents:", error?.message);
//     }
//   };
//   const handleOpen = async (record) => {
//     const responseData=await fetchAppRev(record.docName);
//     console.log('helllooo',responseData);
//      // Replace 'John' with the actual doc's name
//      const docName = record.docName;
//      const url= `${BACKEND_URL}/uploads/${docName}-${record.version}.pdf` 
//      console.log(user.user.roleId,user.user.firstName,user);
//      let allowed='false';
//  if(responseData){
//  allowed='true';
//  }
//      // Redirect to the external URL
//       window.location.href = `https://novacon.live/react-pdf-highlighter/?docName=${docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
//    };
//   const addPermission = async () => {
//     try {
//       const response = await axios.post(
//         "https://novacon.live/api/documents/permissions",
//         {
//           masterDocumentId: mdr,
//           userId: permissionUser,
//           companyId: user?.user?.companyId,
//           createDocument: checked?.includes("Creator"),
//           reviewDocument: checked?.includes("Reviewer"),
//           approveDocument: checked?.includes("Approver"),
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
//       setMDR("");
//       setpermissionUser("");
//       setChecked([]);
//      await fetchData();
//       setDocumentPermissionModalVisible(false);
//     } catch (error) {
//       // Handle errors
//       if (error?.message == "Request failed with status code 403") {
//         message.error("Permission Denied to create document on this MDR");
//       }
//     }
//   };
//   const fetchMDR = async () => {
//     try {
//       const response = await axios.get(
//         `https://novacon.live/api/documents/mdr?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
//       const options = [];
//       for (const item of response?.data) {
//         options.push({
//           value: item?.id,
//           label: item?.title,
//           DocumentPermissionId: item?.DocumentPermissionId,
//           departmentId: item?.departmentId,
//         });
//       }

//       setMdrData(options); // Assuming the response.data is an array of DocumentPermissions
//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };
//   const onChange = (checkedValues) => {
//     console.log("checked = ", checkedValues);
//     setChecked(checkedValues);
//   };
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(
//         `https://novacon.live/api/users?companyId=${user?.user?.companyId}&roleId=2`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
//       console.log(response?.data, "UUUAUA");
//       const options = [];
//       for (const item of response?.data) {
//         options.push({
//           value: item?.id,
//           label: `${item?.firstName} ${item?.lastName}`,
//         });
//       }

//       setUserData(options); // Assuming the response.data is an array of DocumentPermissions
//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };
//   const DocumentPermissionModalCancel = () => {
//     setMDR("");
//     setDocumentPermissionModalVisible(false);
//   };

//   const permissionModalShow = () => {
//     setPermissionModalVisible(true);
//   };
//   const permissionModalCancel = () => {
//     setPermissionModalVisible(false);
//   };
//   const addDocumentPermission = async () => {};

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://novacon.live/api/documents/establishment?companyId=${user?.user?.companyId}&userId=${user?.user?.id}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//           },
//         }
//       );
//       console.log('response',response.data);

//       const approverStatusArrays = []
//       const reviewerStatusArrays =[]
//       const reviewerIdArrays = []
//       const approverIdArrays = []

//       for(let i of response.data){
//         console.log(i,"response.data",i.id);

//         const approverStatusArray = i.approverStatus.split(',').map(num => parseInt(num.trim(), 10));
//         console.log(approverStatusArray,"AppStatusArray");

//         const reviewerStatusArray = i.reviewerStatus.split(',').map(num => parseInt(num.trim(), 10));
//         console.log(reviewerStatusArray,"RevStatusArray");

//         const reviewerIdArray = i.reviewerId.split(',').map(num => parseInt(num.trim(), 10));
//         const approverIdArray = i.approverId.split(',').map(num => parseInt(num.trim(), 10));
//         console.log(reviewerIdArray,approverIdArray,"ID Arrays");

//         const approverCommentArray = i.approverComment.split(',');
//         const reviewerCommentArray = i.reviewerComment.split(',');
        
//         console.log(approverCommentArray,reviewerCommentArray,"Comments");

//         approverStatusArrays.push({"id":i.id,"status":approverStatusArray,"comment":approverCommentArray})
//         reviewerStatusArrays.push({"id":i.id,"status":reviewerStatusArray,"comment":reviewerCommentArray})
        
//         reviewerIdArrays.push({"id":i.id,"status":reviewerIdArray})
//         approverIdArrays.push({"id":i.id,"status":approverIdArray})

//         setRevIdArr(reviewerIdArrays);
//         setAppIdArr(approverIdArrays);

//         setRevStatusArr(reviewerStatusArrays);
//         setAppStatusArr(approverStatusArrays);

//         if(i.approverId.includes(user.user.id) && i.reviewerId.includes(user.user.id)){
//           i['yourRole']='Approver and Reviewer';
//           if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==1){
//            i['yourStatus']='Rejected';
//          }
//          else if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==2){
//            i['yourStatus']='Accepted';
//          }
//          else if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==0){
//            i['yourStatus']='Pending';
//          }
//         }
//         else if(approverIdArray.includes(user.user.id) ){
//           console.log(approverIdArray.includes(user.user.id),"approver ha")
//           i['yourRole']='Approver';

//           setIndex(approverIdArray.indexOf(user.user.id));

//           console.log(approverIdArray.indexOf(user.user.id),'jjjjj');
//           console.log(approverIdArray,user.user.id,approverStatusArray[approverIdArray.indexOf(user.user.id)],'ssss'+typeof(approverStatusArray));
//          if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==1){
//            i['yourStatus']='Rejected';

//          }
//          else if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==2){
//            i['yourStatus']='Accepted';
//          }
//          else if(approverStatusArray[approverIdArray.indexOf(user.user.id)]==0){
//            i['yourStatus']='Pending';
//          }

//         }
//         else if(reviewerIdArray.includes(user.user.id)){
//           console.log(reviewerIdArray.includes(user.user.id),"reviewer ha")
//           i['yourRole']='Reviewer';

//            setIndex(reviewerIdArray.indexOf(user.user.id));

//            console.log(reviewerIdArray.indexOf(user.user.id),'jjjjj');
//            console.log(reviewerIdArray,user.user.id,reviewerStatusArray[reviewerIdArray.indexOf(user.user.id)],'ssss'+typeof(reviewerStatusArray));
//           if(reviewerStatusArray[reviewerIdArray.indexOf(user.user.id)]==1){
//             i['yourStatus']='Rejected';

//           }
//           else if(reviewerStatusArray[reviewerIdArray.indexOf(user.user.id)]==2){
//             i['yourStatus']='Accepted';
//           }
//           else if(reviewerStatusArray[reviewerIdArray.indexOf(user.user.id)]==0){
//             i['yourStatus']='Pending';
//           }
//         }
       
//         if (approverStatusArray.every(num => num === 0)) {
//           i['approverStatuss']='Pending';
          
//         } else if (approverStatusArray.some(num => num !== 0 && num !== 2)) {
//           i['approverStatuss']='Rejected';
//         } else if (approverStatusArray.every(num => num === 2)) {
//           i['approverStatuss']='Sent to Client';
//         }
//         else{
//           i['approverStatuss']='Pending';

//         }


//         if (reviewerStatusArray.every(num => num === 0)) {
//           i['reviewerStatuss']='Pending';
//         } else if (reviewerStatusArray.every(num => num === 1)) {
//           i['reviewerStatuss']='Rejected';
//         } else if (reviewerStatusArray.every(num => num === 2)) {
//           i['reviewerStatuss']='Sent for Approval';
//         }
//         else{
//           i['reviewerStatuss']='Pending';

//         }

//       }
//       console.log(approverStatusArrays,reviewerStatusArrays,reviewerIdArrays,approverIdArrays,"arrays hain ye ");
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };

//   const fetch = async()=>{
//     try {
//       const establishment = await axios.post(`https://novacon.live/api/documents/establishment`,{companyId:user?.user.companyId},
//       {
//         headers: {
//           Authorization: user?.accessToken,
//         },
//       })
//       setFetched(establishment.data);

      
//       // Function to organize objects based on docName and store version and createdAt in a dictionary
//   const organizeByDocName = (data) => {
//   const docNameDictionary = {};

//   // Iterate over each object in the data array
//   data.forEach((item) => {
//       const { docName, version, createdAt, reviewerComment, approverComment } = item;

//       // Check if docName already exists in the dictionary
//       if (!docNameDictionary[docName]) {
//           // If docName does not exist, initialize it as an empty array
//           docNameDictionary[docName] = [];
//       }

//       // Push version and createdAt values into the array for the corresponding docName
//       docNameDictionary[docName].push({ version, createdAt, reviewerComment,approverComment });
//   });

//   return docNameDictionary;
// };

// // Call the function with the establishment data
// const organizedData = organizeByDocName(establishment.data);

// // Output the organized data (docName dictionary)
// console.log(organizedData,"organizedData");
//   setFetched(organizedData)
//     } catch (error) {
//       console.error(error)
//     }
//   }


//   const updateDocStatus = async (myrecord) => {

//     console.log(myrecord,"record dekhS");
//     const myrecordId = myrecord.id;

//     const revID = revIdArr.find(item => item.id === myrecordId);
//     const appID = appIdArr.find(item => item.id === myrecordId);
    
//     console.log(revID,appID,"APPREV");
//     const reviewId = revID.status
//     const approveId = appID.status
//     console.log(reviewId,approveId,"REVIEWAPPROVE");
//     console.log(reviewId,approveId,'ids');
//     const updatedRevStatusObj = revStatusArr.find(item => item.id === myrecordId);
//     const updatedAppStatusObj = appStatusArr.find(item => item.id === myrecordId);
//     console.log(updatedRevStatusObj,updatedAppStatusObj,"STATUS OBJ");
//     const statusForRev = updatedRevStatusObj.status
//     const statusForApp = updatedAppStatusObj.status
//     console.log(statusForRev,statusForApp,"STATUS FOR ");
//     const commentForRev = updatedRevStatusObj.comment
//     const commentForApp = updatedAppStatusObj.comment
//     console.log(commentForRev,commentForApp,"COmment For");
//     console.log(statusForApp,statusForRev,"obj");

//     if (myrecord.yourRole === 'Approver and Reviewer' && selectedStatus === 'Accept') {
//         statusForApp[approveId.indexOf(user.user.id)] = 2;
//         statusForRev[reviewId.indexOf(user.user.id)] = 2;
//     } else if (myrecord.yourRole === 'Approver and Reviewer' && selectedStatus === 'Reject'){
//       statusForApp[approveId.indexOf(user.user.id)] = 1;
//       statusForRev[reviewId.indexOf(user.user.id)] = 1;

//       const appIndex = approveId.indexOf(user.user.id)
//       const revIndex = reviewId.indexOf(user.user.id)

//       commentForApp[appIndex] = rejectionMarks
//       commentForRev[revIndex] = rejectionMarks


//     } else if (myrecord.yourRole === 'Approver' && selectedStatus === 'Accept') {
//       statusForApp[approveId.indexOf(user.user.id)] = 2;
//     } else if (myrecord.yourRole === 'Reviewer' && selectedStatus === 'Accept') {
//       statusForRev[reviewId.indexOf(user.user.id)] = 2;
//     } else if (myrecord.yourRole === 'Approver' && selectedStatus === 'Reject') {
//       statusForApp[approveId.indexOf(user.user.id)] = 1;
//       const appIndex = approveId.indexOf(user.user.id)

//       commentForApp[appIndex] = rejectionMarks
//     } else if (myrecord.yourRole === 'Reviewer' && selectedStatus === 'Reject') {
//       statusForRev[reviewId.indexOf(user.user.id)] = 1;
//       const revIndex = reviewId.indexOf(user.user.id)

//       commentForRev[revIndex] = rejectionMarks
//     }

//     console.log(statusForRev,"changed Rev");
//     console.log(statusForApp,"changed App");

//     // // Set the modified arrays
//     setRevStatusArrOne(statusForRev);
//     setAppStatusArrOne(statusForApp);
//     const record = JSON.stringify(myrecord);
//     console.log(record,"record bhej rha hun");
//     try {
//       if(rejectionMarks ){
        
//         const response = await axios.put(
//           `https://novacon.live/api/documents/establishment?yourRole=${myrecord.yourRole}
//           &version=${myrecord.version}&userName=${myrecord.userName}&approver=${myrecord.approver}&reviewer=${myrecord.reviewer}
//           &reviewerId=${myrecord.reviewerId}&approverId=${myrecord.approverId}
//           &docDepartmentId=${myrecord.docDepartmentId}&masterDocumentCode=${myrecord.masterDocumentCode}&masterDocumentName=${myrecord.masterDocumentName}
//           &companyId=${myrecord.companyId}

//           `,
//           {
//             // status: selectedStatus,
//             revStatusArr: statusForRev.join(','), // Convert array to string
//             appStatusArr: statusForApp.join(','), // Convert array to string
//             reviewerComment:commentForRev.join(","),
//             approverComment:commentForApp.join(","),
//             docName: myrecord.docName,
//           },
//           {
//             headers: {
//               Authorization: user?.accessToken,
//               // Add other headers if needed
//             },
            
//           }
//         );
//         console.log(response.data,"data aya");
//         message.success(response.data.message)
//       }else{
//         const response = await axios.put(
//           `https://novacon.live/api/documents/establishment?yourRole=${myrecord.yourRole}&record=${record}`,
//           {
//             revStatusArr: statusForRev.join(','), // Convert array to string
//             appStatusArr: statusForApp.join(','), // Convert array to string
//             docName: myrecord.docName,
//           },
//           {
//             headers: {
//               Authorization: user?.accessToken,
//               // Add other headers if needed
//             },
//           }
//         );
//         message.success(response.data.message)
//         console.log(response.data,"data aya");

//       }
//       setSelectedStatus('')
//       await fetchData()
//     } catch (error) {
//       console.error(error)
//     }
// };

//   useEffect(async () => {
//     setUser(JSON.parse(localStorage?.getItem("user")));
//     // Fetch data when the component mounts
//     await fetchData();
//     fetchUsers();
//     fetchMDR();
//     fetch()
//     // fetchClients();
//   }, []);
//   useEffect(async () => {

//     await fetchClients();
//   }, [record]);
//   return (
//     <>
//     <Modal
//   title="Change Status"
//   width={400}
//   centered
//   visible={statusModalVisible}
//   onCancel={statusModalCancel}
//   footer={null}
//   closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
// >
//   <Row justify="space-between" align="center">
//     <Col span={20}>
//       <Form layout="vertical" name="basic">
//         <Form.Item
//           label="Select Status"
//           name="selectedStatus"
//           rules={[
//             {
//               required: true,
//               message: "Please select a status",
//             },
//           ]}
//         >
//           <Select
//             options={[
//       { label: "Accept", value: "Accept" },
//       { label: "Reject", value: "Reject" },
     
//             ]}
//             value={selectedStatus}
//             onChange={(value) => handleStatus(value)}
//             />
//         </Form.Item>
//         {showRemarksInput && (
//               <Form.Item
//                 label="Remarks"
//                 name="remarks"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please provide remarks for rejection',
//                   },
//                 ]}
//               >
//                 <Input.TextArea rows={4} placeholder="Enter remarks for rejection" value={rejectionMarks} onChange={(e)=>setRejectionMarks(e.target.value)}/>
//               </Form.Item>
//             )}        
//             <Row>
//           <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//             <Button
//               block
//               type="primary"
//               htmlType="submit"
//               onClick={() => handleStatusChange(selectedStatus)}
//             >
//               Submit
//             </Button>
//           </Col>
//           <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
//             <Button block onClick={statusModalCancel}>
//               Cancel
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </Col>
//   </Row>
// </Modal>




// <Modal
//   title="Timeline"
//   width={400}
//   centered
//   visible={timelineModalVisible} // Ensure this is true to show the modal
//   onCancel={timelineModalCancel}
//   footer={null}
//   closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
// >
// <Row justify="space-between" align="center">
//   <Col span={20}>
//             <NotificationCardOne data={fetched} thisOne = {thisOne} user={user}/>
//             {/* <NotificationCardTwo/>
//             <SocailMediaCard/>
//             <SubscribeCard/> */}

//     {/* <Timeline
//     items={[
//       {
//         color: 'green',
//         children: 'Create a services site 2015-09-01',
//       },
//       {
//         color: 'green',
//         children: 'Create a services site 2015-09-01',
//       },
//       {
//         color: 'red',
//         children: (
//           <>
//             <p>Solve initial network problems 1</p>
//             <p>Solve initial network problems 2</p>
//             <p>Solve initial network problems 3 2015-09-01</p>
//           </>
//         ),
//       },
//       {
//         children: (
//           <>
//             <p>Technical testing 1</p>
//             <p>Technical testing 2</p>
//             <p>Technical testing 3 2015-09-01</p>
//           </>
//         ),
//       },
//       {
//         color: 'gray',
//         children: (
//           <>
//             <p>Technical testing 1</p>
//             <p>Technical testing 2</p>
//             <p>Technical testing 3 2015-09-01</p>
//           </>
//         ),
//       },
//       {
//         color: 'gray',
//         children: (
//           <>
//             <p>Technical testing 1</p>
//             <p>Technical testing 2</p>
//             <p>Technical testing 3 2015-09-01</p>
//           </>
//         ),
//       },
//       {
//         color: '#00CCFF',
//         dot: <SmileOutlined />,
//         children: <p>Custom color testing</p>,
//       },
//     ]}
//   /> */}
//     </Col>
//   </Row>
// </Modal>




// <Modal
//   title="Send To Client"
//   width={400}
//   centered
//   visible={clientModalVisible}
//   onCancel={clientModalCancel}
//   footer={null}
//   closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
// >
//   <Row justify="space-between" align="center">
//     <Col span={20}>
//       <Form layout="vertical" name="basic">

//         <Form.Item
//           label="Select Emails"
//           name="selectedEmails"
//           rules={[
//             {
//               required: true,
//               message: "Please select a Email",
//             },
//           ]}
//         >
//           <Select
//             options={clients}
//             value={selectedEmail}
//             onChange={(value) => setSelectedEmail(value)}
//           />
//         </Form.Item>
//         <Row>
//           <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//             <Button
//               block
//               type="primary"
//               htmlType="submit"
//               onClick={() => sendEmail()}
//             >
//               Send
//             </Button>
//           </Col>
//           <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
//             <Button block onClick={clientModalCancel}>
//               Cancel
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </Col>
//   </Row>
// </Modal>


//       <Modal
//         title="Create Permissions"
//         width={416}
//         centered
//         visible={DocumentPermissionModalVisible}
//         onCancel={DocumentPermissionModalCancel}
//         footer={null}
//         closeIcon={
//           <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//         }
//       >
//         <Form layout="vertical" name="basic">
//           <Form.Item
//             label="MDR"
//             name="mdr"
//             rules={[
//               {
//                 required: true,
//                 message: "Please select MDR",
//               },
//             ]}
//           >
//             <Select
//               options={mdrOptions}
//               value={mdr}
//               onChange={(value) => setMDR(value)}
//             />
//           </Form.Item>
//           <Form.Item
//             label="Users"
//             name="users"
//             rules={[
//               {
//                 required: true,
//                 message: "Please select MDR",
//               },
//             ]}
//           >
//             <Select
//               options={userOptions}
//               value={permissionUser}
//               onChange={(value) => setpermissionUser(value)}
//             />
//           </Form.Item>
//           <Form.Item label="Permissions" name="permissions">
//             <Checkbox.Group
//               options={permissionsOptions}
//               defaultValue={0}
//               onChange={onChange}
//             />
//           </Form.Item>

//           <Row>
//             <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//               <Button
//                 block
//                 type="primary"
//                 htmlType="submit"
//                 onClick={() => addPermission()}
//               >
//                 Add
//               </Button>
//             </Col>

//             <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
//               <Button block onClick={DocumentPermissionModalCancel}>
//                 Cancel
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Modal>

//       <div style={{ textAlign: "right", marginBottom: "16px" }}>
//         <Button
//           type="primary"
//           onClick={DocumentPermissionModalShow}
//           disabled={user?.user?.roleId != 1}
//         >
//           Add Permissions
//         </Button>
//       </div>
//       <div style={{ overflowX: "auto" }}>
//       <Table columns={columns} dataSource={data} bordered
//       size="middle"
//       title={() => 'All Documents Assessments'}
//       footer={() => 'You may filter Documents'}
//       // onRow={(record) => ({
//       //   onClick: () => timelineModalShow(record),
//       // })}
//       />
//       </div>
//     </>
//   );
// }








import React, { useState, useEffect, useRef } from "react";

import {
  Button,Form, Row,Col,Space,Table,Select,Input,DatePicker,TimePicker,Modal,message,Upload,Timeline,
  Tooltip} from "antd";
import { RiCloseFill, RiCalendarLine, RiCustomerService2Fill  } from "react-icons/ri";
import axios from "axios";
import { Checkbox } from "antd";
import ExcelJS from "exceljs";
import Logo from "./pec.png";
import smallLogo from "./novacon.png";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useHistory ,Link} from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons'; // Import SmileOutlined icon
import NotificationCardOne from "../../main/widgets/cards/advance/notificationCardOne";
import NotificationCardTwo from "../../main/widgets/cards/advance/notificationCardTwo";
import SocailMediaCard from "../../main/widgets/cards/advance/socialMediaCard";
import SubscribeCard from "../../main/widgets/cards/advance/subscribeCard";
import { AddReaction, AddSharp, Assignment, DocumentScannerOutlined, OpenInFull, Person, PersonPin, TimelineOutlined } from "@mui/icons-material";
import { TimelineContent, TimelineDot } from "@material-ui/lab";
import { Status } from "iconsax-react";

// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";


export default function DocumentPermissions() {
  const history = useHistory();

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  
  const [form] = Form.useForm();


  const handleSubmit = () => {
    form.validateFields().then((values) => {
      handleStatusChange(selectedStatus)      
      form.resetFields();
      setRemarks("")
    });
  };

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

  const BACKEND_URL = "https://novacon.live"; // Update with your backend URL

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
        ...getColumnSearchProps('docName'),

      },
    
      {
        title: "MDR Code",
        dataIndex: "masterDocumentCode",
        key: "masterDocumentCode",
        ...getColumnSearchProps('masterDocumentCode'),

      },
      {
        title: "Approver",
        dataIndex: "approver",
        key: "approver",
        ...getColumnSearchProps('approver'),

      },
    
      {
        title: "Reviewer",
        dataIndex: "reviewer",
        key: "reviewer",
        ...getColumnSearchProps('reviewer'),

      },
      
      {
        title: "Your Role",
        dataIndex: "yourRole",
        key: "yourRole",
        ...getColumnSearchProps('yourRole'),
      },
      {
        title: "Your Status",
        dataIndex: "yourStatus",
        key: "yourStatus",
        ...getColumnSearchProps('yourStatus'),
      },
    
      {
        title: "Overall Approver Status",
        dataIndex: "approverStatuss",
        key: "approverStatuss",
        ...getColumnSearchProps('approverStatuss'),
      },
      {
        title: "Overall Reviewer Status",
        dataIndex: "reviewerStatuss",
        key: "reviewerStatuss",
        ...getColumnSearchProps('reviewerStatuss'),
      },
      {
        title: "Client Status",
        dataIndex: "clientStatus",
        key: "clientStatus",
        ...getColumnSearchProps('clientStatus'),
      },
    
      {
        title: "Version",
        dataIndex: "version",
        key: "version",
        ...getColumnSearchProps('version'),
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Tooltip title="Open">
  <Button
    size="middle"
    icon={<OpenInFull />}
    // disabled={user?.user?.roleId !== 1}
    onClick={() => handleOpen(record)}
  />
</Tooltip>
          {/* <Button
            size="middle"
            icon={<Assignment />}
            onClick={() => handleOpen(record)}
          /> */}

          {/* <Button
            size="middle"
            icon={<AddSharp />}
            onClick={() => statusModalShow(record)}
          /> */}
          <Tooltip title="Add Status">
  <Button
    size="middle"
    icon={<AddSharp />}
    disabled={record?.yourRole == ""}
    onClick={() => statusModalShow(record)}
  />
</Tooltip>
          {/* <Button
            size="middle"
            icon={<Person />}
            onClick={() => clientModalShow(record)}
          /> */}

<Tooltip title="Send To Client">
  <Button
    size="middle"
    icon={<Person />}
    disabled={user?.user?.roleId !== 1}
    onClick={() => clientModalShow(record)}
  />
</Tooltip>
          {/* <Button
            size="middle"
            icon={<TimelineOutlined />}
            onClick={() => timelineModalShow(record)}
          /> */}

          
<Tooltip title="View Timeline">
  <Button
    size="middle"
    icon={<TimelineOutlined />}
    // disabled={user?.user?.roleId !== 1}
    onClick={() => timelineModalShow(record)}
  />
</Tooltip>


          {/* <Button
            size="middle"
            icon={<DocumentScannerOutlined />}
            onClick={() => handleExport(record)}
          /> */}
          <Tooltip title="Export CSV">
  <Button
    size="middle"
    icon={<DocumentScannerOutlined />}
    // disabled={user?.user?.roleId !== 1}
    onClick={() => handleExport(record)}
  />
</Tooltip>
              {/* <a onClick={() => handleOpen(record)}>Open</a>
              <a onClick={() => statusModalShow(record)}>Add Status</a>
              <a onClick={() => clientModalShow(record)}>Send to Client</a>
              <a onClick={() => timelineModalShow(record)}>Show Doc History</a> 
              <a onClick={() => handleExport(record)}>Export Comments</a>  */}

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

    const column = [
      //   {
      //     title: "ID",
      //     dataIndex: "id",
      //     key: "id",
      //   },
        {
          title: "Document Name",
          dataIndex: "docName",
          key: "docName",
          ...getColumnSearchProps('docName'),
  
        },


        {
          title: "Your Role",
          dataIndex: "yourRole",
          key: "yourRole",
        },
        {
          title: "Your Status",
          dataIndex: "clientStatus",
          key: "clientStatus",
        },
    
      
        {
          title: "Version",
          dataIndex: "version",
          key: "version",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
             
                <a onClick={() => handleOpen(record)}>Open</a>
                <a onClick={() => statusModalShow(record)}>Add Status</a>
            </Space>
          ),
        }
      ];
      

    const [selectedStatus, setSelectedStatus] = useState("");
    const [remarks,setRemarks] = useState("")
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [statusModalVisible, setStatusModalVisible] = useState(false);
    const [clientModalVisible, setClientModalVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState([]);
    const [record, setRecord] = useState();
    const [timelineModalVisible, setTimelineModalVisible] = useState(false);

    const [userOptionForCSV, setUserOptions] = useState([]);


  const [DocumentPermissionModalVisible, setDocumentPermissionModalVisible] = useState(false);
  const [mdrOptions, setMdrData] = useState([]);
  const [userOptions, setUserData] = useState([]);
  const [permissionUser, setpermissionUser] = useState("");
  const [comments, setComments] = useState([]);

  const [mdr, setMDR] = useState("");

  const [permissionModalVisible, setPermissionModalVisible] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState([]);

  const [clients, setClients] = useState([]);

  const [DocumentPermissionOptions, setDocumentPermissions] = useState([]);
  const [checked, setChecked] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [appStatusArr, setAppStatusArr] = useState([]);
  const [revStatusArr, setRevStatusArr] = useState([]);

  const [appStatusArrOne, setAppStatusArrOne] = useState();
  const [revStatusArrOne, setRevStatusArrOne] = useState();

  const [appCommentArr, setAppCommentArr] = useState([]);
  const [revCommentArr, setRevCommentArr] = useState([]);
  const [appIdArr, setAppIdArr] = useState([]);
  const [revIdArr, setRevIdArr] = useState([]);
  const [showRemarksInput, setShowRemarksInput] = useState(false);

  const [index, setIndex] = useState("");

  const [thisOne, setThisOne] = useState("");


  const statusModalShow = (record) => {
    setSelectedDocument(record);
    setStatusModalVisible(true);
  };
  const statusModalCancel = () => {
    setSelectedStatus("");
    setStatusModalVisible(false);
  };
  const timelineModalShow = (record) => {
    setThisOne(record.docName)
    setTimelineModalVisible(true);
  };
  const timelineModalCancel = () => {
    setTimelineModalVisible(false);
  };
  const handleStatus = (status) => {
    setSelectedStatus(status);
    if (status === 'Reject' ||status ==="Accept") {
      setShowRemarksInput(true);
    }
    // Your other status change logic here
  };
//   useEffect(() => {
//     if (record) {
//         sendEmail();
//     }
// }, [record]);

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

  // const handleStatusChange = async (selectedStatus) => {
  //   console.log("rejection",rejectionMarks);
  //   console.log(selectedStatus,"status bhi aya");
  //   // Check if the selected document is available
  //   if (selectedDocument) {

  //     console.log(selectedDocument,'document');
  //     console.log(selectedStatus,"status");

  //     console.log(revIdArr,appIdArr,"ye bhi dekh");
  //     console.log(revStatusArr,appStatusArr,"ye bhi");

  //     // Perform your logic to update the status here
  //     // You can use the selectedStatus along with the record data
  //     // to update the status in the data array or make an API call
  //     // Load data from the specific key
   
  //     // Trigger a re-render with the updated data
  //     // setUpdatedData(updatedDataArray);

  //    await updateDocStatus(selectedDocument);
  
  //     // Close the status modal
  //     statusModalCancel();
  //   }
  // };
  
  const reviewDocByClient = async (myrecord) => {

    console.log(myrecord,"record dekhS");
    
    const Id = myrecord.clientId;
    const status = selectedStatus

    const comment = remarks?remarks:''
    const version = myrecord.version
    
    const myrecordId = myrecord.id;
    const revID = revIdArr.find(item => item.id === myrecordId);
    const appID = appIdArr.find(item => item.id === myrecordId);
    const reviewId = revID.status
    const approveId = appID.status
    console.log(reviewId,approveId,"REVIEWAPPROVE");
    console.log(reviewId,approveId,'ids');
    const updatedRevStatusObj = revStatusArr.find(item => item.id === myrecordId);
    const updatedAppStatusObj = appStatusArr.find(item => item.id === myrecordId);
    try {
      if((remarks && status ==="Reject")||status==="Reject"){
        const response = await axios.put(
          `https://novacon.live/api/documents/review?yourRole=${"client"}&myrecord=${myrecord}
          &version=${myrecord.version}&userName=${myrecord.userName}
          &companyId=${myrecord.companyId}&rev=${revID}&app=${appID}
          `,
          {
            version,
            clientStatus:"Reject",
            clientComment:comment,
            docName: myrecord.docName,
            rev:updatedRevStatusObj,
            app:updatedAppStatusObj,
            myrecord:myrecord
          },
          {
            headers: {
              Authorization: user?.accessToken,
              // Add other headers if needed
            },
            
          }
        );
        console.log(response.data,"data aya");
        message.success(response.data.message)
      }else{
        const response = await axios.put(
          `https://novacon.live/api/documents/review?yourRole=${"client"}&record=${record}&rev=${revID}&app=${appID}`,
          {
            version,
            clientComment:remarks,
            clientStatus:"Accept",
            myrecord:myrecord,
            docName: myrecord.docName,
          },
          {
            headers: {
              Authorization: user?.accessToken,
              // Add other headers if needed
            },
          }
        );
        message.success(response.data.message)
        console.log(response.data,"data aya");
        
      }
    //   setSelectedStatus('')
      await fetchData()
    } catch (error) {
      console.error(error)
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
  const handleExport = async (record, imageUrl) => {
    await fetchCommentsForExport(record);
    console.log(comments,"comments");

    const modified = comments.map((obj) => {
      const { id,...newObj } = obj;
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
      width: 10
    }));
  
    console.log(result, 'resultresult');
  
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("MDR Data");
    sheet.properties.defaultRowHeight = 75;
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
        docName: item.docName,
        version: item.version,
        Inhouse:item.Inhouse,

        Resolved: item.Resolved,
        Approved: item.Approved,
        createdAt: formatDate(item.createdAt),
        reply: item.reply,
        replyBy: item.replyBy,
        text:item.text,
        commentBy:item.commentBy,
        pageNumber:item.pageNumber

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
      const cellStart = sheet.getColumn(1).width * 1.4; // Adjust this factor to fine-tune positioning
      sheet.addImage(smallLogoId, {
        tl: { col: 5.5, row: footerRow.number - 1, offsetX: cellStart, offsetY: 10 },
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

    // if (comments.length > 0) {
    //   const csvData = convertToCSV(comments);
    //   const blob = new Blob([csvData], { type: 'text/csv' });
    //   const url = window.URL.createObjectURL(blob);
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.setAttribute('download', `Comments for ${comments[0].docName}.csv`);
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // }
  };

  const convertToCSV = (data) => {
    const csvRows = [];
  
    // Function to flatten nested objects
    const flattenObject = (obj, prefix = '') => {
      return Object.keys(obj).reduce((acc, key) => {
        const propName = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
          const flattened = flattenObject(obj[key], propName);
          return { ...acc, ...flattened };
        } else {
          return { ...acc, [propName]: obj[key] };
        }
      }, {});
    };
  
    // Flatten each object in 'data' array
    const flattenedObjects = data.map(obj => flattenObject(obj));
  
    // Get all unique keys from flattened objects
    const headers = flattenedObjects.reduce((acc, flattenedObject) => {
      return [...acc, ...Object.keys(flattenedObject)];
    }, []);
  
    // Remove duplicates and sort headers alphabetically
    const uniqueHeaders = [...new Set(headers)].sort();
  
    // Add headers to CSV
    csvRows.push(`"${uniqueHeaders.join('","')}"`);
  
    // Add values for each object to CSV
    flattenedObjects.forEach(flattenedObject => {
      const values = uniqueHeaders.map(header => {
        const cellValue = flattenedObject[header];
        if (Array.isArray(cellValue)) {
          // Join array values with ';'
          return `"${cellValue.map(subObj => Object.values(subObj).join(',')).join(';')}"`;
        } else if (typeof cellValue === 'object' && cellValue !== null) {
          // Convert nested object to string representation
          return `"${JSON.stringify(cellValue)}"`;
        } else {
          return `"${cellValue}"`;
        }
      });
      csvRows.push(values.join(','));
    });
  
    return csvRows.join('\n');
  };
  

  const fetchCommentsForExport = async (record) => {
    try {
      // console.log('recorddd',record);
      const response = await axios.get(
        `https://novacon.live/api/documents/exportComments?docName=${record.docName}&version=${record.version}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response.data,'data');
// Assuming response.data is your array of objects
const data = response.data;

const dataWithoutUnwantedFields = response.data.map((item) => {
  // Create a new object excluding id, updatedAt, and comment fields
  const { id, updatedAt, comment,emoji, ...rest } = item;
  return rest;
});
console.log(dataWithoutUnwantedFields,'datawithout');

// Set state or do further processing with the modified data
setComments(dataWithoutUnwantedFields);

  
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };


  const handleStatusChange = async (selectedStatus) => {
    // console.log("rejection",rejectionMarks);
    console.log(selectedStatus,"status bhi aya");
    // Check if the selected document is available
    if (selectedDocument) {

      console.log(selectedDocument,'document');
      console.log(selectedStatus,"status");

      console.log(revIdArr,appIdArr,"ye bhi dekh");
      console.log(revStatusArr,appStatusArr,"ye bhi");

      // Perform your logic to update the status here
      // You can use the selectedStatus along with the record data
      // to update the status in the data array or make an API call
      // Load data from the specific key
   
      // Trigger a re-render with the updated data
      // setUpdatedData(updatedDataArray);
     user.user.roleId == 6 ? 
     await reviewDocByClient(selectedDocument):
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
    const parsedRecord = JSON.parse(record);

    console.log('Record:', parsedRecord.docName);

      const responseData=await fetchAppRev(parsedRecord.docName);
      console.log('helllooo',responseData);
       // Replace 'John' with the actual doc's name
       const docName = parsedRecord.docName;
       const docVersion = parsedRecord.version;

       const url= `${BACKEND_URL}/uploads/${docName}-${parsedRecord.version}.pdf` 
       console.log(user.user.roleId,user.user.firstName,user);
       let allowed='false';
   if(responseData){
   allowed='true';
   }
       // Redirect to the external URL
       const myUrl = `https://novacon.live/react-pdf-highlighter/?docName=${docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
     
    try {
      const response = await axios.post(
        `https://novacon.live/api/clients/send-email-client`,
        {
          parsedRecord,
          docVersion,
          docName,
          roleId:user.user.roleId,
          companyId:user?.user?.companyId,
          url:myUrl,
          clientName:selectedEmail,

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
      
    } catch (error) {
      console.error("Error Sending Email:", error?.message);

    }
  }

  // const fetchProjects=async()=>{
  //   try {
  //     const response = await axios.get(
  //       `https://novacon.live/api/projects?companyId=${user?.user?.companyId}&clientStatus=fetchClients`

  //     )
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const fetchClients = async()=>{
    try {
      console.log(record,"coddd");
      const response = await axios.get(
        `https://novacon.live/api/clients?companyId=${user?.user?.companyId}&recordId=${record}`,
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
        `https://novacon.live/api/documents/establishment?companyId=${user?.user?.companyId}&userId=${user.user.id}&docName=${title}`,
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
    const url = `${BACKEND_URL}/uploads/${record.docName}-${record.version}.pdf`;
    console.log(user.user.roleId, user.user.firstName, user);
    
    let allowed = 'false';
    if (responseData) {
      allowed = 'true';
    }
    console.log(record.version,'version');
    const version = record.version

    // Check if the document exists
    try {
      const response = await axios.get(
        `https://novacon.live/api/documents/checkDocuments?companyId=${user?.user?.companyId}&docName=${record.docName}&masterDocumentCode=${record.masterDocumentCode}&version=${record.version}&roleId=${user?.user.roleId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response,response.data.status,"checkDocuments");
      
      if (response.data.status) {
        console.log("response.data.status");
        
        // Document exists, proceed with redirect
        window.location.href = `https://novacon.live/react-pdf-highlighter/?docName=${record.docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
      } else {
        // Document does not exist, show an alert
        message.warning('Document not uploaded yet.');
      }
    } catch (error) {
      console.error('Error checking document:', error);
      alert('An error occurred while checking the document.');
    }
  };
  const addPermission = async () => {
    try {
      const response = await axios.post(
        "https://novacon.live/api/documents/permissions",
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
        `https://novacon.live/api/documents/mdr?companyId=${user?.user?.companyId}`,
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
        `https://novacon.live/api/users?companyId=${user?.user?.companyId}&roleId=2`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response?.data, "UUUAUA");
      const options = [];
      const users=[]
      for (const item of response?.data) {
        users[item.id] = `${item.firstName} ${item.lastName}`

        options.push({
          value: item?.id,
          label: `${item?.firstName} ${item?.lastName}`,
        });
      }
      setUserOptions(users)
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
        `https://novacon.live/api/documents/establishment?companyId=${user?.user?.companyId}&userId=${user?.user?.id}&roleId=${user.user.roleId}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
      console.log('response',response.data);

      const approverStatusArrays = []
      const reviewerStatusArrays =[]
      const reviewerIdArrays = []
      const approverIdArrays = []

      for(let i of response.data){
        console.log(i,"response.data",i.id);

        const approverStatusArray = i.approverStatus.split(',').map(num => parseInt(num.trim(), 10));
        console.log(approverStatusArray,"AppStatusArray");

        const reviewerStatusArray = i.reviewerStatus.split(',').map(num => parseInt(num.trim(), 10));
        console.log(reviewerStatusArray,"RevStatusArray");

        const reviewerIdArray = i.reviewerId.split(',').map(num => parseInt(num.trim(), 10));
        const approverIdArray = i.approverId.split(',').map(num => parseInt(num.trim(), 10));
        console.log(reviewerIdArray,approverIdArray,"ID Arrays");

        const approverCommentArray = i.approverComment.split(',');
        const reviewerCommentArray = i.reviewerComment.split(',');
        
        console.log(approverCommentArray,reviewerCommentArray,"Comments");

        approverStatusArrays.push({"id":i.id,"status":approverStatusArray,"comment":approverCommentArray})
        reviewerStatusArrays.push({"id":i.id,"status":reviewerStatusArray,"comment":reviewerCommentArray})
        
        reviewerIdArrays.push({"id":i.id,"status":reviewerIdArray})
        approverIdArrays.push({"id":i.id,"status":approverIdArray})

        setRevIdArr(reviewerIdArrays);
        setAppIdArr(approverIdArrays);

        setRevStatusArr(reviewerStatusArrays);
        setAppStatusArr(approverStatusArrays);

        if(i.approverId.includes(user.user.id) && i.reviewerId.includes(user.user.id)){
          i['yourRole']='Approver and Reviewer';
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
          console.log(approverIdArray.includes(user.user.id),"approver ha")
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
          console.log(reviewerIdArray.includes(user.user.id),"reviewer ha")
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
        else{
          if(user?.user.roleId==6){
            i['yourRole']='Client';
          }
          else{
            i['yourRole']='';
          }
        }
       
        if (approverStatusArray.every(num => num === 0)) {
          i['approverStatuss']='Pending';
          
        } else if (approverStatusArray.some(num => num !== 0 && num !== 2)) {
          i['approverStatuss']='Rejected';
        } else if (approverStatusArray.every(num => num === 2)) {
          i['approverStatuss']='Approved(in-house)';
        }
        else{
          i['approverStatuss']='Pending';

        }


        if (reviewerStatusArray.every(num => num === 0)) {
          i['reviewerStatuss']='Pending';
        } else if (reviewerStatusArray.every(num => num === 1)) {
          i['reviewerStatuss']='Rejected';
        } else if (reviewerStatusArray.every(num => num === 2)) {
          i['reviewerStatuss']='All Reviews Done';
        }
        else{
          i['reviewerStatuss']='Pending';

        }

      }

      console.log(approverStatusArrays,reviewerStatusArrays,reviewerIdArrays,approverIdArrays,"arrays hain ye ");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };

  const fetch = async()=>{
    try {
      const establishment = await axios.post(`https://novacon.live/api/documents/establishment`,{companyId:user?.user.companyId},
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


  const updateDocStatus = async (myrecord) => {

    
    const myrecordId = myrecord.id;
    const revID = revIdArr.find(item => item.id === myrecordId);
    const appID = appIdArr.find(item => item.id === myrecordId);
    console.log(revID,appID,"APPREV");
    const reviewId = revID.status
    const approveId = appID.status
    console.log(reviewId,approveId,"REVIEWAPPROVE");
    console.log(reviewId,approveId,'ids');
    const updatedRevStatusObj = revStatusArr.find(item => item.id === myrecordId);
    const updatedAppStatusObj = appStatusArr.find(item => item.id === myrecordId);
    console.log(updatedRevStatusObj,updatedAppStatusObj,"STATUS OBJ");
    const statusForRev = updatedRevStatusObj.status
    const statusForApp = updatedAppStatusObj.status
    console.log(statusForRev,statusForApp,"STATUS FOR ");
    const commentForRev = updatedRevStatusObj.comment
    const commentForApp = updatedAppStatusObj.comment
    console.log(commentForRev,commentForApp,"COmment For");
    console.log(statusForApp,statusForRev,"obj");


    try {
      const response = await axios.get(
        `https://novacon.live/api/documents/checkDocuments?companyId=${user?.user?.companyId}&docName=${myrecord.docName}&masterDocumentCode=${myrecord.masterDocumentCode}&version=${myrecord.version}&roleId=${user?.user.roleId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response,response.data.status,"checkDocuments");
      
      if (response.data.status) {
        console.log("response.data.status");
        
        // Document exists, proceed with redirect
        // window.location.href = `https://novacon.live/react-pdf-highlighter/?docName=${record.docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
      } else {
        // Document does not exist, show an alert
        message.warning('Document not uploaded yet.');
        return
      }
    } catch (error) {
      console.error('Error checking document:', error);
      alert('An error occurred while checking the document.');
    }


    if (myrecord.yourRole === 'Approver and Reviewer' && selectedStatus === 'Accept') {
        statusForApp[approveId.indexOf(user.user.id)] = 2;
        statusForRev[reviewId.indexOf(user.user.id)] = 2;
        const appIndex = approveId.indexOf(user.user.id)
      const revIndex = reviewId.indexOf(user.user.id)
        commentForApp[appIndex] = remarks
      commentForRev[revIndex] = remarks

    } else if (myrecord.yourRole === 'Approver and Reviewer' && selectedStatus === 'Reject'){
      statusForApp[approveId.indexOf(user.user.id)] = 1;
      statusForRev[reviewId.indexOf(user.user.id)] = 1;

      const appIndex = approveId.indexOf(user.user.id)
      const revIndex = reviewId.indexOf(user.user.id)

      commentForApp[appIndex] = remarks
      commentForRev[revIndex] = remarks


    } else if (myrecord.yourRole === 'Approver' && selectedStatus === 'Accept') {
      const appIndex = approveId.indexOf(user.user.id)
      const revIndex = reviewId.indexOf(user.user.id)
      commentForApp[appIndex] = remarks

      statusForApp[approveId.indexOf(user.user.id)] = 2;
    } else if (myrecord.yourRole === 'Reviewer' && selectedStatus === 'Accept') {
      const appIndex = approveId.indexOf(user.user.id)
      const revIndex = reviewId.indexOf(user.user.id)
      statusForRev[reviewId.indexOf(user.user.id)] = 2;
      commentForRev[revIndex] = remarks

    } else if (myrecord.yourRole === 'Approver' && selectedStatus === 'Reject') {
      
      statusForApp[approveId.indexOf(user.user.id)] = 1;
      const appIndex = approveId.indexOf(user.user.id)

      commentForApp[appIndex] = remarks
    } else if (myrecord.yourRole === 'Reviewer' && selectedStatus === 'Reject') {
      
      statusForRev[reviewId.indexOf(user.user.id)] = 1;
      const revIndex = reviewId.indexOf(user.user.id)

      commentForRev[revIndex] = remarks
    }

    console.log(statusForRev,"changed Rev");
    console.log(statusForApp,"changed App");

    // // Set the modified arrays
    setRevStatusArrOne(statusForRev);
    setAppStatusArrOne(statusForApp);
    const record = JSON.stringify(myrecord);
    console.log(record,"record bhej rha hun");
    try {
      if((remarks && selectedStatus === "Reject")||selectedStatus==="Reject"){
        const response = await axios.put(
          `https://novacon.live/api/documents/establishment?yourRole=${myrecord.yourRole}
          &version=${myrecord.version}&userName=${myrecord.userName}&approver=${myrecord.approver}&reviewer=${myrecord.reviewer}
          &reviewerId=${myrecord.reviewerId}&approverId=${myrecord.approverId}
          &docDepartmentId=${myrecord.docDepartmentId}&masterDocumentCode=${myrecord.masterDocumentCode}&masterDocumentName=${myrecord.masterDocumentName}
          &companyId=${myrecord.companyId}

          `,
          {
            // status: selectedStatus,
            revStatusArr: statusForRev.join(','), // Convert array to string
            appStatusArr: statusForApp.join(','), // Convert array to string
            reviewerComment:commentForRev.join(","),
            approverComment:commentForApp.join(","),
            docName: myrecord.docName,
          },
          {
            headers: {
              Authorization: user?.accessToken,
              // Add other headers if needed
            },
            
          }
        );
        console.log(response.data,"data aya");
        message.success(response.data.message)
      }else{
        const response = await axios.post(
          
          `https://novacon.live/api/documents/review?yourRole=${myrecord.yourRole}&version=${myrecord.version}`,
          {
            revStatusArr: statusForRev.join(','), // Convert array to string
            app:approveId.join(","),
            rev:reviewId.join(","),
            appStatusArr: statusForApp.join(','), // Convert array to string
            docName: myrecord.docName,
            companyId:user?.user.companyId,
            reviewerComment:commentForRev.join(","),
            approverComment:commentForApp.join(","),
          },
          {
            headers: {
              Authorization: user?.accessToken,
              // Add other headers if needed
            },
          }
        );
        if (response.status=="Complete All Review and Approve procedure for Inhouse Assessment") {
          message.warning("Complete All Review and Approve procedure for Inhouse Assessment")
        }
        else{
          message.success(response.data.message)

        }
        console.log(response.data,"data aya");

      }
      setSelectedStatus('')
      await fetchData()
    } catch (error) {
      console.error(error)
    }
};


  useEffect(async () => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchData();
    fetchUsers();
    fetchMDR();
    fetch()
    // fetchClients();
  }, []);
  useEffect(async () => {

    // await fetchClients();
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
      <Form form={form}  onFinish = {handleSubmit} layout="vertical" name="basic">
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
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please provide remarks for rejection',
                //   },
                // ]}
              >
                <Input.TextArea rows={4} placeholder="Enter remarks" value={remarks} onChange={(e)=>setRemarks(e.target.value)}/>
              </Form.Item>
            )}        
            <Row>
          <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
            <Button
              block
              type="primary"
              htmlType="submit"
              // onClick={() => handleStatusChange(selectedStatus)}
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

    {/* <Timeline
    items={[
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'red',
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },
      {
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <SmileOutlined />,
        children: <p>Custom color testing</p>,
      },
    ]}
  /> */}
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
      <Table columns={user.user.roleId==6?column:columns} dataSource={data} bordered
      scroll={{overflowX: "auto", }}
      size="medium"
      title={() => 'All Documents Assessments'}
      footer={() => 'You may filter Documents'}
      />
      </div>
    </>
  );
}


