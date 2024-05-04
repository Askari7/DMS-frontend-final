import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicCheckbox from "./basic";
import DisabledCheckbox from "./disabled";
import CheckboxGroup from "./checkboxGroup";
import CheckboxGrid from "./checkboxGrid";
import CheckboxControlled from "./checkboxControlled";
import CheckboxCheckAll from "./checkboxCheckAll";

export default function Checkbox() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Checkbox"
          desc="Checkbox component."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Checkbox",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicCheckbox />
      </Col>

      <Col span={24}>
        <CheckboxGroup />
      </Col>

      <Col span={24}>
        <CheckboxControlled />
      </Col>

      <Col span={24}>
        <DisabledCheckbox />
      </Col>

      <Col span={24}>
        <CheckboxGrid />
      </Col>

      <Col span={24}>
        <CheckboxCheckAll />
      </Col>
    </Row>
  );
}
