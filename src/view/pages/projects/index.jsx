// import React, { useState, useEffect, useRef } from "react";
// import { DownOutlined } from '@ant-design/icons';

// import {notification,
//   Button,Form,Row,Col,Space,Table,Select,Input,Dropdown,Menu,DatePicker,TimePicker,Modal,message,Checkbox,Upload,
// } from "antd";
// import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
// import axios from "axios";
// import { useHistory } from 'react-router-dom';
// import ProtectedAppPage from "../Protected";
// import { SearchOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';
// import ProgressComp from "./Progress";
// export default function Projects() {

  // const [searchText, setSearchText] = useState('');
  // const [searchedColumn, setSearchedColumn] = useState('');
  // const searchInput = useRef(null);

//   const [progresses,setProgresses] = useState()
//   const [selectedDepartments, setSelectedDepartments] = useState([]);
//   const [departmentName,setDepartmentName] = useState('')
//   const [projectModalVisible, setProjectModalVisible] = useState(false);
//   const [permissionModalVisible, setPermissionModalVisible] = useState(false);
//   const [projName, setProjName] = useState("");
//   const [projCode, setProjCode] = useState("");
//   const [clientEmail, setClientEmail] = useState("");
//   const [startedDate, setStartDate] = useState("");
//   const [endedDate, setEndDate] = useState("");
//   const [departmentId, setDepartmentId] = useState([]);
//   const [status, setStatus] = useState("");
//   const [code, setCode] = useState("");
//   const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
//   const [data, setData] = useState([]);
//   const [dataArray, setDataArray] = useState([]);

//   const [departmentOptions, setDepartmentOptions] = useState([]);
//   const [departmentInfo,setDepartmentInfo] = useState([])
//   const [projectOptions, setProjects] = useState([]);
//   const [clients,setClients] = useState([])
//   const [projectId, setProjectId] = useState("");
//   const history = useHistory();

//   const rowClickHandler=(record)=>{
//     history.push({
//       pathname: './mdr',
//       state: { selectedRecord: record },
//     });
//   }
//   const handleAll=()=>{
//     setData(dataArray)
//   }
//   const handleCompleted=()=>{
//     const completedData = dataArray.filter(item => item.status === 'completed');
//     setData(completedData)
//   }
//   const handleOnGoing=()=>{
//     const ongoingData = dataArray.filter(item => item.status === 'Ongoing');
//     setData(ongoingData)

//   }

//   const handleClose = ()=>{
//     console.log('closing');
//   }
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


// const menu = (
//   <Menu>
//     <Menu.Item onClick={() => handleAll()}>All</Menu.Item>
//     <Menu.Item onClick={() => handleCompleted()}>Completed</Menu.Item>
//     <Menu.Item onClick={() => handleOnGoing()}>Ongoing</Menu.Item>
//   </Menu>
// );
// const columns = [
//   {
//     title: "Project Code",
//     dataIndex: "code",
//     key: "code",
//     ...getColumnSearchProps('code'),
//   },
//   {
//     title: "Project ",
//     dataIndex: "title",
//     key: "title",
//     ...getColumnSearchProps('title'),

//   },
//   {
//     title: "Department ",
//     dataIndex: "departmentTitle",
//     key: "departmentTitle",
//     ...getColumnSearchProps('departmentTitle'),

//     // filters: [

//     //   {
//     //     text: 'Project Management',
//     //     value: 'Project Management',
//     //   },
//     //   {
//     //     text: 'Mechanical',
//     //     value: 'Mechanical',
//     //   },
//     //   {
//     //     text: 'Electrical',
//     //     value: 'Electrical',
//     //   },
//     //   {
//     //     text: 'Process',
//     //     value: 'Process',
//     //   },
//     // ],
//     // onFilter:  (value, record) =>record.departmentTitle === value,

    
//   },
//   {
//     title: "Client",
//     dataIndex: "clientId",
//     key: "clientId",
//     ...getColumnSearchProps('clientId'),

//   },
//   // {
//   //   title: "No of Users",
//   //   dataIndex: "noOfUsers",
//   //   key: "noOfUsers",
//   // },
//   {
//     title: "Start Date",
//     dataIndex: "startedDate",
//     key: "startedDate",
//     sorter: (a, b) => {
//       const dateA = new Date(a.startedDate.split('/').reverse().join('/'));
//       const dateB = new Date(b.startedDate.split('/').reverse().join('/'));
//       return dateA - dateB;
//     }  },

