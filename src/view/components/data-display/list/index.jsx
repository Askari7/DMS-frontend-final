import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicList from "./basic";
import ListLoadMore from "./loadMore";
import ListVertical from "./vertical";

export default function List() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="List"
          desc="Simple List."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "List",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicList />
      </Col>

      <Col span={24}>
        <ListLoadMore />
      </Col>

      <Col span={24}>
        <ListVertical />
      </Col>
    </Row>
  );
}
