// import React, { useEffect, useState } from 'react';
// import { notification, Row,  Col,  Divider,Checkbox,  Form,  Space,  Table,  Select,  Tag,  Input,  DatePicker,  TimePicker,  Button,  Modal,  message,} from 'antd';
// import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
// import axios from 'axios'
// import { useLocation } from 'react-router-dom';
// import jsondata from './data.json';
// import { saveData, loadData, getAllKeys } from '../../storage';
// 

//   const MdrTemplate = ({ projectCode, mdrCode }) => {
//     const [customModalVisible, setCustomModalVisible] = useState(false);
//     const { search } = useLocation();
//     const params = new URLSearchParams(search);
//     const ProjectCode = params.get('projectCode');
//     const getMdrCode = params.get('mdrCode');
//     const projectId = params.get('projectId');
//     const getMdrTitle= params.get('title');
//     const departmentId = params.get('departmentId');

//     let departmentOptionsString = params.get('departmentOptions');
//     let departmentOptionSuffix = params.get('departmentOption');

//     const projectOptions = params.get('projectOptions');
//     const approver = params.get('approver');
//     const reviewer = params.get('reviewer');
//     const record = params.get('record');

//     console.log("data from mdr to mdrtemplates",ProjectCode,getMdrCode,projectId,getMdrTitle,departmentId,
//     departmentOptionSuffix,departmentOptionsString,projectOptions,approver,reviewer,record);

//     const [customFieldValues, setCustomFieldValues] = useState({});
//     const [templateModalVisible,setTemplateModalVisible] = useState(false)
//     const [selectedFieldVisible,setSelectedFieldVisible]  = useState(false)
//     const [title,setTitle] = useState('')
//     const [selectedRowData, setSelectedRowData] = useState(null);
//     const [departmentWise, setDepartmentWise] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [displayNames, setDisplayNames] = useState([]);
//     const [selectedDepartment, setSelectedDepartment] = useState(null);
//     const [codes,setCodes] = useState([])
//     const [selectedRows, setSelectedRows] = useState([]);
//     const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
//     const [code,setCode] = useState()


//     const departmentOptionSuffixes = JSON.parse(departmentOptionSuffix);
//     // 
//     const departmentOptions = JSON.parse(departmentOptionsString);
//     // 
//     const departmentOptionsMap = new Map(departmentOptions.map(option => [option.value, option.label]));
//     // 
//     const departmentIds = departmentId.split(',').map(Number);
//     const departmentLabels = departmentIds.map(id => departmentOptionsMap.get(id));
//     // 
//     const departmentLabelsString = departmentLabels.join(', ');
//     // 

//     const dataArrayWithIndexes = Object.entries(jsondata).map(([index, value]) => ({  ...value, index: parseInt(index), checked: false }));
    

//     const [data, setData] = useState(Object.values(dataArrayWithIndexes));
//     const [dataArray,setDataArray] = useState(Object.values(dataArrayWithIndexes))
//     let changing = data
//     let changing2 = dataArray

    
    

//     const [documentCounts, setDocumentCounts] = useState({});
//     const [documentTitles, setDocumentTitles] = useState({});
//     const [information,setInformation] = useState([])
//     const [titles,setValues] = useState([])

//     const [documentInfo, setDocumentInfo] = useState([]);
    
//     const columns = [
//       {
//         title: 'Sr.#',
//         dataIndex: 'code', // Assuming 'code' is the appropriate field for 'Sr.#'
//         key: 'code',
//       },
//       {
//         title: 'Document',
//         dataIndex: 'documentTitle',
//         key: 'documentTitle',
//       },
//       {
//         title: 'Department Code',
//         dataIndex: 'departmentCode',
//         key: 'departmentCode',
//         filters: [
//           {
//             text: 'Project Management',
//             value: 'PM',
//           },
//           {
//             text: 'Process',
//             value: 'PRO',
//           },
//           {
//             text: 'Piping',
//             value: 'PIP',
//           },
//           {
//             text: 'Mechanical',
//             value: 'TK',
//           },
//           {
//             text: 'Civil/Structure',
//             value: 'CIV',
//           },
//           {
//             text: 'Electrical',
//             value: 'ELE',
//           },
//           {
//             text: 'Instrumentation',
//             value: 'INS',
//           },
//         ],
//         filterMode: 'tree',
//         filterSearch: true,
//         onFilter:  (value, record) => record.departmentCode === value,
//       },
//       {
//         title: 'Document Content Code',
//         dataIndex: 'documentContentCode',
//         key: 'documentContentCode',
//       },
//       {
//         title: 'DOCUMENT NUMBER',
//         dataIndex: 'document', // Use 'documentNumber' as the dataIndex
//         key: 'document',
//       },
//       {
//         title: "No Of Documents",
//         key: "noOfDocuments",
//         render: (_, record) => (
//           <Space size="middle" align="center">
//             <Button onClick={() => handleCount(record)}>Add </Button>
//             <Tag style={{ color: "white", backgroundColor: "blue" }}>{documentCounts[record.document] || 1}</Tag>
//           </Space>
//         ),
//       },
//     ];
//     useEffect(() => {
//       const timeout = setTimeout(() => {
//         setDisplayNames(departmentOptions.map(option => option.label));
//         setLoading(false);
//       }, 1000);
  
//       return () => clearTimeout(timeout);
//     }, [])

//     const handleCount = (record) => {
//       setDocumentCounts(prevCounts => {
//         const updatedCounts = { ...prevCounts };
//         const currentCount = updatedCounts[record.document] || 1;
//         updatedCounts[record.document] = currentCount + 1;
//         // 
//         return updatedCounts;
//       });
//     };

//     const templateModalShow = () => {
//       setTemplateModalVisible(true);  
//       const updatedData = [...data];
//       // 
//       let allInfos = [];
//       selectedRows.forEach((index, sequenceNumber) => {
//         const count = documentCounts[data[index].document] || 1;
//         //         
//         for (let i = 0; i < count; i++) {
//           let newDocument = data[index].document.replace('00X', (i + 1).toString().padStart(3, '0')).replace("xxxx",ProjectCode)
//           // 
//           // Save the document name in allInfos array
//           if (!allInfos[index]) {
//             allInfos[index] = {};
//           }
//           allInfos[index][i] = newDocument;
      
//           updatedData[index] = {
//             ...data[index],
//             count: documentCounts[data[index].document]
//           };
//         // 
          
//         }
      
//       });
//       
//       setInformation(allInfos)
//       // 
//       // 
//       setData(updatedData);
      
//     };

//   const handleChangingTitle = (title, document, index, i) => {
//     setDocumentInfo((prevDocumentInfo) => {
//       const newDocumentInfo = [...prevDocumentInfo];
//       newDocumentInfo[index] = newDocumentInfo[index] || [];
//       newDocumentInfo[index][i] = {
//         ...newDocumentInfo[index][i],
//         title,
//       };
//       // 

//       return newDocumentInfo;
//     });
//   };
  
//   const handleStartDateChange = (date, document, index, i) => {
//     setDocumentInfo((prevDocumentInfo) => {
//       const newDocumentInfo = [...prevDocumentInfo];
//       newDocumentInfo[index] = newDocumentInfo[index] || [];
//       newDocumentInfo[index][i] = {
//         ...newDocumentInfo[index][i],
//         startDate: date ? date.toDate() : null,
//       };
//       return newDocumentInfo;
//     });
//   };
  
//   const handleEndDateChange = (date, document, index, i) => {
//     setDocumentInfo((prevDocumentInfo) => {
//       const newDocumentInfo = [...prevDocumentInfo];
//       newDocumentInfo[index] = newDocumentInfo[index] || [];
//       newDocumentInfo[index][i] = {
//         ...newDocumentInfo[index][i],
//         endDate: date ? date.toDate() : null,
//       };
//       return newDocumentInfo;
//     });
//   };
//   const onChange = (pagination, filters, sorter, extra) => {
//     
//   };
  
//   const change=(selectedRows,selectedRowKeys)=>{
//     // 
//     const updatedSelectedRowKeys = selectedRowKeys.map(row => ({ ...row, checked: true }));
//     
//     const indexes = updatedSelectedRowKeys.map(row => row.index);
//     // 
//     setSelectedRows(indexes)
//   }
  
//   const handleCheckboxChange = (isCheckedValue, document, index, i) => {
//     setDocumentInfo((prevDocumentInfo) => {
//       const newDocumentInfo = [...prevDocumentInfo];
//       newDocumentInfo[index] = newDocumentInfo[index] || [];
  
//       // If checkbox is unchecked, restore previous startDate and endDate values
//       if (!isCheckedValue) {
//         newDocumentInfo[index][i] = {
//           title: newDocumentInfo[index]?.[i]?.title || '',
//           isChecked: false,
//           startDate: newDocumentInfo[index]?.[i]?.prevStartDate || '',
//           endDate: newDocumentInfo[index]?.[i]?.prevEndDate || '',
//           prevStartDate: undefined,
//           prevEndDate: undefined,
//         };
//       } else {
//         newDocumentInfo[index][i] = {
//           title: newDocumentInfo[index]?.[i]?.title || '',
//           isChecked: true,
//           prevStartDate: newDocumentInfo[index]?.[i]?.startDate,
//           prevEndDate: newDocumentInfo[index]?.[i]?.endDate,
//         };
//       }
  
//       return newDocumentInfo;
//     });  
//   };
  
  
//     const departmentWiseShow = () => {
//       setDepartmentWise(true);
//     };
  
//     const departmentWiseCancel = () => {
//       setDepartmentWise(false);
//     };
//     const addDocument = async () => {
      
//       const departmentOptions = await JSON.parse(departmentOptionsString);
//       try {
//         var title=getMdrTitle;
//         // 
//         var mdrCode=getMdrCode;
//         // 
//         mdrCode=mdrCode.replace(/\s/g, '');
//         // 
//         var count = selectedRows.length
//         // 
//         selectedRows.forEach(async (index) => {

