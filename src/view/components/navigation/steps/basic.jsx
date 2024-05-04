import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { basic } from "./code.js";

import { Card, Row, Col, Button, Steps } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

const { Step } = Steps;

export default function BasicSteps() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col lg={12} span={20} className="hp-mb-16">
          <h4>Basic</h4>
          <p className="hp-p1-body">The most basic step bar.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24} className="hp-overflow-scroll hp-scrollbar-x-hidden">
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            
            <Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            
            <Step title="Waiting" description="This is a description." />
          </Steps>
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
