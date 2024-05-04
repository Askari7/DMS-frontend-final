import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { disabledButton } from "./code.js";

import { Card, Row, Col, Button } from "antd";
import { RiArrowRightSLine, RiCodeSSlashLine } from "react-icons/ri";

export default function DisabledButton() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-pb-16" lg={12} span={20}>
          <h4>Disabled Button</h4>
          <p className="hp-p1-body">
            To make a button as disabled, choose the disabled class in variant.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Row align="middle">
          <Col>
            <Button className="hp-mr-16 hp-mb-16" type="primary" disabled>
              Primary Button
            </Button>
          </Col>

          <Col>
            <Button className="hp-mr-16 hp-mb-16" type="primary" icon={<RiArrowRightSLine className="remix-icon" />} disabled>
              Primary Button
            </Button>
          </Col>

          <Col>
            <Button className="hp-mr-16 hp-mb-16" type="text" disabled>
              Text button
            </Button>
          </Col>
        </Row>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {disabledButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
