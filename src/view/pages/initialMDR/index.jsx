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



import { saveData, loadData, getAllKeys } from '../../storage';



  const MdrTemplate = ({ projectCode, mdrCode }) => {
    const [customModalVisible, setCustomModalVisible] = useState(false);
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const getProjectCode = params.get('projectCode');
    const getMdrCode = params.get('mdrCode');
    const projectId = params.get('projectId');
    const getMdrTitle= params.get('title');
    const departmentId = params.get('departmentId');
  console.log(getProjectCode,getMdrCode);
  const departmentOptionsString = params.get('departmentOptions');

  const projectOptions = params.get('projectOptions');

    const [customFieldValues, setCustomFieldValues] = useState({});
    const [templateModalVisible,setTemplateModalVisible] = useState(false)
    const [selectedFieldVisible,setSelectedFieldVisible]  = useState(false)
    const [title,setTitle] = useState('')
    const [selectedRowData, setSelectedRowData] = useState(null);

    const [codes,setCodes] = useState([])
    const [selectedRows, setSelectedRows] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
    const [code,setCode] = useState()
    const [data, setData] = useState([
      // Add your data here
        // Section A: PROJECT MANAGEMENT
        { category: 'PROJECT MANAGEMENT', code: 'A', documentTitle: 'Scope of Work', additionalAssigned: 'e.g. Only for 5 kT Storage Tank Construction', areaCode: '01', departmentCode: 'PM', documentContentCode: 'SOW', sequenceNumber: '00X', document: '2014-01-PM-SOW-00X' },
      { category: 'PROJECT MANAGEMENT', code: 'A.1', documentTitle: 'Scope of Work', areaCode: '01', departmentCode: 'PM', documentContentCode: 'SOW', sequenceNumber: '00X', document: '2014-01-PM-SOW-00X' },
      { category: 'PROJECT MANAGEMENT', code: 'A.2', documentTitle: 'Specification', areaCode: '01', departmentCode: 'PM', documentContentCode: 'SP', sequenceNumber: '00X', document: '2014-01-PM-SP-00X' },
      { category: 'PROJECT MANAGEMENT', code: 'A.3', documentTitle: 'Report', areaCode: '01', departmentCode: 'PM', documentContentCode: 'REP', sequenceNumber: '00X', document: '2014-01-PM-REP-00X' },
      // ... (repeat for other items in section A)
    
      // Section B: PROCESS
      { category: 'PROCESS', code: 'B', documentTitle: 'Scope of Work', areaCode: '01', departmentCode: 'PRO', documentContentCode: 'SOW', sequenceNumber: '00X', document: '2014-01-PRO-SOW-00X' },
      { category: 'PROCESS', code: 'B.1', documentTitle: 'Scope of Work', areaCode: '01', departmentCode: 'PRO', documentContentCode: 'SOW', sequenceNumber: '00X', document: '2014-01-PRO-SOW-00X' },
      { category: 'PROCESS', code: 'B.2', documentTitle: 'Specification', areaCode: '01', departmentCode: 'PRO', documentContentCode: 'SP', sequenceNumber: '00X', document: '2014-01-PRO-SP-00X' },
      { category: 'PROCESS', code: 'B.3', documentTitle: 'Report', areaCode: '01', departmentCode: 'PRO', documentContentCode: 'REP', sequenceNumber: '00X', document: '2014-01-PRO-REP-00X' },
      // ... (repeat for other items in section B)
    
      // Section C: MECHANICAL (PIPING)
      { category: 'MECHANICAL (PIPING)', code: 'C', documentTitle: 'Scope of Work', areaCode: '01', departmentCode: 'PIP', documentContentCode: 'SOW', sequenceNumber: '00X', document: '2014-01-PIP-SOW-00X' },
      { category: 'MECHANICAL (PIPING)', code: 'C.1', documentTitle: 'Scope of Work', areaCode: '01', departmentCode: 'PIP', documentContentCode: 'SOW', sequenceNumber: '00X', document: '2014-01-PIP-SOW-00X' },
      { category: 'MECHANICAL (PIPING)', code: 'C.2', documentTitle: 'Specification', areaCode: '01', departmentCode: 'PIP', documentContentCode: 'SP', sequenceNumber: '00X', document: '2014-01-PIP-SP-00X' },
      { category: 'MECHANICAL (PIPING)', code: 'C.3', documentTitle: 'Report', areaCode: '01', departmentCode: 'PIP', documentContentCode: 'REP', sequenceNumber: '00X', document: '2014-01-PIP-REP-00X' },
        { category: 'PROJECT MANAGEMENT', code: 'A.1', documentTitle: 'Scope of Work', areaCode: '01',departmentCode: 'PM',documentContentCode: 'SOW',sequenceNumber: '00X', document: '2014-01-PM-SOW-00X' },
        { category: 'PROJECT MANAGEMENT', code: 'A.2', documentTitle: 'Specification', codeDetails: '01 PM SP 00X', document: '2014-01-PM-SP-00X' },
        // ... (repeat for other items in section A)
      
        // Section B: PROCESS
        { category: 'PROCESS', code: 'B.1', documentTitle: 'Scope of Work', codeDetails: '01 PRO SOW 00X', document: '2014-01-PRO-SOW-00X' },
        // ... (repeat for other items in section B)
      
        // Section C: MECHANICAL (PIPING)
        { category: 'MECHANICAL (PIPING)', code: 'C.1', documentTitle: 'Scope of Work', codeDetails: '01 PIP SOW 00X', document: '2014-01-PIP-SOW-00X' },
        // ... (repeat for other items in section C)
      
        // ... (repeat for other sections)
      ]); // Add state for data


  
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
        const department = departmentOptions.find(
          (item) => item?.value == departmentId
        );
        var title=getMdrTitle;
        var mdrCode=getMdrCode;
        selectedRows.forEach((index) => {
          const documentValue = data[index].document;
  
          saveData(`doc-${index}`,  {
            title,
            departmentId,
            projectId,
            companyId: user?.user?.companyId,
            authorId: user?.user?.id,
            authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
            mdrCode,
            projectCode: getProjectCode,
            departmentName: department?.label,id:documentValue
          });
          console.log(documentValue);
        });
        const response = await axios.post(
          "http://127.0.0.1:8083/api/documents/mdr",
          {
            title,
            departmentId,
            projectId,
            companyId: user?.user?.companyId,
            authorId: user?.user?.id,
            authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
            mdrCode,
            projectCode: getProjectCode,
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
        if (selectedRows.length === 0) {
          message.error('Please select at least one row.');
          return;
        }
      
        // Save the document field value for each selected row

        documentModalCancel();
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
          `http://127.0.0.1:8083/api/documents/getCodes?companyId=${user?.user?.companyId}`,
          {
            headers: {
              Authorization: user?.accessToken,
              // Add other headers if needed
            },
          }
        );
        // console.log(response);
        var newResponse=response.data.documentNumberFormat.split('-');
        setCodes(getProjectCode+'-'+newResponse[1]+'-'+newResponse[2]+'-'+getMdrCode+'-'+'00X')        

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
        const newDocument = `${getProjectCode}-${title}-${getMdrCode}-00X`;
    
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