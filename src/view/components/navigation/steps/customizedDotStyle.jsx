import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { customized } from "./code.js";

import { Card, Row, Col, Popover, Steps, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

const { Step } = Steps;

export default function StepsCustomizedDotStyle() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          Step: {index} Status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col lg={12} span={20} className="hp-mb-16">
          <h4>Customized Dot Style</h4>
          <p className="hp-p1-body">
            You can customize the display for Steps with progress dot style.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24} className="hp-overflow-scroll hp-scrollbar-x-hidden hp-pt-4">
          <Steps current={1} progressDot={customDot}>
            <Step title="Finished" description="You can hover on the dot." />
            <Step title="In Progress" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
          </Steps>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {customized}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
