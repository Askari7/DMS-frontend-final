import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicAlert from "./basic";
import MoreAlert from "./more";
import ClosableAlert from "./closable";
import DescriptionAlert from "./description";
import IconAlert from "./icon";

export default function Alert() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Alert"
          desc="Alert component for feedback."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Feedback",
            },
            {
              title: "Alert",
            }
          ]}
        />
      </Col>

      <Col xl={24} xs={24}>
        <BasicAlert />
      </Col>

      <Col xl={24} xs={24}>
        <ClosableAlert />
      </Col>

      <Col xl={24} xs={24}>
        <IconAlert />
      </Col>

      <Col xl={24} xs={24}>
        <MoreAlert />
      </Col>

      <Col xl={24} xs={24}>
        <DescriptionAlert />
      </Col>
    </Row>
  );
}
