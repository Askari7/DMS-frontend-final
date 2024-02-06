import React from "react";

import { Card, Row, Col, Button, Avatar } from "antd";
import { RiGhostSmileLine } from "react-icons/ri";
import { User } from "react-iconly";

import userImg from "../../../../../assets/images/memoji/memoji-1.png";

export default function AttendenceCard() {
  return (
    <Card className="hp-border-color-black-40 hp-card-1">
      <Row>
        <Col span={24} className="hp-mb-16">
          <Row align="top">
            <RiGhostSmileLine
              className="hp-text-color-primary-1 hp-mr-8"
              size={24}
            />

            <h5 className="hp-mb-0">Attendence</h5>
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

            <Button className="hp-float-right" size="small" type="text">

              View details
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
