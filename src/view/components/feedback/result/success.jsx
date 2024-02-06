import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { success } from "./code.js";

import { Card, Row, Col, Result, Button } from "antd";
import { RiCheckboxCircleFill, RiCodeSSlashLine } from "react-icons/ri";

export default function SuccessResult() {
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
              <h4>Success</h4>
              <p className="hp-p1-body">Show successful results.</p>
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
          <Result
            className="hp-px-sm-8"
            status="success"
            title={<h3>Successfully Purchased Cloud Server ECS!</h3>}
            icon={<RiCheckboxCircleFill className="remix-icon" />}
            extra={
              <div className="hp-result-button hp-mt-32">
                <Button type="primary">
                  Go Console
                </Button>

                <Button className="hp-ml-8" ghost>
                  Buy Again
                </Button>
              </div>
            }
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {success}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
