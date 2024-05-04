import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicTab from "./basic";
import TabsDisabled from "./disabled";
import TabsIcon from "./icon";
import TabsPosition from "./position";
import TabsSizes from "./tabsSizes";
import TabsType from "./type";
import TabsAddClose from "./addClose";

export default function Tabs() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Tabs"
          desc="Tabs make it easy to switch between different views."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Tabs",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicTab />
      </Col>

      <Col span={24}>
        <TabsIcon />
      </Col>

      <Col span={24}>
        <TabsSizes />
      </Col>

      <Col span={24}>
        <TabsType />
      </Col>

      <Col span={24}>
        <TabsDisabled />
      </Col>

      <Col span={24}>
        <TabsPosition />
      </Col>

      <Col span={24}>
        <TabsAddClose />
      </Col>
    </Row>
  );
}
