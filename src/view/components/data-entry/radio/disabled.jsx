import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { disable } from "./code.js";

import { Card, Row, Col, Radio, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function DisabledRadio() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }
  const [disabled, setDisabled] = useState(true);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Disabled</h4>
          <p className="hp-p1-body">Radio unavailable.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={12}>
          <Radio defaultChecked={false} disabled={disabled}>
            Disabled
          </Radio>
          
          <Radio defaultChecked disabled={disabled}>
            Disabled
          </Radio>
          <br />
          <Button className="hp-mt-16" type="primary" onClick={toggleDisabled}>
            Toggle disabled
          </Button>
        </Col>
      </Row>
      
      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {disable}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
