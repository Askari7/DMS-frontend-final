import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicBadge from "./basic";
import BadgeRed from "./redBadge";
import BadgeSizes from "./badgeSizes";
import BadgeStatus from "./status";
import BadgeStandAlone from "./standAlone";

export default function Badge() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Badge"
          desc="Small numerical value or status descriptor for UI elements."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Badge",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicBadge />
      </Col>

      <Col span={24}>
        <BadgeSizes />
      </Col>

      <Col span={24}>
        <BadgeStandAlone />
      </Col>

      <Col span={24}>
        <BadgeRed />
      </Col>

      <Col span={24}>
        <BadgeStatus />
      </Col>
    </Row>
  );
}
