
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Dropdown, Menu } from "antd";
import Chart from "react-apexcharts";
import './index.css'
export default function DonutChart({ projects, projectCount ,projectsStatusCounts}) {
  console.log("projects",projects,"projectCount",projectCount,"projectsStatusCounts",projectsStatusCounts);
  const [statusCounts, setStatusCounts] = useState([0, 0, 0]);
  const [progress, setProgress] = useState("");

  useEffect(() => {
    if (projects && projects.length > 0) {
      let initializedCount = 0;
      let completedCount = 0;
      let ongoingCount = 0;

      projects.forEach((project) => {
        switch (project.status) {
          case "Initialized":
            initializedCount++;
            break;
          case "Completed":
            completedCount++;
            break;
          case "Ongoing":
            ongoingCount++;
            break;
          default:
            break;
        }
      });

      setStatusCounts([initializedCount, completedCount, ongoingCount]);
      console.log(projects,'log');
      if(projects[0].projectId){
        setProgress("MDR Progress")
      }else{
        setProgress("Project Progress")
      } 
    }
  }, [projects]);

  const menu = (
    <Menu>
      <Menu.Item>Last 7 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  useEffect(() => {
    // console.log("Series prop received by Chart component:", statusCounts);
  }, [statusCounts]);

  const [data] = useState({
    series: statusCounts,
    options: {
      

      chart: {
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 1.5,
          opacity: 0.3
          
        },
        fontFamily: "Manrope, sans-serif",
        type: "donut",
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: ["#0010F7", "#55B1F3", "#1BE7FF"],

      labels: ["Initialized", "Completed", " Ongoing"],

      dataLabels: {
        style: {
          colors: ['#55B1F3', '#0010F7', '#1BE7FF']
        },
        enabled: true,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: {
                fontSize: "2rem",
              },
              value: {
                fontSize: "16px",
                formatter(val) {
                  return `${val}`;
                },
              },
              total: {
                show: true,
                fontSize: "16px",
                label: "Total",
                formatter: function (w) {
                  return `${w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  })}`;
                },
              },
            },
          },
        },
      },
      

      legend: {
        itemMargin: {
          horizontal: 24,
          vertical: 12,
        },
        horizontalAlign: "center",
        position: "bottom",
        fontSize: "18px",

        markers: {
          radius: 12,
        },
      },
    },
  });

 return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <Col>
              <h4 className="hp-mr-8">{progress}</h4>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart" className="hp-donut-chart">
            <Chart options={data.options} series={statusCounts} type="donut" height={398} legend="legend" />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
