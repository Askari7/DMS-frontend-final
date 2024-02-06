import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { basic } from "./code.js";

import { Card, Row, Col, List, Avatar, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

import user from "../../../../assets/images/memoji/memoji-1.png";

export default function BasicList() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const data = [
    {
      title: "Yoda Admin Title 1",
    },
    {
      title: "Yoda Admin Title 2",
    },
    {
      title: "Yoda Admin Title 3",
    },
    {
      title: "Yoda Admin Title 4",
    },
  ];

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Basic List</h4>
          <p className="hp-p1-body">Basic List.</p>
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
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={user} />}
                  title={
                    <a href="#">{item.title}</a>
                  }
                  description="Yoda Design, a design language for background applications, is refined by jobconnect UED Team"
                />
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
          {basic}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
