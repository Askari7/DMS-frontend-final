import React, { useEffect,useState } from "react";
import { Row, Col,Card,Breadcrumb } from "antd";
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
  const fetchData= async(req,res)=>{
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/projects/info?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log("Response:", response.data); 
      setData(response.data)  
     } catch (error) {
      console.error(error)
    }
  }
 
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
      <Card title={`Hello! ${user.user.firstName} ${user.user.lastName}`} style={{fontSize:"32px" ,fontWeight:"bolder", width: '100%', margin: '0 auto',alignItems:"center",textAlign:"center" }}>
  <Breadcrumb>
    <Breadcrumb.Item>Main</Breadcrumb.Item>
    <Breadcrumb.Item>Widgets</Breadcrumb.Item>
    <Breadcrumb.Item>Charts</Breadcrumb.Item>
  </Breadcrumb>
  {/* Add additional content here if needed */}
</Card>

      </Col>

      <Col xl={12} lg={24}>
        <DonutChart projects={data.projects} projectCount={data.projectCount} projectsStatusCounts={data.projectsStatusCounts}/>
      </Col>

      <Col xl={12} lg={24}>
        <DonutChart projects={data.mdrs} projectCount={data.mdrCount} projectsStatusCounts={data.mdrsStatusCounts}/>
      </Col>

      <Col xl={12} lg={24}>
        <RadialbarChart />
      </Col>
      <Col span={24}>
        <LineChart />
      </Col>

      <Col span={24}>
        <ColumnChart titles={departmentTitles}/>
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
