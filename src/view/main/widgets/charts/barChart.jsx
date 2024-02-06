import React, { useState } from "react";

import { Card, Row, Col, DatePicker } from "antd";
import Chart from "react-apexcharts";
import moment from "moment";

export default function BarChart() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const [data] = useState({
    series: [
      {
        name: "Team Size",
        data: [9, 12, 13, 7, 4, 11, 8,5,14,10,6,3],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "bar",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
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
        },
        tickAmount: 5,

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
      colors: ["#0063F7"],

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
          <Row justify="space-between" align="top">
            <Col className="hp-pb-16">
              <h4 className="hp-mr-8">Team Size</h4>
            </Col>
            
            <Col>
              <DatePicker
                onChange={onChange}
                picker="week"
                defaultValue={moment("2019-06-03", "YYYY-MM-DD")}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart">
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              height={350}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
