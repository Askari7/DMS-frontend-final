import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicSwitch from "./basic";
import SwitchDisabled from "./disabled";
import SwitchTextIcon from "./textIcon";
import SwitchLoading from "./loading";
import SwitchSizes from "./switchSizes";

export default function Switch() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Switch"
          desc="Switching Selector."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Switch",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicSwitch />
      </Col>

      <Col span={24}>
        <SwitchTextIcon />
      </Col>

      <Col span={24}>
        <SwitchLoading />
      </Col>

      <Col span={24}>
        <SwitchDisabled />
      </Col>

      <Col span={24}>
        <SwitchSizes />
      </Col>
    </Row>
  );
}
