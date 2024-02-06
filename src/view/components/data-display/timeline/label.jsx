import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { label } from "./code.js";

import { Radio, Row, Col, Card, Timeline, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function LabelTimeline() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [mode, setMode] = useState("left");

  const onChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Label</h4>
          <p className="hp-p1-body hp-text-color-dark-30 hp-mb-24">Use label show time alone.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Radio.Group onChange={onChange} value={mode} className="hp-mb-24">
            <Radio value="left">Left</Radio>
            <Radio value="right">Right</Radio>
            <Radio value="alternate">Alternate</Radio>
          </Radio.Group>

          <Timeline mode={mode}>
            <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>

            <Timeline.Item label="2015-09-01 09:12:11">
              Solve initial network problems
            </Timeline.Item>

            <Timeline.Item>Technical testing</Timeline.Item>

            <Timeline.Item label="2015-09-01 09:12:11">
              Network problems being solved
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {label}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
