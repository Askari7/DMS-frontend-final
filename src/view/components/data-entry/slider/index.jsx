import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicSlider from "./basic";
import IconSlider from "./icon";
import GraduatedSlider from "./graduated";

export default function Slider() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32" >
      <Col span={24}>
        <PageContent
          title="Slider"
          desc="A Slider component for displaying current value and intervals in range."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Slider",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicSlider />
      </Col>

      <Col span={24}>
        <IconSlider />
      </Col>

      <Col span={24}>
        <GraduatedSlider />
      </Col>
    </Row>
  );
}
