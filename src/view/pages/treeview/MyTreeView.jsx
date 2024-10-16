

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
import { message } from 'antd';

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
    padding: '6px',
  },
  status: {
    marginRight: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
});
const MyTreeView = () => {
  const [information,setInformation]=useState()
  const [user] = useState(JSON.parse(localStorage?.getItem("user")));
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
    if (!newData[info.title]) {
      newData[info.title] = {};
      console.log(newData, 'newData1');
    }
  
    info.mdrs.forEach((mdr) => {
      if (!newData[info.title][mdr.title]) {
        newData[info.title][mdr.title] = {};
      }
  
      console.log(newData, 'newData2');
  
      // Split department names and ensure documents exist
      const departmentNames = mdr.departmentName?.split(",") ?? [];
      const documents = mdr.documents ?? [];
      // Split department suffixes
      const departmentSuffixes = info.departmentSuffix?.split(",") ?? [];
  
      // Iterate over department names and suffixes
      departmentNames.forEach((departmentName, index) => {
        // Trim department name and suffix
        const trimmedDepartmentName = departmentName.trim();
        const trimmedSuffix = departmentSuffixes[index]?.trim();
  
        console.log(trimmedDepartmentName, 'trimmedDepartmentName', trimmedSuffix, 'trimmedSuffix');
        console.log(newData, 'newData');
  
        // Initialize department array if not present
        if (!newData[info.title][mdr.title][trimmedDepartmentName]) {
          newData[info.title][mdr.title][trimmedDepartmentName] = [];
        }
  
        // Iterate over documents
        documents.forEach((document) => {
          // Trim document title and check if it includes the trimmed suffix
          const trimmedTitle = document.title.trim();
          if (trimmedSuffix && trimmedTitle.includes(trimmedSuffix)) {
            // Push document data to department array
            newData[info.title][mdr.title][trimmedDepartmentName].push({
              title: document.title,
              docTitle: trimmedTitle,
              status: document.status,
              version: document.version
            });
          }
        });
      });
    });
  });
  
  console.log(newData, 'finalNewData');
  
  
  console.log(newData,"newData");
  setData(newData);
};

    processData();
  }, [information]);
  const classes = useStyles();
  const BACKEND_URL = "http://127.0.0.1:8083"; // Update with your backend URL

  const handleOpenDocument = async (document) => {
    // Handle open document logic here
    console.log('documentsss',document);
    alert(`Opening document: ${document.docTitle}`);
    const responseData=await fetchAppRev(document.docTitle);
    console.log('helllooo',responseData);
     // Replace 'John' with the actual doc's name
     const docName = document.docTitle;
     const url= `${BACKEND_URL}/uploads/${docName}-${document.version}.pdf` 
     console.log(user.user.roleId,user.user.firstName,user);
     let allowed='false';
 if(responseData){
 allowed='true';
 }
 try {
  const response = await axios.get(
    `http://127.0.0.1:8083/api/documents/checkDocuments?companyId=${user?.user?.companyId}&docName=${document.docTitle}&masterDocumentCode=${"1472-1"}&version=${document.version}&roleId=${user?.user.roleId}`,
    {
      headers: {
        Authorization: user?.accessToken,
        // Add other headers if needed
      },
    }
  );
  if (response.data.status) {
          console.log("response.data.status");
          
          // Document exists, proceed with redirect
          window.location.href = `http://127.0.0.1:3001/react-pdf-highlighter/?docName=${record.docName}.pdf&url=${url}&allowed=${allowed}&user=${user.user.roleId} ${user.user.firstName}`;
        } else {
          // Document does not exist, show an alert
          message.warning('Document not uploaded yet.');
        }
      } catch (error) {
        console.error('Error checking document:', error);
        alert('An error occurred while checking the document.');
      }
      };


//   const handleOpen = async (record) => {
//     const responseData=await fetchAppRev(record.title);
//     console.log('helllooo',responseData);
//      // Replace 'John' with the actual doc's name
//      const docName = record.title;
//      const url= `${BACKEND_URL}/uploads/${docName}-${record.version}.pdf` 
//      console.log(user.user.roleId,user.user.firstName,user);
//      let allowed='false';
//  if(responseData){
//  allowed='true';
//  }
 
 
//          };
  const fetchAppRev = async (title) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/documents/establishment?companyId=${user?.user?.companyId}&userId=${user.user.id}&docName=${title}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
        


      console.log(response.data,"received");
      return response.data;
    
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
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
            label={`Project Title: ${projectId}`}
            className={classes.projectNode}
            icon={<FolderIcon className={classes.icon} />}
            sx={{ display: "inline-flex" }} // Display child nodes inline
          >
            {Object.entries(mdrs).map(([mdr, departments]) => (
              <TreeItem
                key={`${projectId}-${mdr}`}
                nodeId={`${projectId}-${mdr}`}
                label={`MDR Title: ${mdr}`}
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
                            onClick={() => handleOpenDocument(document)}
                            variant="outlined"
                            color="primary"
                            size='10px'
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