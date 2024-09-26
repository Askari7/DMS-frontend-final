import React, { useState, useEffect,useRef } from "react";
import { useLocation } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import {Button,Form,Row,Col,Space ,Table,Input,Modal,message,Checkbox,Select, Tooltip,} from "antd";
import { RiCloseFill } from "react-icons/ri";
import axios from "axios";
import ProtectedAppPage from "../Protected";
import OrganizationChart from "../organizationChart";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useForm } from "react-hook-form";
import { Edit } from "iconsax-react";

export default function Users() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const location = useLocation();
  const [image,setImage] = useState(null)
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
  const [dataArray,setDataArray] = useState([])
  const [showTreeView, setShowTreeView] = useState(false);
  const users = location.state?.users || null; 
  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/departments?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
      const options = [];
      for (const item of response?.data) {
        options.push({ value:{id:item?.id,title:item?.title}, label: item?.title });
      }
      console.log("departments",options);
      setDepartmentOptions(options); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  const handleSubmit = () => {
    form.validateFields().then((values) => {
        addUser()
      // onSubmit(values);
      form.resetFields();
    });
  };

  const UserModalShow = () => {
    setUserModalVisible(true);
  };

  const UserModalCancel = () => {
    setUserModalVisible(false);
  };

  const userUpdateModalShow = (record) => {
    setUserToUpdate(record);
    updateForm.setFieldsValue({
      firstName: record.firstName,
      lastName: record.lastName,
      email: record.email,
    });
    setUserUpdate(true);
  };

  const userUpdateModalCancel = () => {
    setUserUpdate(false);
  };
  
  const handleUpdateUser = () => {
    updateForm.validateFields().then((values) => {
      handleUpdate(values);
      updateForm.resetFields();
    });
  };

  const handleUpdate = async (values) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8083/api/users/user_update?companyId=${user?.user.companyId}&id=${userToUpdate.id}`,
      {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      },
      {
        headers: {
          Authorization: user?.accessToken,
          // Add other headers if needed
        },
      }
    );
    message.success(response.data.message);
    userUpdateModalCancel();
    fetchData();
  } catch (error) {
    console.error("Error updating user:", error?.message);
  }
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Update User">
  <Button
    size="middle"
    icon={<Edit />}
    disabled={user?.user?.roleId !== 1}
    onClick={() => userUpdateModalShow(record)}
  />
</Tooltip>
          <Tooltip title="Delete">
  <Button
    size="middle"
    icon={<DeleteOutlined />}
    disabled={user?.user?.roleId !== 1}
    onClick={() => deleteModalShow(record)}
  />
</Tooltip>

           
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
      if(user?.user.roleId==2||user?.user.roleId==3||user?.user.roleId==4||user?.user.roleId==5){
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
          "2":"Head",
          "3":"Senior Engineer",
          "4":"Junior Engineer",
          "5":"Designer",
          "6":"Client"
        }
const data = response.data.map(item => {
  return {
    ...item, // Spread the existing item properties
    roleTitle: roleOptions[item.roleId] // Map roleId to roleTitle using roleOptions
  };
});        
        const filter = data.filter(item=>item.removed== 0)

        const roleOrder = ['Head', 'Senior Engineer', 'Junior Engineer', 'Designer','Client'];
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

  const deleteModalShow = (record) => {
    setRecord(record)
    setDeleteModalVisible(true);
  };
  const deleteModalCancel = () => {
    setDeleteModalVisible(false);
  };

  const handleUserTreeViewClick = () => {
    setShowTreeView(true);
  };
  const handleDoubleClick = () => {
    setShowTreeView(false);
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
        <Form form={form} onFinish={handleSubmit} layout="vertical" name="basic" encType="multipart/form-data">
        
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
          name="department"
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
    name="basic"
    encType="multipart/form-data"
    form={updateForm}
    onFinish={handleUpdateUser}
  >
    <Form.Item
      label="First Name"
      name="firstName"
      rules={[{ required: true, message: 'Please enter the first name' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Last Name"
      name="lastName"
      rules={[{ required: true, message: 'Please enter the last name' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please enter the email' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" block>
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
        {(user?.user.roleId == 2||user?.user.roleId == 3 ||user?.user.roleId == 4||user?.user.roleId == 5) && users ? (
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