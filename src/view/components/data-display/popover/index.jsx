import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicPopover from "./basic";
import PopoverTrigers from "./trigers";
import PopoverPlacements from "./placement";

export default function Popover() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Popover"
          desc="The floating card popped by clicking or hovering."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Popover",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicPopover />
      </Col>

      <Col span={24}>
        <PopoverPlacements />
      </Col>

      <Col span={24}>
        <PopoverTrigers />
      </Col>
    </Row>
  );
}
