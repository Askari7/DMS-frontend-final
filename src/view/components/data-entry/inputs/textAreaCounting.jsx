import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { textareacounting } from "./code.js";

import { Card, Row, Col, Input, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

const { TextArea } = Input;

export default function TextAreaCounting() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Textarea with Character Counting</h4>
          <p className="hp-p1-body">Show character counting.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <TextArea
            rows={4}
            placeholder="Pleaceholder Text"
            showCount
            maxLength={100}
            onChange={onChange}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {textareacounting}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
