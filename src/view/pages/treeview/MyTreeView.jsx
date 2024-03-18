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
    backgroundColor: '#ffffff',
    fontSize: '24px',
    padding: '12px',
    borderRadius: '4px',
    marginBottom: '12px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
  mdrNode: {
    backgroundColor: '#ffffff',
    fontSize: '18px',
    padding: '12px',
    borderRadius: '4px',
    marginLeft: '16px',
    marginBottom: '12px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
  departmentIdNode: {
    backgroundColor: '#ffffff',
    fontSize: '16px',
    padding: '12px',
    borderRadius: '4px',
    marginLeft: '16px',
    marginBottom: '12px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
  titleNode: {
    backgroundColor: '#ffffff',
    fontSize: '12px',
    padding: '8px',
    borderRadius: '4px',
    marginLeft: '16px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ffffff',
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
const MyTreeView = () => {
  const [information,setInformation]=useState()
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState({});

  console.log("user",user)
  useEffect(() => {
    let isMounted = true;

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

        if (isMounted) {
          setInformation(response.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error?.message);
      }
    };

    fetchInformation();

    return () => {
      isMounted = false;
    };
  }, [user?.user?.companyId]);

  useEffect(() => {
    const processData = () => {
      if (!information || information.length === 0) {
        // Handle the case where information is undefined or an empty array
        return;
      }

      const newData = {};

      information.forEach(info => {
        if (!newData[info.projectCode]) {
          newData[info.projectCode] = {};
        }
        if (!newData[info.projectCode][info.mdrCode]) {
          newData[info.projectCode][info.mdrCode] = {};
        }
        const departmentIds = info.departmentId.split(',');
        departmentIds.forEach(departmentId => {
          if (!newData[info.projectCode][info.mdrCode][departmentId]) {
            newData[info.projectCode][info.mdrCode][departmentId] = [];
          }
          newData[info.projectCode][info.mdrCode][departmentId].push(info.title);
        });
      });

      setData(newData);
    };

    processData();
  }, [information]);
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