//           let documentValue = data[index].document;
//           let count = data[index].count||1
//           // 
//           const masterDocumentName=title;
//           const assignedBy=user.user.roleId;
//           const assignedFrom=user.user.id;
//           
//           for (let i = 0; i < count; i++) {
//             try {
//               var docTitle = documentInfo[index][i].title;
//               var startedDate = documentInfo[index][i].startDate
//               var expectedEndedDate = documentInfo[index][i].endDate
//               var title=information[index][i];
//               var version='000';

//               
//               const responseDoc = await axios.post(
//                 "http://127.0.0.1:8083/api/documents/",
//                 {
//                   title,
//                   startedDate,
//                   expectedEndedDate,
//                   docTitle,
//                   departmentId,
//                   projectId,
//                   companyId: user?.user?.companyId,
//                   userId: user?.user?.id,
//                   userName: `${user?.user?.firstName} ${user?.user?.lastName}`,
//                   masterDocumentId: mdrCode,
//                   masterDocumentName,
//                   projectCode,
//                   departmentName:departmentLabelsString,
//                   status : "Initialized",
//                   assignedBy,
//                   assignedFrom,
//                    approver,
//                    reviewer,
//                    version
//                 },
//                 {
//                   headers: {
//                     Authorization: user?.accessToken,
//                   },
//                 }
//               );
//             } catch (error) {
//               
//             }  
//           }
          
//         });

//         if(record){
          
//           const response = await axios.put(
//             "http://127.0.0.1:8083/api/documents/mdr",
//             {
//               record,
//               title,
//               departmentId,
//               projectId,
//               noOfDocuments:count,
//               status:"Ongoing",
//               companyId: user?.user?.companyId,
//               authorId: user?.user?.id,
//               authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
//               mdrCode,
//               projectCode: ProjectCode,
//               departmentName: departmentLabelsString,
//             },
//             {
//               headers: {
//                 Authorization: user?.accessToken,
//               },
//             }
//           );     
//         }else{

//           
//           const response = await axios.post(
//             "http://127.0.0.1:8083/api/documents/mdr",
//             {
//               title,
//               departmentId,
//               projectId,
//               noOfDocuments:count,
//               status:"Ongoing",
//               companyId: user?.user?.companyId,
//               authorId: user?.user?.id,
//               authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
//               mdrCode,
//               projectCode: ProjectCode,
//               departmentName: departmentLabelsString,
//             },
//             {
//               headers: {
//                 Authorization: user?.accessToken,
//               },
//             }
            
//           );
//         }
//         notification.success({
//                 message: `${response?.data?.message}`,
//                 style: {
//                   backgroundColor: '#52c41a', // Red color background
//                   color: '#fff', // White text color
//                 },
//               }
//             )
//             if (selectedRows.length === 0) {
//           message.error('Please select at least one row.');
//           return;
//         }
//       } catch (error) {
//         // Handle errors
//         console.error("Error adding MDR:", error);
//       }
//     };

//     const handleDepartmentClick = (name) => {
//       
//       setSelectedDepartment(name);
//       departmentWiseCancel();
//       filterData(name);
//     };

//     // const filterData = (selectedDepartment) => {

//     //   const filteredData = [];
//     //   for (const data of dataArray) {
//     //     if (String(data.category).toUpperCase() === String(selectedDepartment).toUpperCase()) {
//     //       filteredData.push(data);
//     //     }
//     //   }
//     //   
//     //   setData(filteredData);
//     // };
  
//     const filterData = (selectedDepartment) => {
//       
//       
//       const filteredIndexes = dataArray
//       .filter(item => item.category.toUpperCase() === selectedDepartment.toUpperCase())
    
//       const filteredRowKeys = dataArray
//       .filter((row, index) => selectedRows.includes(index) && row.checked)
//       .map(row => row.index);
//       
//     // Call setSelectedRows to update the selected rows
//       setSelectedRows(filteredRowKeys);
  
//       
//         // const filteredDataWithIndexes = filteredIndexes.map(index => dataArrayWithIndexes[index]);
//       // const filteredDataValues = filteredDataWithIndexes.map(({ value }) => value);
      
//       // 
//       setData(filteredIndexes);
//       // setFilteredValues(filteredDataWithIndexes); // Assuming you have a state variable for storing filtered values
//     };
    

//     // const filterData = (selectedDepartment) => {
//     //   const filteredIndexes = dataArrayWithIndexes
//     //     .filter(({ value }) => String(value.category).toUpperCase() === String(selectedDepartment).toUpperCase())
//     //     .map(({ index }) => index);
    
      
//     //   setData(filteredDataValues);
//     // };

//     const handleClick = () => {
//       departmentWiseCancel();
//       setData(dataArray)
//     };
    
//     const mydocumentSaved = async() => {
      
//       
//       await addDocument();
//       notification.success({
//         message: `Documents Successfully Added`,
//         style: {
//           backgroundColor: '#52c41a', // Red color background
//           color: '#fff', // White text color
//         },
//       }
//     )      // selectedRows.forEach((index) => {
//       //   const savedData = loadData(`doc-${index}`);
//       //   
//       // });
    
//       templateModalCancel();

//     };
    
//     const templateModalCancel = () => {
//       setTemplateModalVisible(false);
      
//     };

//     const selectedModalShow = () => {
//       setSelectedFieldVisible(true);
//     };
  
//     const selectedModalCancel = () => {
//       setSelectedFieldVisible(false);
//     };

//     const handleUpdate = (record) => {
//       setSelectedRowData(record);
//       selectedModalShow();
//     };
    
//     const getAllCodes = async () => {
//       

//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:8083/api/documents/getCodes?companyId=${user?.user?.companyId}`,
//           {
//             headers: {
//               Authorization: user?.accessToken,
//             },
//           }
//         );
//         var newResponse=response.data.documentNumberFormat.split('-');
//         setCodes(ProjectCode+'-'+newResponse[1]+'-'+newResponse[2]+'-'+getMdrCode+'-'+'00X')        

//       } catch (error) {
//         console.error("Error fetching projects:", error?.message);
//       }
//     };
//     useEffect(()=>{
//       getAllCodes()
//     },[])

//     useEffect(() => {
//       // This will be executed after the state is updated
//       // 
//     }, [information]);

//     const customModalShow = () => {
//       setCustomModalVisible(true);
//     };
  
//     const customModalCancel = () => {
//       setCustomModalVisible(false);
//     };
  
//     const handleCustomFieldChange = (fieldName, value) => {
//       setCustomFieldValues({ ...customFieldValues, [fieldName]: value });
//     };
//     const handleDone = (value) => {
//       if (selectedRowData) {
//         const updatedData = [...data];
//         const index = selectedRowData.key;
//         const newDocument = `${ProjectCode}-${title}-${getMdrCode}-00X`;
    
//         updatedData[index] = {
//           ...selectedRowData,
//           document: newDocument,
//         };
    
//         setData(updatedData);
//         // setDataArray(updatedData);
//         setSelectedRowData(null);
//         selectedModalCancel();
//       }
//     };
    
//     const handleAddCustom = () => {
//       // Create a new object with properties matching existing columns
//       const customData = {
//         category: customFieldValues.category || '',
//         code: customFieldValues.code || '',
//         documentTitle: customFieldValues.documentTitle || '',
//         additionalAssigned: customFieldValues.additionalAssigned || '',
//         areaCode: customFieldValues.areaCode || '',
//         departmentCode: customFieldValues.departmentCode || '',
//         documentContentCode: customFieldValues.documentContentCode || '',
//         sequenceNumber: customFieldValues.sequenceNumber || '',
//         document: customFieldValues.document || '',
//       };
  
//       // Update the data array with the new custom data
//       setData(prevData => [...prevData, customData]);
  
//       // Close the custom modal
//       setCustomModalVisible(false);
//     };
//   return (
//     <>
//         <Modal
//       title="Update Code"
//       width={400}
//       centered
//       visible={selectedFieldVisible}
//       onCancel={selectedModalCancel}
//       footer={null}
//       closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
//     >
//       <Row justify="space-between" align="center">
//       <Col span={20}>
//             <Form layout="vertical" name="basic">
//               <Form.Item
//                 label="Update Code"
//                 name="UpdateCode"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please Update Code",
//                   },
//                 ]}
//               >
//                 <Input
//                   value={code}
//                   onChange={(e) =>{ setTitle(e.target.value);
//                     
//                   }}
//                 />
//                 </Form.Item>
//                 </Form>
//                 </Col>
//       </Row>
//       <Button
//           type="primary"
//           onClick={handleDone}
//           // disabled={user?.user?.roleId != 1}
//         >
//           Confirm
//         </Button>
//     </Modal>

//     <Modal
//       title="Upload Document"
//       width={400}
//       centered
//       visible={templateModalVisible}
//       onCancel={templateModalCancel}
//       footer={null}
//       closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
//     >
//       <Row justify="space-between" align="center">
//         <div>
//           <h3>Selected Documents:</h3>
//           <ul style={{ margin: "2px" ,padding:"2px"}}>
//           {selectedRows.map((index) => (
//   <React.Fragment key={index}>
//   {Array.from({ length: data[index].count || 1 }, (_, i) => (
//     <li key={i} style={{ margin: "2px", padding: "2px" }}>
//       <strong style={{ color: "blue" }}>Category:</strong> {data[index].category} <br />
//       <strong style={{ color: "blue" }}>Code:</strong> {data[index].code} <br />
//       <strong style={{ color: "blue" }}>Document Number:</strong> {information[index]?.[i] || ''} <br />
//       <br />
//       <Form.Item label="Start Date" name={`startedDate[${index}][${i}]`}>
//         <DatePicker
//           style={{ width: '100%' }}
//           onChange={(date) => handleStartDateChange(date, data[index].document, index, i)}
//           disabled={documentInfo[index]?.[i]?.isChecked}
//         />
//       </Form.Item>

