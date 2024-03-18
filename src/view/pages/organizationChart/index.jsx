// import React from 'react';
// import { Tree, TreeNode } from 'react-organizational-chart';

// const OrganizationChart = ({ employees }) => {
//   console.log(employees,"employees");
//   const buildTree = (employees) => {
//     const employeeMap = new Map();
//     employees.forEach((employee) => {
//       employeeMap.set(employee.id, { ...employee, children: [] });
//     });
//     console.log("employeeMap",employeeMap);

//     const tree = [];
//     employeeMap.forEach((employee, id) => {
//       const managerId = employee.managerId;
//       if (managerId !== null && employeeMap.has(managerId)) {
//         employeeMap.get(managerId).children.push(employee);
//       } else {
//         tree.push(employee);
//       }
//     });

//     // Sort each level of the hierarchy based on designation order
//     const sortHierarchy = (node) => {
//         const designationOrder = {
//           Head: 0,
//           Senior: 1,
//           Junior: 2,
//           Designer: 3,
//         };
      
//         node.children.sort((a, b) => {
//           const orderA = designationOrder[a.designation];
//           const orderB = designationOrder[b.designation];
      
//           if (orderA !== orderB) {
//             return orderA - orderB;
//           }
      
//           // If the designation is the same, sort by name or any other criteria you prefer
//           const nameComparison = a.firstName.localeCompare(b.firstName);
//           if (nameComparison !== 0) {
//             return nameComparison;
//           }
      
//           // If the designation and name are the same, consider the manager
//           if (a.managerId !== b.managerId) {
//             return a.managerId - b.managerId;
//           }
      
//           // If all criteria are the same, maintain the current order
//           return 0;
//         });
      
//         node.children.forEach((child) => {
//           sortHierarchy(child);
//         });
//       };
      
//     // Sort the root nodes based on designation order
//     tree.sort((a, b) => {
//       const designationOrder = {
//         Head: 0,
//         Senior: 1,
//         Junior: 2,
//         Designer: 3,
//       };
//       return designationOrder[a.designation] - designationOrder[b.designation];
//     });

//     tree.forEach((root) => {
//       sortHierarchy(root);
//     });

//     console.log('Tree:', tree); // Log the tree for debugging
//     return tree;
//   };

//   const renderChartNode = (node) => (
//     <TreeNode
//       label={(
//         <div>
//           {node.firstName} {node.lastName} - {node.designation} {node.department[0].title}
//         </div>
//       )}
//       key={node.id.toString()} // Key to avoid React warning about unique keys
//     >
//       {node.children.map((child) => renderChartNode(child))} {/* Recursive call for children */}
//     </TreeNode>
//   );

//   return (
//     <Tree label={<div>PEC</div>}>
//       {buildTree(employees).map((employee) => renderChartNode(employee))}
//     </Tree>
//   );
// };

// export default OrganizationChart;

// import React from 'react';
// import { Tree, TreeNode } from 'react-organizational-chart';

// const OrganizationChart = ({ employees }) => {
//   console.log(employees, "employees");

//   // Define designationOrder outside the function
//   const designationOrder = {
//     Head: 0,
//     "Department Lead": 1,
//     "Senior Engineers": 2,
//     "Junior Engineers": 3,
//     Designer: 4,
//   };

//   const buildTree = (employees) => {
//     const employeeMap = new Map();
//     employees.forEach((employee) => {
//       employeeMap.set(employee.id, { ...employee, children: [] });
//     });
//     console.log("employeeMap", employeeMap);

//     const tree = [];
//     employeeMap.forEach((employee, id) => {
//       const roleId = employee.roleId;
//       const roleTitle = employee.roleTitle
//       const department = employee.department
//       console.log(roleId,"id",roleTitle,"roleTitle",department,"department");
//       if (department !== null ) {
//         tree.push(employee);
//       } else {
//         tree.push(employee);
//       }
//     });

//     console.log(tree,"tree");
//     return tree;
//   };

//   const renderChartNode = (node) => (
//     <TreeNode
//       label={(
//         <div>
//           {node.firstName} {node.lastName} - {node.roleTitle} {node.department[0].title}
//         </div>
//       )}
//       key={node.id.toString()} // Key to avoid React warning about unique keys
//     >
//       {node.children.map((child) => renderChartNode(child))} {/* Recursive call for children */}
//     </TreeNode>
//   );

