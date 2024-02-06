import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { error } from "./code.js";

import { Card, Row, Col, Result, Button, Typography } from "antd";
import {
  RiCloseCircleFill,
  RiCloseCircleLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

const { Paragraph, Text } = Typography;

export default function ErrorResult() {
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
              <h4>Error</h4>
              <p className="hp-p1-body">Complex error feedback.</p>
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

        <Col
          span={24}
          className="hp-result-col"
        >
          <Result
            className="hp-px-sm-8 hp-pb-32"
            status="error"
            title={<h3 className="hp-mb-32">Submission Failed</h3>}
            icon={<RiCloseCircleFill className="remix-icon" />}
            extra={null}
          >
            <div className="desc">
              <Paragraph>
                <Text className="h5">
                  The content you submitted has the following error:
                </Text>
              </Paragraph>

              <Paragraph>
                <RiCloseCircleLine className="remix-icon hp-text-color-danger-1 hp-mr-8" />
                Your account has been frozen. <a href="#">Thaw immediately &gt;</a>
              </Paragraph>

              <Paragraph>
                <RiCloseCircleLine className="remix-icon hp-text-color-danger-1 hp-mr-8" />
                Your account is not yet eligible to apply.
                <a href="#">Apply Unlock &gt;</a>
              </Paragraph>
            </div>
          </Result>

          <div className="hp-result-button hp-text-center hp-mb-48">
            <Button type="primary">
              Go Console
            </Button>

            <Button className="hp-ml-8" ghost>
              Buy Again
            </Button>
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {error}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
