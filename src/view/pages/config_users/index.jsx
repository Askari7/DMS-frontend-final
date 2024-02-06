import React, { useState } from 'react';
import EmployeeForm from '../employee';
import OrganizationChart from '../organizationChart';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

 
    // Your existing addEmployee logic...
    const addEmployee = (employee) => {
      // Assign a unique ID to the employee (for simplicity, you can use the length of the array)
      employee.id = employees.length + 1;
    
      // Assign a managerId for hierarchy
      if (employee.designation === 'Head') {
        employee.managerId = null; // Head of Department has no manager
      } 
      else if ((employee.designation === 'Senior')){
        // Find the Head of Department in the same department
        const headOfDept = employees.find(
          (emp) => emp.designation === 'Head' && emp.department === employee.department
        );
    
        employee.managerId = headOfDept ? headOfDept.id : null;
      }
      else if ((employee.designation === 'Junior')){
        // Find the Head of Department in the same department
        const headOfDept = employees.find(
          (emp) => emp.designation === 'Senior' && emp.department === employee.department
        );
    
        employee.managerId = headOfDept ? headOfDept.id : null;
      }
      else if ((employee.designation === 'Designer')){
        // Find the Head of Department in the same department
        const headOfDept = employees.find(
          (emp) => emp.designation === 'Junior' && emp.department === employee.department
        );
    
        employee.managerId = headOfDept ? headOfDept.id : null;
      }
      setEmployees([...employees, employee]);
      console.log('my employees', employee);
    };

    return (
      <div style={{ display: 'flex' , textAlign:'center'}}>
        
        {/* Left side - Employee Form */}
        <div style={{ flex: 1, marginRight: '20px' }}>
          <EmployeeForm onSubmit={addEmployee} />
          {/* Render a simple div to test rendering */}
         
        </div>
  
        {/* Right side - Organization Chart */}
        <div style={{ flex: 1 }}>
          {/* Uncomment the following line once the simple test is successful */}
          <OrganizationChart employees={employees} />
        </div>
      </div>
    );
  };

export default EmployeeManagement;

