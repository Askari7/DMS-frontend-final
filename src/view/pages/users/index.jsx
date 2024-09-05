import React, { useState, useEffect,useRef } from "react";
import { useLocation } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {Button,Form,Row,Col,Space ,Table,Input,Modal,message,Checkbox,Select, Tooltip,} from "antd";
import { RiCloseFill } from "react-icons/ri";
import axios from "axios";
import ProtectedAppPage from "../Protected";
import OrganizationChart from "../organizationChart";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

export default function Users() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const location = useLocation();
  const [image,setImage] = useState(null)
  const [loading, setLoading] = useState(true);
  const [displayNames, setDisplayNames] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState("");
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [ departmentOptions,setDepartmentOptions]= useState([])
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [userUpdate, setUserUpdate] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [ record,setRecord] = useState(null)
  const [ recordMDR,setRecordMDR] = useState(null)

  const [dataArray,setDataArray] = useState([])
  const [showTreeView, setShowTreeView] = useState(false);
  const users = location.state?.users || null; 
  const [imageUrl, setImageUrl] = useState(null); // State to hold the uploaded image URL
  // const [form] = Form.useForm();

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

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setDisplayNames(departmentOptions.map(option => option.label));
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, [departmentOptions]);
  const UserModalShow = () => {
    setUserModalVisible(true);
  };

  const UserModalCancel = () => {
    setUserModalVisible(false);
  };

  const userUpdateModalShow = (record) => {
    setUserToUpdate(record)

    console.log(record.id,'record id');
    console.log(typeof(record.id));
    setFirstName(record.firstName)
    setLastName(record.lastName)
    setEmail(record.email)
    
    // Populate the form fields with the userToUpdate object when the modal is opened
    // form.setFieldsValue({
    //   id:userToUpdate.id||"",
    //   firstName: userToUpdate.firstName || "",
    //   lastName: userToUpdate.lastName || "",
    //   role: userToUpdate.roleTitle || "",
    //   email: userToUpdate.email || "",
    // });
    
    setUserUpdate(true);
  };

  const userUpdateModalCancel = () => {
    setUserUpdate(false);
  };


  
  const handleUpdate=async()=>{
    try {
      const response  = await axios.post
      (`http://127.0.0.1:8083/api/users/user_update?companyId=${user?.user.companyId}&id=${userToUpdate.id}`,
      // {
      //   firstName:form.getFieldValue("firstName"),
      //   lastName:form.getFieldValue("lastName"),
      //   role:form.getFieldValue("role"),
      //   email:form.getFieldValue("email"),
      // },
      {
        firstName,
        lastName,
        email,
      },
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    )
      message.success(response.data.message)
      userUpdateModalCancel()
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
      title: "Name",
      key: "name",
      ...getColumnSearchProps('firstName'), // You can apply search functionality here
      render: (_, record) => `${record.firstName} ${record.lastName}`,
    },
  
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      ...getColumnSearchProps('department'),
  
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
        {
          text: 'Client',
          value: 'Client',
        },
      ],
      onFilter:  (value, record) =>record.roleTitle === value,
  
    },
  
    {
      title: "Reporting To",
      dataIndex: "reported_to",
      key: "reported_to",
      ...getColumnSearchProps('reported_to'),
  
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps('email'),
  
    },
  
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <>
    //   <Button size="middle" onClick={() => deleteModalShow(record)} style={{textAlign: "right"}}>Delete</Button>
    //   <br />
    //     <Button size="middle" onClick={() => userUpdateModalShow(record)}>Update</Button>
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Delete">
  <Button
    size="middle"
    icon={<DeleteOutlined />}
    disabled={user?.user?.roleId !== 1}
    onClick={() => deleteModalShow(record)}
  />
