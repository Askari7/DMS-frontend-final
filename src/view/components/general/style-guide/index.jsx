import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import HtmlTags from "./htmlTags";
import ThemeColors from "./themeColors";
import BlacksGradients from "./blacksGradients";

export default function StyleGuide() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Style Guide"
          desc="This is base of Yoda UI Style with typography and colors."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "General",
            },
            {
              title: "Style Guide",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <HtmlTags />
      </Col>

      <Col span={24}>
        <ThemeColors />
      </Col>

      <Col span={24}>
        <BlacksGradients />
      </Col>
    </Row>
  );
}