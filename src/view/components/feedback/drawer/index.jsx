import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import NormalDrawer from "./basic";
import CustomDrawer from "./custom";
import SubmitDrawer from "./submit";
import MultiDrawer from "./multi";

export default function Drawer() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Drawer"
          desc="A panel which slides in from the edge of the screen."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Feedback",
            },
            {
              title: "Drawer",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <NormalDrawer />
      </Col>

      <Col span={24}>
        <SubmitDrawer />
      </Col>

      <Col span={24}>
        <CustomDrawer />
      </Col>

      <Col span={24}>
        <MultiDrawer />
      </Col>
    </Row>
  );
}
