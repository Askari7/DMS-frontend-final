// import React from 'react';
// import TreeView from '@material-ui/lab/TreeView';
// import TreeItem from '@material-ui/lab/TreeItem';

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
// //     acc[project.projectId] = [];
// //   }
// //   acc[project.projectId].push(project.title);
// //   return acc;
// // }, {});

// // // Create parent nodes with children
// // for (const projectId in groupedProjects) {
// //   data.push({
// //     id: projectId,
// //     name: `Project ID: ${projectId}`,
// //     children: groupedProjects[projectId].map(title => ({ id: title, name: title })),
// //   });
// // }

// const projects = [
//   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1' },
//   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2' },
//   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3' },
//   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3' },
//   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4' },
//   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4' },
//   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4' },
//   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4' },
//   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5' },
//   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5' },
//   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1' },
// ];

// const data = [];

// // Group projects by projectId
// const groupedProjects = projects.reduce((acc, project) => {
//   if (!acc[project.projectId]) {
//     acc[project.projectId] = { children: [] };
//   }
//   const childNode = {
//     id: project.title,
//     name: project.title,
//     children: [{ id: `${project.title}-departmentId`, name: `Department ID: ${project.departmentId}` }],
//   };
//   acc[project.projectId].children.push(childNode);
//   return acc;
// }, {});

// // Create parent nodes with children
// for (const projectId in groupedProjects) {
//   const { children } = groupedProjects[projectId];
//   const projectNode = {
//     id: projectId,
//     name: `Project ID: ${projectId}`,
//     children: children,
//   };
//   data.push(projectNode);
// }


// // Function to render the tree nodes
// const renderTree = (nodes) => (
//   <TreeItem
//     key={nodes.id}
//     nodeId={nodes.id}
//     label={nodes.name}
//     onClick={() => console.log(`Node ${nodes.id} was clicked.`)}
//   >
//     {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
//   </TreeItem>
// );

// // Function component for the TreeView
// const MyTreeView = () => {
//   return <TreeView>{data.map((node) => renderTree(node))}</TreeView>;
// };

// export default MyTreeView;





// import React from 'react';
// import TreeView from '@material-ui/lab/TreeView';
// import TreeItem from '@material-ui/lab/TreeItem';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     height: 240,
//     flexGrow: 1,
//     maxWidth: 400,
//     overflowY: 'auto',
//   },
//   projectNode: {
//     color: 'blue',
//     fontWeight: 'bold',
//   },
//   titleNode: {
//     color: 'green',
//     fontStyle: 'italic',
//   },
//   departmentIdNode: {
//     color: 'red',
//   },
// });

// const projects = [
//   { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1' },
//   { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2' },
//   { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3' },
//   { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3' },
//   { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4' },
//   { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4' },
//   { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4' },
//   { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4' },
//   { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5' },
//   { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5' },
//   { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1' },
// ];

// const data = [];

// // Group projects by projectId
// const groupedProjects = projects.reduce((acc, project) => {
//   if (!acc[project.projectId]) {
//     acc[project.projectId] = { children: [] };
//   }
//   const childNode = {
//     id: project.title,
//     name: project.title,
//     children: [{ id: `${project.title}-departmentId`, name: `Department ID: ${project.departmentId}` }],
//   };
//   acc[project.projectId].children.push(childNode);
//   return acc;
// }, {});

// // Create parent nodes with children
// for (const projectId in groupedProjects) {
//   const { children } = groupedProjects[projectId];
//   const projectNode = {
//     id: projectId,
//     name: `Project ID: ${projectId}`,
//     children: children,
//   };
//   data.push(projectNode);
// }

// const MyTreeView = () => {
//   const classes = useStyles();

//   const renderTree = (nodes) => {
//     if (!nodes.children) return null;

