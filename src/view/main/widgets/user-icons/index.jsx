import React from "react";

import { Row, Col } from "antd";

import userImage1 from "../../../../assets/images/users/user-1.svg";
import userImage2 from "../../../../assets/images/users/user-2.svg";
import userImage3 from "../../../../assets/images/users/user-3.svg";
import userImage4 from "../../../../assets/images/users/user-4.svg";
import userImage5 from "../../../../assets/images/users/user-5.svg";
import userImage6 from "../../../../assets/images/users/user-6.svg";
import userImage7 from "../../../../assets/images/users/user-7.svg";
import userImage8 from "../../../../assets/images/users/user-8.svg";
import userImage9 from "../../../../assets/images/users/user-9.svg";
import userImage10 from "../../../../assets/images/users/user-10.svg";
import userImage11 from "../../../../assets/images/users/user-11.svg";
import userImage12 from "../../../../assets/images/users/user-12.svg";
import userImage13 from "../../../../assets/images/users/user-13.svg";
import userImage14 from "../../../../assets/images/users/user-14.svg";
import userImage15 from "../../../../assets/images/users/user-15.svg";
import userImage16 from "../../../../assets/images/users/user-16.svg";
import userImage17 from "../../../../assets/images/users/user-17.svg";
import userImage18 from "../../../../assets/images/users/user-18.svg";
import userImage19 from "../../../../assets/images/users/user-19.svg";
import userImage20 from "../../../../assets/images/users/user-20.svg";
import userImage21 from "../../../../assets/images/users/user-21.svg";

import PageContent from "../../../../layout/components/content/page-content";
import UserIconItem from "./userIconItem";

export default function UserIcons() {
  const data = [
    {
      image: userImage1,
    },
    {
      image: userImage2,
    },
    {
      image: userImage3,
    },
    {
      image: userImage4,
    },
    {
      image: userImage5,
    },
    {
      image: userImage6,
    },
    {
      image: userImage7,
    },
    {
      image: userImage8,
    },
    {
      image: userImage9,
    },
    {
      image: userImage10,
    },
    {
      image: userImage11,
    },
    {
      image: userImage12,
    },
    {
      image: userImage13,
    },
    {
      image: userImage14,
    },
    {
      image: userImage15,
    },
    {
      image: userImage16,
    },
    {
      image: userImage17,
    },
    {
      image: userImage18,
    },
    {
      image: userImage19,
    },
    {
      image: userImage20,
    },
    {
      image: userImage21,
    },
  ]

  return (
    <Row gutter={[32, 32]} className="hp-mb-48">
      <Col span={24}>
        <PageContent
          title="User Icons"
          desc="Special user icon set for you."
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "User Icons",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          {data.map((item, index) => (
            <Col xl={4} lg={6} md={8} span={12} key={index}>
              <UserIconItem
                image={item.image}
                imageHeight={64}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}