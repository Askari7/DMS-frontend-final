import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicComment from "./basic";
import CommentListUsage from "./listUsage";
import CommentReplyEditor from "./replyEditor";

export default function Comment() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Comment"
          desc="A comment displays user feedback and discussion to website content."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Comment",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicComment />
      </Col>

      <Col span={24}>
        <CommentListUsage />
      </Col>

      <Col span={24}>
        <CommentReplyEditor />
      </Col>
    </Row>
  );
}