//       <Form.Item label="End Date" name={`endedDate[${index}][${i}]`}>
//         <DatePicker
//           style={{ width: '100%' }}
//           onChange={(date) => handleEndDateChange(date, data[index].document, index, i)}
//           disabled={documentInfo[index]?.[i]?.isChecked}
//         />
//       </Form.Item>

//       <Form.Item label="Title" name={`title[${index}][${i}]`}>
//         <Input
//           style={{ margin: "6px" }}
//           placeholder="Enter Document Title"
//           value={documentInfo[index]?.[i]?.title || ''}
//           onChange={(e) => handleChangingTitle(e.target.value, data[index].document, index, i)}
//         />
//       </Form.Item>

//       <Form.Item>
//         {/* <Checkbox
//           checked={documentInfo[index]?.[i]?.isChecked || false}
//           onChange={(e) => handleCheckboxChange(e.target.checked, data[index].document, index, i)}
//           style={{ marginLeft: "10px" }}
//         >
//           Same as Project Dates
//         </Checkbox> */}
//       </Form.Item>
//     </li>
//   ))}
// </React.Fragment>


// ))}

//           </ul>
//         </div>
//       </Row>
//       <Button
//         type="primary"
//         onClick={mydocumentSaved}
//         // disabled={user?.user?.roleId != 1}
//       >
//         Done
//       </Button>
//     </Modal>

//     <Modal
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
//             All Documents
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
    
//     <div>
//         <div style={{ textAlign: 'center', marginTop: 20 }}>
//         <h1>Select Documents For MDR</h1>
//       </div>
//       <div style={{ marginBottom: "16px" ,justifyContent:"space-between"}}>
//         <h1>MDR Templates</h1>

//       </div>
//       <Table
//         columns={columns}
//         dataSource={data.map((item, index) => ({ ...item, key: index }))}
//         // rowSelection={{
//         //   selectedRowKeys: selectedRows,
//         //   onChange: (selectedRowKeys,selectedRows) => setSelectedRows(selectedRows.includes("index")),
//         // }}
//         rowSelection={{
//           selectedRowKeys: selectedRows,
//           onChange:(selectedRows,selectedRowKeys)=> change(selectedRows,selectedRowKeys),
//         }}
//         // onChange={onChange}
//         bordered
//         size='middle'
//       title={() => 'All Department Documents'}
//       footer={() => 'You may filter docs'}
//     expandable={{
//       expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.document}</p>,
//       rowExpandable: (record) => record.departmentCode !== 'Not Expandable',
//     }}
//       />
//       <Space >
//       <Button
//         type="primary"
//         onClick={customModalShow}
//       >
//         Add Custom
//       </Button>
//       <Button
//           type="primary"
//           onClick={templateModalShow}
//           // disabled={user?.user?.roleId != 1}
//         >
//           Proceed
//         </Button>
//         </Space>
//       {/* Custom Modal */}
//       <Modal
//         title="Add Custom Field"
//         width={400}
//         centered
//         visible={customModalVisible}
//         onCancel={customModalCancel}
//         footer={[
//           <Button key="cancel" onClick={customModalCancel}>
//             Cancel
//           </Button>,
//           <Button key="add" type="primary" onClick={handleAddCustom}>
//             Add
//           </Button>,
//         ]}
//         closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
//       >
//         {/* Form fields for custom input */}
//         <Form layout="vertical" name="customForm">
//           {/* Dynamically generate form fields based on existing columns */}
//           {columns.map((column) => (
//             <Form.Item
//               key={column.key}
//               label={column.title}
//               name={column.dataIndex}
//               rules={[
//                 {
//                   required: true,
//                   message: `Please enter ${column.title}`,
//                 },
//               ]}
//             >
//               <Input
//                 onChange={(e) => handleCustomFieldChange(column.dataIndex, e.target.value)}
//               />
//             </Form.Item>
//           ))}
//         </Form>
//       </Modal>
//     </div>
//     </>

//   );
// };

// export default MdrTemplate;









// // import React, { useEffect, useState } from 'react';
// // import { notification, Row,  Col,  Divider,Checkbox,  Form,  Space,  Table,  Select,  Tag,  Input,  DatePicker,  TimePicker,  Button,  Modal,  message,} from 'antd';
// // import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
// // import axios from 'axios'
// // import { useLocation } from 'react-router-dom';
// // import jsondata from './data.json';
// // import { saveData, loadData, getAllKeys } from '../../storage';
// // 

// //   const MdrTemplate = ({ projectCode, mdrCode }) => {
// //     const [customModalVisible, setCustomModalVisible] = useState(false);
// //     const [customData, setCustomData] = useState({});

// //     const { search } = useLocation();
// //     const params = new URLSearchParams(search);
// //     const ProjectCode = params.get('projectCode');
// //     const getMdrCode = params.get('mdrCode');
// //     const projectId = params.get('projectId');
// //     const getMdrTitle= params.get('title');
// //     const departmentId = params.get('departmentId');

// //     let departmentOptionsString = params.get('departmentOptions');
// //     let departmentOptionSuffix = params.get('departmentOption');

// //     const projectOptions = params.get('projectOptions');
// //     const approver = params.get('approver');
// //     const reviewer = params.get('reviewer');
// //     const record = params.get('record');

// //     console.log("data from mdr to mdrtemplates",ProjectCode,getMdrCode,projectId,getMdrTitle,departmentId,
// //     departmentOptionSuffix,departmentOptionsString,projectOptions,approver,reviewer,record);

// //     const [customFieldValues, setCustomFieldValues] = useState({});
// //     const [templateModalVisible,setTemplateModalVisible] = useState(false)
// //     const [selectedFieldVisible,setSelectedFieldVisible]  = useState(false)
// //     const [title,setTitle] = useState('')
// //     const [selectedRowData, setSelectedRowData] = useState(null);
// //     const [departmentWise, setDepartmentWise] = useState(false);
// //     const [loading, setLoading] = useState(true);
// //     const [displayNames, setDisplayNames] = useState([]);
// //     const [selectedDepartment, setSelectedDepartment] = useState(null);
// //     const [codes,setCodes] = useState([])
// //     const [selectedRows, setSelectedRows] = useState([]);
// //     const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
// //     const [code,setCode] = useState()
// //     const [department,setDepartment] = useState()
        
// //     const [documentDesc,setDocumentDesc] = useState()
// //     const [documentContentCode,setDocumentContentCode] = useState()
// //     const [documentNumbers,setDocumentNumbers] = useState()

    
// //     const departmentOptionSuffixes = JSON.parse(departmentOptionSuffix);
// //     // 
// //     const departmentOptions = JSON.parse(departmentOptionsString);
// //     // 
// //     const departmentOptionsMap = new Map(departmentOptions.map(option => [option.value, option.label]));
// //     // 
// //     const departmentIds = departmentId.split(',').map(Number);
// //     const departmentLabels = departmentIds.map(id => departmentOptionsMap.get(id));
// //     // 
// //     const departmentLabelsString = departmentLabels.join(', ');
// //     // 

// //     const dataArrayWithIndexes = Object.entries(jsondata).map(([index, value]) => ({  ...value, index: parseInt(index), checked: false }));
    

// //     const [data, setData] = useState(Object.values(dataArrayWithIndexes));
// //     const [dataArray,setDataArray] = useState(Object.values(dataArrayWithIndexes))
// //     let changing = data
// //     let changing2 = dataArray

    
    

// //     const [documentCounts, setDocumentCounts] = useState({});
// //     const [documentTitles, setDocumentTitles] = useState({});
// //     const [information,setInformation] = useState([])
// //     const [customInformation,setCustomInformation] = useState([])

// //     const [titles,setValues] = useState([])

// //     const [documentInfo, setDocumentInfo] = useState([]);
    
// //     const columns = [
// //       {
// //         title: 'Sr.#',
// //         dataIndex: 'code', // Assuming 'code' is the appropriate field for 'Sr.#'
// //         key: 'code',
// //       },
// //       {
// //         title: 'Document',
// //         dataIndex: 'documentTitle',
// //         key: 'documentTitle',
// //       },
// //       {
// //         title: 'Department Code',
// //         dataIndex: 'departmentCode',
// //         key: 'departmentCode',
// //         filters: [
// //           {
// //             text: 'Project Management',
// //             value: 'PM',
// //           },
// //           {
// //             text: 'Process',
// //             value: 'PRO',
// //           },
// //           {
// //             text: 'Piping',
// //             value: 'PIP',
// //           },
// //           {
// //             text: 'Mechanical',
// //             value: 'TK',
// //           },
// //           {
// //             text: 'Civil/Structure',
// //             value: 'CIV',
// //           },
// //           {
// //             text: 'Electrical',
// //             value: 'ELE',
// //           },
// //           {
// //             text: 'Instrumentation',
// //             value: 'INS',
// //           },
// //         ],
// //         filterMode: 'tree',
// //         filterSearch: true,
// //         onFilter:  (value, record) => record.departmentCode === value,
// //       },
// //       {
// //         title: 'Document Content Code',
// //         dataIndex: 'documentContentCode',
// //         key: 'documentContentCode',
// //       },
// //       {
// //         title: 'DOCUMENT NUMBER',
// //         dataIndex: 'document', // Use 'documentNumber' as the dataIndex
// //         key: 'document',
// //       },
// //       {
// //         title: "No Of Documents",
// //         key: "noOfDocuments",
// //         render: (_, record) => (
// //           <Space size="middle" align="center">
// //             <Button onClick={() => handleCount(record)}>Add </Button>
// //             <Tag style={{ color: "white", backgroundColor: "blue" }}>{documentCounts[record.document] || 1}</Tag>
// //           </Space>
// //         ),
// //       },
// //     ];
// //     useEffect(() => {
// //       const timeout = setTimeout(() => {
// //         setDisplayNames(departmentOptions.map(option => option.label));
// //         setLoading(false);
// //       }, 1000);
  
// //       return () => clearTimeout(timeout);
// //     }, [])

