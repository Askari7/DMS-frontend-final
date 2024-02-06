import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import NormalMessage from "./normal";
import TypesMessage from "./types";
import DurationMessage from "./duration";
import LoadingIndicatorMessage from "./loading";

export default function Message() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Message"
          desc="Display global messages as feedback in response to user operations."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Feedback",
            },
            {
              title: "Message",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <NormalMessage />
      </Col>

      <Col span={24}>
        <DurationMessage />
      </Col>

      <Col span={24}>
        <TypesMessage />
      </Col>

      <Col span={24}>
        <LoadingIndicatorMessage />
      </Col>
    </Row>
  );
}
