import React, { useState } from "react";

import { Card, Row, Col } from "antd";
import { ExportSquare } from "iconsax-react";
import Chart from "react-apexcharts";

export default function OrderColumnCard() {
  const [data] = useState({
    series: [
      {
        name: "Earning",
        data: [50, 70, 100, 60],
      },
    ],
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
          left: 0,
          right: 10,
          top: -10,
          bottom: -10,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "65%",
          borderRadius: 2,
          colors: {
            backgroundBarColors: [],
            backgroundBarRadius: 5,
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0010F7"],
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
          <div className="hp-h-100 hp-bg-primary-4 hp-bg-color-dark-90 hp-border-radius-xl hp-d-flex-center">
            <Chart
              options={data.options}
              series={data.series}
              height={80}
              type="bar"
              legend="legend"
              className="hp-mt-4"
              style={{ marginLeft: 2 }}
            />
          </div>
        </Col>

        <Col flex="1 0 0" className="hp-overflow-hidden">
          <h3 className="hp-mb-0 hp-font-weight-600 hp-d-flex-center">
            <span>43,046</span>
            <ExportSquare
              size="20"
              variant="Bold"
              className="hp-ml-4"
            />
          </h3>

          <p className="hp-p1-body hp-mb-0">
            New Order 
          </p>
        </Col>
      </Row>
    </Card>
  );
}
