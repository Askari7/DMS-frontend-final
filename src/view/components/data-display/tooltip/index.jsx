import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicTooltip from "./basic";
import TooltipPlacement from "./placement";

export default function Tooltip() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Tooltip"
          desc="A simple text popup tip."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Tooltip",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicTooltip />
      </Col>

      <Col span={24}>
        <TooltipPlacement />
      </Col>
    </Row>
  );
}