// //     const handleCount = (record) => {
// //       setDocumentCounts(prevCounts => {
// //         const updatedCounts = { ...prevCounts };
// //         const currentCount = updatedCounts[record.document] || 1;
// //         updatedCounts[record.document] = currentCount + 1;
// //         // 
// //         return updatedCounts;
// //       });
// //     };

// //     const templateModalShow = () => {
// //       

// //       setTemplateModalVisible(true);  
// //       const updatedData = [...data];
// //       // 
// //       let allInfos = [];
// //       let allCustomInfos = [];

// // // customData.forEach((index, sequenceNumber) => {
// //     
// //         const count = customData.count;
// //         //         
        
// //         for (let i = 0; i < count; i++) {
// //           let newDocument = customData.document.replace('00X', (i + 1).toString().padStart(3, '0')).replace("xxxx",ProjectCode)
// //           // 
// //           // Save the document name in allInfos array
// //           if (!allCustomInfos[i]) {
// //             allCustomInfos[i] = {};
// //           }
// //           allCustomInfos[i] = newDocument;        
// //         }
// //       

// //       selectedRows.forEach((index, sequenceNumber) => {
// //         const count = documentCounts[data[index].document] || 1;
// //         //         
// //         for (let i = 0; i < count; i++) {
// //           let newDocument = data[index].document.replace('00X', (i + 1).toString().padStart(3, '0')).replace("xxxx",ProjectCode)
// //           // 
// //           // Save the document name in allInfos array
// //           if (!allInfos[index]) {
// //             allInfos[index] = {};
// //           }
// //           allInfos[index][i] = newDocument;
      
// //           updatedData[index] = {
// //             ...data[index],
// //             count: documentCounts[data[index].document]
// //           };
// //         // 
          
// //         }
      
// //       });
// //       
// //       
// //       setCustomInformation(allCustomInfos)

// //       setInformation(allInfos)
// //       // 
// //       // 
// //       setData(updatedData);
// //       

      
// //     };

// //   const handleChangingTitle = (title, document, index, i) => {
// //     setDocumentInfo((prevDocumentInfo) => {
// //       const newDocumentInfo = [...prevDocumentInfo];
// //       newDocumentInfo[index] = newDocumentInfo[index] || [];
// //       newDocumentInfo[index][i] = {
// //         ...newDocumentInfo[index][i],
// //         title,
// //       };
// //       // 

// //       return newDocumentInfo;
// //     });
// //   };
  
// //   const handleStartDateChange = (date, document, index, i) => {
// //     setDocumentInfo((prevDocumentInfo) => {
// //       const newDocumentInfo = [...prevDocumentInfo];
// //       newDocumentInfo[index] = newDocumentInfo[index] || [];
// //       newDocumentInfo[index][i] = {
// //         ...newDocumentInfo[index][i],
// //         startDate: date ? date.toDate() : null,
// //       };
// //       return newDocumentInfo;
// //     });
// //   };
  
// //   const handleEndDateChange = (date, document, index, i) => {
// //     setDocumentInfo((prevDocumentInfo) => {
// //       const newDocumentInfo = [...prevDocumentInfo];
// //       newDocumentInfo[index] = newDocumentInfo[index] || [];
// //       newDocumentInfo[index][i] = {
// //         ...newDocumentInfo[index][i],
// //         endDate: date ? date.toDate() : null,
// //       };
// //       return newDocumentInfo;
// //     });
// //   };
// //   const onChange = (pagination, filters, sorter, extra) => {
// //     
// //   };
  
// //   const change=(selectedRows,selectedRowKeys)=>{
// //     // 
// //     const updatedSelectedRowKeys = selectedRowKeys.map(row => ({ ...row, checked: true }));
// //     
// //     const indexes = updatedSelectedRowKeys.map(row => row.index);
// //     // 
// //     setSelectedRows(indexes)
// //   }
  
// //   const handleCheckboxChange = (isCheckedValue, document, index, i) => {
// //     setDocumentInfo((prevDocumentInfo) => {
// //       const newDocumentInfo = [...prevDocumentInfo];
// //       newDocumentInfo[index] = newDocumentInfo[index] || [];
  
// //       // If checkbox is unchecked, restore previous startDate and endDate values
// //       if (!isCheckedValue) {
// //         newDocumentInfo[index][i] = {
// //           title: newDocumentInfo[index]?.[i]?.title || '',
// //           isChecked: false,
// //           startDate: newDocumentInfo[index]?.[i]?.prevStartDate || '',
// //           endDate: newDocumentInfo[index]?.[i]?.prevEndDate || '',
// //           prevStartDate: undefined,
// //           prevEndDate: undefined,
// //         };
// //       } else {
// //         newDocumentInfo[index][i] = {
// //           title: newDocumentInfo[index]?.[i]?.title || '',
// //           isChecked: true,
// //           prevStartDate: newDocumentInfo[index]?.[i]?.startDate,
// //           prevEndDate: newDocumentInfo[index]?.[i]?.endDate,
// //         };
// //       }
  
// //       return newDocumentInfo;
// //     });  
// //   };
  
  
// //     const departmentWiseShow = () => {
// //       setDepartmentWise(true);
// //     };
  
// //     const departmentWiseCancel = () => {
// //       setDepartmentWise(false);
// //     };
// //     const addDocument = async () => {
      
// //       const departmentOptions = await JSON.parse(departmentOptionsString);
// //       try {
// //         var title=getMdrTitle;
// //         // 
// //         var mdrCode=getMdrCode;
// //         // 
// //         mdrCode=mdrCode.replace(/\s/g, '');
// //         // 
// //         var count = selectedRows.length
// //         // 
        

// //         selectedRows.forEach(async (index) => {
// //           let documentValue = data[index].document;
// //           let count = data[index].count||1
// //           // 
// //           const masterDocumentName=title;
// //           const assignedBy=user.user.roleId;
// //           const assignedFrom=user.user.id;
// //           
// //           for (let i = 0; i < count; i++) {
// //             try {
// //               var docTitle = documentInfo[index][i].title;
// //               var startedDate = documentInfo[index][i].startDate
// //               var expectedEndedDate = documentInfo[index][i].endDate
// //               var title=information[index][i];
// //               var version='000';

// //               
// //               const responseDoc = await axios.post(
// //                 "http://127.0.0.1:8083/api/documents/",
// //                 {
// //                   title,
// //                   startedDate,
// //                   expectedEndedDate,
// //                   docTitle,
// //                   departmentId,
// //                   projectId,
// //                   companyId: user?.user?.companyId,
// //                   userId: user?.user?.id,
// //                   userName: `${user?.user?.firstName} ${user?.user?.lastName}`,
// //                   masterDocumentId: mdrCode,
// //                   masterDocumentName,
// //                   projectCode,
// //                   departmentName:departmentLabelsString,
// //                   status : "Initialized",
// //                   assignedBy,
// //                   assignedFrom,
// //                    approver,
// //                    reviewer,
// //                    version
// //                 },
// //                 {
// //                   headers: {
// //                     Authorization: user?.accessToken,
// //                   },
// //                 }
// //               );
// //             } catch (error) {
// //               
// //             }  
// //           }
// //         });

// // 
// // 
// //         // selectedRows.forEach(async (index) => {
// //           let countCustom = customData.count||1
// //           const masterDocumentName=title;
// //           const assignedBy=user.user.roleId;
// //           const assignedFrom=user.user.id;
// //           
// //           for (let i = 0; i < countCustom; i++) {
// //             try {
// //               var docTitle = documentInfo[0][i].title;
// //               var startedDate = documentInfo[0][i].startDate
// //               var expectedEndedDate = documentInfo[0][i].endDate
// //               var title=customInformation[i];
// //               var version='000';

// //               
// //               const responseDoc = await axios.post(
// //                 "http://127.0.0.1:8083/api/documents/",
// //                 {
// //                   title,
// //                   startedDate,
// //                   expectedEndedDate,
// //                   docTitle,
// //                   departmentId,
// //                   projectId,
// //                   companyId: user?.user?.companyId,
// //                   userId: user?.user?.id,
// //                   userName: `${user?.user?.firstName} ${user?.user?.lastName}`,
// //                   masterDocumentId: mdrCode,
// //                   masterDocumentName,
// //                   projectCode,
// //                   departmentName:departmentLabelsString,
// //                   status : "Initialized",
// //                   assignedBy,
// //                   assignedFrom,
// //                    approver,
// //                    reviewer,
// //                    version
// //                 },
// //                 {
// //                   headers: {
// //                     Authorization: user?.accessToken,
// //                   },
// //                 }
// //               );
// //             } catch (error) {
// //               
// //             }  
// //           }
// //         // });

// //         if(record){
// //           const response = await axios.put(
// //             "http://127.0.0.1:8083/api/documents/mdr",
// //             {
// //               record,
// //               title,
// //               departmentId,
// //               projectId,
// //               noOfDocuments:count,
// //               status:"Ongoing",
// //               companyId: user?.user?.companyId,
// //               authorId: user?.user?.id,
// //               authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
// //               mdrCode,
// //               projectCode: ProjectCode,
// //               departmentName: departmentLabelsString,
// //             },
// //             {
// //               headers: {
// //                 Authorization: user?.accessToken,
// //               },
// //             }
// //           );     
// //         }else{

// //           
// //           const response = await axios.post(
// //             "http://127.0.0.1:8083/api/documents/mdr",
// //             {
// //               title,
// //               departmentId,
// //               projectId,
// //               noOfDocuments:count,
// //               status:"Ongoing",
// //               companyId: user?.user?.companyId,
// //               authorId: user?.user?.id,
// //               authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
// //               mdrCode,
// //               projectCode: ProjectCode,
// //               departmentName: departmentLabelsString,
// //             },
// //             {
// //               headers: {
// //                 Authorization: user?.accessToken,
// //               },
// //             }
            
