import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicAvatar from "./basic";
import AvatarTypes from "./types";
import AvatarBadge from "./avatarBadge";
import AvatarResponsive from "./responsiveAvatar";
import AvatarGroup from "./avatarGroup";

export default function Avatar() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Avatar"
          desc="Avatars can be used to represent people or objects. It supports images, Icons, or letters."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Display",
            },
            {
              title: "Avatar",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicAvatar />
      </Col>

      <Col span={24}>
        <AvatarGroup />
      </Col>

      <Col span={24}>
        <AvatarTypes />
      </Col>

      <Col span={24}>
        <AvatarBadge />
      </Col>

      <Col span={24}>
        <AvatarResponsive />
      </Col>
    </Row>
  );
}
