import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicCalendar from "./basic";
import NoticeCalendar from "./notice";
import CardCalendar from "./cardCalendar";

export default function Calendar() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Calendar"
          desc="Container for displaying data in calendar form."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Calendar",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicCalendar />
      </Col>

      <Col span={24}>
        <NoticeCalendar />
      </Col>

      <Col span={24}>
        <CardCalendar />
      </Col>
    </Row>
  );
}