// //           );
// //         }
// //         notification.success({
// //                 message: `${response?.data?.message}`,
// //                 style: {
// //                   backgroundColor: '#52c41a', // Red color background
// //                   color: '#fff', // White text color
// //                 },
// //               }
// //             )
// //             if (selectedRows.length === 0) {
// //           message.error('Please select at least one row.');
// //           return;
// //         }
// //       } catch (error) {
// //         // Handle errors
// //         console.error("Error adding MDR:", error);
// //       }
// //     };

// //     const handleDepartmentClick = (name) => {
// //       
// //       setSelectedDepartment(name);
// //       departmentWiseCancel();
// //       filterData(name);
// //     };

// //     // const filterData = (selectedDepartment) => {

// //     //   const filteredData = [];
// //     //   for (const data of dataArray) {
// //     //     if (String(data.category).toUpperCase() === String(selectedDepartment).toUpperCase()) {
// //     //       filteredData.push(data);
// //     //     }
// //     //   }
// //     //   
// //     //   setData(filteredData);
// //     // };
  
// //     const filterData = (selectedDepartment) => {
// //       
// //       
// //       const filteredIndexes = dataArray
// //       .filter(item => item.category.toUpperCase() === selectedDepartment.toUpperCase())
    
// //       const filteredRowKeys = dataArray
// //       .filter((row, index) => selectedRows.includes(index) && row.checked)
// //       .map(row => row.index);
// //       
// //     // Call setSelectedRows to update the selected rows
// //       setSelectedRows(filteredRowKeys);
  
// //       
// //         // const filteredDataWithIndexes = filteredIndexes.map(index => dataArrayWithIndexes[index]);
// //       // const filteredDataValues = filteredDataWithIndexes.map(({ value }) => value);
      
// //       // 
// //       setData(filteredIndexes);
// //       // setFilteredValues(filteredDataWithIndexes); // Assuming you have a state variable for storing filtered values
// //     };
    

// //     // const filterData = (selectedDepartment) => {
// //     //   const filteredIndexes = dataArrayWithIndexes
// //     //     .filter(({ value }) => String(value.category).toUpperCase() === String(selectedDepartment).toUpperCase())
// //     //     .map(({ index }) => index);
    
      
// //     //   setData(filteredDataValues);
// //     // };

// //     const handleClick = () => {
// //       departmentWiseCancel();
// //       setData(dataArray)
// //     };
    
// //     const mydocumentSaved = async() => {      
// //       
// //       
// //       await addDocument();
// //       notification.success({
// //         message: `Documents Successfully Added`,
// //         style: {
// //           backgroundColor: '#52c41a', // Red color background
// //           color: '#fff', // White text color
// //         },
// //       }
// //     )      // selectedRows.forEach((index) => {
// //       //   const savedData = loadData(`doc-${index}`);
// //       //   
// //       // });
    
// //       templateModalCancel();

// //     };
    
// //     const templateModalCancel = () => {
// //       setTemplateModalVisible(false);
      
// //     };

// //     const selectedModalShow = () => {
// //       setSelectedFieldVisible(true);
// //     };
  
// //     const selectedModalCancel = () => {
// //       setSelectedFieldVisible(false);
// //     };

// //     const handleUpdate = (record) => {
// //       setSelectedRowData(record);
// //       selectedModalShow();
// //     };
    
// //     const getAllCodes = async () => {
// //       

// //       try {
// //         const response = await axios.get(
// //           `http://127.0.0.1:8083/api/documents/getCodes?companyId=${user?.user?.companyId}`,
// //           {
// //             headers: {
// //               Authorization: user?.accessToken,
// //             },
// //           }
// //         );
// //         var newResponse=response.data.documentNumberFormat.split('-');
// //         setCodes(ProjectCode+'-'+newResponse[1]+'-'+newResponse[2]+'-'+getMdrCode+'-'+'00X')        

// //       } catch (error) {
// //         console.error("Error fetching projects:", error?.message);
// //       }
// //     };
// //     useEffect(()=>{
// //       getAllCodes()
// //     },[])

// //     useEffect(() => {
// //       // This will be executed after the state is updated
// //       // 
// //     }, [information]);

// //     const customModalShow = () => {
// //       setCustomModalVisible(true);
// //     };
  
// //     const customModalCancel = () => {
// //       setCustomModalVisible(false);
// //     };
  
// //     const handleCustomFieldChange = (fieldName, value) => {
// //       setCustomFieldValues({ ...customFieldValues, [fieldName]: value });
// //     };
// //     const handleDone = (value) => {
// //       if (selectedRowData) {
// //         const updatedData = [...data];
// //         const index = selectedRowData.key;
// //         const newDocument = `${ProjectCode}-${title}-${getMdrCode}-00X`;
    
// //         updatedData[index] = {
// //           ...selectedRowData,
// //           document: newDocument,
// //         };
    
// //         setData(updatedData);
// //         // setDataArray(updatedData);
// //         setSelectedRowData(null);
// //         selectedModalCancel();
// //       }
// //     };
    
// //     const handleAddCustom = () => {
// //       // Create a new object with properties matching existing columns
// //       const category = departmentOptionSuffixes.find(dept => dept.value == department)
// //       const document = `xxxx-01-${department}-${documentContentCode}-00X`
// //       const customData = {
// //         count:documentNumbers||'',
// //         departmentCode: department || '',
// //         documentContentCode: documentContentCode || '',
// //         documentTitle: documentDesc || '',
// //         areaCode:"01",
// //         category:category.label,
// //         sequenceNumber:"00X",
// //         document:document,
// //       };

// //       
// //       setCustomData(customData)
  
// //       // Update the data array with the new custom data
// //       // setData(prevData => [...prevData, customData]);
  
// //       // Close the custom modal
// //       setCustomModalVisible(false);
// //     };
// //   return (
// //     <>
// //         <Modal
// //       title="Update Code"
// //       width={400}
// //       centered
// //       visible={selectedFieldVisible}
// //       onCancel={selectedModalCancel}
// //       footer={null}
// //       closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
// //     >
// //       <Row justify="space-between" align="center">
// //       <Col span={20}>
// //             <Form layout="vertical" name="basic">
// //               <Form.Item
// //                 label="Update Code"
// //                 name="UpdateCode"
// //                 rules={[
// //                   {
// //                     required: true,
// //                     message: "Please Update Code",
// //                   },
// //                 ]}
// //               >
// //                 <Input
// //                   value={code}
// //                   onChange={(e) =>{ setTitle(e.target.value);
// //                     
// //                   }}
// //                 />
// //                 </Form.Item>
// //                 </Form>
// //                 </Col>
// //       </Row>
// //       <Button
// //           type="primary"
// //           onClick={handleDone}
// //           // disabled={user?.user?.roleId != 1}
// //         >
// //           Confirm
// //         </Button>
// //     </Modal>

// //     <Modal
// //       title="Upload Document"
// //       width={400}
// //       centered
// //       visible={templateModalVisible}
// //       onCancel={templateModalCancel}
// //       footer={null}
// //       closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
// //     >
// //       <Row justify="space-between" align="center">
// //         <div>
// //           <h3>Selected Documents:</h3>
// //           <ul style={{ margin: "2px" ,padding:"2px"}}>
// //           {selectedRows.map((index) => (
// //   <React.Fragment key={index}>
// //   {Array.from({ length: data[index].count || 1 }, (_, i) => (
// //     <li key={i} style={{ margin: "2px", padding: "2px" }}>
// //       <strong style={{ color: "blue" }}>Category:</strong> {data[index].category} <br />
// //       <strong style={{ color: "blue" }}>Code:</strong> {data[index].code} <br />
// //       <strong style={{ color: "blue" }}>Document Number:</strong> {information[index]?.[i] || ''} <br />
// //       <br />
// //       <Form.Item label="Start Date" name={`startedDate[${index}][${i}]`}>
// //         <DatePicker
// //           style={{ width: '100%' }}
// //           onChange={(date) => handleStartDateChange(date, data[index].document, index, i)}
// //           disabled={documentInfo[index]?.[i]?.isChecked}
// //           required
// //         />
// //       </Form.Item>

// //       <Form.Item label="End Date" name={`endedDate[${index}][${i}]`}>
// //         <DatePicker
// //           style={{ width: '100%' }}
// //           onChange={(date) => handleEndDateChange(date, data[index].document, index, i)}
// //           disabled={documentInfo[index]?.[i]?.isChecked}
// //           required
// //         />
// //       </Form.Item>

// //       <Form.Item label="Title" name={`title[${index}][${i}]`}>
// //         <Input
// //           style={{ margin: "6px" }}
// //           placeholder="Enter Document Title"
// //           value={documentInfo[index]?.[i]?.title || ''}
// //           onChange={(e) => handleChangingTitle(e.target.value, data[index].document, index, i)}
// //           required
// //         />
// //       </Form.Item>
// //     </li>
// //   ))}
// // </React.Fragment>


// // ))}

// //           </ul>

        
// //           <ul style={{ margin: "2px", padding: "2px" }}>
// //       {Array.from({ length: customData.count || 1 }, (_, i) => (

// //         <li key={i} style={{ margin: "2px", padding: "2px" }}>
// //           <strong style={{ color: "blue" }}>Category:</strong> {customData.category} <br />
// //           <strong style={{ color: "blue" }}>Code:</strong> {customData.documentContentCode} <br />
// //           <strong style={{ color: "blue" }}>Document Number:</strong> {customInformation[i]} <br />
// //           <br />
// //           <Form.Item label="Start Date" name={`startedDate[${i}]`}>
// //             <DatePicker
// //               style={{ width: '100%' }}
// //               onChange={(date) => handleStartDateChange(date, customData.document, 0, i)}
// //               // disabled={documentInfo[0]?.[i]?.isChecked}
// //               required
// //             />
// //           </Form.Item>

// //           <Form.Item label="End Date" name={`endedDate[${i}]`}>
// //             <DatePicker
// //               style={{ width: '100%' }}
// //               onChange={(date) => handleEndDateChange(date, customData.document, 0, i)}
// //               // disabled={documentInfo[0]?.[i]?.isChecked}
// //               required
// //             />
// //           </Form.Item>

