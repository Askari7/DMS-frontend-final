import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { icon } from "./code.js";

import { Card, Row, Col, Popconfirm, Button } from "antd";
import { RiErrorWarningLine, RiCodeSSlashLine } from "react-icons/ri";

export default function IconPopconfirm() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Customize icon</h4>
              <p className="hp-p1-body">
                Set icon props to customize the icon.
              </p>
            </Col>

            <Col lg={12} span={4} className="hp-text-right">
              <Button
                onClick={toggleChecked}
                type="text"
                icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Popconfirm
            title="Are you sure？"
            icon={
              <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
            }
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {icon}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
