import React from "react";

import { Row, Col } from "antd";

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

export default function Charts() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        {/* <PageContent
          title="Hello! Mr Salar Jafri"
          desc="We used Apex Charts and customized for Yoda "
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "Charts",
            }
          ]}
        /> */}
      </Col>
      <Col xl={12} lg={24}>
        <DonutChart />
      </Col>

      <Col xl={12} lg={24}>
        <RadialbarChart />
      </Col>
      <Col span={24}>
        <LineChart />
      </Col>

      <Col span={24}>
        <ColumnChart />
      </Col>

      <Col span={24}>
        <AreaChart />
      </Col>

      <Col span={24}>
        <ScatterChart />
      </Col>
      
      <Col xl={12} lg={24}>
        <BarChart />
      </Col>

      <Col xl={12} lg={24}>
        <HeatmapChart />
      </Col>
      
      {/* <Col xl={12} lg={24}>
        <RadarChart />
      </Col> */}
      
      {/* <Col xl={12} lg={24}>
        <CandlestickChart />
      </Col> */}

   
    </Row>
  );
}
