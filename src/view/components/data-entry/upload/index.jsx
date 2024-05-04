import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import ClickUpload from "./click";
import FileListUpload from "./fileList";
import PicturesListUpload from "./picturesList";
import AvatarUpload from "./avatar";
import PicturesWallUpload from "./picturesWall";
import DragUpload from "./drag";

export default function Upload() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Upload"
          desc="Upload file by selecting or dragging."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Upload",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <ClickUpload />
      </Col>

      <Col span={24}>
        <FileListUpload />
      </Col>

      <Col span={24}>
        <PicturesListUpload />
      </Col>

      <Col span={24}>
        <AvatarUpload />
      </Col>

      <Col span={24}>
        <PicturesWallUpload />
      </Col>

      <Col span={24}>
        <DragUpload />
      </Col>
    </Row>
  );
}
