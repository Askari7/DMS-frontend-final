import React from "react";

import { Row, Col } from "antd";

import Breadcrumbs from "../../../../layout/components/content/breadcrumbs";
import PageTitle from "../../../../layout/components/content/page-title";
import HorizontalDivider from "./horizontal";
import DividerWithTitle from "./withTitle";
import DividerWithoutHedingStyle from "./withoutHeadingStyle";
import VerticalDivider from "./vertical";

export default function Divider() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Main"
            breadCrumbParent2="Layouts"
            breadCrumbActive="Divider"
          />

          <PageTitle
            pageTitle="Divider"
            pageText="A divider line separates different content."
          />
        </Row>
      </Col>

      <Col span={24}>
        <HorizontalDivider />
      </Col>

      <Col span={24}>
        <DividerWithoutHedingStyle />
      </Col>

      <Col span={24}>
        <DividerWithTitle />
      </Col>

      <Col span={24}>
        <VerticalDivider />
      </Col>
    </Row>
  );
}
