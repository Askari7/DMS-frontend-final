import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicSteps from "./basic";
import StepsMiniVersion from "./miniVersion";
import StepsWithIcon from "./withIcon";
import StepsSwitchStep from "./switchStep";
import StepsVertical from "./vertical";
import StepsVerticalMini from "./verticalMini";
import StepsErrorStatus from "./errorStatus";
import StepsDotStyle from "./dotStyle";
import StepsCustomizedDotStyle from "./customizedDotStyle";

export default function Steps() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Steps"
          desc="Steps is a navigation bar that guides users through the steps of a task."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Navigation",
            },
            {
              title: "Steps",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicSteps />
      </Col>

      <Col span={24}>
        <StepsMiniVersion />
      </Col>

      <Col span={24}>
        <StepsWithIcon />
      </Col>

      <Col span={24}>
        <StepsErrorStatus />
      </Col>

      <Col span={24}>
        <StepsSwitchStep />
      </Col>

      <Col md={12} span={24}>
        <StepsVertical />
      </Col>

      <Col md={12} span={24}>
        <StepsVerticalMini />
      </Col>

      <Col span={24}>
        <StepsDotStyle />
      </Col>

      <Col span={24}>
        <StepsCustomizedDotStyle />
      </Col>
    </Row>
  );
}
