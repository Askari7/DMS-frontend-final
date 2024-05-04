import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicRate from "./basic";
import HalfStarRate from "./halfStar";
import RateCustomizeCharacter from "./customizeCharacter";
import RateOtherCharacter from "./otherCharacter";

export default function Rate() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Rate"
          desc="Rate component."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Rate",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicRate />
      </Col>

      <Col span={24}>
        <RateCustomizeCharacter />
      </Col>

      <Col span={24}>
        <HalfStarRate />
      </Col>

      <Col span={24}>
        <RateOtherCharacter />
      </Col>
    </Row>
  );
}
