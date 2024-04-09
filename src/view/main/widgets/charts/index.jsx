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
  const [data,setData] = useState([])
  const [remaining,setRemaining] = useState([])
  const [completed,setCompleted] = useState([])
  const [departments,setDepartments]= useState([])
  const [departmentsMembers,setDepartmentsMembers] = useState([])
  const [documents,setDocuments] = useState([])
  const [projectsTitles,setProjectTitles] = useState([])
  const [departmentUsers,setDepartmentUsers] = useState([])
  
  const [reviewCount_00,setReviewCount_0]= useState()
  const [reviewCount_01,setReviewCount_1]= useState()
  const [approverCount_00,setApproverCount_0] = useState()
  const [approverCount_01,setApproverCount_1] = useState()
  const [reviewApproveCount,setReviewApproveCount] = useState([])

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
      const titlesArray = response.data.projects.map(obj => obj.title);
      const departments = response.data.departments.map(obj => obj.title);
      const departmentMember = response.data.departments.map(obj => obj.noOfUsers);

      const establishment_reviewer = response.data.establishments.map(obj => obj.reviewerId);
      const establishment_approver = response.data.establishments.map(obj => obj.approverId);
      const establishment_reviewer_status = response.data.establishments.map(obj => obj.reviewerStatus);
      const establishment_approver_status = response.data.establishments.map(obj => obj.approverStatus);
      const userReviewStatus = establishment_reviewer.map((reviewers, index) => {
        const userIndex = reviewers.indexOf(user?.user?.id.toString());
        return userIndex !== -1 ? establishment_reviewer_status[index][userIndex] : null;
      });
      
      const userApproverStatus = establishment_approver.map((approvers, index) => {
        const userIndex = approvers.indexOf(user?.user?.id.toString());
        return userIndex !== -1 ? establishment_approver_status[index][userIndex] : null;
      });
      // Count the number of 1s in userReviewStatus
      const reviewCount_1 = userReviewStatus.reduce((count, status) => count + (status === '1' ? 1 : 0), 0);
      const reviewCount_0 = userReviewStatus.reduce((count, status) => count + (status === '0' ? 1 : 0), 0);

      // Count the number of 1s in userApproverStatus
      const approverCount_1 = userApproverStatus.reduce((count, status) => count + (status === '1' ? 1 : 0), 0);
      const approverCount_0 = userApproverStatus.reduce((count, status) => count + (status === '0' ? 1 : 0), 0);

      console.log("Review Count:", reviewCount_0,reviewCount_1);
      console.log("Approver Count:", approverCount_0,approverCount_1);

      setReviewApproveCount([reviewCount_0,approverCount_0,reviewCount_1,approverCount_1])

      setReviewCount_0(reviewCount_0)
      setReviewCount_1(reviewCount_1)
      setApproverCount_0(approverCount_0)
      setApproverCount_1(approverCount_1)


      // console.log(establishment_approver,establishment_reviewer,"id");
      // console.log(establishment_approver_status,establishment_reviewer_status,"status");
      setDepartments(departments)
      setDepartmentsMembers(departmentMember)
      const completedCounts = [];
      const remainingCounts = [];

    for (const documents of response.data.documents) {
      let completedCount = 0;
      let remainingCount = 0;

      for (const statusArray of documents.map(doc => doc.status)) {
        console.log(statusArray,"array");
          if (statusArray === "Completed") {
            completedCount++;
          } else {
            remainingCount++;
          }
        }

      completedCounts.push(completedCount);
      remainingCounts.push(remainingCount);
    }

    console.log("Completed Counts:", completedCounts);
    console.log("Remaining Counts:", remainingCounts);
      setCompleted(completedCounts)
      setRemaining(remainingCounts)

      setProjectTitles(titlesArray)

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
      {user && user?.user.roleId === 1 &&(
  <Col xl={12} lg={24}>
    <DonutChart projects={data.projects} projectCount={data.projectCount} projectsStatusCounts={data.projectsStatusCounts}/>
  </Col>
)}

{user && user?.user.roleId === 1 && (
  <Col xl={12} lg={24}>
    <DonutChart projects={data.mdrs} projectCount={data.mdrCount} projectsStatusCounts={data.mdrsStatusCounts}/>
  </Col>
)}

{user && user?.user.roleId === 1 &&(
  <Col span={24}>
    <ColumnChart inputData={data.projects} documents={data.documents} completed={completed} remaining={remaining}/>
  </Col>
)}

{(user && user?.user.roleId === 1)|(user && user?.user.roleId === 2) &&(
  <Col xl={12} lg={24}>
    <RadialbarChart inputData={reviewApproveCount}/>
  </Col>
)}

{(user && user?.user.roleId === 1 )&& (
  <Col xl={12} lg={24}>
    <BarChart departments={departments} departmentsMembers={departmentsMembers}/>
  </Col>
)}

      <Col span={24}>
        <LineChart />
      </Col>

      <Col span={24}>
        <AreaChart />
      </Col>

      {/* <Col span={24}>
        <ScatterChart />
      </Col> */}

      <Col xl={12} lg={24}>
        <HeatmapChart />
      </Col>
      
      <Col xl={12} lg={24}>
        <RadarChart />
      </Col>
      
      {/* <Col xl={12} lg={24}>
        <CandlestickChart />
      </Col> */}

   
    </Row>
  );
}