//     return (
//       <TreeItem
//         key={nodes.id}
//         nodeId={nodes.id}
//         label={nodes.name}
//         className={
//           nodes.id.startsWith('Project') ? classes.projectNode :
//           nodes.id.endsWith('departmentId') ? classes.departmentIdNode :
//           classes.titleNode
//         }
//         onClick={() => console.log(`Node ${nodes.id} was clicked.`)}
//       >
//         {nodes.children.map((node) => (
//           <TreeItem
//             key={node.id}
//             nodeId={node.id}
//             label={node.name}
//             className={classes.titleNode}
//             onClick={() => console.log(`Node ${node.id} was clicked.`)}
//           />
//         ))}
//       </TreeItem>
//     );
//   };

//   return (
//     <div className={classes.root}>
//       <TreeView>
//         {data.map((node) => renderTree(node))}
//       </TreeView>
//     </div>
//   );
// };

// export default MyTreeView;




import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
  projectNode: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  titleNode: {
    color: theme.palette.secondary.main,
    fontStyle: 'italic',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  departmentIdNode: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.light,
    },
  },
}));

const projects = [
  { id: 1, title: '2014-01-PM-REP-001', companyId: 1, departmentId: '1', projectId: '1' },
  { id: 2, title: '2014-01-PRO-REP-001', companyId: 1, departmentId: '2', projectId: '2' },
  { id: 3, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '3', projectId: '3' },
  { id: 4, title: '2014-01-PM-SP-002', companyId: 1, departmentId: '3', projectId: '3' },
  { id: 5, title: '2014-01-PRO-REP-004', companyId: 1, departmentId: '4', projectId: '4' },
  { id: 6, title: '2014-01-PRO-SOW-002', companyId: 1, departmentId: '4', projectId: '4' },
  { id: 7, title: '2014-01-PRO-SOW-001', companyId: 1, departmentId: '4', projectId: '4' },
  { id: 8, title: '2014-01-PRO-SP-003', companyId: 1, departmentId: '4', projectId: '4' },
  { id: 9, title: '2014-01-PIP-SOW-001', companyId: 1, departmentId: '5,6', projectId: '5' },
  { id: 10, title: '2014-01-PIP-SOW-002', companyId: 1, departmentId: '5,6', projectId: '5' },
  { id: 11, title: '2014-01-PM-SOW-001', companyId: 1, departmentId: '1', projectId: '1' },
];

const data = [];

// Group projects by projectId
const groupedProjects = projects.reduce((acc, project) => {
  if (!acc[project.projectId]) {
    acc[project.projectId] = { children: [] };
  }
  const childNode = {
    id: project.title,
    name: project.title,
    children: [{ id: `${project.title}-departmentId`, name: `Department ID: ${project.departmentId}` }],
  };
  acc[project.projectId].children.push(childNode);
  return acc;
}, {});

// Create parent nodes with children
for (const projectId in groupedProjects) {
  const { children } = groupedProjects[projectId];
  const projectNode = {
    id: projectId,
    name: `Project ID: ${projectId}`,
    children: children,
  };
  data.push(projectNode);
}

const MyTreeView = () => {
  const classes = useStyles();

  const renderTree = (nodes) => {
    if (!nodes.children) return null;

    return (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={nodes.name}
        className={
          nodes.id.startsWith('Project') ? classes.projectNode :
          nodes.id.endsWith('departmentId') ? classes.departmentIdNode :
          classes.titleNode
        }
        onClick={() => console.log(`Node ${nodes.id} was clicked.`)}
      >
        {nodes.children.map((node) => (
          <TreeItem
            key={node.id}
            nodeId={node.id}
            label={node.name}
            className={classes.titleNode}
            onClick={() => console.log(`Node ${node.id} was clicked.`)}
          />
        ))}
      </TreeItem>
    );
  };

  return (
    <div className={classes.root}>
      <TreeView>
        {data.map((node) => renderTree(node))}
      </TreeView>
    </div>
  );
};

export default MyTreeView;