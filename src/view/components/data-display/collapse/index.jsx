import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import CollapseCard from "./collapse";
import AccordionCard from "./accordion";

export default function Collapse() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Collapse"
          desc="A content area which can be collapsed and expanded."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Collapse",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <CollapseCard />
      </Col>

      <Col span={24}>
        <AccordionCard />
      </Col>
    </Row>
  );
}
