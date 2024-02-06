import React, { useState } from "react";

import { Card, Row, Col } from "antd";
import { ImportSquare } from "iconsax-react";
import Chart from "react-apexcharts";

export default function ActiveUserCard() {
  const [data] = useState({
    series: [40],
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
        padding: {
          left: -24,
          right: -24,
          top: -16,
          bottom: -16,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          hollow: {
            size: '45%',
          },
          track: {
            show: true,
            background: "#ffffff",
            strokeWidth: '100%',
            opacity: 1,
            margin: 0,
          },
          dataLabels: {
            show: true,
            value: {
              fontSize: "12px",
              color: "#FFC700",
              fontWeight: 500,
              offsetY: -11,
            },
            total: {
              show: true,
              fontSize: "12px",
              label: "",
              formatter: function (w) {
                return "%" + 40;
              },
            },
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#FFD252"],
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
      yaxis: {
        show: false,
        max: 100,
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
  });

  return (
    <Card className="hp-border-color-black-40 hp-border-radius-xxl" bodyStyle={{ padding: 16 }}>
      <Row gutter={[16, 16]} align="middle">
        <Col flex="0 0 106px" style={{ height: 88 }}>
          <div className="hp-h-100 hp-bg-warning-4 hp-bg-color-dark-90 hp-border-radius-xl hp-d-flex-center">
            <Chart
              options={data.options}
              series={data.series}
              height={80}
              type="radialBar"
              legend="legend"
              className="hp-mt-4"
              style={{ marginLeft: 2 }}
            />
          </div>
        </Col>

        <Col flex="1 0 0" className="hp-overflow-hidden">
          <h3 className="hp-mb-0 hp-font-weight-600 hp-d-flex-center">
            <span>43,046</span>
            <ImportSquare
              size="20"
              variant="Bold"
              className="hp-ml-4"
            />
          </h3>

          <p className="hp-p1-body hp-mb-0">
            Active Users
          </p>
        </Col>
      </Row>
    </Card>
  );
}
