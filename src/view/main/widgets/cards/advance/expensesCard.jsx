import React, { useState } from "react";

import Chart from "react-apexcharts";
import { Card, Row, Col, Dropdown, Menu } from "antd";
import { RiMoreFill, RiArrowRightSLine } from "react-icons/ri";
import { Wallet, Discount, Bag, Calendar } from "react-iconly";

export default function ExpensesCard() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data] = useState({
    series: [1244, 2155, 1541],
    options: {
      chart: {
        id: "expenses-donut-card",
        fontFamily: "Manrope, sans-serif",
        type: "donut",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#0010F7", "#55B1F3", "#1BE7FF"],

      labels: ["Marketing", "Payments", "Bills"],

      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "90%",
            labels: {
              show: true,
              name: {
                fontSize: "2rem",
              },
              value: {
                fontSize: "24px",
                fontWeight: "medium",
                color: "#2D3436",
                formatter(val) {
                  return `$${val}`;
                },
              },
              total: {
                show: true,
                fontSize: "24px",
                fontWeight: "medium",
                label: "Total",
                color: "#636E72",

                formatter: function (w) {
                  return `$${w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0)}`;
                },
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],

      legend: {
        itemMargin: {
          horizontal: 12,
          vertical: 24,
        },
        horizontalAlign: "center",
        position: "bottom",
        fontSize: "12px",
        labels: {
          colors: "#2D3436",
        },

        markers: {
          radius: 12,
        },
      },
    },
  });

  return (
    <Card className="hp-border-color-black-40 hp-card-6">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <Col>
              <h5 className="hp-mb-32">Expenses</h5>
            </Col>

            <Col>
              <Dropdown overlay={menu} trigger={["click"]}>
                <RiMoreFill size={24} onClick={(e) => e.preventDefault()} className="hp-text-color-dark-0" />
              </Dropdown>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="expenses-donut-card" className="hp-donut-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="donut"
              height={350}
              legend="legend"
            />
          </div>
        </Col>

        <Col span={24} className="hp-mt-24">
          <h5 className="hp-mb-24">By Category</h5>

          <a href="#" className="hp-d-block hp-transition hp-py-12 hp-px-6 hp-border-radius hp-hover-bg-color-primary-4 hp-hover-bg-color-dark-primary">
            <Row align="middle" justify="space-between">
              <Col flex="0.9">
                <Row align="middle">
                  <Wallet
                    set="curved"
                    className="remix-icon hp-mr-24 hp-text-color-primary-2"
                  />

                  <Col flex="1">
                    <h5 className="hp-mb-0">Company Expenses</h5>
                    <p className="hp-p1-body hp-text-color-black-60 hp-mb-0">
                      Employee expenses
                    </p>
                  </Col>
                </Row>
              </Col>

              <RiArrowRightSLine className="remix-icon" size={24} />
            </Row>
          </a>

          <a href="#" className="hp-mt-12 hp-d-block hp-transition hp-py-12 hp-px-6 hp-border-radius hp-hover-bg-color-primary-4 hp-hover-bg-color-dark-primary">
            <Row align="middle" justify="space-between">
              <Col flex="0.9">
                <Row align="middle">
                  <Discount
                    set="curved"
                    className="remix-icon hp-mr-24 hp-text-color-primary-2"
                  />

                  <Col flex="1">
                    <h5 className="hp-mb-0">Company Expenses</h5>
                    <p className="hp-p1-body hp-text-color-black-60 hp-mb-0">
                      Promotion & Commercial
                  </p>
                  </Col>
                </Row>
              </Col>

              <RiArrowRightSLine className="remix-icon" size={24} />
            </Row>
          </a>

          <a href="#" className="hp-mt-12 hp-d-block hp-transition hp-py-12 hp-px-6 hp-border-radius hp-hover-bg-color-primary-4 hp-hover-bg-color-dark-primary">
            <Row align="middle" justify="space-between">
              <Col flex="0.9">
                <Row align="middle">
                  <Bag
                    set="curved"
                    className="remix-icon hp-mr-24 hp-text-color-primary-2"
                  />

                  <Col flex="1">
                    <h5 className="hp-mb-0">Shopping Expenses</h5>
                    <p className="hp-p1-body hp-text-color-black-60 hp-mb-0">
                      Checkout last years expenses
                  </p>
                  </Col>
                </Row>
              </Col>

              <RiArrowRightSLine className="remix-icon" size={24} />
            </Row>
          </a>

          <a href="#" className="hp-mt-12 hp-d-block hp-transition hp-py-12 hp-px-6 hp-border-radius hp-hover-bg-color-primary-4 hp-hover-bg-color-dark-primary">
            <Row align="middle" justify="space-between">
              <Col flex="0.9">
                <Row align="middle">
                  <Calendar
                    set="curved"
                    className="remix-icon hp-mr-24 hp-text-color-primary-2"
                  />

                  <Col flex="1">
                    <h5 className="hp-mb-0">Booking Expenses</h5>
                    <p className="hp-p1-body hp-text-color-black-60 hp-mb-0">
                      Checkout hotel expenses
                  </p>
                  </Col>
                </Row>
              </Col>

              <RiArrowRightSLine className="remix-icon" size={24} />
            </Row>
          </a>
        </Col>
      </Row>
    </Card>
  );
}
