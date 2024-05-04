import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { gradientButton } from "./code.js";

import { Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function GradientButtons() {
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
          <h4>Gradient Buttons</h4>
          <p className="hp-p1-body">
            There are gradient button in Yoda.
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
          <Button className="hp-btn-gradient hp-btn-gradient-primary hp-mr-16 hp-mb-16">
            Primary Button
          </Button>

          <Button className="hp-btn-gradient hp-btn-gradient-secondary hp-mr-16 hp-mb-16">
            Secondary Button
          </Button>

          <Button className="hp-btn-gradient hp-btn-gradient-danger hp-mr-16 hp-mb-16">
            Danger Button
          </Button>

          <Button className="hp-btn-gradient hp-btn-gradient-info hp-mr-16 hp-mb-16">
            Info Button
          </Button>

          <Button className="hp-btn-gradient hp-btn-gradient-success hp-mr-16 hp-mb-16">
            Success Button
          </Button>

          <Button className="hp-btn-gradient hp-btn-gradient-warning hp-mr-16 hp-mb-16">
            Warning Button
          </Button>

          <Button className="hp-btn-gradient hp-btn-gradient-dark hp-mr-16 hp-mb-16">
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
          {gradientButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
