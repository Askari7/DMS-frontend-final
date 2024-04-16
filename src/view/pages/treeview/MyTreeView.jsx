import React, { useEffect, useState } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import FolderOpenIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    flexGrow: 7,
    maxWidth: 1300,
  },
  projectNode: {
    backgroundColor: '#ffffff',
    fontSize: '30px',
    padding: '15px',
    borderRadius: '9px',
    marginBottom: '15px',
    transition: 'background-color 0.2s ease',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
  mdrNode: {
    backgroundColor: '#ffffff',
    fontSize: '24px',
    padding: '15px',
    borderRadius: '9px',
    marginLeft: '16px',
    marginBottom: '12px',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
  departmentIdNode: {
    backgroundColor: '#ffffff',
    fontSize: '20px',
    padding: '15px',
    borderRadius: '9px',
    marginLeft: '16px',
    marginBottom: '12px',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
  titleNode: {
    backgroundColor: '#ffffff',
    fontSize: '20px',
    padding: '8px',
    borderRadius: '4px',
    marginLeft: '16px',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
  icon: {
    marginRight: '8px',
    fontWeight: 'bold',

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
    // Modify the processData function
// Modify the processData function
const processData = () => {
  if (!information || information.length === 0) {
    // Handle the case where information is undefined or an empty array
    return;
  }

  const newData = {};
  console.log(information, "information");
  information.forEach((info) => {
    console.log(info,"info")
    if (!newData[info.projectCode]) {
      newData[info.projectCode] = {};
    }
    console.log(newData,'newData 1');
    if (info.mdrCode && !newData[info.projectCode][info.mdrCode]) {
      newData[info.projectCode][info.mdrCode] = {};
    }
    console.log(newData,'newData 2');

    const departmentNames = info.departmentName?.split(",") ?? [];
    const documents = info.documents ?? [];
    departmentNames.forEach((departmentName) => {
      const departmentSuffix = info.departmentSuffix;
      if (!newData[info.projectCode][info.mdrCode][departmentName]) {
        newData[info.projectCode][info.mdrCode][departmentName] = [];
      }
      documents.forEach((document) => {
        if (document.title.includes(departmentSuffix)) {
          newData[info.projectCode][info.mdrCode][departmentName].push({
            title:document.docTitle,
            docTitle: document.title,
            status: document.status
          });
        }
      });
    });
  });
  setData(newData);
};

    processData();
  }, [information]);
  const classes = useStyles();

  const handleOpenDocument = (title) => {
    // Handle open document logic here
    alert(`Opening document: ${title}`);
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
            sx={{ display: "inline-flex" }} // Display child nodes inline
          >
            {Object.entries(mdrs).map(([mdr, departments]) => (
              <TreeItem
                key={`${projectId}-${mdr}`}
                nodeId={`${projectId}-${mdr}`}
                label={`MDR: ${mdr}`}
                className={classes.mdrNode}
                icon={<FolderSpecialIcon className={classes.icon} />}
                sx={{ display: "inline-flex" }} // Display child nodes inline
              >
                {Object.entries(departments).map(([department, documents]) => (
                  <TreeItem
                    key={`${projectId}-${mdr}-${department}`}
                    nodeId={`${projectId}-${mdr}-${department}`}
                    label={`Department Name: ${department}`}
                    className={classes.departmentIdNode}
                    icon={<FolderIcon className={classes.icon} />}
                    sx={{ display: "inline-flex" }} // Display child nodes inline
                  >
                    {documents.map((document, index) => (
                      <TreeItem
                        key={`${projectId}-${mdr}-${department}-${index}`}
                        nodeId={`${projectId}-${mdr}-${department}-${index}`}
                        label={`Title: ${document.docTitle} (${document.title})`}
                        className={classes.titleNode}
                        icon={<DescriptionIcon className={classes.icon} />}
                        sx={{ display: "inline-flex" }}
                      >
                        <div className={classes.buttonContainer}>
                          <span className={classes.status}>Status: {document.status}</span>
                          <Button
                            onClick={() => handleOpenDocument(document.docTitle)}
                            variant="outlined"
                            color="primary"
                          >
                            Open Document
                          </Button>
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