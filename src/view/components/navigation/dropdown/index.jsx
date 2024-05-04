import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicDropdown from "./basic";
import ButtonWithDropdown from "./button";
import PlacementDropdown from "./placement";
import CascadingDropdown from "./cascading";

export default function Dropdown() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Dropdown"
          desc="A dropdown list."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Navigation",
            },
            {
              title: "Dropdown",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicDropdown />
      </Col>

      <Col span={24}>
        <ButtonWithDropdown />
      </Col>

      <Col span={24}>
        <PlacementDropdown />
      </Col>

      <Col span={24}>
        <CascadingDropdown />
      </Col>
    </Row>
  );
}
