import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicTimeline from "./basic";
import AlternateTimeline from "./alternate";
import LabelTimeline from "./label";

export default function Timeline() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Timeline"
          desc="Vertical display timeline."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Timeline",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicTimeline />
      </Col>

      <Col span={24}>
        <LabelTimeline />
      </Col>

      <Col span={24}>
        <AlternateTimeline />
      </Col>
    </Row>
  );
}
