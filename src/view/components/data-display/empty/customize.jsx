import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { customize } from "./code.js";

import { Card, Row, Col, Button, Empty } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

import girlandcat from "../../../../assets/images/illustrations/girlandcat.svg";

export default function EmptyChooseImage() {
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
          <h4>Customize</h4>
          <p className="hp-p1-body">
            Customize image source, image size, description and extra content.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Empty
            className="hp-my-8"
            image={girlandcat}
            imageStyle={{
              height: 240,
            }}
            description={
              <span className="hp-text-color-dark-30">Select workout plan</span>
            }
          >
            <Button type="primary">Start Now</Button>
          </Empty>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {customize}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
