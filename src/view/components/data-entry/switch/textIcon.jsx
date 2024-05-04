import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { texticon } from "./code.js";

import { Card, Row, Col, Switch, Button } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function SwitchTextIcon() {
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
          <h4>Text & icon</h4>
          <p className="hp-p1-body">With text and icon.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={12}>
          <Switch
            checkedChildren="On"
            unCheckedChildren="Off"
            defaultChecked
            className="hp-mb-16"
          />
          <br />
          <Switch
            checkedChildren="On"
            className="hp-mb-16"
            unCheckedChildren="Off"
          />
          <br />
          <Switch
            checkedChildren={<CloseOutlined />}
            unCheckedChildren={<CheckOutlined />}
            defaultChecked
          />
        </Col>
      </Row>
      
      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {texticon}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
