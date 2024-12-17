
// import React, { useEffect, useState } from 'react';
// import { Tree, TreeNode } from 'react-organizational-chart';
// import { FaLeaf } from 'react-icons/fa';
// import axios from 'axios'


// const OrganizationChart = ({ employees }) => {
//   const [user,setUser]  = useState(JSON.parse(localStorage?.getItem("user")))
//   const[name,setName] = useState()
//   useEffect(()=>{
//     fetchName()
//   })

//   const fetchName = async () => {
//     try {
//       const response = await axios.get(
//         `https://novacon.live/api/users/company/?companyId=${user?.user?.companyId}`,
//         {
//           headers: {
//             Authorization: user?.accessToken,
//             // Add other headers if needed
//           },
//         }
//       );
//   console.log(response.data,"company name");
//   setName(response.data)
//     } catch (error) {
//       console.error("Error fetching documents:", error?.message);
//     }
//   };
//   console.log(employees,"employees");
//   const buildTree = (employees) => {
//     const employeeMap = new Map();
    
//     employees.forEach((employee) => {
//       employeeMap.set(employee.id, { ...employee, children: [] });
//     });
// console.log(employeeMap,"employeeMap");
//     const tree = [];
//     employeeMap.forEach((employee) => {
//       const roleId = employee.roleId;
//       const department = employee.department;
//       if(user.user.roleId == 2){
//         if (department && roleId === 2) {
//           tree.push(employee);
//         } else {
//           const parentNode = findParentNode(employeeMap, employee);
//           if (parentNode) {
//             parentNode.children.push(employee);
//           }
//         }
//       }
//       else{

//         if (!department && roleId === 1) {
//           tree.push(employee);
//         } else {
//           const parentNode = findParentNode(employeeMap, employee);
//           if (parentNode) {
//             parentNode.children.push(employee);
//           }
//         }
//       }

//     });
//     console.log(tree,"tree");
//     return tree;
//   };
//   const findParentNode = (employeesMap, employee) => {
//     return [...employeesMap.values()].find((node) => {
//       if (node.department === null && employee.department === null) {
//         return node.roleId === employee.roleId - 1;
//       } else if (employee.roleId === 5 && node.department === employee.department) {
//         return node.roleId === employee.roleId - 1;
//       }
//        else if (employee.roleId === 5 && employee.department === 'Piping') {
//         return node.roleId === 2 && node.department=="Instrumentation";
//       } 
//       else if (employee.roleId === 4 && employee.department === 'Process') {
//         return node.roleId === 2 && node.department === 'Process';
//       }else if (employee.roleId === 2) {
//         return node.roleId === employee.roleId - 1;
//       } else if (node.department === employee.department) {
//         return node.roleId === employee.roleId - 1;
//       }
//       else if (employee.roleId === 5 && employee.department === 'Instrumentation') {
//         return node.roleId === 2 && node.department === 'Instrumentation';
//       } 
//       return false;
//     });
//   };

//   const renderChartNode = (node) => {
//     const getLayerColor = (layer) => {
//       switch (layer) {
//         case 1:
//           return '#4169E1'; // Layer 1 color (e.g., gold)
//         case 2:
//           return '#1E90FF'; // Layer 2 color (e.g., sky blue)
//         case 3:
//           return '#6495ED'; // Layer 3 color (e.g., light green)
//         case 4:
//           return '#87CEEB'; // Layer 4 color (e.g., light salmon)
//         case 5:
//           return '#ADD8E6'; // Layer 5 color (e.g., plum)
//         default:
//           return '#FFFFFF'; // Default color (white)
//       }
//     };

//     const isLeafNode = node.children.length === 0;

//     return (
      
//       <TreeNode
//       label={(
//         <div
//           style={{
//             backgroundColor: getLayerColor(node.roleId),
//             padding: '8px',
//             borderRadius: '20px',
//             fontWeight: 'bold',
//             cursor: isLeafNode ? 'default' : 'pointer',
//           }}
//         >
//           <img
          
//           src= {node.image==null?`https://novacon.live/R.jpg`:`https://novacon.live/${node.image}`}
//           alt="Profile"
//           style={{ width:'10%', height: '10%', borderRadius: '8px' }}
//           />
//         {/* } */}
//           <div>
//             {node.lastName} 
//           </div>

//           <div>
//           {node.roleTitle=="CEO"? "-":`- ${node.department} -`} 
//           </div>
//           <div>
//             {node.roleTitle=="Head" ? "HOD":""} 
//             {node.roleTitle=="Senior" ? `Sr Eng`:""} {node.roleTitle=="Junior" ? `Jr Eng`:""} 
//             {node.roleTitle=="CEO" ? "CEO":"" } {node.roleTitle=="Designer" ? "Designer":"" }
//           </div>
          
//           {/* <div style={{ fontSize: '14px', color: '#00F' }}>
//             {node.email}
//           </div> */}
//         </div>
//       )}
      
//         key={node.id.toString()} // Key to avoid React warning about unique keys
//       >
//         {node.children.map((child) => renderChartNode(child))} {/* Recursive call for children */}
//       </TreeNode>
//     );
//   };

