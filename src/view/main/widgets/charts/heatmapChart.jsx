import React, { useState } from "react";

import { Card, Row, Col, Dropdown, Menu } from "antd";
import { RiMoreFill } from "react-icons/ri";
import Chart from "react-apexcharts";

export default function HeatmapChart() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  function generateData(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = `w${(i + 1).toString()}`;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x,
        y,
      });
      i++;
    }
    return series;
  }

  const [data] = useState({
    series: [
      {
        name: "Project 12",
        data: generateData(4, {
          min: 0,
          max: 26,
        }),
      },
      {
        name: "Project 11",
        data: generateData(4, {
          min: 0,
          max: 21,
        }),
      },
      {  
        name: "Project 10",
        data: generateData(4, {
          min: 0,
          max: 20,
        }),
      },
      {
        name: "Project 9",
        data: generateData(4, {
          min: 0,
          max: 27,
        }),
      },
      {
        name: "Project 8",
        data: generateData(4, {
          min: 0,
          max: 21,
        }),
      },
      {
        name: "Project 7",
        data: generateData(4, {
          min: 0,
          max: 22,
        }),
      },
      {
        name: "Project 6",
        data: generateData(4, {
          min: 0,
          max: 24,
        }),
      },
      {
        name: "Project 5",
        data: generateData(4, {
          min: 0,
          max: 20,
        }),
      },
      {
        name: "Project 4",
        data: generateData(4, {
          min: 0,
          max: 25,
        }),
      },
      {
        name: "Project 3",
        data: generateData(4, {
          min: 0,
          max: 23,
        }),
      },
      {
        name: "Project 2",
        data: generateData(4, {
          min: 0,
          max: 20,
        }),
      },
      {
        name: "Project 1",
        data: generateData(4, {
          min: 0,
          max: 28,
        }),
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "heatmap",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        heatmap: {
          enableShades: false,

          colorScale: {
            ranges: [
              {
                from: 0,
                to: 7,
                name: "Initialize",
                color: "#EBFAFA",
              },
              {
                from: 8,
                to: 14,
                name: "Working",
                color: "#55B1F3",
              },
              {
                from: 15,
                to: 21,
                name: "Reviewed",
                color: "#0063F7",
              },
              {
                from: 22,
                to: 28,
                name: "Approved",
                color: "#0010F7",
              },
            ],
          },
        },
      },

      labels: {
        style: {
          fontSize: "14px",
        },
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        borderColor: "#DFE6E9",
      },
      fill: {
        opacity: 1,
        type: "solid",
      },

      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "center",
        position: "bottom",
        fontSize: "14px",
        markers: {
          radius: 12,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
        },
      },
    },
  });

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col span={24}>
          <Row justify="space-between">
            <Col align="bottom">
              <h4 className="hp-mr-8">Working Days</h4>
            </Col>
            
            <Col>
              <Dropdown overlay={menu} trigger={["click"]}>
                <RiMoreFill className="hp-text-color-dark-0" size={24} onClick={(e) => e.preventDefault()} />
              </Dropdown>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart" className="hp-heatmap-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="heatmap"
              height={350}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
