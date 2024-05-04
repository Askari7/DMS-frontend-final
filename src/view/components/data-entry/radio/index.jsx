import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicRadio from "./basic";
import DisabledRadio from "./disabled";
import RadioGroup from "./radioGroup";
import RadioGroupVertical from "./radioGroupVertical";
import RadioButtonSolid from "./radioButtonSolid";
import RadioButtonStyle from "./radioButtonStyle";
import RadioButtonSize from "./radioButtonSize";

export default function Radio() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Radio"
          desc="Radio."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Radio",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicRadio />
      </Col>

      <Col span={24}>
        <RadioGroup />
      </Col>

      <Col span={24}>
        <RadioButtonSolid />
      </Col>

      <Col span={24}>
        <RadioButtonSize />
      </Col>

      <Col span={24}>
        <DisabledRadio />
      </Col>

      <Col span={24}>
        <RadioGroupVertical />
      </Col>

      <Col span={24}>
        <RadioButtonStyle />
      </Col>
    </Row>
  );
}
