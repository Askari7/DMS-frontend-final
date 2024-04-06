import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import {
  Button,
  Form,
  Row,
  Col,
  Space,
  Skeleton ,
  Table,
  Input,
  Modal,
  message,
  Checkbox,
  Select,
  Tag 
} from "antd";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from "axios";
// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";
import ProtectedAppPage from "../Protected";
import UserTreeView from "../treeview/UserTreeView";
import OrganizationChart from "../organizationChart";
import EmployeeTree from "../employee_tree";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
const columns = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
  },

  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Role",
    dataIndex: "roleTitle",
    key: "roleTitle",
    filters: [

      {
        text: 'Lead',
        value: 'Head',
      },
      {
        text: 'Senior Engineer',
        value: 'Senior',
      },
      {
        text: 'Junior Engineer',
        value: 'Junior',
      },
      {
        text: 'Designer',
        value: 'Designer',
      },
    ],
    onFilter:  (value, record) =>record.roleTitle === value,

  },

  {
    title: "Reporting To",
    dataIndex: "reported_to",
    key: "reported_to",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

export default function Users() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [displayNames, setDisplayNames] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [ departmentOptions,setDepartmentOptions]= useState([])
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [departmentWise, setDepartmentWise] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [dataArray,setDataArray] = useState([])
  const [showTreeView, setShowTreeView] = useState(false);
  const users = location.state?.users || null; 
  // const dataArray = location.state?.users ||null
  console.log(users,'users');// Access the users array from location.state
  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/departments?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers 
          },
        }
      );
      const options = [];
      const option = []
      for (const item of response?.data) {
        options.push({ value:{id:item?.id,title:item?.title}, label: item?.title });
      }
      console.log("departments",options);
      setDepartmentOptions(options); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayNames(departmentOptions.map(option => option.label));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [departmentOptions]);
  const UserModalShow = () => {
    setUserModalVisible(true);
  };

  const UserModalCancel = () => {
    setUserModalVisible(false);
  };

  const departmentWiseShow = () => {
    setDepartmentWise(true);
  };

  const departmentWiseCancel = () => {
    setDepartmentWise(false);
  };

  const addUser = async () => {
    try {
      const roleOptions = {
        "head":"2",
        "seniorEngineer":"3",
        "juniorEngineer":"4",
        "designer":"5"
      }
      console.log("selectedDeparment",selectedDepartments);
      console.log("role",role);

      console.log(selectedDepartments.id,selectedDepartments.title,"checking");
      const response = await axios.post(
        `http://127.0.0.1:8083/api/users`,
        {
          roleId:roleOptions[role],
          companyId:user?.user?.companyId,
          departmentId:selectedDepartments[0].id,
          department:selectedDepartments[0].title,
          email,
          firstName,
          lastName,
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
      UserModalCancel();
    } catch (error) {
      // Handle errors
      console.error("Error adding user:", error);
      // message.error("Error adding user");
    }
  };
  const fetchData = async () => {
    console.log(user.user.roleId,"roleId");
    try {
      if(user.user.roleId==2){
        const response = await axios.get(
          `http://127.0.0.1:8083/api/users?companyId=${user?.user?.companyId}&departmentId=${user.user.departmentId}`,
          {
            headers: {
              Authorization: user?.accessToken,
              // Add other headers if needed
            },
          }
        );
        
        setData(response.data)
        setDataArray(response.data)
      }
      else{
      const response = await axios.get(
        `http://127.0.0.1:8083/api/users?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response.data);
      const roleOrder = ['Head of Department', 'Senior Engineer', 'Junior Engineer', 'Designer/Draughtsmen'];
      // Sort the filtered data based on the order of roles
      response.data.sort((a, b) => roleOrder.indexOf(a.roleTitle) - roleOrder.indexOf(b.roleTitle));
      setData(response.data); // Assuming the response.data is an array of projects
      setDataArray(response.data)
      console.log("response",response.data);}
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };
  const handleDepartmentClick = (name) => {
    setSelectedDepartment(name);
    departmentWiseCancel();
    filterData(name);
  };

  const handleClick = () => {
    departmentWiseCancel();
    setData(dataArray)
  };


  const handleUserTreeViewClick = () => {
    setShowTreeView(true);
  };
  const handleDoubleClick = () => {
    setShowTreeView(false);
  };
  const filterData = (selectedDepartment) => {
    // Assuming data is an array of users with each object having a 'department' and 'roleTitle' property
    const filteredData = dataArray.filter(user => user.department === selectedDepartment);
  
    // Define the order of roles
    const roleOrder = ['Head of Department', 'Senior Engineer', 'Junior Engineer', 'Designer/Draugthsmen'];
  
    // Sort the filtered data based on the order of roles
    filteredData.sort((a, b) => roleOrder.indexOf(a.roleTitle) - roleOrder.indexOf(b.roleTitle));

    console.log("filter",filteredData);
    setData(filteredData);
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    if (users) {
      setData(users)
    }
    else{
      fetchDepartments();
      fetchData();
    }
  }, []);

  return (
    <>
      <Modal
        title="Add User"
        width={416}
        centered
        visible={userModalVisible}
        onCancel={UserModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your firstName!",
              },
            ]}
          >
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your lastName!",
              },
            ]}
          >
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="E-mail :"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Role"  name="role">
            <Select
              defaultValue=""
              options={[
                { value: "head", label: "Head" },
                { value: "seniorEngineer", label: "Senior Engineer" },
                { value: "juniorEngineer", label: "Junior Engineer" },
                { value: "designer", label: "Designer/Draftsmen" },
              ]}
              value={role}
              onChange={(e) => setRole(e)}
            /></Form.Item>
          <Form.Item
          label="Select Department"
          rules={[
           
            {
              required: true,
              message: "Please select one department!",
            },
          ]}>
          <Checkbox.Group options={departmentOptions} value={selectedDepartments} onChange={setSelectedDepartments} />
   </Form.Item>
          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={() => addUser()}
                disabled={
                  !(
                    email.length &&
                    firstName.length &&
                    lastName.length &&
                    isEmailValid
                  )
                }
                className={
                  !(
                    email.length &&
                    firstName.length &&
                    lastName.length &&
                    isEmailValid
                  )
                    ? "disabled-button"
                    : ""
                }
              >
                Add
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={UserModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Modal
      title="Departments"
      width={416}
      centered
      visible={departmentWise}
      onCancel={departmentWiseCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >
            <Button
            size="default"
            type="primary"
            onClick={()=>handleClick()}

            style={{ margin: '8px' }}
          >
            All Departments
          </Button>
      {loading ? (
        
        departmentOptions.map(option => (
          <Button
            key={option.label}
            loading
            size="default"
            style={{ margin: '8px' }}
          >
            {option.label}
          </Button>
        ))
      ) : (
        displayNames.map(name => (
          <Button
            key={name}
            size="default"
            style={{ margin: '8px' }}
            onClick={() => handleDepartmentClick(name)}
            type={selectedDepartment === name ? 'primary' : 'default'}
          >
            {name}
          </Button>
        ))
      )}
    </Modal>
      <div style={{ textAlign: "right", marginBottom: "16px" }}>
      {user?.user?.roleId == 1 && (

        <Button
          type="primary"
          onClick={UserModalShow}
        >
          Add User
        </Button>
      )}

        {/* <Button
          type="primary"
          onClick={departmentWiseShow}
          style={{margin:"4px"}}
        >
          Department Wise
        </Button> */}

        <Button
          type="primary"
          onClick={handleUserTreeViewClick}
          onDoubleClick={handleDoubleClick}
          // disabled={user?.user?.roleId != 1}
          style={{margin:"4px"}}
        >
          User Tree
        </Button>
      </div>
      
      {
  showTreeView ?
  <div style={{ overflowX: 'auto', width: '1300px' }}>
        {user?.user?.roleId === 2 && users ? (
          <OrganizationChart employees={users} />
        ) : (
          <OrganizationChart employees={dataArray} />
        )}

      </div> :
      <div style={{ overflowX: "auto" }}>
    <Table dataSource={data} title={() => 'All Users'} footer={() => 'You may filter users based on department and roles'}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Department" dataIndex="department" key="department" 
      filters={[
        { text: 'Project Management', value: 'Project Management' },
        { text: 'Mechanical', value: 'Mechanical' },
        { text: 'Electrical', value: 'Electrical' },
        { text: 'Process', value: 'Process' },
        { text: 'Piping', value: 'Piping' },
        { text: 'Instrumentation', value: 'Instrumentation' },
        { text: 'Civil/Structure', value: 'Civil/Structure' },
      ]}
      onFilter={(value, record) => record.department === value}
      />
      <Column
        title="Role"
        dataIndex="roleTitle"
        key="roleTitle"
        filters={[
          { text: 'Lead', value: 'Head' },
          { text: 'Senior Engineer', value: 'Senior' },
          { text: 'Junior Engineer', value: 'Junior' },
          { text: 'Designer', value: 'Designer' },
        ]}
        onFilter={(value, record) => record.roleTitle === value}
      />
      <Column title="Reporting To" key="reported_to" dataIndex="reported_to"></Column>
      <Column title="Email" key="email" dataIndex="email"></Column>

    title={() => 'All Users'}
    footer={() => 'You may filter users based on department and roles'}

    </Table>
      </div>
    }
    <ProtectedAppPage />

    </>
  );
}




//   {
//     title: "Role",
//     dataIndex: "roleTitle",
//     key: "roleTitle",
    // filters: [

    //   {
    //     text: 'Lead',
    //     value: 'Head',
    //   },
    //   {
    //     text: 'Senior Engineer',
    //     value: 'Senior',
    //   },
    //   {
    //     text: 'Junior Engineer',
    //     value: 'Junior',
    //   },
    //   {
    //     text: 'Designer',
    //     value: 'Designer',
    //   },
    // ],
    // onFilter:  (value, record) =>record.roleTitle === value,

//   },

//   {
//     title: "Reporting To",
//     dataIndex: "reported_to",
//     key: "reported_to",
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//     key: "email",
//   },

//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

