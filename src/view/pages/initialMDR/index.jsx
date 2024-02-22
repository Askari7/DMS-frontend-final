import React, { useEffect, useState } from 'react';
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
} from 'antd';
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import jsondata from './data.json';
import { saveData, loadData, getAllKeys } from '../../storage';
console.log(jsondata);

  const MdrTemplate = ({ projectCode, mdrCode }) => {
    const [customModalVisible, setCustomModalVisible] = useState(false);
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const ProjectCode = params.get('projectCode');
    const getMdrCode = params.get('mdrCode');
    const projectId = params.get('projectId');
    const getMdrTitle= params.get('title');
    const status= params.get('status');

    const departmentId = params.get('departmentId');
  console.log(ProjectCode,getMdrCode);
   let departmentOptionsString = params.get('departmentOptions');
  console.log(departmentOptionsString);
  let departmentOptionSuffix = params.get('departmentOption');
  console.log("Suffix",departmentOptionSuffix);

  const projectOptions = params.get('projectOptions');
  const approver = params.get('approver');
  const reviewer = params.get('reviewer');
  // const projectCode = params.get('projectCode');

    const [customFieldValues, setCustomFieldValues] = useState({});
    const [templateModalVisible,setTemplateModalVisible] = useState(false)
    const [selectedFieldVisible,setSelectedFieldVisible]  = useState(false)
    const [title,setTitle] = useState('')
    const [selectedRowData, setSelectedRowData] = useState(null);

    const [codes,setCodes] = useState([])
    const [selectedRows, setSelectedRows] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
    const [code,setCode] = useState()

    const departmentOptionSuffixes = JSON.parse(departmentOptionSuffix);
console.log("hehe",departmentOptionSuffixes)
    const departmentOptions = JSON.parse(departmentOptionsString);
    console.log("department",departmentOptions);
    const departmentOptionsMap = new Map(departmentOptions.map(option => [option.value, option.label]));
    console.log("departmentmap",departmentOptionsMap);
    const departmentIds = departmentId.split(',').map(Number);
    const departmentLabels = departmentIds.map(id => departmentOptionsMap.get(id));
    console.log("id",departmentIds,"labels",departmentLabels);
    const departmentLabelsString = departmentLabels.join(', ');
    console.log("strings",departmentLabelsString);
    const [data, setData] = useState(jsondata);
  
    const columns = [
      {
        title: 'Sr.#',
        dataIndex: 'code', // Assuming 'code' is the appropriate field for 'Sr.#'
        key: 'code',
      },
      {
        title: 'DOCUMENT TITLE (Pre-Loaded)',
        dataIndex: 'documentTitle',
        key: 'documentTitle',
      },
      {
        title: 'Additional Assigned',
        dataIndex: 'additionalAssigned',
        key: 'additionalAssigned',
      },
      {
        title: 'Area Code',
        dataIndex: 'areaCode',
        key: 'areaCode',
      },
      {
        title: 'Department Code',
        dataIndex: 'departmentCode',
        key: 'departmentCode',
      },
      {
        title: 'Document Content Code',
        dataIndex: 'documentContentCode',
        key: 'documentContentCode',
      },
      {
        title: 'Sequence Number',
        dataIndex: 'sequenceNumber',
        key: 'sequenceNumber',
      },
      {
        title: 'DOCUMENT NUMBER',
        dataIndex: 'document', // Use 'documentNumber' as the dataIndex
        key: 'document',
        // render: (_, record) => (
        //   <span>{codes}</span>
        // ),
      },
     
      {
        title: "Update Code",
        key: "updateCode",
        render: (_, record) => (
          <Space size="middle">
            <Button onClick={() => handleUpdate(record)}>Update</Button>
          </Space>
          
        ),
      },
    ];
    const addDocument = async () => {
      
      const departmentOptions = await JSON.parse(departmentOptionsString);
      console.log(getMdrTitle,projectOptions,departmentOptions,projectId,departmentId);
 
      try {
//         const department = departmentOptions.filter(item => departmentId.includes(item?.value));
// const departmentNames = departments.map(item => item.label);

        // console.log(department);
        var title=getMdrTitle;
        var mdrCode=getMdrCode;
        var count = selectedRows.length
        selectedRows.forEach(async (index) => {
          let documentValue = data[index].document;
          documentValue = documentValue.replace("2014", ProjectCode)
          console.log(documentValue,);

         const masterDocumentName=title;
          console.log(documentValue);
          const assignedBy=user.user.id;
          console.log('This is coming from param',approver,reviewer);
          try {
            var title=documentValue;
            var version='000';
            const responseDoc = await axios.post(
              "https://54.81.250.98:8083/api/documents/",
              {
                title,
                departmentId,
                projectId,
                companyId: user?.user?.companyId,
                userId: user?.user?.id,
                userName: `${user?.user?.firstName} ${user?.user?.lastName}`,
                masterDocumentId: mdrCode,
                masterDocumentName,
                projectCode: ProjectCode,
                departmentName:departmentLabelsString,
                status : "Initialized",
                assignedBy,
                 approver,
                 reviewer,
                 version
              },
              {
                headers: {
                  Authorization: user?.accessToken,
                },
              }
            );
          } catch (error) {
            console.log(error);
          }
        });

        const response = await axios.post(
          "https://54.81.250.98:8083/api/documents/mdr",
          {
            title,
            departmentId,
            projectId,
            noOfDocuments:count,
            status:"Ongoing",
            companyId: user?.user?.companyId,
            authorId: user?.user?.id,
            authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
            mdrCode,
            projectCode: ProjectCode,
            departmentName: departmentLabelsString,
          },
          {
            headers: {
              Authorization: user?.accessToken,
            },
          }
        );
        // Handle the response as needed
        console.log(response);
        message.success(response?.data?.message);
        if (selectedRows.length === 0) {
          message.error('Please select at least one row.');
          return;
        }
      
        // Save the document field value for each selected row

      } catch (error) {
        // Handle errors
        console.error("Error adding documents:", error);
      }
    };

    const templateModalShow = () => {
      setTemplateModalVisible(true);
      
      // Update the document field for the selected rows with sequential numbers
      const updatedData = [...data];
      selectedRows.forEach((index, sequenceNumber) => {
        const newDocument = data[index].document.replace('00X', (sequenceNumber + 1).toString().padStart(3, '0'));
        updatedData[index] = {
          ...data[index],
          document: newDocument,
        };
      });
    
      setData(updatedData);
    };
    const mydocumentSaved = async() => {
      // Check if a row is selected
    await addDocument();
      // Display success message
      message.success('Document values saved successfully.');
    
      // Log the saved data to the console
      selectedRows.forEach((index) => {
        const savedData = loadData(`doc-${index}`);
        console.log(`Saved Data for Key ${index}:`, savedData);
      });
    
      // Close the template modal
      templateModalCancel();
    };
    
    const templateModalCancel = () => {
      setTemplateModalVisible(false);
    };

    const selectedModalShow = () => {
      setSelectedFieldVisible(true);
    };
  
    const selectedModalCancel = () => {
      setSelectedFieldVisible(false);
    };
    

    const handleSelect = (record) => {
      selectedModalShow()
      const isSelected = selectedRows.includes(record.key);
      if (isSelected) {
        setSelectedRows(selectedRows.filter((rowKey) => rowKey !== record.key));
      } else {
        setSelectedRows([...selectedRows, record.key]);
      }
    };
    const handleUpdate = (record) => {
      setSelectedRowData(record);
      selectedModalShow();
    };
    
    const getAllCodes = async () => {
      console.log(user?.user?.companyId);

      try {
        const response = await axios.get(
          `https://54.81.250.98:8083/api/documents/getCodes?companyId=${user?.user?.companyId}`,
          {
            headers: {
              Authorization: user?.accessToken,
            },
          }
        );
        var newResponse=response.data.documentNumberFormat.split('-');
        setCodes(ProjectCode+'-'+newResponse[1]+'-'+newResponse[2]+'-'+getMdrCode+'-'+'00X')        

      } catch (error) {
        console.error("Error fetching projects:", error?.message);
      }
    };
    useEffect(()=>{
      getAllCodes()
    },[])

    const customModalShow = () => {
      setCustomModalVisible(true);
    };
  
    const customModalCancel = () => {
      setCustomModalVisible(false);
    };
  
    const handleCustomFieldChange = (fieldName, value) => {
      setCustomFieldValues({ ...customFieldValues, [fieldName]: value });
    };
    const handleDone = (value) => {
      if (selectedRowData) {
        const updatedData = [...data];
        const index = selectedRowData.key;
        const newDocument = `${ProjectCode}-${title}-${getMdrCode}-00X`;
    
        updatedData[index] = {
          ...selectedRowData,
          document: newDocument,
        };
    
        setData(updatedData);
        setSelectedRowData(null);
        selectedModalCancel();
      }
    };
    
    const handleAddCustom = () => {
      // Create a new object with properties matching existing columns
      const customData = {
        category: customFieldValues.category || '',
        code: customFieldValues.code || '',
        documentTitle: customFieldValues.documentTitle || '',
        additionalAssigned: customFieldValues.additionalAssigned || '',
        areaCode: customFieldValues.areaCode || '',
        departmentCode: customFieldValues.departmentCode || '',
        documentContentCode: customFieldValues.documentContentCode || '',
        sequenceNumber: customFieldValues.sequenceNumber || '',
        document: customFieldValues.document || '',
      };
  
      // Update the data array with the new custom data
      setData(prevData => [...prevData, customData]);
  
      // Close the custom modal
      setCustomModalVisible(false);
    };
  return (
    <>
        <Modal
      title="Update Code"
      width={400}
      centered
      visible={selectedFieldVisible}
      onCancel={selectedModalCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >
      <Row justify="space-between" align="center">
      <Col span={20}>
            <Form layout="vertical" name="basic">
              <Form.Item
                label="Update Code"
                name="UpdateCode"
                rules={[
                  {
                    required: true,
                    message: "Please Update Code",
                  },
                ]}
              >
                <Input
                  value={code}
                  onChange={(e) =>{ setTitle(e.target.value);
                    console.log('');
                  }}
                />
                </Form.Item>
                </Form>
                </Col>
      </Row>
      <Button
          type="primary"
          onClick={handleDone}
          // disabled={user?.user?.roleId != 1}
        >
          Done
        </Button>
    </Modal>

    <Modal
      title="Upload Document"
      width={400}
      centered
      visible={templateModalVisible}
      onCancel={templateModalCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >
      <Row justify="space-between" align="center">
        {/* Display the content of selectedRows here */}
        <div>
          <h3>Selected Rows:</h3>
          {/* <ul>
            {selectedRows.map((row, index) => (
              <li key={index}>{row+1}</li>
            ))}
          </ul> */}
    <ul>
      {selectedRows.map((index) => (
        <li key={index}>
          <strong>Category:</strong> {data[index].category} <br />
          <strong>Code:</strong> {data[index].code} <br />
          <strong>Document Title:</strong> {data[index].documentTitle} <br />
          <strong>Document Number:</strong> {data[index].document} <br />
          {/* Add other properties as needed */}
        </li>
      ))}
    </ul>
        </div>
      </Row>
      <Button
          type="primary"
          onClick={mydocumentSaved}
          // disabled={user?.user?.roleId != 1}
        >
          Done
        </Button>
    </Modal>
    
    <div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
        <h1>Company Environment Setup</h1>
      </div>
      <h2>MDR Template</h2>
      <Table
        columns={columns}
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
        rowSelection={{
          selectedRowKeys: selectedRows,
          onChange: (selectedRowKeys) => setSelectedRows(selectedRowKeys),
        }}

      />
      <Button
        type="primary"
        onClick={customModalShow}
      >
        Add Custom
      </Button>

      {/* Custom Modal */}
      <Modal
        title="Add Custom Field"
        width={400}
        centered
        visible={customModalVisible}
        onCancel={customModalCancel}
        footer={[
          <Button key="cancel" onClick={customModalCancel}>
            Cancel
          </Button>,
          <Button key="add" type="primary" onClick={handleAddCustom}>
            Add
          </Button>,
        ]}
        closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
      >
        {/* Form fields for custom input */}
        <Form layout="vertical" name="customForm">
          {/* Dynamically generate form fields based on existing columns */}
          {columns.map((column) => (
            <Form.Item
              key={column.key}
              label={column.title}
              name={column.dataIndex}
              rules={[
                {
                  required: true,
                  message: `Please enter ${column.title}`,
                },
              ]}
            >
              <Input
                onChange={(e) => handleCustomFieldChange(column.dataIndex, e.target.value)}
              />
            </Form.Item>
          ))}
        </Form>
      </Modal>

            <Button
          type="primary"
          onClick={templateModalShow}
          // disabled={user?.user?.roleId != 1}
        >
          View Templates
        </Button>
      {/* <div style={{ marginTop: '16px' }}>
        Selected Rows: {selectedRows.join(', ')}
      </div> */}


    </div>
    </>

  );
};

export default MdrTemplate;