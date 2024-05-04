import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicPagination from "./basic";
import PaginationMore from "./more";
import PaginationChanger from "./changer";
import PaginationJumper from "./jumper";
import PaginationMiniSize from "./miniSize";
import PaginationSimpleMode from "./simpleMode";
import PaginationPrevNext from "./prevNext";

export default function Pagination() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Pagination"
          desc="A long list can be divided into several pages using Pagination, and only one page will be loaded at a time."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Navigation",
            },
            {
              title: "Pagination",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicPagination />
      </Col>

      <Col span={24}>
        <PaginationMore />
      </Col>

      <Col span={24}>
        <PaginationChanger />
      </Col>

      <Col span={24}>
        <PaginationJumper />
      </Col>

      <Col span={24}>
        <PaginationMiniSize />
      </Col>

      <Col span={24}>
        <PaginationSimpleMode />
      </Col>

      <Col span={24}>
        <PaginationPrevNext />
      </Col>
    </Row>
  );
}
