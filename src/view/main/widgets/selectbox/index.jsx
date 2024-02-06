import React from "react";

import { Row, Col, Card } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import SelectBoxFlatItems from "./flatItems";
import SelectBoxProductItems from "./productItems";
import SelectBoxFlagItems from "./flagItems";
import SelectBoxLogoItems from "./logoItems";
import SelectBoxAvatarItems from "./avatarItems";
import SelectBoxBoxedProductItems from "./boxedProductItems";
import SelectBoxBoxedFlagItems from "./boxedFlagItems";
import SelectBoxBoxedUserItems from "./boxedUserItems";
import SelectBoxBoxedIllustrationItems from "./boxedIllustrationItems";
import SelectBoxBoxedLogoItems from "./boxedLogoItems";

export default function SelectBox() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="SelectBox"
          desc="These selectboxes designed for different usages. You can easly edit it regarding to your needs"
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "SelectBox",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <Card className="hp-border-color-black-40">
          <span className="h4 hp-d-block hp-mb-8">Wide Usage</span>
          <p className="hp-mb-48 hp-p1-body">These select boxed can be used varius selections</p>

          <Row gutter={[0, 48]}>
            <Col span={24}>
              <SelectBoxFlatItems />
            </Col>

            <Col span={24}>
              <SelectBoxProductItems />
            </Col>

            <Col span={24}>
              <SelectBoxFlagItems />
            </Col>

            <Col span={24}>
              <SelectBoxLogoItems />
            </Col>

            <Col span={24}>
              <SelectBoxAvatarItems />
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={24}>
        <Card className="hp-border-color-black-40 hp-pb-48">
          <span className="h4 hp-d-block hp-mb-8">Boxed Usage</span>
          <p className="hp-mb-48 hp-p1-body">These select boxed can be used varius selections</p>

          <Row gutter={[0, 48]}>
            <Col span={24}>
              <SelectBoxBoxedProductItems />
            </Col>
     
            <Col span={24}>
              <SelectBoxBoxedFlagItems />
            </Col>
     
            <Col span={24}>
              <SelectBoxBoxedUserItems />
            </Col>
     
            <Col span={24}>
              <SelectBoxBoxedLogoItems />
            </Col>
     
            <Col span={24}>
              <SelectBoxBoxedIllustrationItems />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
