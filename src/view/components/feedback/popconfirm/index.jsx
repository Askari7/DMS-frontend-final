import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicPopconfirm from "./basic";
import TriggerPopconfirm from "./trigger";
import IconPopconfirm from "./icon";
import PlacementPopconfirm from "./placement";
import AsyncPopconfirm from "./async";

export default function Popconfirm() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Popconfirm"
          desc="A simple and compact confirmation dialog of an action."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Feedback",
            },
            {
              title: "Popconfirm",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicPopconfirm />
      </Col>

      <Col span={24}>
        <TriggerPopconfirm />
      </Col>

      <Col span={24}>
        <IconPopconfirm />
      </Col>

      <Col span={24}>
        <PlacementPopconfirm />
      </Col>

      <Col span={24}>
        <AsyncPopconfirm />
      </Col>
    </Row>
  );
}