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
    const [departmentWise, setDepartmentWise] = useState(false);
    const [loading, setLoading] = useState(true);
    const [displayNames, setDisplayNames] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [codes,setCodes] = useState([])
    const [selectedRows, setSelectedRows] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
    const [code,setCode] = useState()
    const [count,setCount] = useState(1)
    // const [dataArray,setDataArray] = useState([])


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
    const [dataArray,setDataArray] = useState(jsondata)

    console.log("jsonData",jsondata);

  
    const columns = [
      {
        title: 'Sr.#',
        dataIndex: 'code', // Assuming 'code' is the appropriate field for 'Sr.#'
        key: 'code',
      },
      {
        title: 'Document',
        dataIndex: 'documentTitle',
        key: 'documentTitle',
      },
      // {
      //   title: 'Area Code',
      //   dataIndex: 'areaCode',
      //   key: 'areaCode',
      // },
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
      // {
      //   title: 'Sequence Number',
      //   dataIndex: 'sequenceNumber',
      //   key: 'sequenceNumber',
      // },
      {
        title: 'DOCUMENT NUMBER',
        dataIndex: 'document', // Use 'documentNumber' as the dataIndex
        key: 'document',
        // render: (_, record) => (
        //   <span>{codes}</span>
        // ),
      },
      {
        title: "No Of Documents",
        key: "noOfDocuments",
        render: (_, record) => (
          <Space size="middle" align="center">
            <Button onClick={() => handleCount(record)}>Add </Button>
            <Tag style={{color:"white",backgroundColor:"blue"}}>{count}</Tag>
          </Space>
          
        ),
      },
      // {
      //   title: "Update Code",
      //   key: "updateCode",
      //   render: (_, record) => (
      //     <Space size="middle">
      //       <Button onClick={() => handleUpdate(record)}>Update</Button>
      //     </Space>
          
      //   ),
      // },
    ];
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDisplayNames(departmentOptions.map(option => option.label));
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, []);

    const handleCount=()=>{
    }

    const departmentWiseShow = () => {
      setDepartmentWise(true);
    };
  
    const departmentWiseCancel = () => {
      setDepartmentWise(false);
    };
    const addDocument = async () => {
      
      const departmentOptions = await JSON.parse(departmentOptionsString);
      console.log(getMdrTitle,projectOptions,departmentOptions,projectId,departmentId);
 
      try {
//         const department = departmentOptions.filter(item => departmentId.includes(item?.value));
// const departmentNames = departments.map(item => item.label);

        // console.log(department);
        var title=getMdrTitle;
        var mdrCode=getMdrCode;
        mdrCode=mdrCode.replace(/\s/g, '');
        var count = selectedRows.length
        selectedRows.forEach(async (index) => {
          let documentValue = data[index].document;
          documentValue = documentValue.replace("2014", ProjectCode)
          console.log(documentValue,);

         const masterDocumentName=title;
          console.log(documentValue);
          const assignedBy=user.user.id;
          const assignedFrom=user.user.roleId;
          console.log('This is coming from param',approver,reviewer);
          try {
            var title=documentValue;
            var version='000';
            const responseDoc = await axios.post(
              "http://127.0.0.1:8083/api/documents/",
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
                assignedFrom,
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
          "http://127.0.0.1:8083/api/documents/mdr",
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

    const handleDepartmentClick = (name) => {
      console.log("name",name);
      setSelectedDepartment(name);
      departmentWiseCancel();
      filterData(name);
    };

    const filterData = (selectedDepartment) => {
      // Assuming data is an array of users with each object having a 'department' and 'roleTitle' property
      const filteredData = dataArray.filter(data => String(data.category).toUpperCase() === String(selectedDepartment).toUpperCase());
    
      // Define the order of roles
      // const roleOrder = ['Head', 'Senior', 'Junior', 'Designer'];
    
      // Sort the filtered data based on the order of roles
      // filteredData.sort((a, b) => roleOrder.indexOf(a.roleTitle) - roleOrder.indexOf(b.roleTitle));
  
      console.log("filter",filteredData);
      setData(filteredData);
    };
  
    const handleClick = () => {
      departmentWiseCancel();
      setData(dataArray)
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
      

      const navigateBackToMDR = () => {

        history.push(`/pages/MDR`)};
      
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
        // setDataArray(updatedData);
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
          Confirm
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
        <div>
          <h3>Selected Documents:</h3>
          <ul style={{ margin: "2px" ,padding:"2px"}}>
            {selectedRows.map((index) => (
              <li key={index} style={{ margin: "2px" ,padding:"2px"}}>
                <strong style={{color:"blue"}}>Category:</strong> {data[index].category} <br />
                <strong style={{color:"blue"}}>Code:</strong> {data[index].code} <br />
                <strong style={{color:"blue"}}>Document Title:</strong> {data[index].documentTitle} <br />
                <strong style={{color:"blue"}}>Document Number:</strong> {data[index].document} <br />
                {/* Add other properties as needed */}

                {/* Input for Document Title */}
                <Input
                style={{ margin: "6px" }}
                  placeholder="Enter Document Title"
                  value={customFieldValues.title || ''} // You may adjust this based on your state
                  onChange={(e) => handleCustomFieldChange('title', e.target.value)}
                />
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
            All Documents
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
    
    <div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
        <h1>Select Dcuments For MDR</h1>
      </div>

      <div style={{ marginBottom: "16px" ,justifyContent:"space-between"}}>
        <h1>MDR Templates</h1>
        <div>

        <Button
          type="primary"
          disabled={user?.user?.roleId != 1}
          style={{margin:"4px"}}
          onClick={departmentWiseShow}

        >
          Department Wise
        </Button>
        </div>

      </div>
      <Table
        columns={columns}
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
        rowSelection={{
          selectedRowKeys: selectedRows,
          onChange: (selectedRowKeys) => setSelectedRows(selectedRowKeys),
        }}
      />
      <Space >
      <Button
        type="primary"
        onClick={customModalShow}
      >
        Add Custom
      </Button>
      <Button
          type="primary"
          onClick={templateModalShow}
          // disabled={user?.user?.roleId != 1}
        >
          Proceed
        </Button>
        </Space>
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

         
      {/* <div style={{ marginTop: '16px' }}>
        Selected Rows: {selectedRows.join(', ')}
      </div> */}


    </div>
    </>

  );
};

export default MdrTemplate;