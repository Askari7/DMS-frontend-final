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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/documents?companyId=${user?.user?.companyId}&assignedBy=${user.user.roleId}&userId=${user.user.roleId}&department=${user.user.departmentId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response.data,"received");

    }
      catch(error){
    console.log(error,"error fetching documents");
      }
    }
  useEffect(()=>{
    fetchData()
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
}

export default MyTreeView;
