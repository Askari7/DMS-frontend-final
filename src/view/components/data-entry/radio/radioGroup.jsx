import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { group } from "./code.js";

import { Card, Row, Col, Radio, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function RadioGroup() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Radio Group</h4>
          <p className="hp-p1-body">A group of radio components.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={12}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Radio</Radio>
            <Radio value={2}>Radio</Radio>
            <Radio value={3}>Radio</Radio>
            <Radio value={4}>Radio</Radio>
          </Radio.Group>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {group}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
