import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

const OrganizationChart = ({ employees }) => {
  console.log(employees);

  const buildTree = (employees) => {
    const employeeMap = new Map();
    employees.forEach((employee) => {
      employeeMap.set(employee.id, { ...employee, children: [] });
    });

    const tree = [];
    employeeMap.forEach((employee, id) => {
      const managerId = employee.managerId;
      if (managerId !== null && employeeMap.has(managerId)) {
        employeeMap.get(managerId).children.push(employee);
      } else {
        tree.push(employee);
      }
    });

    // Sort each level of the hierarchy based on designation order
    const sortHierarchy = (node) => {
        const designationOrder = {
          Head: 0,
          Senior: 1,
          Junior: 2,
          Designer: 3,
        };
      
        node.children.sort((a, b) => {
          const orderA = designationOrder[a.designation];
          const orderB = designationOrder[b.designation];
      
          if (orderA !== orderB) {
            return orderA - orderB;
          }
      
          // If the designation is the same, sort by name or any other criteria you prefer
          const nameComparison = a.firstName.localeCompare(b.firstName);
          if (nameComparison !== 0) {
            return nameComparison;
          }
      
          // If the designation and name are the same, consider the manager
          if (a.managerId !== b.managerId) {
            return a.managerId - b.managerId;
          }
      
          // If all criteria are the same, maintain the current order
          return 0;
        });
      
        node.children.forEach((child) => {
          sortHierarchy(child);
        });
      };
      
    // Sort the root nodes based on designation order
    tree.sort((a, b) => {
      const designationOrder = {
        Head: 0,
        Senior: 1,
        Junior: 2,
        Designer: 3,
      };
      return designationOrder[a.designation] - designationOrder[b.designation];
    });

    tree.forEach((root) => {
      sortHierarchy(root);
    });

    console.log('Tree:', tree); // Log the tree for debugging
    return tree;
  };

  const renderChartNode = (node) => (
    <TreeNode
      label={(
        <div>
          {node.firstName} {node.lastName} - {node.designation} {node.department}
        </div>
      )}
      key={node.id.toString()} // Key to avoid React warning about unique keys
    >
      {node.children.map((child) => renderChartNode(child))} {/* Recursive call for children */}
    </TreeNode>
  );

  return (
    <Tree label={<div>PEC</div>}>
      {buildTree(employees).map((employee) => renderChartNode(employee))}
    </Tree>
  );
};

export default OrganizationChart;
