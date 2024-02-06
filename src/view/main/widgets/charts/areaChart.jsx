import React, { useState } from "react";

import { Card, Row, Col, DatePicker } from "antd";
import Chart from "react-apexcharts";
import moment from "moment";

export default function AreaChart() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const [data] = useState({
    series: [
      {
        name: "Docs Approved by Project Manager",
        data: [
          9, 9, 8, 7, 3, 1, 3, 9, 7, 3,
          9, 4,
        ],
      },
      {
        name: "Docs Approved by Client",
        data: [
          7, 6, 3, 3, 1, 5, 8, 6, 2, 2,
          7, 2,
        ],
      },
      {
        name: "Working Docs",
        data: [
          2, 3, 5, 4, 6, 8, 2, 3, 5, 1,
          2, 2,
        ],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "area",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
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
        row: {
          opacity: 0.5,
        },
      },
      fill: {
        opacity: 1,
        type: "solid",
      },
      stroke: {
        show: true,
        width: 4,
        curve: "straight",
        colors: ["transparent"],
      },
      xaxis: {
        axisTicks: {
          show: false,
          borderType: "solid",
          color: "#78909C",
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },

        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
        },
        categories: [
          "Project1",
          "Project2",
          "Project3",
          "Project4",
          "Project5",
          "Project6",
          "Project7",
          "Project8",
          "Project9",
          "Project10",
          "Project11",
          "Project12",
        ],
      },
      legend: {
        horizontalAlign: "right",
        offsetX: 40,
        position: "top",
        markers: {
          radius: 12,
        },
      },
      colors: ["#EBFAFA", "#55B1F3", "#0010F7"],

      yaxis: {
        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
          formatter: (value) => {
            return value;
          },
        },

        min: 0,
        max: 10,
        tickAmount: 5,
      },
    },
  });

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row justify="space-between">
            <Row align="bottom" className="hp-pb-16">
              <h4 className="hp-mr-8">Documents In Projects</h4>
            </Row>
            
            <Col>
              <DatePicker
                onChange={onChange}
                picker="year"
                defaultValue={moment("2019", "YYYY")}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart">
            <Chart
              options={data.options}
              series={data.series}
              type="area"
              height={350}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