// //           <Form.Item label="Title" name={`title[${i}]`}>
// //             <Input
// //               style={{ margin: "6px" }}
// //               placeholder="Enter Document Title"
// //               value={documentInfo[0]?.[i]?.title || ''}
// //               onChange={(e) => handleChangingTitle(e.target.value, customData.document, 0, i)}
// //               required
// //             />
// //           </Form.Item>
// //         </li>
// //       ))}
// //     </ul>

         
// //         </div>
// //       </Row>
// //       <Button
// //         type="primary"
// //         onClick={mydocumentSaved}
// //         // disabled={user?.user?.roleId != 1}
// //       >
// //         Done
// //       </Button>
// //     </Modal>

// //     <Modal
// //       title="Departments"
// //       width={416}
// //       centered
// //       visible={departmentWise}
// //       onCancel={departmentWiseCancel}
// //       footer={null}
// //       closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
// //     >
// //             <Button
// //             size="default"
// //             type="primary"
// //             onClick={()=>handleClick()}

// //             style={{ margin: '8px' }}
// //           >
// //             All Documents
// //           </Button>
// //       {loading ? (
        
// //         departmentOptions.map(option => (
// //           <Button
// //             key={option.label}
// //             loading
// //             size="default"
// //             style={{ margin: '8px' }}
// //           >
// //             {option.label}
// //           </Button>
// //         ))
// //       ) : (
// //         displayNames.map(name => (
// //           <Button
// //             key={name}
// //             size="default"
// //             style={{ margin: '8px' }}
// //             onClick={() => handleDepartmentClick(name)}
// //             type={selectedDepartment === name ? 'primary' : 'default'}
// //           >
// //             {name}
// //           </Button>
// //         ))
// //       )}
// //     </Modal>
    
// //     <div>
// //         <div style={{ textAlign: 'center', marginTop: 20 }}>
// //         <h1>Select Documents For MDR</h1>
// //       </div>
// //       <div style={{ marginBottom: "16px" ,justifyContent:"space-between"}}>
// //         <h1>MDR Templates</h1>

// //       </div>
// //       <Table
// //         columns={columns}
// //         dataSource={data.map((item, index) => ({ ...item, key: index }))}
// //         // rowSelection={{
// //         //   selectedRowKeys: selectedRows,
// //         //   onChange: (selectedRowKeys,selectedRows) => setSelectedRows(selectedRows.includes("index")),
// //         // }}
// //         rowSelection={{
// //           selectedRowKeys: selectedRows,
// //           onChange:(selectedRows,selectedRowKeys)=> change(selectedRows,selectedRowKeys),
// //         }}
// //         // onChange={onChange}
// //         bordered
// //         size='middle'
// //       title={() => 'All Department Documents'}
// //       footer={() => 'You may filter docs'}
// //     expandable={{
// //       expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.document}</p>,
// //       rowExpandable: (record) => record.departmentCode !== 'Not Expandable',
// //     }}
// //       />
// //       <Space >
// //       <Button
// //         type="primary"
// //         onClick={customModalShow}
// //       >
// //         Add Custom
// //       </Button>
// //       <Button
// //           type="primary"
// //           onClick={templateModalShow}
// //           // disabled={user?.user?.roleId != 1}
// //         >
// //           Proceed
// //         </Button>
// //         </Space>
// //       {/* Custom Modal */}
// //       <Modal
// //         title="Add Custom Field"
// //         width={400}
// //         centered
// //         visible={customModalVisible}
// //         onCancel={customModalCancel}
// //         footer={[
// //           <Button key="cancel" onClick={customModalCancel}>
// //             Cancel
// //           </Button>,
// //           <Button key="add" type="primary" onClick={handleAddCustom}>
// //             Add
// //           </Button>,
// //         ]}
// //         closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
// //       >
// //         {/* Form fields for custom input */}
// //         <Form layout="vertical" name="customForm">
// //           {/* Dynamically generate form fields based on existing columns */}
// //           {/* {columns.map((column) => (
// //             <Form.Item
// //               key={column.key}
// //               label={column.title}
// //               name={column.dataIndex}
// //               rules={[
// //                 {
// //                   required: true,
// //                   message: `Please enter ${column.title}`,
// //                 },
// //               ]}
// //             >
// //               <Input
// //                 onChange={(e) => handleCustomFieldChange(column.dataIndex, e.target.value)}
// //               />
// //             </Form.Item>
// //           ))} */}
        
// //               <Form.Item
// //                 label="Department"
// //                 name="department"
// //                 rules={[
// //                   {
// //                     required: true,
// //                     message: "Please select Project Name",
// //                   },
// //                 ]}
// //               >
// //               <Select
// //                   options={departmentOptionSuffixes}
// //                   value={department}
// //                   onChange={(value) => setDepartment(value)}
// //                 />              
// //                 </Form.Item>

// //                 <Form.Item label="Document" name="document" rules={[
// //                   {
// //                     required: true,
// //                     message: "Please Add Document",
// //                   },
// //                 ]}>
// //             <Input
// //               value={documentDesc}
// //               onChange={(e) => setDocumentDesc(e.target.value)}
// //             />
// //           </Form.Item>

// //           <Form.Item label="Document Content Code" name="documentContentCode" rules={[
// //                   {
// //                     required: true,
// //                     message: "Please Add Document Content Code",
// //                   },
// //                 ]}>
// //             <Input
// //               value={documentContentCode}
// //               onChange={(e) => setDocumentContentCode(e.target.value)}
// //             />
// //           </Form.Item>

// //           <Form.Item label="Number Of Documents" name="noOfDoxuments" rules={[
// //                   {
// //                     required: true,
// //                     message: "Please Add Number of Documents",
// //                   },
// //                 ]}>
// //             <Input
// //               value={documentNumbers}
// //               onChange={(e) => setDocumentNumbers(e.target.value)}
// //             />
// //           </Form.Item>

          

// //         </Form>
// //       </Modal>
// //     </div>
// //     </>

// //   );
// // };