</Tooltip>
          {/* <Button
            size="middle"
            icon={<EditOutlined />}
            onClick={() => userUpdateModalShow(record)}
          /> */}
        </Space>
      ),
    }
  ];

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
        `http://127.0.0.1:8083/api/users?${image}`,
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
      if(user?.user.roleId==2){
        const response = await axios.get(
          `http://127.0.0.1:8083/api/users?companyId=${user?.user?.companyId}&departmentId=${user.user.departmentId}`,
          {
            headers: {
              Authorization: user?.accessToken,
              // Add other headers if needed
            },
          }
        );
        const roleOptions = {
          2:"Head",
          3:"Senior",
          4:"Junior",
          5:"Designer",
          6:"Client"
        }
const data = response.data.map(item => {
  return {
    ...item, // Spread the existing item properties
    roleTitle: roleOptions[item.roleId] // Map roleId to roleTitle using roleOptions
  };
});        
        const filter = data.filter(item=>item.removed== 0)

        const roleOrder = ['Head', 'Senior', 'Junior', 'Designer','Client'];
      // Sort the filtered data based on the order of roles
      filter.sort((a, b) => roleOrder.indexOf(a.roleTitle) - roleOrder.indexOf(b.roleTitle));
        console.log(filter,'filter');
        
        setData(filter)
        setDataArray(filter)
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
      console.log(response.data,'response data');
      const data = response.data

      const filter = data.filter(item=>item.removed== false )
      console.log(filter,'response data filter');

      const roleOrder = ['Head', 'Senior', 'Junior', 'Designer','Client'];
      // Sort the filtered data based on the order of roles
      filter.sort((a, b) => roleOrder.indexOf(a.roleTitle) - roleOrder.indexOf(b.roleTitle));
      console.log(filter,'response data sorted');

      setData(filter); // Assuming the response.data is an array of projects
      setDataArray(filter)
      console.log("response",response.data);}
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };

  // const handleUpdateUser = (name) => {
  //   setUserToUpdate(name);
  //   userUpdateModalShow()
  // };


  // const handleClick = () => {
  //   departmentWiseCancel();
  //   setData(dataArray)
  // };


  const deleteOrNot = async (record) => {
    const roleId = record.roleId
    if (roleId=='1') {
      return message.warn("CEO can't be deleted")
    }
    else if(roleId=="2"){
      return message.info("Assign Some Other user as Lead first")

    }

    else{
      handleDelete(record)
    }
  };
  const handleDelete = async (record) => {

    // Your removelogic here
    const id = record.id
    const roleId = record.roleId
    
    const response = await axios.delete(
      `http://127.0.0.1:8083/api/users?delete=1&recordId=${record.id}&companyId=${user?.user.companyId}`,
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


  const onChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file); // Set the selected image file
  };

  const deleteModalShow = (record) => {
    setRecord(record)
    setDeleteModalVisible(true);
  };
  const deleteModalCancel = () => {
    setDeleteModalVisible(false);
  };

  // const onSubmit = async(e)=>{
  //   e.preventDefault()
  //   const formData = new FormData()
  //   formData.append("image",image)
  //   formData.append("companyId",user?.user?.companyId)

  //   const logo = await axios.put(`http://127.0.0.1:8083/logo`,formData,{
  //     headers:{
  //       "Content-Type":"multipart/form-data",
  //       Authorization: user?.accessToken,
  //     }
  //   })

  //   console.log(logo.data,"result");
  // }
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
  title="Delete User"
  width={416}
  centered
  visible={deleteModalVisible}
  onCancel={deleteModalCancel}
  footer={null}
  closeIcon={
    <RiCloseFill className="remix-icon text-color-black-100" size={24} />
  }
> {

    <div>
    <p>Are you sure you want to delete this?</p>
  </div>
  
  }
  <Row>
    <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
      <Button
        block
        type="primary"
        danger
        // disabled={user?.user.id==1}
        onClick={() => deleteOrNot(record)}
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
        <Form layout="vertical" name="basic" encType="multipart/form-data">
        
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

      {/* <Modal
      title="User To Update"
      width={416}
      centered
      visible={userUpdate}
      onCancel={userUpdateModalCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >
            <Button
            size="default"
            type="primary"
            onClick={()=>handleClick()}

            style={{ margin: '8px' }}
          >
            Update
          </Button>

      {/* {loading ? (
        
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
     </Modal> */}
           {/* <Modal
      title="User To Update"
      width={416}
      centered
      visible={userUpdate}
      onCancel={userUpdateModalCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >

     </Modal> */}

