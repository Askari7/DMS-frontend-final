import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicCard from "./basic";
import CardNoBorder from "./noBorder";
import SimpleCard from "./simple";
import CustomizedCard from "./customize";
import CardWithTabs from "./withTabs";

export default function Cards() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Card"
          desc="Simple rectangular container."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Card",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicCard />
      </Col>

      <Col span={24}>
        <CustomizedCard />
      </Col>

      <Col span={24}>
        <CardNoBorder />
      </Col>

      <Col span={24}>
        <SimpleCard />
      </Col>

      <Col span={24}>
        <CardWithTabs />
      </Col>
    </Row>
  );
}