//   return (
//     <Tree label={<div>PEC</div>}>
//       {/* Additional nodes before each layer */}
//       <TreeNode
//         label={<div>CEO - Chief Executive Officer</div>}
//         key="CEO"
//       >
//         {buildTree(employees).map((employee) => renderChartNode(employee))}
//       </TreeNode>
//     </Tree>
//   );
// };

// export default OrganizationChart;

// import React from 'react';
// import { Tree, TreeNode } from 'react-organizational-chart';

// const OrganizationChart = ({ employees }) => {
//   const buildTree = (employees) => {
//     const employeeMap = new Map();
//     employees.forEach((employee) => {
//       employeeMap.set(employee.id, { ...employee, children: [] });
//     });

//     console.log(employeeMap,"employeeMap");

//     const tree = [];
//     employeeMap.forEach((employee) => {
//       const roleId = employee.roleId;
//       const department = employee.department;

//       if (!department && roleId == 1) {
//         tree.push(employee);
//       } else {
//         const parentNode = findParentNode(employeeMap, employee);
//         console.log(parentNode,"parentNode 1",employee.id);
//         if (parentNode) {
//           parentNode.children.push(employee);
//         }
//       }
//     });

//     return tree;
//   };

//   // Helper function to find the parent node based on department and roleId
//   const findParentNode = (employeesMap, employee) => {
//     return [...employeesMap.values()].find((node) => {
//       if (node.department === null && employee.department === null) {
//         // Handle the case where both node and employee have null department
//         return node.roleId === employee.roleId - 1;

//       }
//       else if(employee.roleId === 5 && node.department===employee.department){
//         return node.roleId === employee.roleId-1; 
//       } 
//       else if(employee.roleId === 5 && employee.department==="Piping"){
//         return node.roleId === 1; 
//       } 
//       else if(employee.roleId === 4 && employee.department==="Process"){
//         return node.roleId === 2 && node.department==="Process"; 
//       } 
//       else if(employee.roleId === 5 && employee.department==="Instrumentation"){
//         return node.roleId === 1; 
//       } 
//       else if(employee.roleId === 2){
//         return node.roleId === employee.roleId - 1; 
//       } 
//       else if (node.department === employee.department) {
//         return node.roleId === employee.roleId - 1;
//       }
//       return false;
//     });
//   };
  
  

//   const renderChartNode = (node) => (
//     <TreeNode
//       label={(
//         <div>
//           {node.lastName}-{node.department}
//         </div>
//       )}
//       key={node.id.toString()} // Key to avoid React warning about unique keys
//     >
//       {node.children.map((child) => renderChartNode(child))} {/* Recursive call for children */}
//     </TreeNode>
//   );

//   return (
//     <div style={{ overflowX: 'auto' }}>
//       <Tree label={<div>PEC</div>}>
//         {buildTree(employees).map((employee) => renderChartNode(employee))}
//       </Tree>
//     </div>
//   );
// };

// export default OrganizationChart;






import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { FaLeaf } from 'react-icons/fa';

const OrganizationChart = ({ employees }) => {
  const buildTree = (employees) => {
    const employeeMap = new Map();
    employees.forEach((employee) => {
      employeeMap.set(employee.id, { ...employee, children: [] });
    });

    const tree = [];
    employeeMap.forEach((employee) => {
      const roleId = employee.roleId;
      const department = employee.department;

      if (!department && roleId === 1) {
        tree.push(employee);
      } else {
        const parentNode = findParentNode(employeeMap, employee);
        if (parentNode) {
          parentNode.children.push(employee);
        }
      }
    });

    return tree;
  };

  const findParentNode = (employeesMap, employee) => {
    return [...employeesMap.values()].find((node) => {
      if (node.department === null && employee.department === null) {
        return node.roleId === employee.roleId - 1;
      } else if (employee.roleId === 5 && node.department === employee.department) {
        return node.roleId === employee.roleId - 1;
      }
      //  else if (employee.roleId === 5 && employee.department === 'Piping') {
      //   return node.roleId === 1;
      // } 
      else if (employee.roleId === 4 && employee.department === 'Process') {
        return node.roleId === 2 && node.department === 'Process';
      }else if (employee.roleId === 2) {
        return node.roleId === employee.roleId - 1;
      } else if (node.department === employee.department) {
        return node.roleId === employee.roleId - 1;
      }
      // else if (employee.roleId === 5 && employee.department === 'Instrumentation') {
      //   return node.roleId === 1;
      // } 
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
      <Tree label={<div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>PCEC</div>}>
        {buildTree(employees).map((employee) => renderChartNode(employee))}
      </Tree>
    </div>
  );
};

export default OrganizationChart;