<Modal
      title="Update User"
      width={416}
      centered
      visible={userUpdate}
      onCancel={userUpdateModalCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >
      <Form
        layout="vertical"
        name="basic" encType="multipart/form-data"
        // onFinish={handleUpdate} // Function to handle form submission
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please enter the first name' }]}
        >
          <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
          {/* <Input placeholder="Enter user first name" onChange={(e) => form.setFieldsValue({ firstName: e.target.value })} /> */}
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please enter the last name' }]}
        >
          <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          {/* <Input placeholder="Enter user last name" onChange={(e) => form.setFieldsValue({ lastName: e.target.value })} /> */}
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter the email' }]}
        >
          <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          {/* <Input placeholder="Enter user email" onChange={(e) => form.setFieldsValue({ email: e.target.value })} /> */}
        </Form.Item>

        {/* <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please enter the role' }]}
        >
          <Input placeholder="Enter user role" onChange={(e) => form.setFieldsValue({ role: e.target.value })} />
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit" block onClick={()=>handleUpdate()}>
            Update
          </Button>
        </Form.Item>
      </Form>
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
<Table
      bordered
      dataSource={data}
      columns={columns}
      title={() => 'All Users'}
      footer={() => 'You may filter users based on department and roles'}
    />
      </div>
    }
    <ProtectedAppPage />

    </>
  );
}



// import React, { useState, useEffect,useRef } from "react";
// import { useLocation } from 'react-router-dom';
// import { UploadOutlined } from '@ant-design/icons';

// import {
//   Button,
//   Form,
//   Row,
//   Col,
//   Space,
//   Skeleton ,
//   Table,
//   Input,
//   Modal,
//   message,
//   Checkbox,
//   Select,
//   Upload,
//   Avatar,
//   Tag 
// } from "antd";
// import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
// import axios from "axios";
// // import InfoProfile from "./personel-information";
// // import MenuProfile from "./menu";
// // import PasswordProfile from "./password-change";
// // import ProtectedAppPage from "../Protected";
// import ProtectedAppPage from "../Protected";
// import UserTreeView from "../treeview/UserTreeView";
// import OrganizationChart from "../organizationChart";
// import EmployeeTree from "../employee_tree";
// import ColumnGroup from "antd/lib/table/ColumnGroup";
// import Column from "antd/lib/table/Column";
// import { SearchOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';
// import { Person, Person2 } from "@mui/icons-material";




// export default function Users() {
//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const searchInput = useRef(null);
//   const location = useLocation();
//   const [image,setImage] = useState(null)

//   const [loading, setLoading] = useState(true);
//   const [displayNames, setDisplayNames] = useState([]);
//   const [selectedDepartments, setSelectedDepartments] = useState("");
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [ departmentOptions,setDepartmentOptions]= useState([])
//   const [userModalVisible, setUserModalVisible] = useState(false);
  // const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  // const [record, setRecord] = useState(null);

//   const [departmentWise, setDepartmentWise] = useState(false);
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const isEmailValid = /\S+@\S+\.\S+/.test(email);
//   const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
//   const [data, setData] = useState([]);
//   const [dataArray,setDataArray] = useState([])
//   const [showTreeView, setShowTreeView] = useState(false);
//   const users = location.state?.users || null; 
//   const [imageUrl, setImageUrl] = useState(null); // State to hold the uploaded image URL

//   // Function to handle image upload
//   const handleImageUpload = info => {
//     if (info.file.status === 'done') {
//       // Set the uploaded image URL
//       setImageUrl(info.file.response.url);
//       console.log(imageUrl,"imageUrl");
//     }
//   };
//   // const dataArray = location.state?.users ||null
//   console.log(users,'users');// Access the users array from location.state
//   const fetchDepartments = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8083/api/departments?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers 
//           },
//         }
//       );
//       const options = [];
//       const option = []
//       for (const item of response?.data) {
//         options.push({ value:{id:item?.id,title:item?.title}, label: item?.title });
//       }
//       console.log("departments",options);
//       setDepartmentOptions(options); // Assuming the response.data is an array of projects
//     } catch (error) {
//       console.error("Error fetching departments:", error?.message);
//     }
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDisplayNames(departmentOptions.map(option => option.label));
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timeout);
//   }, [departmentOptions]);
//   const UserModalShow = () => {
//     setUserModalVisible(true);
//   };
  // const deleteModalShow = (record) => {
  //   setRecord(record)
  //   setDeleteModalVisible(true);
  // };
  // const deleteModalCancel = () => {
  //   setDeleteModalVisible(false);
  // };

//   const UserModalCancel = () => {
//     setUserModalVisible(false);
//   };

//   const departmentWiseShow = () => {
//     setDepartmentWise(true);
//   };

//   const departmentWiseCancel = () => {
//     setDepartmentWise(false);
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

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "firstName",
//       key: "firstName",
//       ...getColumnSearchProps('firstName'),
  
//     },
  
//     {
//       title: "Department",
//       dataIndex: "department",
//       key: "department",
//       ...getColumnSearchProps('department'),
  
//     },
//     {
//       title: "Role",
//       dataIndex: "roleTitle",
//       key: "roleTitle",
  
//       filters: [
  
//         {
//           text: 'Lead',
//           value: 'Head',
//         },
//         {
//           text: 'Senior Engineer',
//           value: 'Senior',
//         },
//         {
//           text: 'Junior Engineer',
//           value: 'Junior',
//         },
//         {
//           text: 'Designer',
//           value: 'Designer',
//         },
//       ],
//       onFilter:  (value, record) =>record.roleTitle === value,
  
//     },
  
//     {
//       title: "Reporting To",
//       dataIndex: "reported_to",
//       key: "reported_to",
//       ...getColumnSearchProps('reported_to'),
  
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//       ...getColumnSearchProps('email'),
  
//     },
  
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a onClick={() => deleteModalShow(record)}>Delete</a>
    //     </Space>
    //   ),
    // },
//   ];

//   const addUser = async () => {
//     try {
//       const roleOptions = {
//         "head":"2",
//         "seniorEngineer":"3",
//         "juniorEngineer":"4",
//         "designer":"5"
//       }
//       console.log("selectedDeparment",selectedDepartments);
//       console.log("role",role);

//       console.log(selectedDepartments.id,selectedDepartments.title,"checking");
//       const response = await axios.post(
//         `http://127.0.0.1:8083/api/users?${image}`,
//         {
//           roleId:roleOptions[role],
//           companyId:user?.user?.companyId,
//           departmentId:selectedDepartments[0].id,
//           department:selectedDepartments[0].title,
//           email,
//           firstName,
//           lastName,
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
//       UserModalCancel();
//     } catch (error) {
//       // Handle errors
//       console.error("Error adding user:", error);
//       // message.error("Error adding user");
//     }
//   };

  



//   const fetchData = async () => {
//     console.log(user.user.roleId,"roleId");
//     try {
//       if(user.user.roleId==2){
//         const response = await axios.get(
//           `http://127.0.0.1:8083/api/users?companyId=${user?.user?.companyId}&departmentId=${user.user.departmentId}`,
//           {
//             headers: {
//               Authorization: user?.accessToken,
//               // Add other headers if needed
//             },
//           }
//         );
//         const data = response.data
        // data.filter(item=>item.remove== 0)
        
//         setData(data)
//         setDataArray(data)
//       }
//       else{
//       const response = await axios.get(
//         `http://127.0.0.1:8083/api/users?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
//       console.log(response.data);
//       const roleOrder = ['Head of Department', 'Senior Engineer', 'Junior Engineer', 'Designer/Draughtsmen'];
//       // Sort the filtered data based on the order of roles
//       const data = response.data

//       data.sort((a, b) => roleOrder.indexOf(a.roleTitle) - roleOrder.indexOf(b.roleTitle));
//       const filter = data.filter(item=>item.remove== 0)

//       setData(filter); // Assuming the response.data is an array of projects
//       setDataArray(filter)
//       console.log("response",response.data);}
//     } catch (error) {
//       console.error("Error fetching documents:", error?.message);
//     }
//   };
//   const handleDepartmentClick = (name) => {
//     setSelectedDepartment(name);
//     departmentWiseCancel();
//     filterData(name);
//   };

//   const handleClick = () => {
//     departmentWiseCancel();
//     setData(dataArray)
//   };

//   const onChange = (e) => {
//     const file = e.target.files[0];
//     console.log(file);
//     setImage(file); // Set the selected image file
//   };

//   // const onSubmit = async(e)=>{
//   //   e.preventDefault()
//   //   const formData = new FormData()
//   //   formData.append("image",image)
//   //   formData.append("companyId",user?.user?.companyId)

//   //   const logo = await axios.put(`http://127.0.0.1:8083/logo`,formData,{
//   //     headers:{
//   //       "Content-Type":"multipart/form-data",
//   //       Authorization: user?.accessToken,
//   //     }
//   //   })

//   //   console.log(logo.data,"result");
//   // }
//   const handleUserTreeViewClick = () => {
//     setShowTreeView(true);
//   };
//   const handleDoubleClick = () => {
//     setShowTreeView(false);
//   };
//   const filterData = (selectedDepartment) => {
//     // Assuming data is an array of users with each object having a 'department' and 'roleTitle' property
//     const filteredData = dataArray.filter(user => user.department === selectedDepartment);
  
//     // Define the order of roles
//     const roleOrder = ['Head of Department', 'Senior Engineer', 'Junior Engineer', 'Designer/Draugthsmen'];
  
//     // Sort the filtered data based on the order of roles
//     filteredData.sort((a, b) => roleOrder.indexOf(a.roleTitle) - roleOrder.indexOf(b.roleTitle));

//     console.log("filter",filteredData);
//     filteredData.filter(item=>item.remove== 0)
//     setData(filteredData);
//   };
//   useEffect(() => {
//     setUser(JSON.parse(localStorage?.getItem("user")));
//     if (users) {
//       setData(users)
//     }
//     else{
//       fetchDepartments();
//       fetchData();
//     }
//   }, []);

//   return (
//     <>
//       <Modal
//         title="Add User"
//         width={416}
//         centered
//         visible={userModalVisible}
//         onCancel={UserModalCancel}
//         footer={null}
//         closeIcon={
//           <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//         }
//       >
//         <Form layout="vertical" name="basic" encType="multipart/form-data">
        
//           <Form.Item
//             label="First Name"
//             name="firstName"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your firstName!",
//               },
//             ]}
//           >
//             <Input
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </Form.Item>
//           <Form.Item
//             label="Last Name"
//             name="lastName"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your lastName!",
//               },
//             ]}
//           >
//             <Input
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </Form.Item>
//           <Form.Item
//             label="E-mail :"
//             name="email"
//             rules={[
//               {
//                 type: "email",
//                 message: "The input is not valid E-mail!",
//               },
//               {
//                 required: true,
//                 message: "Please input your E-mail!",
//               },
//             ]}
//           >
//             <Input
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Item>
//           <Form.Item label="Role"  name="role">
//             <Select
//               defaultValue=""
//               options={[
//                 { value: "head", label: "Head" },
//                 { value: "seniorEngineer", label: "Senior Engineer" },
//                 { value: "juniorEngineer", label: "Junior Engineer" },
//                 { value: "designer", label: "Designer/Draftsmen" },
//               ]}
//               value={role}
//               onChange={(e) => setRole(e)}
//             /></Form.Item>
//           <Form.Item
//           label="Select Department"
//           rules={[
           
//             {
//               required: true,
//               message: "Please select one department!",
//             },
//           ]}>
//           <Checkbox.Group options={departmentOptions} value={selectedDepartments} onChange={setSelectedDepartments} />
//    </Form.Item>
//           <Row>
//             <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//               <Button
//                 block
//                 type="primary"
//                 htmlType="submit"
//                 onClick={() => addUser()}
//                 disabled={
//                   !(
//                     email.length &&
//                     firstName.length &&
//                     lastName.length &&
//                     isEmailValid
//                   )
//                 }
//                 className={
//                   !(
//                     email.length &&
//                     firstName.length &&
//                     lastName.length &&
//                     isEmailValid
//                   )
//                     ? "disabled-button"
//                     : ""
//                 }
//               >
//                 Add
//               </Button>
//             </Col>

//             <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
//               <Button block onClick={UserModalCancel}>
//                 Cancel
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Modal>

//       <Modal
//   title="Delete User"
//   width={416}
//   centered
//   visible={deleteModalVisible}
//   onCancel={deleteModalCancel}
//   footer={null}
//   closeIcon={
//     <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//   }
// > {
// //   user?.user.roleId == "1" && <div>
// //   <p>Can't Delete CEO of Company</p>
// // </div>
// // }
//   // {user?.user.roleId != "1" &&
//     <div>
//     <p>Are you sure you want to removethis?</p>
//   </div>
  
//   }
//   <Row>
//     <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//       <Button
//         block
//         type="primary"
//         danger
//         // disabled={user?.user.id==1}
//         onClick={() => deleteOrNot(record)}
//       >
//         Delete
//       </Button>
//     </Col>
//     <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
//       <Button block onClick={deleteModalCancel}>
//         Cancel
//       </Button>
//     </Col>
//   </Row>
// </Modal>


//       <Modal
//       title="Departments"
//       width={416}
//       centered
//       visible={departmentWise}
//       onCancel={departmentWiseCancel}
//       footer={null}
//       closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
//     >
//             <Button
//             size="default"
//             type="primary"
//             onClick={()=>handleClick()}

//             style={{ margin: '8px' }}
//           >
//             All Departments
//           </Button>
//       {loading ? (
        
//         departmentOptions.map(option => (
//           <Button
//             key={option.label}
//             loading
//             size="default"
//             style={{ margin: '8px' }}
//           >
//             {option.label}
//           </Button>
//         ))
//       ) : (
//         displayNames.map(name => (
//           <Button
//             key={name}
//             size="default"
//             style={{ margin: '8px' }}
//             onClick={() => handleDepartmentClick(name)}
//             type={selectedDepartment === name ? 'primary' : 'default'}
//           >
//             {name}
//           </Button>
//         ))
//       )}
//     </Modal>
//       <div style={{ textAlign: "right", marginBottom: "16px" }}>
//       {user?.user?.roleId == 1 && (

//         <Button
//           type="primary"
//           onClick={UserModalShow}
//         >
//           Add User
//         </Button>
//       )}

//         {/* <Button
//           type="primary"
//           onClick={departmentWiseShow}
//           style={{margin:"4px"}}
//         >
//           Department Wise
//         </Button> */}

//         <Button
//           type="primary"
//           onClick={handleUserTreeViewClick}
//           onDoubleClick={handleDoubleClick}
//           // disabled={user?.user?.roleId != 1}
//           style={{margin:"4px"}}
//         >
//           User Tree
//         </Button>
        
//       </div>
      
//       {
//   showTreeView ?
//   <div style={{ overflowX: 'auto', width: '1300px' }}>
//         {user?.user?.roleId === 2 && users ? (
//           <OrganizationChart employees={users} />
//         ) : (
//           <OrganizationChart employees={dataArray} />
//         )}

//       </div> :
//       <div style={{ overflowX: "auto" }}>
//     {/* <Table dataSource={data} title={() => 'All Users'} footer={() => 'You may filter users based on department and roles'}>
//       <ColumnGroup title="Name">
//         <Column title="First Name" dataIndex="firstName" key="firstName"/>
//         <Column title="Last Name" dataIndex="lastName" key="lastName" />
//       </ColumnGroup>
//       <Column title="Department" dataIndex="department" key="department" 
//       filters={[
//         { text: 'Project Management', value: 'Project Management' },
//         { text: 'Mechanical', value: 'Mechanical' },
//         { text: 'Electrical', value: 'Electrical' },
//         { text: 'Process', value: 'Process' },
//         { text: 'Piping', value: 'Piping' },
//         { text: 'Instrumentation', value: 'Instrumentation' },
//         { text: 'Civil/Structure', value: 'Civil/Structure' },
//       ]}
//       onFilter={(value, record) => record.department === value}
//       />
//       <Column
//         title="Role"
//         dataIndex="roleTitle"
//         key="roleTitle"
//         filters={[
//           { text: 'Lead', value: 'Head' },
//           { text: 'Senior Engineer', value: 'Senior' },
//           { text: 'Junior Engineer', value: 'Junior' },
//           { text: 'Designer', value: 'Designer' },
//         ]}
//         onFilter={(value, record) => record.roleTitle === value}
//       />
//       <Column title="Reporting To" key="reported_to" dataIndex="reported_to"></Column>
//       <Column title="Email" key="email" dataIndex="email"></Column>

//     title={() => 'All Users'}
//     footer={() => 'You may filter users based on department and roles'}

//     </Table> */}

// <Table
//       dataSource={data}
//       columns={columns}
//       title={() => 'All Users'}
//       footer={() => 'You may filter users based on department and roles'}
//     />
//       </div>
//     }
//     <ProtectedAppPage />

//     </>
//   );
// }




// //   {
// //     title: "Role",
// //     dataIndex: "roleTitle",
// //     key: "roleTitle",
//     // filters: [

//     //   {
//     //     text: 'Lead',
//     //     value: 'Head',
//     //   },
//     //   {
//     //     text: 'Senior Engineer',
//     //     value: 'Senior',
//     //   },
//     //   {
//     //     text: 'Junior Engineer',
//     //     value: 'Junior',
//     //   },
//     //   {
//     //     text: 'Designer',
//     //     value: 'Designer',
//     //   },
//     // ],
//     // onFilter:  (value, record) =>record.roleTitle === value,

// //   },

// //   {
// //     title: "Reporting To",
// //     dataIndex: "reported_to",
// //     key: "reported_to",
// //   },
// //   {
// //     title: "Email",
// //     dataIndex: "email",
// //     key: "email",
// //   },

// //   {
// //     title: "Action",
// //     key: "action",
// //     render: (_, record) => (
// //       <Space size="middle">
// //         <a>Delete</a>
// //       </Space>
// //     ),
// //   },
// // ];
