import React, { useState } from 'react';
import { Checkbox, Row, Col, Button, Input, Modal,message } from 'antd';
import { useHistory } from 'react-router-dom'; 
import axios from "axios";

const departmentsData = [
  { department: 'Project Management', suffix: 'PM' },
  { department: 'Process', suffix: 'PRO' },
  { department: 'Mechanical', suffix: 'ME' },
  { department: 'Electrical', suffix: 'ELE' },
  { department: 'Instrumentation', suffix: 'INS' },
  { department: 'Civil / Structure', suffix: 'CIV' },
  { department: 'Finance', suffix: 'FIN' },
  { department: 'HR / Admin', suffix: 'HR' },
  { department: 'Quality', suffix: 'QLT' },
];

const DepartmentSelection = () => {
  const [mdrTemplateVisible, setMdrTemplateVisible] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
var selectedSuffix=[];
  const showMdrTemplate = () => {
    setMdrTemplateVisible(true);
  };

  const hideMdrTemplate = () => {
    setMdrTemplateVisible(false);
  };

  const history = useHistory();
  const navigateToMdrTemplate = () => {
    console.log('my selected depts',selectedDepartments);
    addDepartments();
     history.push('/pages/config_users'); // Replace '/path-to-mdr-template' with the actual route path to the MDR Template component
};

const addDepartments = async () => {
    try {
      console.log(user);
      if (selectedDepartments.includes('Project Management')) {
        selectedSuffix.push('PM')
      }
      if (selectedDepartments.includes('Process')) {
        selectedSuffix.push('PRO')
      }
      if (selectedDepartments.includes('Mechanical')) {
        selectedSuffix.push('ME')
      }
      if (selectedDepartments.includes('Electrical')) {
        selectedSuffix.push('ELE')
      }
      if (selectedDepartments.includes('Instrumentation')) {
        selectedSuffix.push('INS')
      }
      if (selectedDepartments.includes('Civil / Structure')) {
        selectedSuffix.push('CIV')
      }
      if (selectedDepartments.includes('Finance')) {
        selectedSuffix.push('FIN')
      }
      if (selectedDepartments.includes('HR / Admin')) {
        selectedSuffix.push('HR')
      }
      if (selectedDepartments.includes('Quality')) {
        selectedSuffix.push('QLT')
      }
      if (selectedDepartments.includes('Piping')) {
        selectedSuffix.push('PIP')
      }
      const response = await axios.post(
        "http://127.0.0.1:8083/api/departments/",
        {
          title:selectedDepartments,
          companyId: user?.user?.companyId,
          authorId: user?.user?.id,
          authorName: `${user?.user?.firstName} ${user?.user?.lastName}`,
          suffix:selectedSuffix
        },
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      // Handle the response as needed
      console.log("departments response", response);
      message.success(response?.data?.message);
    } catch (error) {
      if (error?.message == "Request failed with status code 401") {
        message.error("Unauthorized");
      }
      console.error("Error adding departments:", error?.message);
    }
  };
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [newDepartment, setNewDepartment] = useState('');

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };

  const handleAddModalOk = () => {
    if (newDepartment.trim() !== '') {
      const updatedDepartments = [...selectedDepartments, newDepartment];
      setSelectedDepartments(updatedDepartments);
      setNewDepartment('');
      setIsAddModalVisible(false);
    }
  };

  const handleAddModalCancel = () => {
    setNewDepartment('');
    setIsAddModalVisible(false);
  };

  const handleCheckboxChange = (department) => {
    const updatedDepartments = selectedDepartments.includes(department)
      ? selectedDepartments.filter((d) => d !== department)
      : [...selectedDepartments, department];

    setSelectedDepartments(updatedDepartments);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <h1>Company Environment Setup</h1>
      </div>
      <h2>Select Departments for Your Company</h2>
      <Button
        type="primary"
        style={{ position: 'absolute', top: 50, right: 10 }}
        onClick={showAddModal}
      >
        Add Department
      </Button>
      <Row >
        {departmentsData.map((department) => (
          <Col span={8} key={department.department} style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          onChange={() => handleCheckboxChange(department.department)}
          checked={selectedDepartments.includes(department.department)}
          style={{ marginRight: 10 }}
        />
        <div>
          <span style={{ color: 'blue', marginRight: 5 }}>{department.department}</span>
          <span style={{ fontStyle: 'italic', marginRight: 5 }}>{department.suffix}</span>
        </div>

      </Col>
        ))}
      </Row>
      <div style={{ marginTop: 20 }}>
  <h3>Selected Departments:</h3>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {selectedDepartments.map((department, index) => (
      <div key={department} style={{ marginRight: 20, marginBottom: 10 }}>
        <span style={{ fontSize: 16 }}>{department}</span>
        {/* Add your styling for the department name */}
        <span style={{ fontStyle: 'italic', marginLeft: 5 }}>{selectedSuffix[index]}</span>
        {/* Assuming selectedSuffix is an array */}
      </div>
    ))}
  </div>
</div>

      <Modal
        title="Add New Department"
        visible={isAddModalVisible}
        onOk={handleAddModalOk}
        onCancel={handleAddModalCancel}
      >
        <Input
          placeholder="Enter Department Title"
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
        />
      </Modal>
      
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Button type="primary" htmlType="submit" onClick={navigateToMdrTemplate}>
          Proceed
        </Button>
      </div>

      {mdrTemplateVisible && <MdrTemplate />}
    </div>
  );
};

export default DepartmentSelection;