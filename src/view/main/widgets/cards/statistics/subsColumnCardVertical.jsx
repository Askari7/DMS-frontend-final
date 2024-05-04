import React, { useEffect, useState } from "react";

import { Row, Col } from "antd";
import { ExportSquare } from "iconsax-react";
import Chart from "react-apexcharts";

export default function SubsColumnCardVertical() {
  const [chartWidth, setChartWidth] = useState("50%")

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartWidth("100%")
    }, 10);
    return () => clearTimeout(timer);
  }, []);

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
          left: 8,
          right: 15,
          top: -10,
          bottom: -10,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
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
      colors: ["#00F7BF"],
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
    <div className="hp-border-1 hp-overflow-hidden hp-border-color-black-40 hp-border-color-dark-80 hp-border-radius-xxl hp-bg-color-black-0 hp-bg-color-dark-100 hp-p-16 hp-card-2">
      <Row gutter={16} align="middle">
        <Col span={24} className="hp-text-center">
          <div
            id="chart"
            className="hp-bg-color-success-4 hp-bg-color-dark-90 hp-border-radius-xl hp-d-flex-center hp-mb-18"
          >
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              width={chartWidth}
              height={80}
              legend="legend"
            />
          </div>

          <h3 className="hp-mb-0 hp-font-weight-600 hp-d-flex-full-center">
            <span>43,046</span>
            <ExportSquare
              size="20"
              variant="Bold"
              className="hp-ml-4"
            />
          </h3>

          <p className="hp-p1-body hp-mb-0">
            New Subscribe
          </p>
        </Col>
      </Row>
    </div>
  );
}
