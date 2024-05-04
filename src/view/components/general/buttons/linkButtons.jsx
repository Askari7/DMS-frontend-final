import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { linkButton } from "./code.js";

import { Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function LinkButtons() {
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
          <h4>Link Buttons</h4>
          <p className="hp-p1-body">
            There are link button in Yoda.
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
          <Button type="link" className="hp-mr-16 hp-mb-16">
            Primary Button
          </Button>

          <Button type="link" className="hp-text-color-secondary-1 hp-hover-text-color-secondary-3 hp-mr-16 hp-mb-16">
            Secondary Button
          </Button>

          <Button type="link" className="hp-text-color-danger-1 hp-hover-text-color-danger-3 hp-mr-16 hp-mb-16">
            Danger Button
          </Button>

          <Button type="link" className="hp-text-color-info-1 hp-hover-text-color-info-3 hp-mr-16 hp-mb-16">
            Info Button
          </Button>

          <Button type="link" className="hp-text-color-success-1 hp-hover-text-color-success-3 hp-mr-16 hp-mb-16">
            Success Button
          </Button>

          <Button type="link" className="hp-text-color-warning-1 hp-hover-text-color-warning-3 hp-mr-16 hp-mb-16">
            Warning Button
          </Button>

          <Button type="link" className="hp-text-color-black-100 hp-hover-text-color-black-60 hp-mr-16 hp-mb-16">
            Dark Button
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {linkButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
