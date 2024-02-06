import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import SuccessResult from "./success";
import InfoResult from "./info";
import WarningResult from "./warning";
import ErrorResult from "./error";

export default function Result() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Result"
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
              title: "Result",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <SuccessResult />
      </Col>

      <Col span={24}>
        <InfoResult />
      </Col>

      <Col span={24}>
        <WarningResult />
      </Col>

      <Col span={24}>
        <ErrorResult />
      </Col>
    </Row>
  );
}