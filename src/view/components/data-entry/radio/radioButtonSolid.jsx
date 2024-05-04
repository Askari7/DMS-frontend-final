import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { solid } from "./code.js";

import { Card, Row, Col, Radio, Space, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function RadioButtonSolid() {
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
          <h4>Solid Radio Button</h4>
          <p className="hp-p1-body">Solid radio button style.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Space direction="vertical">
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">Istanbul</Radio.Button>
              <Radio.Button value="b">London</Radio.Button>
              <Radio.Button value="c">Berlin</Radio.Button>
              <Radio.Button value="d">Paris</Radio.Button>
            </Radio.Group>

            <Radio.Group
              defaultValue="c"
              buttonStyle="solid"
              style={{ marginTop: 16 }}
            >
              <Radio.Button value="a">Istanbul</Radio.Button>
              <Radio.Button value="b" disabled>London</Radio.Button>
              <Radio.Button value="c">Berlin</Radio.Button>
              <Radio.Button value="d">Paris</Radio.Button>
            </Radio.Group>
          </Space>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {solid}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