//   {
//     title: "Expected End Date",
//     dataIndex: "endedDate",
//     key: "endedDate",
//     sorter: (a, b) => {
//       const dateA = new Date(a.endedDate.split('/').reverse().join('/'));
//       const dateB = new Date(b.endedDate.split('/').reverse().join('/'));
//       return dateA - dateB;
//     }  },
//   {
//     title: (
//       "Status"
//     ),
//     key: "status",
//     dataIndex: "status",

// filters: [

//       {
//         text: 'Initialized',
//         value: 'Initialized',
//       },
//       {
//         text: 'Ongoing',
//         value: 'Ongoing',
//       },
//       {
//         text: 'Completed',
//         value: 'Completed',
//       },
//     ],
//     onFilter:  (value, record) =>record.status === value,
//   },
//   // {
//   //   title: "Action",
//   //   key: "action",
//   //   render: (_, record) => (
//   //     <Space size="middle">
//   //       <a onClick={() => handleDelete(record)}>Delete</a>
//   //     </Space>
//   //   )
//   // },
//   {
//     title: "Progress",
//     key: "percentage",
//     render: (_, record) => (
//       <Space>
//         {record.percentage !== null ? (
//           <ProgressComp percentage={record.percentage.toFixed(1)} />
//         ) : null}
//       </Space>
//     )
//   }
// ];

//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//   };
//   const fetchClients = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8083/api/clients?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//           },
//         }
//       );
  
//       // Use Set to store unique titles
//       const uniqueTitlesSet = new Set();
  
//       const options = response?.data.reduce((acc, item) => {
//         // Check if the title is not in the Set
//         if (!uniqueTitlesSet.has(item.companyName)) {
//           // Add title to the Set
//           uniqueTitlesSet.add(item.com);
  
//           // Push the option to the result array
//           acc.push({ value: item.id, label: item.companyName, name: item.companyName });
//         }
  
//         return acc;
//       }, []);
  
//       setClients(options); // Assuming the response.data is an array of projects
//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };

//   const projectModalShow = () => {

//     setProjectModalVisible(true);
//   };

//   const projectModalCancel = () => {
//     setCode("");
//     setStatus("");
//     setProjName("");
//     setClientEmail("")
//     setDepartmentName("")
//     setDepartmentId([]);
//     setProjectModalVisible(false);
//   };

