import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import ProgessBar from "./progressBar";
import MiniProgessBar from "./miniProgressBar";
import CircleProgessBar from "./circleProgressBar";
import MiniCircleProgessBar from "./miniCircleProgressBar";

export default function Progress() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Progress"
          desc="Display the current progress of an operation flow."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Feedback",
            },
            {
              title: "Progress",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <ProgessBar />
      </Col>

      <Col span={24}>
        <MiniProgessBar />
      </Col>

      <Col span={24}>
        <CircleProgessBar />
      </Col>

      <Col span={24}>
        <MiniCircleProgessBar />
      </Col>
    </Row>
  );
}
