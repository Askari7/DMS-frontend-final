import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col,Image, message } from "antd";
import { WalletMinus, Login, Add, Logout, Task, UserMinus, TaskSquare, User } from "iconsax-react";
import FeatureCard from "../../main/dashboard/analytics/featureCard";
import ListCard from "../../main/dashboard/analytics/listCard";
import AreaChart from "../../main/widgets/charts/areaChart";
import ScatterChart from "../../main/widgets/charts/scatterChart";
import ProtectedAppPage from "../Protected";
import DonutChart from "../../main/widgets/charts/donutChart";
import scurve from "../../.././assets/images/components/s_curve.png";
import axios from 'axios'
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { RiHomeOfficeLine } from "react-icons/ri";
import { TaskAlt } from "@mui/icons-material";
export default function Analytics() {
  // Redux
  const customise = useSelector((state) => state.customise);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [projects,setProjects] = useState([]);
  const [departments,setDepartments] = useState([]);
  const [userStrength,setUserStrength] = useState()
  const [assessment,setAssessment] = useState([])
  const [documents,setDocuments] = useState([])
  const [mdr,setMdr] = useState([])
  const [departmentProjects,setDepartmentProjects] = useState()
  const [assignedMDRS,setAssignedMDRS] = useState()
  const [users,setUsers] = useState([])
  const [systemLog, setSystemLog] = useState([]);
  const [departmentCounts,setDepartmentCounts] = useState()
  const history = useHistory();

  const handleUser = () => {
    message.success("All Employees Information")

    // Navigate to the user page
    history.push('./users'); // Replace '/user' with the actual URL of your user page
  };

  const handleLeadTeam = () => {
    // Navigate to the user page and pass the users array as state data
    history.push({
      pathname: './users', // Replace './users' with the actual URL of your user page
      state: { users: users }, // Pass the users array as state data
    });
  };

  const handleDepartment = () => {
    message.success("All Departments Information")
    // Navigate to the user page
    history.push('./departments'); // Replace '/user' with the actual URL of your user page
  };
  const handleProject = () => {
    // Navigate to the user page
    message.success("All Projects Information")

    history.push('./projects'); // Replace '/user' with the actual URL of your user page
  };
  const handleClient = () => {
    // Navigate to the user page
    message.success("All Clinets Information")

    history.push('./clients'); // Replace '/user' with the actual URL of your user page
  };
  const handleMDR = () => {
    message.success("All MDRs Information")

    // Navigate to the user page
    history.push('./mdr'); // Replace '/user' with the actual URL of your user page
  };
const fetchDepartments = async () => {
  try {
    const response = await axios.get(
      `http://54.81.250.98:8083/api/departments/count?departmentId=${user?.user.departmentId}&userId=${user?.user.id}`,
      {
        headers: {
          Authorization: user?.accessToken,
        },
      }
    );
    console.log(response.data,'data aya ');
    setDepartments(response.data.noOfUsers)
    setDepartmentProjects(response.data.departmentProjects)
    setAssignedMDRS(response.data.mdrAssigned)
  } catch (error) {
    console.error("Error fetching departments:", error?.message);
  }
};

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/dashboard/stats?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      const logs = [];
      for (const item of response?.data?.logs) {
        logs.push({
          icon: <Login />,
          title: item?.title,
          date: item?.createdAt,
        });
      }
      response.data.logs = logs;
      console.log(response.data);
      setData(response.data); 
      const companyName = data.companyName; // Accessing the value associated with the key 'companyName'
      const array = companyName.value; // Accessing the array stored within the 'value' property of the 'companyName' object
      
      // Now, you can access the 'name' property of the dictionaries within the array
      const names = array.map(item => item.name);      
      console.log("data",data);// Assuming the response.data is an array of departments
      console.log("data",response?.data);
    } catch (error) {
      console.error("Error fetching stats", error?.message);
    }
  };

  const fetchUsers = async()=>{
    console.log(user,user.user.departmentId,"console");
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/users?companyId=${user?.user?.companyId}&departmentId=${user?.user?.departmentId}`
        ,{
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(user.user.departmentId,"userId");

      console.log("users",response.data);
      setUsers(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/projects?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      
      console.log('Project response data',response.data);
      setProjects(response.data); 
      const departmentCount = {};
    response.data.forEach(project => {
    const departmentId = project.departmentId;
    departmentCount[departmentId] = (departmentCount[departmentId] || 0) + 1;
});

console.log("Department count:", departmentCount);

// setDepartmentCounts(departmentCount)

const userDepartmentId = user.user.departmentId; // Assuming user.user.departmentId is the departmentId of the user

// Fetch count for user's departmentId
const userDepartmentCount = departmentCount[userDepartmentId] || 0;

console.log("Count for user's department:", userDepartmentCount);
setDepartmentCounts(userDepartmentCount)


    } catch (error) {
      console.error("Error fetching projects:", error?.message);
    }
  };

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/documents?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      
      console.log('documents response data',response.data);
      setDocuments(response.data); 
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };
  const fetchMdr = async () => {
    try {
      const response = await axios.get(
        `http://54.81.250.98:8083/api/documents/mdr?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      
      console.log('mdr response data',response.data);
      setMdr(response.data); 
    } catch (error) {
      console.error("Error fetching mdr:", error?.message);
    }
  };
  
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchData();
    // fetchSystemLogs();
    fetchUsers()
    fetchProjects();
    fetchDocuments();
    fetchMdr();
    fetchDepartments()
    // fetchClients();
  }, []);
  return (
    <>
    
      {/* <Row gutter={[32, 32]} className="hp-mb-32">
        <Col span={24}>
          <DonutChart projects={projects} projectCount={data.projectCount} />
        </Col>
      {/* </Row> */} 
      {user?.user?.roleId === 1 && ( // Check if roleId is 1
        <Row gutter={[32, 32]} className="hp-mb-32">
          <Col span={24}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <Row gutter={[32, 32]}>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <h1 className="hp-mb-0">{data.companyName} CEO {user.user.firstName} {user.user.lastName}</h1>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <h1 className="hp-mb-0">Analytics Of Company</h1>
                </Col>
                  <Col span={6} onClick={handleDepartment}>
                    <FeatureCard
                    
                      icon={<RiHomeOfficeLine  size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Departments"
                      count={data?.departmentCount || "0"}
                    />
                  </Col>
                  <Col span={6} onClick={handleProject}>
                    <FeatureCard
                      icon={<Task size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Projects"
                      count={data?.projectCount || "0"}
                    />
                  </Col>
                  <Col span={6} onClick={handleClient}>
                    <FeatureCard
                      icon={<UserMinus size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Clients"
                      count={data?.clientCount || "0"}
                    />
                  </Col>
                  <Col span={6} onClick={handleMDR}>
                    <FeatureCard
                      icon={<TaskSquare size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="MDR"
                      count={data?.mdrCount || "0"}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24} onClick={handleUser} // Add onClick event handler
>
              <FeatureCard
                icon={<User size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                title="Employees"
                count={data?.employeeCount || "0"}
                style={{ cursor: 'pointer' }} // Add cursor style to indicate it's clickable
      />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[32, 32]}>
              {data?.roleCounts && (
                <>
                  <Col span={6}>
                    <FeatureCard
                      icon={<User size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Lead"
                      count={data.roleCounts['2'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<User size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Senior Engineer"
                      count={data.roleCounts['3'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<User size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Junior Engineer"
                      count={data.roleCounts['4'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<User size="32" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Designer"
                      count={data.roleCounts['5'] || "0"}
                    />
                  </Col>
                </>
              )}
            </Row>
          </Col>
          <Col span={24}>
            {user?.user?.roleId === 1 && (
              <ListCard title="System Logs" list={data?.logs} />
            )}
          </Col>
        </Row>


      )
      }      

      {user?.user?.roleId === 2 && ( // Check if roleId is 1
        <Row gutter={[48, 48]} className="hp-mb-32">
          <Col span={48}>
            <Row gutter={[48, 48]}>
              <Col span={24}>
                <Row gutter={[48, 48]}>
                <Col span={24}>
                  <h1 className="hp-mb-0">{user.user.department} Lead {user.user.firstName} {user.user.lastName}</h1>
                </Col>
                <Col span={24}>
                  <h1 className="hp-mb-0">Analytics Of Department</h1>
                </Col>
                  <Col span={12} onClick={handleLeadTeam}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Total Strength"
                      count={departments|| "0"}
                    />
                  </Col>

                  <Col span={12} onClick={handleProject}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Department Projects"
                      count={departmentProjects|| "0"}
                    />
                  </Col>

                  <Col span={12} onClick={handleMDR}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Assigned MDRs"
                      count={assignedMDRS || "0"}
                    />
                  </Col>
                  {/* <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="MDR"
                      count={data?.mdrCount || "0"}
                    />
                  </Col> */}
                </Row>
              </Col>
              {/* <Col span={24}>
                <FeatureCard
                  icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                  title="Employees"
                  count={data?.employeeCount || "0"}
                />
              </Col> */}
            </Row>
          </Col>
          {/* <Col span={24}>
            <Row gutter={[32, 32]}>
              {data?.roleCounts && (
                <>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Lead"
                      count={data.roleCounts['2'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Senior Engineer"
                      count={data.roleCounts['3'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Junior Engineer"
                      count={data.roleCounts['4'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Designer or "
                      count={data.roleCounts['5'] || "0"}
                    />
                  </Col>
                </>
              )}
            </Row>
          </Col> */}
          <Col span={24}>
            {user?.user?.roleId === 1 && (
              <ListCard title="System Logs" list={data?.logs} />
            )}
          </Col>
        </Row>
        
        )}

{user?.user?.roleId === 3 && ( // Check if roleId is 1
        <Row gutter={[32, 32]} className="hp-mb-32">
          <Col span={24}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <Row gutter={[32, 32]}>
                <Col span={24}>
                  <h1 className="hp-mb-0">{user.user.department} Senior Engineer {user.user.firstName} {user.user.lastName}</h1>
                </Col>
                <Col span={24}>
                  <h1 className="hp-mb-0">Analytics Of Company</h1>
                </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Departments"
                      count={data?.departmentCount || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Projects"
                      count={data?.projectCount || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Clients"
                      count={data?.clientCount || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="MDR"
                      count={data?.mdrCount || "0"}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <FeatureCard
                  icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                  title="Employees"
                  count={data?.employeeCount || "0"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[32, 32]}>
              {data?.roleCounts && (
                <>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Senior Engineer"
                      count={data.roleCounts['3'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Junior Engineer"
                      count={data.roleCounts['4'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Designer"
                      count={data.roleCounts['5'] || "0"}
                    />
                  </Col>
                </>
              )}
            </Row>
          </Col>
          <Col span={24}>
            {user?.user?.roleId === 1 && (
              <ListCard title="System Logs" list={data?.logs} />
            )}
          </Col>
        </Row>
        
        )}


{user?.user?.roleId === 4 && ( // Check if roleId is 1
        <Row gutter={[32, 32]} className="hp-mb-32">
          <Col span={24}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <Row gutter={[32, 32]}>
                <Col span={24}>
                  <h1 className="hp-mb-0">{user.user.department} Junior Engineer {user.user.firstName} {user.user.lastName}</h1>
                </Col>
                <Col span={24}>
                  <h1 className="hp-mb-0">Analytics Of Company</h1>
                </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Departments"
                      count={data?.departmentCount || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Projects"
                      count={data?.projectCount || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Clients"
                      count={data?.clientCount || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="MDR"
                      count={data?.mdrCount || "0"}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <FeatureCard
                  icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                  title="Employees"
                  count={data?.employeeCount || "0"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[32, 32]}>
              {data?.roleCounts && (
                <>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Lead"
                      count={data.roleCounts['2'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Senior Engineer"
                      count={data.roleCounts['3'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Junior Engineer"
                      count={data.roleCounts['4'] || "0"}
                    />
                  </Col>
                  <Col span={6}>
                    <FeatureCard
                      icon={<WalletMinus size="24" variant="Bold" className="hp-text-color-black-bg hp-text-color-dark-0" />}
                      title="Designer or "
                      count={data.roleCounts['5'] || "0"}
                    />
                  </Col>
                </>
              )}
            </Row>
          </Col>
          <Col span={24}>
            {user?.user?.roleId === 1 && (
              <ListCard title="System Logs" list={data?.logs} />
            )}
          </Col>
        </Row>
        
        )}

      <ProtectedAppPage />
    </>
  );  
}
