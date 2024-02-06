import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicModal from "./basic";
import InfoModal from "./info";
import CustomizeWidthModal from "./customizeWidth";
import PositionModal from "./position";
import ConfirmationModal from "./confirmation";
import YodaModal from "./yoda";

export default function Modal() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Modal"
          desc="Modal dialogs."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Feedback",
            },
            {
              title: "Modal",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicModal />
      </Col>

      <Col span={24}>
        <InfoModal />
      </Col>

      <Col span={24}>
        <CustomizeWidthModal />
      </Col>

      <Col span={24}>
        <ConfirmationModal />
      </Col>

      <Col span={24}>
        <PositionModal />
      </Col>

      <Col span={24}>
        <YodaModal />
      </Col>
    </Row>
  );
}
