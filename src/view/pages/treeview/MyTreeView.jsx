// // import {useState,useEffect} from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';

// // // const projects = [
// // //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1' },
// // //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2' },
// // //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3' },
// // //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3' },
// // //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4' },
// // //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4' },
// // //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4' },
// // //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4' },
// // //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5' },
// // //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5' },
// // //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1' },
// // // ];

// // // const data = [];

// // // // Group projects by projectId
// // // const groupedProjects = projects.reduce((acc, project) => {
// // //   if (!acc[project.projectId]) {
// // //     acc[project.projectId] = [];
// // //   }
// // //   acc[project.projectId].push(project.title);
// // //   return acc;
// // // }, {});

// // // // Create parent nodes with children
// // // for (const projectId in groupedProjects) {
// // //   data.push({
// // //     id: projectId,
// // //     name: `Project ID: ${projectId}`,
// // //     children: groupedProjects[projectId].map(title => ({ id: title, name: title })),
// // //   });
// // // }

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1' },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2' },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3' },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3' },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4' },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4' },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4' },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4' },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5' },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5' },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1' },
// // ];

// // const data = [];

// // // Group projects by projectId
// // const groupedProjects = projects.reduce((acc, project) => {
// //   if (!acc[project.projectId]) {
// //     acc[project.projectId] = { children: [] };
// //   }
// //   const childNode = {
// //     id: project.title,
// //     name: project.title,
// //     children: [{ id: `${project.title}-departmentId`, name: `Department ID: ${project.departmentId}` }],
// //   };
// //   acc[project.projectId].children.push(childNode);
// //   return acc;
// // }, {});

// // // Create parent nodes with children
// // for (const projectId in groupedProjects) {
// //   const { children } = groupedProjects[projectId];
// //   const projectNode = {
// //     id: projectId,
// //     name: `Project ID: ${projectId}`,
// //     children: children,
// //   };
// //   data.push(projectNode);
// // }


// // // Function to render the tree nodes
// // const renderTree = (nodes) => (
// //   <TreeItem
// //     key={nodes.id}
// //     nodeId={nodes.id}
// //     label={nodes.name}
// //     onClick={() => console.log(`Node ${nodes.id} was clicked.`)}
// //   >
// //     {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
// //   </TreeItem>
// // );

// // // Function component for the TreeView
// // const MyTreeView = () => {
// //   return <TreeView>{data.map((node) => renderTree(node))}</TreeView>;
// // };

// // export default MyTreeView;





// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles({
// //   root: {
// //     height: 240,
// //     flexGrow: 1,
// //     maxWidth: 400,
// //     overflowY: 'auto',
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   titleNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr:"1"},
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr:"2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr:"3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr:"3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4' , mdr:"4"},
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr:"4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr:"4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr:"4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr:"4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5' , mdr:"5"},
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr:"5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1' , mdr:"1"},
// // ];

// // const data = [];

// // // Group projects by projectId
// // const groupedProjects = projects.reduce((acc, project) => {
// //   if (!acc[project.projectId]) {
// //     acc[project.projectId] = { children: [] };
// //   }
// //   const childNode = {
// //     id: project.title,
// //     name: project.title,
// //     children: [{ id: `${project.title}-departmentId`, name: `Department ID: ${project.departmentId}` }],
// //   };
// //   acc[project.projectId].children.push(childNode);
// //   return acc;
// // }, {});

