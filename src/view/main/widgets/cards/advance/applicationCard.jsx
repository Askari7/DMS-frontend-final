import React from "react";

import { Card, Row, Col, Avatar } from "antd";
import { RiArrowRightLine } from "react-icons/ri";
import { User } from "react-iconly";

import userImg from "../../../../../assets/images/memoji/memoji-1.png";

export default function ApplicationCard() {
  return (
    <Card className="hp-border-color-black-40 hp-card-1">
      <Row>
        <Col span={24} className="hp-mb-4">
          <Row align="top" justify="space-between">
            <h2 className="hp-mb-0">18 Application</h2>
          </Row>
        </Col>

        <Col span={24}>
          <Row align="middle" justify="space-between">
            <Avatar.Group
              size="small"
              maxCount={5}
              maxStyle={{
                color: "#FF0022",
                backgroundColor: "#FFE7EA",
              }}
            >
              <Avatar src={userImg} />

              <Avatar
                className="hp-text-color-danger-1"
                style={{
                  backgroundColor: "#FFE7EA",
                }}
              >
                A
              </Avatar>

              <Avatar
                className="hp-text-color-black-100"
                style={{
                  backgroundColor: "#F0F3F5",
                }}
                icon={<User set="curved" className="remix-icon" size={14} />}
              />

              <Avatar
                className="hp-text-color-info-1"
                style={{
                  backgroundColor: "#EAFCFF",
                }}
              >
                W
              </Avatar>

              <Avatar
                className="hp-text-color-warning-1"
                style={{
                  backgroundColor: "#FFF9E9",
                }}
              >
                X
              </Avatar>

              <Avatar
                className="hp-text-color-danger-1"
                style={{
                  backgroundColor: "#FFE7EA",
                }}
              >
                M
              </Avatar>

              <Avatar
                className="hp-text-color-secondary-1"
                style={{
                  backgroundColor: "#FDEFFC",
                }}
              >
                Y
              </Avatar>
            </Avatar.Group>

            <RiArrowRightLine className="hp-text-color-primary-1" size={24} />
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
