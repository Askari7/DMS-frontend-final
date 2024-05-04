import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicInputNumber from "./basic";
import InputNumberSizes from "./inputNumberSizes";
import InputNumberDisabled from "./disabled";

export default function InputNumber() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Input Number"
          desc="Enter a number within certain range with the mouse or keyboard."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Input Number",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicInputNumber />
      </Col>

      <Col span={24}>
        <InputNumberDisabled />
      </Col>

      <Col span={24}>
        <InputNumberSizes />
      </Col>
    </Row>
  );
}