// // export default MdrTemplate;
import React, { useEffect, useState } from 'react';
import { notification, Row,  Col,  Divider,Checkbox,  Form,  Space,  Table,  Select,  Tag,  Input,  DatePicker,  TimePicker,  Button,  Modal,  message,} from 'antd';
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import jsondata from './data.json';
import { saveData, loadData, getAllKeys } from '../../storage';


  const MdrTemplate = ({ projectCode, mdrCode }) => {
    const [customModalVisible, setCustomModalVisible] = useState(false);
    const [customData, setCustomData] = useState({});

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const ProjectCode = params.get('projectCode');
    const getMdrCode = params.get('mdrCode');
    const projectId = params.get('projectId');
    const getMdrTitle= params.get('title');
    const departmentId = params.get('departmentId');

    let departmentOptionsString = params.get('departmentOptions');
    let departmentOptionSuffix = params.get('departmentOption');

    const projectOptions = params.get('projectOptions');
    const approver = params.get('approver');
    const reviewer = params.get('reviewer');
    const record = params.get('record');

    console.log("data from mdr to mdrtemplates",ProjectCode,getMdrCode,projectId,getMdrTitle,departmentId,
    departmentOptionSuffix,departmentOptionsString,projectOptions,approver,reviewer,record);

    const [customFieldValues, setCustomFieldValues] = useState({});
    const [templateModalVisible,setTemplateModalVisible] = useState(false)
    const [selectedFieldVisible,setSelectedFieldVisible]  = useState(false)
    const [title,setTitle] = useState('')
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [departmentWise, setDepartmentWise] = useState(false);
    // const [documentValidation, setDocumentValidation] = useState(true);

    const [loading, setLoading] = useState(true);
    const [displayNames, setDisplayNames] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [codes,setCodes] = useState([])
    const [selectedRows, setSelectedRows] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
    const [code,setCode] = useState()
    const [department,setDepartment] = useState()
        
    const [documentDesc,setDocumentDesc] = useState()
    const [documentContentCode,setDocumentContentCode] = useState()
    const [documentNumbers,setDocumentNumbers] = useState()

    
    const departmentOptionSuffixes = JSON.parse(departmentOptionSuffix);
    // 
    const departmentOptions = JSON.parse(departmentOptionsString);
    // 
    const departmentOptionsMap = new Map(departmentOptions.map(option => [option.value, option.label]));
    // 
    const departmentIds = departmentId.split(',').map(Number);
    const departmentLabels = departmentIds.map(id => departmentOptionsMap.get(id));
    // 
    const departmentLabelsString = departmentLabels.join(', ');
    // 

    const dataArrayWithIndexes = Object.entries(jsondata).map(([index, value]) => ({  ...value, index: parseInt(index), checked: false }));
    

    const [data, setData] = useState(Object.values(dataArrayWithIndexes));
    const [dataArray,setDataArray] = useState(Object.values(dataArrayWithIndexes))
    let changing = data
    let changing2 = dataArray

    
    

    const [documentCounts, setDocumentCounts] = useState({});
    const [documentTitles, setDocumentTitles] = useState({});
    const [information,setInformation] = useState([])
    const [customInformation,setCustomInformation] = useState([])

    const [titles,setValues] = useState([])

    const [documentInfo, setDocumentInfo] = useState([]);
    
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
      {
        title: 'Department Code',
        dataIndex: 'departmentCode',
        key: 'departmentCode',
        filters: [
          {
            text: 'Project Management',
            value: 'PM',
          },
          {
            text: 'Process',
            value: 'PRO',
          },
          {
            text: 'Piping',
            value: 'PIP',
          },
          {
            text: 'Mechanical',
            value: 'TK',
          },
          {
            text: 'Civil/Structure',
            value: 'CIV',
          },
          {
            text: 'Electrical',
            value: 'ELE',
          },
          {
            text: 'Instrumentation',
            value: 'INS',
          },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter:  (value, record) => record.departmentCode === value,
      },
      {
        title: 'Document Content Code',
        dataIndex: 'documentContentCode',
        key: 'documentContentCode',
      },
      {
        title: 'DOCUMENT NUMBER',
        dataIndex: 'document', // Use 'documentNumber' as the dataIndex
        key: 'document',
      },
      {
        title: "No Of Documents",
        key: "noOfDocuments",
        render: (_, record) => (
          <Space size="middle" align="center">
            <Tag style={{ color: "white", backgroundColor: "blue" }} onClick={() => handleCount(record,"add")}>+</Tag>
            <Tag style={{ color: "white", backgroundColor: "blue" }}>{documentCounts[record.document] || 1}</Tag>
            <Tag style={{ color: "white", backgroundColor: "blue" }} onClick={() => handleCount(record,"sub")}>-</Tag>

          </Space>
        ),
      },
    ];
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDisplayNames(departmentOptions.map(option => option.label));
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, [])

    const handleCount = (record,a) => {
      setDocumentCounts(prevCounts => {
        const updatedCounts = { ...prevCounts };
        const currentCount = updatedCounts[record.document] || 1;
        if(a=="add"){
          updatedCounts[record.document] = currentCount + 1;
        }
        else{
          updatedCounts[record.document] = currentCount -1;

        }
        // 
        return updatedCounts;
      });
    };

    const templateModalShow = () => {
      
      

      setTemplateModalVisible(true);  
      const updatedData = [...data];
      // 
      let allInfos = [];
      let allCustomInfos = [];

// customData.forEach((index, sequenceNumber) => {
    
        const count = customData.count;
        //         
        
        for (let i = 0; i < count; i++) {
          let newDocument = customData.document.replace('00X', (i + 1).toString().padStart(3, '0')).replace("xxxx",ProjectCode)
          // 
          // Save the document name in allInfos array
          if (!allCustomInfos[i]) {
            allCustomInfos[i] = {};
          }
          allCustomInfos[i] = newDocument;        
        }
      

      selectedRows.forEach((index, sequenceNumber) => {
        const count = documentCounts[data[index].document] || 1;
        //         
        for (let i = 0; i < count; i++) {
          let newDocument = data[index].document.replace('00X', (i + 1).toString().padStart(3, '0')).replace("xxxx",ProjectCode)
          // 
          // Save the document name in allInfos array
          if (!allInfos[index]) {
            allInfos[index] = {};
          }
          allInfos[index][i] = newDocument;
      
          updatedData[index] = {
            ...data[index],
            count: documentCounts[data[index].document]
          };
        // 
          
        }
      
      });
      
      
      setCustomInformation(allCustomInfos)
      setInformation(allInfos)
      // 
      // 
      setData(updatedData);
      

      
    };

  const handleChangingTitle = (title, document, index, i) => {
    setDocumentInfo((prevDocumentInfo) => {
      const newDocumentInfo = [...prevDocumentInfo];
      newDocumentInfo[index] = newDocumentInfo[index] || [];
      newDocumentInfo[index][i] = {
        ...newDocumentInfo[index][i],
        title,
      };
      // 

      return newDocumentInfo;
    });
  };
  
  const handleStartDateChange = (date, document, index, i) => {
    setDocumentInfo((prevDocumentInfo) => {
      const newDocumentInfo = [...prevDocumentInfo];
      newDocumentInfo[index] = newDocumentInfo[index] || [];
      newDocumentInfo[index][i] = {
        ...newDocumentInfo[index][i],
        startDate: date ? date.toDate() : null,
      };
      return newDocumentInfo;
    });
  };
  
  const handleEndDateChange = (date, document, index, i) => {
    setDocumentInfo((prevDocumentInfo) => {
      const newDocumentInfo = [...prevDocumentInfo];
      newDocumentInfo[index] = newDocumentInfo[index] || [];
      newDocumentInfo[index][i] = {
        ...newDocumentInfo[index][i],
        endDate: date ? date.toDate() : null,
      };
      return newDocumentInfo;
    });
  };
  const onChange = (pagination, filters, sorter, extra) => {
    
  };
  
  const change=(selectedRows,selectedRowKeys)=>{
    // 
    const updatedSelectedRowKeys = selectedRowKeys.map(row => ({ ...row, checked: true }));
    
    const indexes = updatedSelectedRowKeys.map(row => row.index);
    // 
    setSelectedRows(indexes)
  }
  
  const handleCheckboxChange = (isCheckedValue, document, index, i) => {
    setDocumentInfo((prevDocumentInfo) => {
      const newDocumentInfo = [...prevDocumentInfo];
      newDocumentInfo[index] = newDocumentInfo[index] || [];
  
      // If checkbox is unchecked, restore previous startDate and endDate values
      if (!isCheckedValue) {
        newDocumentInfo[index][i] = {
          title: newDocumentInfo[index]?.[i]?.title || '',
          isChecked: false,
          startDate: newDocumentInfo[index]?.[i]?.prevStartDate || '',
          endDate: newDocumentInfo[index]?.[i]?.prevEndDate || '',
          prevStartDate: undefined,
          prevEndDate: undefined,
        };
      } else {
        newDocumentInfo[index][i] = {
          title: newDocumentInfo[index]?.[i]?.title || '',
          isChecked: true,
          prevStartDate: newDocumentInfo[index]?.[i]?.startDate,
          prevEndDate: newDocumentInfo[index]?.[i]?.endDate,
        };
      }
  
      return newDocumentInfo;
    });  
  };
  
  
    const departmentWiseShow = () => {
      setDepartmentWise(true);
    };
  
    const departmentWiseCancel = () => {
      setDepartmentWise(false);
    };
    const addDocument = async () => {
      
      
      const departmentOptions = await JSON.parse(departmentOptionsString);
      try {
        var title=getMdrTitle;
        // 
        var mdrCode=getMdrCode;
        // 
        mdrCode=mdrCode.replace(/\s/g, '');
        // 
        var count = selectedRows.length
        // 
        if(record){
          try {
            const response = await axios.put(
              "http://127.0.0.1:8083/api/documents/mdr",
              {
                record,
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
            notification.success({
              message: 'Successfully Created',
              description: `${response.data.message}`,
              style: {
                backgroundColor: '#52c41a', // Green color background
                color: '#fff', // White text color
              },
            }); 
          } catch (error) {
            if (error.response?.status === 409) {
              // Conflict error (HTTP 409)
              notification.error({
                message: 'Conflict Error',
                description: 'A mdr with this name or code already exists. Please choose a different name or code.',
                style: {
                  backgroundColor: '#f5222d', // Red color background
                  color: '#fff', // White text color
                },
              });

              history.push("/pages/mdr")
              return            
            } else {
              // Handle other errors
              notification.success({
                message: 'Successfully Created',
                description: `${response.data.message}`,
                style: {
                  backgroundColor: '#52c41a', // Green color background
                  color: '#fff', // White text color
                },
              });
              
            }    
          }
        }
        else{ 
          try {
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
            notification.success({
              message: 'Successfully Created',
              description: `${response.data.message}`,
              style: {
                backgroundColor: '#52c41a', // Green color background
                color: '#fff', // White text color
              },
            });
          } catch (error) {
              if (error.response?.status === 409) {
                // Conflict error (HTTP 409)
                notification.error({
                  message: 'Conflict Error',
                  description: 'A mdr with this name or code already exists. Please choose a different name or code.',
                  style: {
                    backgroundColor: '#f5222d', // Red color background
                    color: '#fff', // White text color
                  },
                });
                history.push("/pages/mdr")            
                return
              } else {
                notification.error({
                  message: 'Error',
                  description: 'An error occurred while adding the mdr. Please try again.',
                  style: {
                    backgroundColor: '#f5222d', // Red color background
                    color: '#fff', // White text color
                  },
                });
              }
            }
          }
        selectedRows.forEach(async (index) => {
          let documentValue = data[index].document;
          let count = data[index].count||1
          const masterDocumentName=title;
          const assignedBy=user.user.roleId;
          const assignedFrom=user.user.id;
          
          for (let i = 0; i < count; i++) {
            try {
              var docTitle = documentInfo[index][i].title;
              var startedDate = documentInfo[index][i].startDate
              var expectedEndedDate = documentInfo[index][i].endDate
              var title=information[index][i];
              var version='000';

              
              const responseDoc = await axios.post(
                "http://127.0.0.1:8083/api/documents/",
                {
                  title,
                  startedDate,
                  expectedEndedDate,
                  docTitle,
                  departmentId,
                  projectId,
                  companyId: user?.user?.companyId,
                  userId: user?.user?.id,
                  userName: `${user?.user?.firstName} ${user?.user?.lastName}`,
                  masterDocumentId: mdrCode,
                  masterDocumentName,
                  projectCode,
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
              notification.success({
                message: `Documents Successfully Added`,
                style: {
                  backgroundColor: '#52c41a', // Red color background
                  color: '#fff', // White text color
                },
              }
            )     
            } catch (error) {
              
            }  
          }
        });




        // selectedRows.forEach(async (index) => {
          if(customData.count !=null ||''){
            let countCustom = customData.count||1
          const masterDocumentName=title;
          const assignedBy=user.user.roleId;
          const assignedFrom=user.user.id;
          
          for (let i = 0; i < countCustom; i++) {
            try {
              var docTitle = documentInfo[0][i].title;
              var startedDate = documentInfo[0][i].startDate
              var expectedEndedDate = documentInfo[0][i].endDate
              var title=customInformation[i];
              var version='000';

              
              const responseDoc = await axios.post(
                "http://127.0.0.1:8083/api/documents/",
                {
                  title,
                  startedDate,
                  expectedEndedDate,
                  docTitle,
                  departmentId,
                  projectId,
                  companyId: user?.user?.companyId,
                  userId: user?.user?.id,
                  userName: `${user?.user?.firstName} ${user?.user?.lastName}`,
                  masterDocumentId: mdrCode,
                  masterDocumentName,
                  projectCode,
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
              notification.success({
                message: `Documents Successfully Added`,
                style: {
                  backgroundColor: '#52c41a', // Red color background
                  color: '#fff', // White text color
                },
              }
            )     
            } catch (error) {
              
            }  
          }
            
          }

        if (selectedRows.length === 0) {
          message.error('Please select at least one row.');
          return;
        }
      } catch (error) {
        console.error("Error adding MDR:", error);
      }
    };

    const handleDepartmentClick = (name) => {
      
      setSelectedDepartment(name);
      departmentWiseCancel();
      filterData(name);
    };

    // const filterData = (selectedDepartment) => {

    //   const filteredData = [];
    //   for (const data of dataArray) {
    //     if (String(data.category).toUpperCase() === String(selectedDepartment).toUpperCase()) {
    //       filteredData.push(data);
    //     }
    //   }
    //   
    //   setData(filteredData);
    // };
  
    const filterData = (selectedDepartment) => {
      
      
      const filteredIndexes = dataArray
      .filter(item => item.category.toUpperCase() === selectedDepartment.toUpperCase())
    
      const filteredRowKeys = dataArray
      .filter((row, index) => selectedRows.includes(index) && row.checked)
      .map(row => row.index);
      
    // Call setSelectedRows to update the selected rows
      setSelectedRows(filteredRowKeys);
  
      
        // const filteredDataWithIndexes = filteredIndexes.map(index => dataArrayWithIndexes[index]);
      // const filteredDataValues = filteredDataWithIndexes.map(({ value }) => value);
      
      // 
      setData(filteredIndexes);
      // setFilteredValues(filteredDataWithIndexes); // Assuming you have a state variable for storing filtered values
    };
    

    // const filterData = (selectedDepartment) => {
    //   const filteredIndexes = dataArrayWithIndexes
    //     .filter(({ value }) => String(value.category).toUpperCase() === String(selectedDepartment).toUpperCase())
    //     .map(({ index }) => index);
    
      
    //   setData(filteredDataValues);
    // };

    const handleClick = () => {
      departmentWiseCancel();
      setData(dataArray)
    };
    const mdrValidation = async() => {   
      let count = data[index].count||1
      for (let i = 0; i < count; i++) {
      
       
        

       };}
    const mydocumentSaved = async() => {      
      
      let documentValidation=true;

      
    
      selectedRows.forEach(async (index) => {
        let count = data[index].count||1
      const  documentInfo1 = documentInfo.filter(item => item !== undefined);
      console.log("count",count);
      
      console.log("DOC INFO1",documentInfo1);

        for (let i = 0; i < documentInfo1.length; i++) {
          console.log("OUTER LOOP I",i);

//          if(documentInfo[i]==null){
//           setDocumentValidation(true);
// message.error('Fill all the fields first')
//          } 
console.log(documentInfo1[i],'DOC ARRAY');

for (let index1 = 0; index1 < documentInfo1[i].length; index1++) {
  console.log("INNER LOOP INDEX1",index1);


          if (

          !documentInfo1[i][index1].hasOwnProperty('title') || 
          !documentInfo1[i][index1].hasOwnProperty('startDate') || 
          !documentInfo1[i][index1].hasOwnProperty('endDate') ||
          documentInfo1[i][index1]['title'] === null || 
          documentInfo1[i][index1]['startDate'] === null || 
          documentInfo1[i][index1]['endDate'] === null
        ) {
          console.log("IF CONDITION");


          documentValidation=true;
          message.error('Fill all the fields first');
          break;

        }
      else{
        console.log("ELSE CONDITION");

        documentValidation=false;
        

       


      }}

         
        }
     
      }
      
    )
    if(documentValidation==false){
      await addDocument();}
      // selectedRows.forEach((index) => {
      //   const savedData = loadData(`doc-${index}`);
      //   
      // });
      

       
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

    const handleUpdate = (record) => {
      setSelectedRowData(record);
      selectedModalShow();
    };
    
    const getAllCodes = async () => {
      

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

    useEffect(() => {
      // This will be executed after the state is updated
      // 
    }, [information]);

    const customModalShow = () => {
      setCustomModalVisible(true);
    };
  
    const customModalCancel = () => {
      setCustomModalVisible(false);
    };
  
    const handleCustomFieldChange = (fieldName, value) => {
      setCustomFieldValues({ ...customFieldValues, [fieldName]: value });
    };
    const 
    handleDone = (value) => {
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
      const category = departmentOptionSuffixes.find(dept => dept.value == department)
      const document = `xxxx-01-${department}-${documentContentCode}-00X`
      const customData = {
        count:documentNumbers||'',
        departmentCode: department || '',
        documentContentCode: documentContentCode || '',
        documentTitle: documentDesc || '',
        areaCode:"01",
        category:category.label,
        sequenceNumber:"00X",
        document:document,
      };

      
      setCustomData(customData)
  
      // Update the data array with the new custom data
      // setData(prevData => [...prevData, customData]);
  
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
  <React.Fragment key={index}>
  {Array.from({ length: data[index].count || 1 }, (_, i) => (
    <li key={i} style={{ margin: "2px", padding: "2px" }}>
      <strong style={{ color: "blue" }}>Category:</strong> {data[index].category} <br />
      <strong style={{ color: "blue" }}>Code:</strong> {data[index].code} <br />
      <strong style={{ color: "blue" }}>Document Number:</strong> {information[index]?.[i] || ''} <br />
      <br />
      <Form.Item label="Start Date" name={`startedDate[${index}][${i}]`}>
        <DatePicker
          style={{ width: '100%' }}
          onChange={(date) => handleStartDateChange(date, data[index].document, index, i)}
          disabled={documentInfo[index]?.[i]?.isChecked}
          required
        />
      </Form.Item>

      <Form.Item label="End Date" name={`endedDate[${index}][${i}]`}>
        <DatePicker
          style={{ width: '100%' }}
          onChange={(date) => handleEndDateChange(date, data[index].document, index, i)}
          disabled={documentInfo[index]?.[i]?.isChecked}
          required
        />
      </Form.Item>

      <Form.Item label="Title" name={`title[${index}][${i}]`}>
        <Input
          style={{ margin: "6px" }}
          placeholder="Enter Document Title"
          value={documentInfo[index]?.[i]?.title || ''}
          onChange={(e) => handleChangingTitle(e.target.value, data[index].document, index, i)}
          required
        />
      </Form.Item>
    </li>
  ))}
</React.Fragment>


))}

          </ul>

        
          {customData.count !=null ||'' && <ul style={{ margin: "2px", padding: "2px" }}>
      {Array.from({ length: customData.count || 1 }, (_, i) => (

        <li key={i} style={{ margin: "2px", padding: "2px" }}>
          <strong style={{ color: "blue" }}>Category:</strong> {customData.category} <br />
          <strong style={{ color: "blue" }}>Code:</strong> {customData.documentContentCode} <br />
          <strong style={{ color: "blue" }}>Document Number:</strong> {customInformation[i]} <br />
          <br />
          <Form.Item label="Start Date" name={`startedDate[${i}]`}>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) => handleStartDateChange(date, customData.document, 0, i)}
              // disabled={documentInfo[0]?.[i]?.isChecked}
              required
            />
          </Form.Item>

          <Form.Item label="End Date" name={`endedDate[${i}]`}>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) => handleEndDateChange(date, customData.document, 0, i)}
              // disabled={documentInfo[0]?.[i]?.isChecked}
              required
            />
          </Form.Item>

          <Form.Item label="Title" name={`title[${i}]`}>
            <Input
              style={{ margin: "6px" }}
              placeholder="Enter Document Title"
              value={documentInfo[0]?.[i]?.title || ''}
              onChange={(e) => handleChangingTitle(e.target.value, customData.document, 0, i)}
              required
            />
          </Form.Item>
        </li>
      ))}
    </ul>}

         
        </div>
      </Row>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Button
    type="primary"
    onClick={mydocumentSaved}
    
    // disabled={user?.user?.roleId != 1}
    disabled={
    documentInfo.length==0
    }
    style={{}}
  >
    Done
  </Button>
</div>

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
        <h1>Select Documents For MDR</h1>
      </div>
      <div style={{ marginBottom: "16px" ,justifyContent:"space-between"}}>
        <h1>MDR Templates</h1>

      </div>
      <Table
        columns={columns}
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
        // rowSelection={{
        //   selectedRowKeys: selectedRows,
        //   onChange: (selectedRowKeys,selectedRows) => setSelectedRows(selectedRows.includes("index")),
        // }}
        rowSelection={{
          selectedRowKeys: selectedRows,
          onChange:(selectedRows,selectedRowKeys)=> change(selectedRows,selectedRowKeys),
        }}
        // onChange={onChange}
        bordered
        size='middle'
      title={() => 'All Department Documents'}
      footer={() => 'You may filter docs'}
    expandable={{
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.document}</p>,
      rowExpandable: (record) => record.departmentCode !== 'Not Expandable',
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
          {/* {columns.map((column) => (
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
          ))} */}
        
              <Form.Item
                label="Department"
                name="department"
                rules={[
                  {
                    required: true,
                    message: "Please select Project Name",
                  },
                ]}
              >
              <Select
                  options={departmentOptionSuffixes}
                  value={department}
                  onChange={(value) => setDepartment(value)}
                />              
                </Form.Item>

                <Form.Item label="Document" name="document" rules={[
                  {
                    required: true,
                    message: "Please Add Document",
                  },
                ]}>
            <Input
              value={documentDesc}
              onChange={(e) => setDocumentDesc(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Document Content Code" name="documentContentCode" rules={[
                  {
                    required: true,
                    message: "Please Add Document Content Code",
                  },
                ]}>
            <Input
              value={documentContentCode}
              onChange={(e) => setDocumentContentCode(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Number Of Documents" name="noOfDoxuments" rules={[
                  {
                    required: true,
                    message: "Please Add Number of Documents",
                  },
                ]}>
            <Input
              value={documentNumbers}
              onChange={(e) => setDocumentNumbers(e.target.value)}
            />
          </Form.Item>

          

        </Form>
      </Modal>
    </div>
    </>

  );
};

export default MdrTemplate;