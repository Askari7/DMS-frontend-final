import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicNotification from "./basic";
import DurationNotification from "./duration";
import IconNotification from "./icon";
import CustomCloseNotification from "./customClose";

export default function Notification() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Notification"
          desc="Display a notification message globally."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Feedback",
            },
            {
              title: "Notification",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicNotification />
      </Col>

      <Col span={24}>
        <DurationNotification />
      </Col>

      <Col span={24}>
        <IconNotification />
      </Col>

      <Col span={24}>
        <CustomCloseNotification />
      </Col>
    </Row>
  );
}