//   return (
//     // <div  style={{ 
//     //   overflowX: 'auto', 
//     //   overflowY: 'hidden', 
//     //   whiteSpace: 'nowrap', 
//     //   padding: '10px', 
//     //   backgroundColor: '#f5f5f5', 
//     //   border: '1px solid #ccc',
//     //   borderRadius: '8px',
//     //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//     // }}>
//         <div  style={{ 
//       overflowX: 'auto', 
//       overflowY: 'hidden', 
//       whiteSpace: 'nowrap', 
//       padding: '40px', 
//       backgroundColor: '#ebf2f2', 
//       border: '1px solid #ccc',
//       borderRadius: '8px',
//       boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//     }}>
//       <Tree label={<div style={{ fontSize: '30px', fontWeight: 'bold', color: '#000' }}>{user.user.roleId == 2 ? user.user.department : name}</div>}>
//         {buildTree(employees).map((employee) => renderChartNode(employee))}
//       </Tree>
//       {/* <Tree
//   label={
//     <div
//       style={{
//         fontSize: '18px',
//         fontWeight: 'bold',
//         color: '#000',
//         backgroundColor: '#',  // Adjust the background color
//         border: '1px solid #ccc',     // Add a border
//         borderRadius: '8px',          // Optional: round the corners
//         padding: '8px',               // Optional: add some padding inside
//       }}
//     >
//       {user.user.roleId === 2 ? user.user.department : name}
//     </div>
//   }
// >
// {buildTree(employees).map((employee) => renderChartNode(employee))}

// </Tree> */}
//     </div>
//   );
// };

// export default OrganizationChart;


import React, { useEffect, useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import axios from 'axios';

const OrganizationChart = ({ employees }) => {
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [name, setName] = useState();

  useEffect(() => {
    fetchName();
  }, []); // Fetch name on component mount

  const fetchName = async () => {
    try {
      const response = await axios.get(
        `https://novacon.live/api/users/company/?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
      setName(response.data);
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };

  const buildTree = (employees) => {
    const employeeMap = new Map();
    employees.forEach((employee) => {
      employeeMap.set(employee.id, { ...employee, children: [] });
    });

    const tree = [];
    employeeMap.forEach((employee) => {
      const roleId = employee.roleId;
      const department = employee.department;
      if (user.user.roleId === 2||user.user.roleId === 3||user.user.roleId === 4||user.user.roleId === 5) {
        if (department && roleId === 2) {
          tree.push(employee);
        } else {
          const parentNode = findParentNode(employeeMap, employee);
          if (parentNode) {
            parentNode.children.push(employee);
          }
        }
      } else {
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

    return tree;
  };

  const findParentNode = (employeesMap, employee) => {
    return [...employeesMap.values()].find((node) => {
      if (node.department === null && employee.department === null) {
        return node.roleId === employee.roleId - 1;
      } else if (employee.roleId === 5 && node.department === employee.department) {
        return node.roleId === 2 && node.department === employee.department;
      } 
      else if (node.department === employee.department) {
        return node.roleId === employee.roleId - 1;
      } 
      else if (employee.roleId === 2 ) {
        return node.roleId === employee.roleId - 1;
      }

      
      return false;
    });
  };

  const renderChartNode = (node) => {
    const getLayerColor = (layer) => {
      switch (layer) {
        case 1:
          return '#4169E1';
        case 2:
          return '#1E90FF';
        case 3:
          return '#6495ED';
        case 4:
          return '#87CEEB';
        case 5:
          return '#ADD8E6';
        default:
          return '#FFFFFF';
      }
    };

    const isLeafNode = node.children.length === 0;

    return (
      <TreeNode
        label={(
          <div 
            style={{
              backgroundColor: getLayerColor(node.roleId),
              padding: '8px',
              borderRadius: '8px',
              display: 'inline-block',

              fontWeight: 'bold',
              cursor: isLeafNode ? 'default' : 'pointer',
              width: '150px', // Fixed width for all nodes
              whiteSpace: 'nowrap', // Prevent text wrapping
              overflow: 'hidden', // Hide overflow text
              textOverflow: 'ellipsis', // Ellipsis for overflow text
            }}
          >
            <img
              src={node.image == null ? `https://novacon.live/R.jpg` : `https://novacon.live/${node.image}`}
              alt="Profile"
              style={{ 
                width: '90px',   // Set a fixed width for the image
                height: '90px',  // Set a fixed height for the image
                borderRadius: '50%', // Make the image circular
                objectFit: 'cover', // Ensure the image covers the area without distortion
                marginBottom: '8px' // Add some space below the image
              }} 
            />
            <div>{node.lastName}</div>
            <div>{node.roleTitle === "CEO" ? "-" : `- ${node.department} -`}</div>
            <div>
              {node.roleTitle === "Head" ? "HOD" : ""}
              {node.roleTitle === "Senior" ? `Sr Eng` : ""}
              {node.roleTitle === "Junior" ? `Jr Eng` : ""}
              {node.roleTitle === "CEO" ? "CEO" : ""}
              {node.roleTitle === "Designer" ? "Designer" : ""}
            </div>
          </div>
        )}
        key={node.id.toString()}
      >
        {node.children.map((child) => renderChartNode(child))}
      </TreeNode>
    );
  };

  return (
    <div style={{
      overflowX: 'auto',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
      padding: '100px',
      width:"1224px",
      backgroundColor: '#ebf2f2',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <Tree label={<div style={{ fontSize: '30px', fontWeight: 'bold', color: '#000', lineWidth:'2px',
lineColor:'green', lineBorderRadius:'10px',
      }}>{user.user.roleId === 2 ? user.user.department : name}</div>}>
        {buildTree(employees).map((employee) => renderChartNode(employee))}
      </Tree>
    </div>
  );
};

export default OrganizationChart;
