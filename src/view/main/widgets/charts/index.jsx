import React, { useEffect,useState } from "react";
import { Row, Col } from "antd";
import PageContent from "../../../../layout/components/content/page-content";
import LineChart from "./lineChart";
import ColumnChart from "./columnChart";
import AreaChart from "./areaChart";
import ScatterChart from "./scatterChart";
import BarChart from "./barChart";
import CandlestickChart from "./candlestickChart";
import HeatmapChart from "./heatmapChart";
import DonutChart from "./donutChart";
import RadarChart from "./radarChart";
import RadialbarChart from "./radialbarChart";
import axios from "axios";



export default function Charts() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [projects,setProjects] = useState([])
  const [data,setData] = useState([])
  const [mdr,setMdr] = useState([])
  const [departments,setDepartments] = useState([])
  const [departmentTitles,setDepartmentTitles] = useState([])
  const [departmentUsers,setDepartmentUsers] = useState([])

  const [projectTitles,setProjectTitles] = useState([])
  
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `https://54.81.250.98:8083/api/projects?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log('Project response data',response.data);
      setProjects(response.data); 
        const projectTitles = projects.map(project => project.title);
        setProjectTitles(projectTitles)

    } catch (error) {
      console.error("Error fetching projects:", error?.message);
    }
  };
  const fetchDocuments = async () => {
    try {
      const response = await axios.get(
        `https://54.81.250.98:8083/api/documents?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log('Documents response data',response.data);
      setProjects(response.data); 
    } catch (error) {
      console.error("Error fetching documents:", error?.message);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        `https://54.81.250.98:8083/api/departments?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );

      const departmentTitles = response.data.map(department => department.title);
      const departmentUsers = response.data.map(department => department.noOfUsers);

    // Update state with the fetched data
    setDepartments(response.data); 
    setDepartmentTitles(departmentTitles);
    setDepartmentUsers(departmentUsers);
    } catch (error) {
      console.error("Error fetching departments:", error?.message);
    }
  };

  const fetchMdr = async () => {
    try {
      const response = await axios.get(
        `https://54.81.250.98:8083/api/documents/mdr?companyId=${user?.user?.companyId}`,
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
  useEffect(()=>{
   fetchProjects()
   fetchMdr()
   fetchDepartments()
  //  fetchDocuments()
  },[])


  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title={`Hello! ${user.user.firstName} ${user.user.lastName}`}
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "Charts",
            }
          ]}
        />
      </Col>
      <Col xl={12} lg={24}>

        <DonutChart projects={projects} projectCount={data.projectCount}/>
      </Col>

      <Col xl={12} lg={24}>
        <RadialbarChart />
      </Col>
      <Col span={24}>
        <LineChart />
      </Col>

      <Col span={24}>
        <ColumnChart titles={projectTitles}/>
      </Col>

      <Col span={24}>
        <ColumnChart titles={departmentTitles} count={departmentUsers}/>
      </Col>


      <Col span={24}>
        <AreaChart />
      </Col>

      <Col span={24}>
        <ScatterChart />
      </Col>
      
      <Col xl={12} lg={24}>
        <BarChart projects={projects}/>
      </Col>

      <Col xl={12} lg={24}>
        <HeatmapChart />
      </Col>
      
      {/* <Col xl={12} lg={24}>
        <RadarChart />
      </Col> */}
      
      {/* <Col xl={12} lg={24}>
        <CandlestickChart />
      </Col> */}

   
    </Row>
  );
}
