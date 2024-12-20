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

const columns = [
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "MDR ID",
    dataIndex: "masterDocumentId",
    key: "masterDocumentId",
  },
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Reviewer",
    dataIndex: "allowReview",
    key: "allowReview",
  },

  {
    title: "Approver",
    dataIndex: "allowApprove",
    key: "allowApprove",
  },

  {
    title: "Uploader/Creator",
    dataIndex: "allowCreate",
    key: "allowCreate",
  },
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

export default function DocumentPermissions() {
  const [DocumentPermissionModalVisible, setDocumentPermissionModalVisible] =useState(false);
  const [mdrOptions, setMdrData] = useState([]);
  const [projectOptions, setProjectData] = useState([]);
  const [docsData, setDocsData] = useState([]);

  const [userOptions, setUserData] = useState([]);
  const [permissionUser, setpermissionUser] = useState("");

  const [mdr, setMDR] = useState("");
  const [permissionDoc, setpermissionDoc] = useState("");

  
  const [permissionForm] = Form.useForm();

  const [project, setProject] = useState("");

  const [permissionModalVisible, setPermissionModalVisible] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [DocumentPermissionOptions, setDocumentPermissions] = useState([]);
  const [checked, setChecked] = useState([]);

  const [DocumentPermissionId, setDocumentPermissionId] = useState("");

  const DocumentPermissionModalShow = () => {

    setDocumentPermissionModalVisible(true);
  };
  // useEffect(()=>{
  //   fetchDocs()
  // },[mdr])

  const addPermission = async () => {
    try {
      const response = await axios.post(
        "https://novacon.live/api/documents/permissions",
        {
          // project:project,
          masterDocumentId: mdr,
          doc:permissionDoc,
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
      setProject("");
      setpermissionUser("");
      setChecked([]);
      fetchData();
      setDocumentPermissionModalVisible(false);
    } catch (error) {
      // Handle errors
      if (error?.message == "Request failed with status code 403") {
        message.error("Permission Denied to create document on this MDR");
      }
    }
  };
  const handleSubmit = () => {
    permissionForm.validateFields().then((values) => {
        addPermission()
      // onSubmit(values);
      permissionForm.resetFields();
    });
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
        });
      }
      setMdrData(options); // Assuming the response.data is an array of DocumentPermissions
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  // useEffect(()=>{
  // fetchDocs(mdr)
  // },[mdr])
  const fetchProjects= async () => {
    try {
      const response = await axios.get(
        `https://novacon.live/api/projects?companyId=${user?.user?.companyId}&roleId=${user?.user?.roleId}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
      const options = [];
      for (const item of response?.data) {
        options.push({
          value: item?.id,
          label: item?.title,
        });
      }

      setProjectData(options); // Assuming the response.data is an array of DocumentPermissions
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };

  const fetchDocs= async (mdr) => {
    try {
      const response = await axios.get(
        `https://novacon.live/api/projects/fetchdocs?companyId=${user?.user?.companyId}&roleId=${user?.user?.roleId}&mdrId=${mdr}&departmentId=${user?.user.departmentId}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
      console.log(response.data,'response.data');
      
      const options = [];
      for (const item of response?.data) {
        options.push({
          value: item?.title,
          label: item?.title,
        });
      }
      console.log(options,'options');
      
      setDocsData(options);
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
    setProject("")
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
        `https://novacon.live/api/documents/permissions?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response.data);
      
      setData(response.data); // Assuming the response.data is an array of departments
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchData();
    fetchUsers();
    fetchMDR();
    fetchProjects();

  }, []);
  const handleMDRset=(rec)=>{
    fetchDocs(rec)
    setMDR(rec)
  }
  return (
    <>
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
          

        <Form layout="vertical" name="basic" form={permissionForm} onFinish={handleSubmit}>
        {/* <Form.Item
            label="Project"
            name="Project"
            rules={[
              {
                required: true,
                message: "Please select Project",
              },
            ]}
          >
            <Select
              options={projectOptions}
              value={project}
              onChange={(value) => setProject(value)}
            />
          </Form.Item> */}
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
              onChange={(value) =>handleMDRset(value)}
            />
          </Form.Item>
            {mdr&& <Form.Item
            label="Doc"
            name="doc"
            rules={[
              {
                required: true,
                message: "Please select Doc",
              },
            ]}
          >
            <Select
              options={docsData}
              value={permissionDoc}
              onChange={(value) => setpermissionDoc(value)}
            />
          </Form.Item>}

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
                // onClick={() => addPermission()}
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
      <Table columns={columns} dataSource={data} bordered
      title={() => 'All Documents Permissions'}
      footer={() => 'You may filter Documents'}/>
    </>
  );
}
