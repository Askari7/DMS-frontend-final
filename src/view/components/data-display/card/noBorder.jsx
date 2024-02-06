import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { noBorder } from "./code.js";

import { Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function CardNoBorder() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>No Border</h4>
          <p className="hp-p1-body">A borderless card on a gray background.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col xl={12} md={24} sm={24} xs={24}>
          <Card title="Card title" bordered={false} className="hp-elevatior">
            <p className="hp-p1-body">Card content</p>
            <p className="hp-p1-body">Card content</p>
            <p className="hp-p1-body">Card content</p>
          </Card>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {noBorder}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
