import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { badgeSizes } from "./code.js";

import { Card, Row, Col, Badge, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function BadgeSizes() {
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
          <h4>Size</h4>
          <p className="hp-p1-body">Set size of numeral Badge.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col>
              <Badge size="default" count={5}></Badge>
            </Col>

            <Col>
              <Badge size="small" count={5}></Badge>
            </Col>
          </Row>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {badgeSizes}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
