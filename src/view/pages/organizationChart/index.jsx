
import React, { useEffect, useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { FaLeaf } from 'react-icons/fa';
import axios from 'axios'


const OrganizationChart = ({ employees }) => {
  const [user,setUser]  = useState(JSON.parse(localStorage?.getItem("user")))
  const[name,setName] = useState()
  useEffect(()=>{
    fetchName()
    // setUser();
  })

  const fetchName = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/users/company/?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
  console.log(response.data,"company name");
  setName(response.data)
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };
  console.log(employees,"employees");
  const buildTree = (employees) => {
    const employeeMap = new Map();
    employees.forEach((employee) => {
      employeeMap.set(employee.id, { ...employee, children: [] });
    });
console.log(employeeMap,"employeeMap");
    const tree = [];
    employeeMap.forEach((employee) => {
      const roleId = employee.roleId;
      const department = employee.department;
      if(user.user.roleId == 2){
        if (department && roleId === 2) {
          tree.push(employee);
        } else {
          const parentNode = findParentNode(employeeMap, employee);
          if (parentNode) {
            parentNode.children.push(employee);
          }
        }
      }
      else{

        if (!department && roleId === 1) {
          tree.push(employee);
        } else {
          const parentNode = findParentNode(employeeMap, employee);
          if (parentNode) {
            parentNode.children.push(employee);
          }
        }
      }

    });
    console.log(tree,"tree");
    return tree;
  };
  const findParentNode = (employeesMap, employee) => {
    return [...employeesMap.values()].find((node) => {
      if (node.department === null && employee.department === null) {
        return node.roleId === employee.roleId - 1;
      } else if (employee.roleId === 5 && node.department === employee.department) {
        return node.roleId === employee.roleId - 1;
      }
       else if (employee.roleId === 5 && employee.department === 'Piping') {
        return node.roleId === 1;
      } 
      else if (employee.roleId === 4 && employee.department === 'Process') {
        return node.roleId === 2 && node.department === 'Process';
      }else if (employee.roleId === 2) {
        return node.roleId === employee.roleId - 1;
      } else if (node.department === employee.department) {
        return node.roleId === employee.roleId - 1;
      }
      else if (employee.roleId === 5 && employee.department === 'Instrumentation') {
        return node.roleId === 1;
      } 
      return false;
    });
  };

  const renderChartNode = (node) => {
    const getLayerColor = (layer) => {
      switch (layer) {
        case 1:
          return '#FFD700'; // Layer 1 color (e.g., gold)
        case 2:
          return '#87CEEB'; // Layer 2 color (e.g., sky blue)
        case 3:
          return '#90EE90'; // Layer 3 color (e.g., light green)
        case 4:
          return '#FFA07A'; // Layer 4 color (e.g., light salmon)
        case 5:
          return '#DDA0DD'; // Layer 5 color (e.g., plum)
        default:
          return '#FFFFFF'; // Default color (white)
      }
    };

    const isLeafNode = node.children.length === 0;

    return (
      
      <TreeNode
        label={(
          <div
            style={{
              backgroundColor: getLayerColor(node.roleId),
              padding: '4px',
              borderRadius: '16px',
              fontWeight:"bold",
              cursor: isLeafNode ? 'default' : 'pointer',
            }}
          >
            {node.lastName}-{node.department}-{node.roleTitle}
            {isLeafNode && (
              <FaLeaf
                style={{
                  marginLeft: '2px',
                  fontSize: '20px',
                  color: '#008000', // Adjust leaf color as needed
                }}
              />
            )}
          </div>
        )}
        key={node.id.toString()} // Key to avoid React warning about unique keys
      >
        {node.children.map((child) => renderChartNode(child))} {/* Recursive call for children */}
      </TreeNode>
    );
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <Tree label={<div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{user.user.roleId == 2 ? user.user.department : name}</div>}>
        {buildTree(employees).map((employee) => renderChartNode(employee))}
      </Tree>
    </div>
  );
};

export default OrganizationChart;