// // // Create parent nodes with children
// // for (const projectId in groupedProjects) {
// //   const { children } = groupedProjects[projectId];
// //   const projectNode = {
// //     id: projectId,
// //     name: `Project ID: ${projectId}`,
// //     children: children,
// //   };
// //   data.push(projectNode);
// // }

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   const renderTree = (nodes) => {
// //     if (!nodes.children) return null;

// //     return (
// //       <TreeItem
// //         key={nodes.id}
// //         nodeId={nodes.id}
// //         label={nodes.name}
// //         className={
// //           nodes.id.startsWith('Project') ? classes.projectNode :
// //           nodes.id.endsWith('departmentId') ? classes.departmentIdNode :
// //           classes.titleNode
// //         }
// //         onClick={() => console.log(`Node ${nodes.id} was clicked.`)}
// //       >
// //         {nodes.children.map((node) => (
// //           <TreeItem
// //             key={node.id}
// //             nodeId={node.id}
// //             label={node.name}
// //             className={classes.titleNode}
// //             onClick={() => console.log(`Node ${node.id} was clicked.`)}
// //           />
// //         ))}
// //       </TreeItem>
// //     );
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {data.map((node) => renderTree(node))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;
























































































// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles({
// //   root: {
// //     height: 240,
// //     flexGrow: 1,
// //     maxWidth: 400,
// //     overflowY: 'auto',
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   titleNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = [];

// // // Group projects by projectId
// // const groupedProjects = projects.reduce((acc, project) => {
// //   if (!acc[project.projectId]) {
// //     acc[project.projectId] = { children: [] };
// //   }
// //   const childNode = {
// //     id: `${project.projectId}-mdr`,
// //     name: `MDR: ${project.mdr}`,
// //   };
// //   acc[project.projectId].children.push(childNode);
// //   return acc;
// // }, {});

// // // Create parent nodes with children
// // for (const projectId in groupedProjects) {
// //   const { children } = groupedProjects[projectId];
// //   const projectNode = {
// //     id: projectId,
// //     name: `Project ID: ${projectId}`,
// //     children: children,
// //   };
// //   data.push(projectNode);
// // }

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   const renderTree = (nodes) => {
// //     if (!nodes.children) return null;

// //     return (
// //       <TreeItem
// //         key={nodes.id}
// //         nodeId={nodes.id}
// //         label={nodes.name}
// //         className={
// //           nodes.id.startsWith('Project') ? classes.projectNode :
// //           nodes.id.endsWith('departmentId') ? classes.departmentIdNode :
// //           classes.titleNode
// //         }
// //         onClick={() => console.log(`Node ${nodes.id} was clicked.`)}
// //       >
// //         {nodes.children.map((node) => (
// //           <TreeItem
// //             key={node.id}
// //             nodeId={node.id}
// //             label={node.name}
// //             className={classes.titleNode}
// //             onClick={() => console.log(`Node ${node.id} was clicked.`)}
// //           />
// //         ))}
// //       </TreeItem>
// //     );
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {data.map((node) => renderTree(node))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;




// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles({
// //   root: {
// //     height: 240,
// //     flexGrow: 1,
// //     maxWidth: 400,
// //     overflowY: 'auto',
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   titleNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = {};

// // // Group projects by projectId and unique mdr
// // projects.forEach(project => {
// //   if (!data[project.projectId]) {
// //     data[project.projectId] = { projectTitle: project.title, mdr: project.mdr };
// //   }
// // });

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {Object.entries(data).map(([projectId, project]) => (
// //           <TreeItem
// //             key={projectId}
// //             nodeId={projectId}
// //             label={`Project ID: ${projectId}`}
// //             className={classes.projectNode}
// //             onClick={() => console.log(`Project ${projectId} was clicked.`)}
// //           >
// //             <TreeItem
// //               key={`${projectId}-mdr`}
// //               nodeId={`${projectId}-mdr`}
// //               label={`MDR: ${project.mdr}`}
// //               className={classes.titleNode}
// //               onClick={() => console.log(`MDR ${project.mdr} for project ${projectId} was clicked.`)}
// //             />
// //           </TreeItem>
// //         ))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;













// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles({
// //   root: {
// //     height: 240,
// //     flexGrow: 1,
// //     maxWidth: 400,
// //     overflowY: 'auto',
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   mdrNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = {};

// // // Group projects by projectId and unique mdr
// // projects.forEach(project => {
// //   if (!data[project.projectId]) {
// //     data[project.projectId] = {};
// //   }
// //   if (!data[project.projectId][project.mdr]) {
// //     data[project.projectId][project.mdr] = [];
// //   }
// //   data[project.projectId][project.mdr].push(project.departmentId);
// // });

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {Object.entries(data).map(([projectId, mdrs]) => (
// //           <TreeItem
// //             key={projectId}
// //             nodeId={projectId}
// //             label={`Project ID: ${projectId}`}
// //             className={classes.projectNode}
// //             onClick={() => console.log(`Project ${projectId} was clicked.`)}
// //           >
// //             {Object.entries(mdrs).map(([mdr, departments]) => (
// //               <TreeItem
// //                 key={`${projectId}-${mdr}`}
// //                 nodeId={`${projectId}-${mdr}`}
// //                 label={`MDR: ${mdr}`}
// //                 className={classes.mdrNode}
// //                 onClick={() => console.log(`MDR ${mdr} for Project ${projectId} was clicked.`)}
// //               >
// //                 {departments.map((department, index) => (
// //                   <TreeItem
// //                     key={`${projectId}-${mdr}-${index}`}
// //                     nodeId={`${projectId}-${mdr}-${index}`}
// //                     label={`Department ID: ${department}`}
// //                     className={classes.departmentIdNode}
// //                     onClick={() => console.log(`Department ${department} for MDR ${mdr} in Project ${projectId} was clicked.`)}
// //                   />
// //                 ))}
// //               </TreeItem>
// //             ))}
// //           </TreeItem>
// //         ))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;







// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles({
// //   root: {
// //     height: 240,
// //     flexGrow: 1,
// //     maxWidth: 400,
// //     overflowY: 'auto',
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   mdrNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = {};

// // // Group projects by projectId and unique mdr
// // projects.forEach(project => {
// //   if (!data[project.projectId]) {
// //     data[project.projectId] = {};
// //   }
// //   if (!data[project.projectId][project.mdr]) {
// //     data[project.projectId][project.mdr] = [];
// //   }
// //   const departments = project.departmentId.split(',');
// //   data[project.projectId][project.mdr].push(...departments);
// // });

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {Object.entries(data).map(([projectId, mdrs]) => (
// //           <TreeItem
// //             key={projectId}
// //             nodeId={projectId}
// //             label={`Project ID: ${projectId}`}
// //             className={classes.projectNode}
// //             onClick={() => console.log(`Project ${projectId} was clicked.`)}
// //           >
// //             {Object.entries(mdrs).map(([mdr, departments]) => (
// //               <TreeItem
// //                 key={`${projectId}-${mdr}`}
// //                 nodeId={`${projectId}-${mdr}`}
// //                 label={`MDR: ${mdr}`}
// //                 className={classes.mdrNode}
// //                 onClick={() => console.log(`MDR ${mdr} for Project ${projectId} was clicked.`)}
// //               >
// //                 {[...new Set(departments)].map((department, index) => (
// //                   <TreeItem
// //                     key={`${projectId}-${mdr}-${department}`}
// //                     nodeId={`${projectId}-${mdr}-${department}`}
// //                     label={`Department ID: ${department}`}
// //                     className={classes.departmentIdNode}
// //                     onClick={() => console.log(`Department ${department} for MDR ${mdr} in Project ${projectId} was clicked.`)}
// //                   />
// //                 ))}
// //               </TreeItem>
// //             ))}
// //           </TreeItem>
// //         ))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;






// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles({
// //   root: {
// //     height: 240,
// //     flexGrow: 1,
// //     maxWidth: 400,
// //     overflowY: 'auto',
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   mdrNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// //   titleNode: {
// //     color: 'black',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = {};

// // // Group projects by projectId, then by mdr, then by departmentId
// // projects.forEach(project => {
// //   if (!data[project.projectId]) {
// //     data[project.projectId] = {};
// //   }
// //   if (!data[project.projectId][project.mdr]) {
// //     data[project.projectId][project.mdr] = {};
// //   }
// //   const departmentIds = project.departmentId.split(',');
// //   departmentIds.forEach(departmentId => {
// //     if (!data[project.projectId][project.mdr][departmentId]) {
// //       data[project.projectId][project.mdr][departmentId] = [];
// //     }
// //     data[project.projectId][project.mdr][departmentId].push(project.title);
// //   });
// // });

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {Object.entries(data).map(([projectId, mdrs]) => (
// //           <TreeItem
// //             key={projectId}
// //             nodeId={projectId}
// //             label={`Project ID: ${projectId}`}
// //             className={classes.projectNode}
// //           >
// //             {Object.entries(mdrs).map(([mdr, departments]) => (
// //               <TreeItem
// //                 key={`${projectId}-${mdr}`}
// //                 nodeId={`${projectId}-${mdr}`}
// //                 label={`MDR: ${mdr}`}
// //                 className={classes.mdrNode}
// //               >
// //                 {Object.entries(departments).map(([departmentId, titles]) => (
// //                   <TreeItem
// //                     key={`${projectId}-${mdr}-${departmentId}`}
// //                     nodeId={`${projectId}-${mdr}-${departmentId}`}
// //                     label={`Department ID: ${departmentId}`}
// //                     className={classes.departmentIdNode}
// //                   >
// //                     {titles.map((title, index) => (
// //                       <TreeItem
// //                         key={`${projectId}-${mdr}-${departmentId}-${index}`}
// //                         nodeId={`${projectId}-${mdr}-${departmentId}-${index}`}
// //                         label={`Title: ${title}`}
// //                         className={classes.titleNode}
// //                       />
// //                     ))}
// //                   </TreeItem>
// //                 ))}
// //               </TreeItem>
// //             ))}
// //           </TreeItem>
// //         ))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;












// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles({
// //   root: {
// //     flexGrow: 1,
// //     maxWidth: 400,
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   mdrNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// //   titleNode: {
// //     color: 'black',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = {};

// // // Group projects by projectId, then by mdr, then by departmentId
// // projects.forEach(project => {
// //   if (!data[project.projectId]) {
// //     data[project.projectId] = {};
// //   }
// //   if (!data[project.projectId][project.mdr]) {
// //     data[project.projectId][project.mdr] = {};
// //   }
// //   const departmentIds = project.departmentId.split(',');
// //   departmentIds.forEach(departmentId => {
// //     if (!data[project.projectId][project.mdr][departmentId]) {
// //       data[project.projectId][project.mdr][departmentId] = [];
// //     }
// //     data[project.projectId][project.mdr][departmentId].push(project.title);
// //   });
// // });

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {Object.entries(data).map(([projectId, mdrs]) => (
// //           <TreeItem
// //             key={projectId}
// //             nodeId={projectId}
// //             label={`Project ID: ${projectId}`}
// //             className={classes.projectNode}
// //           >
// //             {Object.entries(mdrs).map(([mdr, departments]) => (
// //               <TreeItem
// //                 key={`${projectId}-${mdr}`}
// //                 nodeId={`${projectId}-${mdr}`}
// //                 label={`MDR: ${mdr}`}
// //                 className={classes.mdrNode}
// //               >
// //                 {Object.entries(departments).map(([departmentId, titles]) => (
// //                   <TreeItem
// //                     key={`${projectId}-${mdr}-${departmentId}`}
// //                     nodeId={`${projectId}-${mdr}-${departmentId}`}
// //                     label={`Department ID: ${departmentId}`}
// //                     className={classes.departmentIdNode}
// //                   >
// //                     {titles.map((title, index) => (
// //                       <TreeItem
// //                         key={`${projectId}-${mdr}-${departmentId}-${index}`}
// //                         nodeId={`${projectId}-${mdr}-${departmentId}-${index}`}
// //                         label={`Title: ${title}`}
// //                         className={classes.titleNode}
// //                       />
// //                     ))}
// //                   </TreeItem>
// //                 ))}
// //               </TreeItem>
// //             ))}
// //           </TreeItem>
// //         ))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;




// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';
// // import DescriptionIcon from '@mui/icons-material/Description';
// // import FolderIcon from '@mui/icons-material/Folder';
// // import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
// // import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

// // const useStyles = makeStyles({
// //   root: {
// //     flexGrow: 1,
// //     maxWidth: 400,
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   mdrNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// //   titleNode: {
// //     color: 'black',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = {};

// // projects.forEach(project => {
// //   if (!data[project.projectId]) {
// //     data[project.projectId] = {};
// //   }
// //   if (!data[project.projectId][project.mdr]) {
// //     data[project.projectId][project.mdr] = {};
// //   }
// //   const departmentIds = project.departmentId.split(',');
// //   departmentIds.forEach(departmentId => {
// //     if (!data[project.projectId][project.mdr][departmentId]) {
// //       data[project.projectId][project.mdr][departmentId] = [];
// //     }
// //     data[project.projectId][project.mdr][departmentId].push(project.title);
// //   });
// // });

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {Object.entries(data).map(([projectId, mdrs]) => (
// //           <TreeItem
// //             key={projectId}
// //             nodeId={projectId}
// //             label={`Project ID: ${projectId}`}
// //             className={classes.projectNode}
// //             icon={<FolderIcon />}
// //           >
// //             {Object.entries(mdrs).map(([mdr, departments]) => (
// //               <TreeItem
// //                 key={`${projectId}-${mdr}`}
// //                 nodeId={`${projectId}-${mdr}`}
// //                 label={`MDR: ${mdr}`}
// //                 className={classes.mdrNode}
// //                 icon={<FolderSpecialIcon />}
// //               >
// //                 {Object.entries(departments).map(([departmentId, titles]) => (
// //                   <TreeItem
// //                     key={`${projectId}-${mdr}-${departmentId}`}
// //                     nodeId={`${projectId}-${mdr}-${departmentId}`}
// //                     label={`Department ID: ${departmentId}`}
// //                     className={classes.departmentIdNode}
// //                     icon={<FolderIcon />}
// //                   >
// //                     {titles.map((title, index) => (
// //                       <TreeItem
// //                         key={`${projectId}-${mdr}-${departmentId}-${index}`}
// //                         nodeId={`${projectId}-${mdr}-${departmentId}-${index}`}
// //                         label={`Title: ${title}`}
// //                         className={classes.titleNode}
// //                         icon={<DescriptionIcon />}
// //                       />
// //                     ))}
// //                   </TreeItem>
// //                 ))}
// //               </TreeItem>
// //             ))}
// //           </TreeItem>
// //         ))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;







// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';
// // import DescriptionIcon from '@mui/icons-material/Description';
// // import FolderIcon from '@mui/icons-material/Folder';
// // import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
// // import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// // import Button from '@mui/material/Button';

// // const useStyles = makeStyles({
// //   root: {
// //     flexGrow: 1,
// //     maxWidth: 1000,
// //   },
// //   projectNode: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   mdrNode: {
// //     color: 'green',
// //     fontStyle: 'italic',
// //   },
// //   departmentIdNode: {
// //     color: 'red',
// //   },
// //   titleNode: {
// //     color: 'black',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = {};

// // projects.forEach(project => {
// //   if (!data[project.projectId]) {
// //     data[project.projectId] = {};
// //   }
// //   if (!data[project.projectId][project.mdr]) {
// //     data[project.projectId][project.mdr] = {};
// //   }
// //   const departmentIds = project.departmentId.split(',');
// //   departmentIds.forEach(departmentId => {
// //     if (!data[project.projectId][project.mdr][departmentId]) {
// //       data[project.projectId][project.mdr][departmentId] = [];
// //     }
// //     data[project.projectId][project.mdr][departmentId].push(project.title);
// //   });
// // });

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   const handleOpenDocument = (title) => {
// //     // Handle open document logic here
// //     console.log(`Opening document: ${title}`);
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {Object.entries(data).map(([projectId, mdrs]) => (
// //           <TreeItem
// //             key={projectId}
// //             nodeId={projectId}
// //             label={`Project ID: ${projectId}`}
// //             className={classes.projectNode}
// //             icon={<FolderIcon />}
// //           >
// //             {Object.entries(mdrs).map(([mdr, departments]) => (
// //               <TreeItem
// //                 key={`${projectId}-${mdr}`}
// //                 nodeId={`${projectId}-${mdr}`}
// //                 label={`MDR: ${mdr}`}
// //                 className={classes.mdrNode}
// //                 icon={<FolderSpecialIcon />}
// //               >
// //                 {Object.entries(departments).map(([departmentId, titles]) => (
// //                   <TreeItem
// //                     key={`${projectId}-${mdr}-${departmentId}`}
// //                     nodeId={`${projectId}-${mdr}-${departmentId}`}
// //                     label={`Department ID: ${departmentId}`}
// //                     className={classes.departmentIdNode}
// //                     icon={<FolderIcon />}
// //                   >
// //                     {titles.map((title, titleIndex) => (
// //                       <TreeItem
// //                         key={`${projectId}-${mdr}-${departmentId}-${titleIndex}`}
// //                         nodeId={`${projectId}-${mdr}-${departmentId}-${titleIndex}`}
// //                         label={`Title: ${title}`}
// //                         className={classes.titleNode}
// //                         icon={<DescriptionIcon />}
// //                       >
// //                         <div>
// //                           <span>Status: Ongoing</span>
// //                           <Button onClick={() => handleOpenDocument(title)} variant="outlined" color="primary">Open Document</Button>
// //                         </div>
// //                       </TreeItem>
// //                     ))}
// //                   </TreeItem>
// //                 ))}
// //               </TreeItem>
// //             ))}
// //           </TreeItem>
// //         ))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;






// // import React from 'react';
// // import TreeView from '@material-ui/lab/TreeView';
// // import TreeItem from '@material-ui/lab/TreeItem';
// // import { makeStyles } from '@material-ui/core/styles';
// // import DescriptionIcon from '@mui/icons-material/Description';
// // import FolderIcon from '@mui/icons-material/Folder';
// // import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
// // import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// // import Button from '@mui/material/Button';

// // const useStyles = makeStyles({
// //   root: {
// //     flexGrow: 1,
// //     maxWidth: 400,
// //   },
// //   projectNode: {
// //     backgroundColor: '#f0f0f0',
// //     fontSize: '18px',
// //     padding: '8px',
// //     borderRadius: '4px',
// //     marginBottom: '8px',
// //     transition: 'background-color 0.3s ease',
// //     '&:hover': {
// //       backgroundColor: '#e0e0e0',
// //     },
// //   },
// //   mdrNode: {
// //     backgroundColor: '#e8f5e9',
// //     fontSize: '16px',
// //     padding: '6px',
// //     borderRadius: '4px',
// //     marginLeft: '16px',
// //     marginBottom: '6px',
// //     transition: 'background-color 0.3s ease',
// //     '&:hover': {
// //       backgroundColor: '#c8e6c9',
// //     },
// //   },
// //   departmentIdNode: {
// //     backgroundColor: '#e3f2fd',
// //     fontSize: '14px',
// //     padding: '4px',
// //     borderRadius: '4px',
// //     marginLeft: '16px',
// //     marginBottom: '4px',
// //     transition: 'background-color 0.3s ease',
// //     '&:hover': {
// //       backgroundColor: '#bbdefb',
// //     },
// //   },
// //   titleNode: {
// //     backgroundColor: '#fff9c4',
// //     fontSize: '12px',
// //     padding: '2px',
// //     borderRadius: '4px',
// //     marginLeft: '16px',
// //     transition: 'background-color 0.3s ease',
// //     '&:hover': {
// //       backgroundColor: '#ffee58',
// //     },
// //   },
// //   icon: {
// //     marginRight: '8px',
// //   },
// // });

// // const projects = [
// //   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// //   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
// //   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
// //   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
// //   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
// //   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
// // ];

// // const data = {};

// // projects.forEach(project => {
// //   if (!data[project.projectId]) {
// //     data[project.projectId] = {};
// //   }
// //   if (!data[project.projectId][project.mdr]) {
// //     data[project.projectId][project.mdr] = {};
// //   }
// //   const departmentIds = project.departmentId.split(',');
// //   departmentIds.forEach(departmentId => {
// //     if (!data[project.projectId][project.mdr][departmentId]) {
// //       data[project.projectId][project.mdr][departmentId] = [];
// //     }
// //     data[project.projectId][project.mdr][departmentId].push(project.title);
// //   });
// // });

// // const MyTreeView = () => {
// //   const classes = useStyles();

// //   const handleOpenDocument = (title) => {
// //     // Handle open document logic here
// //     console.log(`Opening document: ${title}`);
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <TreeView>
// //         {Object.entries(data).map(([projectId, mdrs]) => (
// //           <TreeItem
// //             key={projectId}
// //             nodeId={projectId}
// //             label={`Project ID: ${projectId}`}
// //             className={classes.projectNode}
// //             icon={<FolderIcon className={classes.icon} />}
// //           >
// //             {Object.entries(mdrs).map(([mdr, departments]) => (
// //               <TreeItem
// //                 key={`${projectId}-${mdr}`}
// //                 nodeId={`${projectId}-${mdr}`}
// //                 label={`MDR: ${mdr}`}
// //                 className={classes.mdrNode}
// //                 icon={<FolderSpecialIcon className={classes.icon} />}
// //               >
// //                 {Object.entries(departments).map(([departmentId, titles]) => (
// //                   <TreeItem
// //                     key={`${projectId}-${mdr}-${departmentId}`}
// //                     nodeId={`${projectId}-${mdr}-${departmentId}`}
// //                     label={`Department ID: ${departmentId}`}
// //                     className={classes.departmentIdNode}
// //                     icon={<FolderIcon className={classes.icon} />}
// //                   >
// //                     {titles.map((title, titleIndex) => (
// //                       <TreeItem
// //                         key={`${projectId}-${mdr}-${departmentId}-${titleIndex}`}
// //                         nodeId={`${projectId}-${mdr}-${departmentId}-${titleIndex}`}
// //                         label={`Title: ${title}`}
// //                         className={classes.titleNode}
// //                         icon={<DescriptionIcon className={classes.icon} />}
// //                       >
// //                         <div>
// //                           <span>Status: Ongoing</span>
// //                           <Button onClick={() => handleOpenDocument(title)} variant="outlined" color="primary">Open Document</Button>
// //                         </div>
// //                       </TreeItem>
// //                     ))}
// //                   </TreeItem>
// //                 ))}
// //               </TreeItem>
// //             ))}
// //           </TreeItem>
// //         ))}
// //       </TreeView>
// //     </div>
// //   );
// // };

// // export default MyTreeView;




import React, { useEffect, useState } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import FolderOpenIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Button from '@mui/material/Button';
import axios from 'axios';
const useStyles = makeStyles({
  root: {
    flexGrow: 5,
    maxWidth: 1000,
  },
  projectNode: {
    backgroundColor: '#f0f0f0',
    fontSize: '24px',
    padding: '12px',
    borderRadius: '4px',
    marginBottom: '12px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  mdrNode: {
    backgroundColor: '#f0f0f0',
    fontSize: '18px',
    padding: '12px',
    borderRadius: '4px',
    marginLeft: '16px',
    marginBottom: '12px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  departmentIdNode: {
    backgroundColor: '#f0f0f0',
    fontSize: '16px',
    padding: '12px',
    borderRadius: '4px',
    marginLeft: '16px',
    marginBottom: '12px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  titleNode: {
    backgroundColor: '#f0f0f0',
    fontSize: '12px',
    padding: '8px',
    borderRadius: '4px',
    marginLeft: '16px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  icon: {
    marginRight: '8px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
    padding: '12px',
  },
  status: {
    marginRight: '12px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
});


const projects = [
  { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1', mdr: "1" },
  { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2', mdr: "2" },
  { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
  { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3', mdr: "3" },
  { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
  { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
  { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
  { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4', mdr: "4" },
  { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5', mdr: "5" },
  ];

const data = {};

projects.forEach(project => {
  if (!data[project.projectId]) {
    data[project.projectId] = {};
  }
  if (!data[project.projectId][project.mdr]) {
    data[project.projectId][project.mdr] = {};
  }
  const departmentIds = project.departmentId.split(',');
  departmentIds.forEach(departmentId => {
    if (!data[project.projectId][project.mdr][departmentId]) {
      data[project.projectId][project.mdr][departmentId] = [];
    }
    data[project.projectId][project.mdr][departmentId].push(project.title);
  });
});

const MyTreeView = () => {

  const [information,setInformation]=useState()
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));

  console.log("user",user)
  const fetchInformation = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/projects/information?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
        
      );  
      console.log('Information response data',response.data);
      setInformation(response.data); // Assuming the response.data is an array of projects
    } catch (error) {
      console.error("Error fetching projects:", error?.message);
    }
  };
  useEffect(()=>{
    fetchInformation()
  },[])
  const classes = useStyles();

  const handleOpenDocument = (title) => {
    // Handle open document logic here
    console.log(`Opening document: ${title}`);
  };

  return (
    <div className={classes.root}>
      <TreeView
        defaultCollapseIcon={<FolderIcon />}
        defaultExpandIcon={<FolderOpenIcon />}
        defaultEndIcon={<DescriptionIcon />}
      >
        {Object.entries(data).map(([projectId, mdrs]) => (
          <TreeItem
            key={projectId}
            nodeId={projectId}
            label={`Project ID: ${projectId}`}
            className={classes.projectNode}
            icon={<FolderIcon className={classes.icon} />}
            sx={{ display: 'inline-flex' }} // Display child nodes inline
          >
            {Object.entries(mdrs).map(([mdr, departments]) => (
              <TreeItem
                key={`${projectId}-${mdr}`}
                nodeId={`${projectId}-${mdr}`}
                label={`MDR: ${mdr}`}
                className={classes.mdrNode}
                icon={<FolderSpecialIcon className={classes.icon} />}
                sx={{ display: 'inline-flex' }} // Display child nodes inline
              >
                {Object.entries(departments).map(([departmentId, titles]) => (
                  <TreeItem
                    key={`${projectId}-${mdr}-${departmentId}`}
                    nodeId={`${projectId}-${mdr}-${departmentId}`}
                    label={`Department ID: ${departmentId}`}
                    className={classes.departmentIdNode}
                    icon={<FolderIcon className={classes.icon} />}
                    sx={{ display: 'inline-flex' }} // Display child nodes inline
                  >
                    {titles.map((title, titleIndex) => (
                      <TreeItem
                        key={`${projectId}-${mdr}-${departmentId}-${titleIndex}`}
                        nodeId={`${projectId}-${mdr}-${departmentId}-${titleIndex}`}
                        label={`Title: ${title}`}
                        className={classes.titleNode}
                        icon={<DescriptionIcon className={classes.icon} />}
                        sx={{ display: 'inline-flex' }} 
                      >
                        <div className={classes.buttonContainer}>
                          <span className={classes.status}>Status: Ongoing</span>
                          <Button onClick={() => handleOpenDocument(title)} variant="outlined" color="primary">Open Document</Button>
                        </div>
                      </TreeItem>
                    ))}
                  </TreeItem>
                ))}
              </TreeItem>
            ))}
          </TreeItem>
        ))}
      </TreeView>
    </div>
  );
};

export default MyTreeView;