//   const permissionModalShow = () => {
//     setPermissionModalVisible(true);
//   };
//   const permissionModalCancel = () => {
//     setPermissionModalVisible(false);
//   };
//   const addProject = async () => {
// if (!projName || !clientEmail ) {
//     // If any required field is missing, display a validation error notification
//     notification.error({
//       message: 'Validation Error',
//       description: 'Please fill in all required fields.',
//       style: {
//         backgroundColor: '#f5222d', // Red color background
//         color: '#fff', // White text color
//       },
//     });
//     return; // Exit early if validation fails
//   }
//     // console.log(selectedDepartments,'selectedDepartments');
//     // console.log(departmentInfo,"info agayi yaha bhi");
//     const mappedDepartments = selectedDepartments.map(departmentId => {
//       const department = departmentInfo.find(department => department.id === departmentId);
//       return {
//           suffix: department ? department.suffix : null,
//           title: department ? department.title : null
//       };
//   });
//   // console.log(mappedDepartments,"department bhi agaye");
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8083/api/projects/",
//         {
//           title: projName,
//           departmentId:selectedDepartments,
//           departments:mappedDepartments,
//           status:"Initialized",
//           noOfUsers:0,
//           clientId:clientEmail,
//           code,
//           companyId: user?.user?.companyId,
//           authorId: user?.user?.id,
//           authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
//           startedDate,
//           endedDate
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
//       notification.success({
//         message: `${response?.data?.message}`,
//         style: {
//           backgroundColor: '#52c41a', // Red color background
//           color: '#fff', // White text color
//         },
//       }
//     )
//       setProjectModalVisible(false);      
//       fetchData();
//     } catch (error) {
//       // Handle errors
//       console.error("Error adding projects:", error);
//     }
//   };
//   // useEffect(()=>{
//   //   setCode("");
//   //   setStatus("");
//   //   setProjName("");
//   //   setClientEmail("");
//   //   setDepartmentId([]);
//   // },[projectModalVisible])
  // const fetchProgress = async()=>{
  //   try {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8083/api/projects/progress?companyId=${user?.user.companyId}`,
        
  //       {
  //         headers: {
  //           Authorization: user?.accessToken,
  //           // Add other headers if needed
  //         },
  //       }
  //     );
  //     // Handle the response as needed
  //     console.log(response.data,'projectIds');
  //     setProgresses(response.data.documentProgressResults)
  //     console.log(progresses,"progresses");
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8083/api/projects?companyId=${user?.user?.companyId}&roleId=${user?.user?.roleId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
        
//       );
      
//       console.log('Project response data',response.data);
//       const formattedData = response.data.map(project => {
//         // Assuming project.startedDate and project.endedDate are DateTime strings
//         const formattedStartDate = new Date(project.startedDate).toLocaleDateString('en-GB');
//         const formattedEndDate = new Date(project.endedDate).toLocaleDateString('en-GB');
//         // Create a new object with formatted dates
//         return {
//           ...project,
//           startedDate: formattedStartDate,
//           endedDate: formattedEndDate,
//         };
//       });
//       const userId = user?.user.departmentId
//       const roleId = user?.user.roleId

//       console.log(userId,'userId');

//       if (userId !== undefined && roleId !==1) {
//         const userProjects = formattedData.filter(project => project.departmentIds.split(',').includes(userId.toString()));
//         console.log("User's Projects:", userProjects);
//         setData(userProjects);
//       } 
//       else{
//         setData(formattedData)
//       }
//       setDataArray(formattedData)
//       const options = [];
//       for (const item of response?.data) {
//         options.push({ value: item?.id, label: item?.title });
//       }
//       console.log(options);
//       setProjects(options); // Assuming the response.data is an array of projects
//     } catch (error) {
//       console.error("Error fetching projects:", error?.message);
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
//       console.log(response.data,"data agaya");
//       const options = [];
//       const option = []
//       for (const item of response?.data) {
//         options.push({ value: item?.id, label: item?.title });
//         option.push({id:item?.id,title:item?.title,suffix:item?.suffix});
//       }
//       setDepartmentInfo(option)
//       setDepartmentOptions(options)
//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };
//   useEffect(() => {
//     setUser(JSON.parse(localStorage?.getItem("user")));
//     // Fetch data when the component mounts
//     fetchClients();
//     fetchDepartments();
//     fetchData();
//     // fetchProgress()
//   }, []);
//   var usedNumbers = [];

//   function generateUnique4DigitNumber(usedNumbers) {
//     while (true) {
//         const number = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
//         if (!usedNumbers.includes(number)) {
//             usedNumbers.push(number);
//             return number;
//         }
//     }
// }


//   return (
//     <>
//       <Modal
//         title="Add Project"
//         width={416}
//         centered
//         visible={projectModalVisible}
//         onCancel={projectModalCancel}
//         footer={null}
//         closeIcon={
//           <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//         }
//       >
//         <Form layout="vertical" name="basic">
//         <Form.Item label="Project Code" name="projCode" rules={[
//                   {
//                     required: true,
//                     message: "Please Add Project Code",
//                   },
//                 ]}>
          
//             <Input
//               value={projCode}
//               onChange={(e) => setCode(e.target.value)}
//             />
//           </Form.Item>         
//            <Form.Item label="Project Name" name="projName" rules={[
//                   {
//                     required: true,
//                     message: "Please Add Project Name",
//                   },
//                 ]}>
//             <Input
//               value={projName}
//               onChange={(e) => setProjName(e.target.value)}
//             />
//           </Form.Item>
 
//             <Form.Item
//                 label="Client"
//                 name="clientEmail"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please select Client Email",
//                   },
//                 ]}
//               >
//               <Select

//                   options={clients}
//                   value={clientEmail}
//                   onChange={(value) => setClientEmail(value)}
//                 />  
//                 </Form.Item>


//                 <Form.Item
//                 label="Departments"
//                 name="departmentIds"
//                 rules={[{ required: true, message: 'Please select at least one department' }]}
//               >
//                 <Checkbox.Group options={departmentOptions} value={selectedDepartments} onChange={setSelectedDepartments} />
//               </Form.Item>
                

//       <Form.Item label="Start Date" name="startedDate" rules={[{ required: true, message: 'Please select start date' }]}>
//         <DatePicker style={{ width: '100%' }} onChange={handleStartDateChange} />
//       </Form.Item>

//       <Form.Item label="End Date" name="endedDate" rules={[{ required: true, message: 'Please select end date' }]}>
//         <DatePicker style={{ width: '100%' }} onChange={handleEndDateChange} />
//       </Form.Item>
         
//           <Row>
//             <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//               <Button
//                 block
//                 type="primary"
//                 htmlType="submit"
//                 onClick={() => addProject()}
//               >
//                 Add
//               </Button>
//             </Col>

//             <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
//               <Button block onClick={projectModalCancel}>
//                 Cancel
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Modal>

//       <Modal
//         title="Document Permissions"
//         width={416}
//         centered
//         visible={permissionModalVisible}
//         onCancel={permissionModalCancel}
//         footer={null}
//         closeIcon={
//           <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//         }
//       >
//         <Form layout="vertical" name="basic">
//           <Form.Item label="Project Name" name="projectId">
//             <Select
//               options={projectOptions}
//               value={projectId}
//               onChange={(e) => setProjectId(e)}
//             />
//           </Form.Item>

//           <Row>
//             <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//               <Button
//                 block
//                 type="primary"
//                 htmlType="submit"
//                 onClick={() => addProject()}
//               >
//                 Add
//               </Button>
//             </Col>
//             <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
//               <Button block onClick={projectModalCancel}>
//                 Cancel
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Modal>

// <div style={{ textAlign: "right", marginBottom: "16px" }}>
//   {user?.user?.roleId == 1 && (
//     <Button type="primary" onClick={projectModalShow}>
//       Add Project
//     </Button>
//   )}
// </div>

//       <Table
//       bordered
//       size="middle"
//       title={() => 'All Project Details'}
//       footer={() => 'You may filter Projects'} 
//         columns={columns} 
//         dataSource={transformData(data)} 
//         onRow={(record) => ({
//           onClick: () => rowClickHandler(record),
//         })}
//       />      
//       <ProtectedAppPage />
//     </>
//   );
// }
// const transformData = (originalData) => {
//   const groupedData = {};

//   // Group data by title
//   originalData.forEach((item) => {
//     const title = item.title;

//     if (!groupedData[title]) {
//       groupedData[title] = { ...item, departmentNames: [item.departmentName + ','] };
//     } else {
//       groupedData[title].departmentNames.push(item.departmentName + ',');
//     }
//   });

//   // Convert the grouped data into an array and join department names with spaces
//   const transformedData = Object.values(groupedData).map((item) => ({
//     ...item,
//     departmentName: item.departmentNames.join(''), // Join without spaces
//   }));

//   return transformedData;
// };




import React, { useState, useEffect, useRef } from "react";
import {notification,Button,Form,Row,Col,Space,Table,Select,Input,Dropdown,Menu,DatePicker,TimePicker,Modal,message,Checkbox,Upload,} from "antd";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import ProtectedAppPage from "../Protected";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import ProgressComp from "./Progress";
export default function Projects() {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [progresses,setProgresses] = useState()
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [projectModalVisible, setProjectModalVisible] = useState(false);
  const [permissionModalVisible, setPermissionModalVisible] = useState(false);
  const [projName, setProjName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [startedDate, setStartDate] = useState("");
  const [endedDate, setEndDate] = useState("");
  const [code, setCode] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [clients,setClients] = useState([])
  const history = useHistory();

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

const columns = [
  {
    title: "Project Code",
    dataIndex: "code",
    key: "code",
    ...getColumnSearchProps('code'),
  },
  {
    title: "Project ",
    dataIndex: "title",
    key: "title",
    ...getColumnSearchProps('title'),

  },
  {
    title: "Department ",
    dataIndex: "departmentNames",
    key: "departmentNames",
    ...getColumnSearchProps('departmentNames'),
    
  },
  {
    title: "Client",
    dataIndex: "clientName",
    key: "clientName",
    ...getColumnSearchProps('clientName'),

  },
  {
    title: "Start Date",
    dataIndex: "startedDate",
    key: "startedDate",
    sorter: (a, b) => {
      const dateA = new Date(a.startedDate.split('/').reverse().join('/'));
      const dateB = new Date(b.startedDate.split('/').reverse().join('/'));
      return dateA - dateB;
    }  },

  {
    title: "Expected End Date",
    dataIndex: "endedDate",
    key: "endedDate",
    sorter: (a, b) => {
      const dateA = new Date(a.endedDate.split('/').reverse().join('/'));
      const dateB = new Date(b.endedDate.split('/').reverse().join('/'));
      return dateA - dateB;
    }  },
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
    title: "Progress",
    key: "percentage",
    render: (_, record) => (
      <Space>
        {record.percentage !== null ? (
          <ProgressComp percentage={record.percentage} />
        ) : null}
      </Space>
    )
  }
];

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const projectModalShow = () => {
    setProjectModalVisible(true);
  };

  const projectModalCancel = () => {
    setProjectModalVisible(false);
  };

  const addProject = async () => {
  if (!projName || !clientEmail ) {
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
        "http://127.0.0.1:8083/api/projects/",
        {
          title: projName,
          departmentId:selectedDepartments,
          status:"Initialized",
          noOfUsers:0,
          clientId:clientEmail,
          code,
          companyId: user?.user?.companyId,
          creatorId: user?.user?.id,
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
      notification.success({
        message: `${response?.data?.message}`,
        style: {
          backgroundColor: '#52c41a', // Red color background
          color: '#fff', // White text color
        },
      }
    )
      setProjectModalVisible(false);      
      fetch();
    } catch (error) {
      // Handle errors
      console.error("Error adding projects:", error);
    }
  };

 
  const fetch = async () => {
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
  
      const departmentOptions = [];
      const clientOptions = [];
      const clientOption = {};
      const client = {};

      const departmentOption = {};

      // Process department options
      for (const item of response?.data.data.departments) {
        departmentOptions.push({ value: item?.id, label: item?.title });
        departmentOption[item?.id] = item?.title;
      }
  
      // Process client options and create a clientOption mapping
      for (const item of response?.data.data.clients) {
        clientOptions.push({ value: item?.id, label: item?.companyName });
        clientOption[item?.id] = item?.companyName;
        client[item?.id] = item?.id;

      }
  
      console.log(response.data.data.projects, "data");
      console.log(response.data.data.clients, "clients");
      console.log(response.data.data.departments, "departments");
  
      setClients(clientOptions);
      setDepartmentOptions(departmentOptions);
  
      const projects = response.data.data.projects;
  
      // Assign clientName to each project based on clientId
      projects.forEach((pro) => {
        pro.clientName = clientOption[pro.clientId] || 'Unknown';
      });
      
      projects.forEach((pro) => {
        console.log(pro.departmentIds);
        const departments = pro.departmentIds.split(",");
        console.log(departments,"departments");
        const departmentName = departments.map(deptId => departmentOption[deptId] || 'Unknown');
        console.log(departmentName,"departmentNames");
        pro.departmentNames = departmentName.join(", ");
        console.log(pro.departmentNames,"departmentNames");
        pro.startedDate = new Date(pro.startedDate).toLocaleDateString('en-GB');
        pro.endedDate = new Date(pro.endedDate).toLocaleDateString('en-GB');
      });
      console.log(projects,"projects");
      console.log(user?.user.companyId);
      const filteredProjects = projects.filter(project => project.clientId == user?.user.companyId);
      const departmentProjects = projects.filter(project => (project.departmentIds.split(',').includes(user?.user.departmentId)));
      if (user?.user.roleId == 2 || user?.user.roleId == 3 || user?.user.roleId == 4 || user?.user.roleId == 5) {
        setData(departmentProjects);
      } else {
        setData(projects);
      }      console.log('Project response data from fetch', response.data);
    } catch (error) {
      console.error("Error fetching projects:", error?.message);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    fetch();
  }, []);



  return (
    <>
      <Modal
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
      </Modal>

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
        onRow={(record) => ({
          onClick: () => rowClickHandler(record),
        })}
      />      
      <ProtectedAppPage />
    </>
  );
}
