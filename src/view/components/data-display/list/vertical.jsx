import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vertical } from "./code.js";

import { Card, Row, Col, List, Avatar, Space, Button } from "antd";
import {
  RiThumbUpLine,
  RiMessage3Line,
  RiStarLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

import user from "../../../../assets/images/memoji/memoji-1.png";

export default function ListVertical() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: "/",
      title: `Yoda part ${i}`,
      avatar: `${user}`,

      description:
        "Yoda Design, a design language for background applications, is refined by jobconnect UED Team",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {icon}
      {text}
    </Space>
  );

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Vertical</h4>
          <p className="hp-p1-body">
            Set the itemLayout property to vertical to create a vertical list.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listData}
            footer={
              <div>
                <b>Special</b> footer part
              </div>
            }
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    icon={<RiStarLine className="remix-icon" />}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={<RiThumbUpLine className="remix-icon" />}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={<RiMessage3Line className="remix-icon" />}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {vertical}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}