import React, { useState } from "react";

import { Card, Row, Col, Dropdown, Menu } from "antd";
import { RiMoreFill } from "react-icons/ri";
import Chart from "react-apexcharts";

export default function RadialbarChart({inputData}) {
  console.log(inputData,"inputData");
  let total = inputData.reduce((acc, val) => acc + val, 0);

  const menu = (
    <Menu>
      <Menu.Item>Last 7 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data] = useState({
    series: inputData,
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "radialBar",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#00F7BF", "#0010F7", "#CC6CE7","#7DDA58"],

      labels: ["Reviewed Pending", "Approved Pending", "Reviewed","Approved"],

      dataLabels: {
        enabled: true,
      },
      stroke: {
        lineCap: "round",
      },

      plotOptions: {
        radialBar: {
          size: 50,
          hollow: {
            size: "20%",
          },

          track: {
            margin: 16,
          },
          dataLabels: {
            show: true,
            name: {
              fontSize: "16px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              fontSize: "16px",
              label: "Total",
              value : total
            },
          },
        },
      },

      legend: {
        show: true,
        itemMargin: {
          horizontal: 24,
          vertical: 0,
        },
        horizontalAlign: "center",
        position: "bottom",
        fontSize: "16px",

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
            <h4 className="hp-mr-8">Action Items</h4>
            </Col>

            <Col>
              <Dropdown overlay={menu} trigger={["click"]}>
                <RiMoreFill className="hp-text-color-dark-0" size={24} onClick={(e) => e.preventDefault()} />
              </Dropdown>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart" className="hp-donut-chart">
            <Chart
              options={data.options}
              series={inputData}
              type="radialBar"
              height={400}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
