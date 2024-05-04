import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicForm from "./basic";
import FormValidation from "./formValidation";
import FormLayout from "./formLayout";
import FormSizes from "./formSizes";

export default function Form() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Form"
          desc="High performance Form component with data scope management. Including data collection, verification, and styles."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Form",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicForm />
      </Col>

      <Col span={24}>
        <FormValidation />
      </Col>

      <Col span={24}>
        <FormLayout />
      </Col>

      <Col span={24}>
        <FormSizes />
      </Col>
    </Row>
  );
}
