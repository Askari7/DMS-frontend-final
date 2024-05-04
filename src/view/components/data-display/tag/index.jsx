import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicTag from "./basic";
import TagColorful from "./colorful";
import TagStatus from "./status";

export default function Tags() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Tag"
          desc="Tag for categorizing or markup."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Tag",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicTag />
      </Col>

      <Col span={24}>
        <TagStatus />
      </Col>

      <Col span={24}>
        <TagColorful />
      </Col>
    </Row>
  );
}
