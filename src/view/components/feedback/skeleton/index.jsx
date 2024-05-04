import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicSkeleton from "./basic";
import ComplexSkeleton from "./complex";

export default function Skeleton() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Skeleton"
          desc="Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Feedback",
            },
            {
              title: "Skeleton",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicSkeleton />
      </Col>

      <Col span={24}>
        <ComplexSkeleton />
      </Col>
    </Row>
  );
}