import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { extrafooter } from "./code.js";

import { Card, Row, Col, DatePicker, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

const { RangePicker } = DatePicker;

export default function DatePickerExtraFooter() {
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
          <h4>Extra Footer</h4>
          <p className="hp-p1-body">
            Render extra footer in panel for customized requirements.
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
          <DatePicker
            renderExtraFooter={() => "extra footer"}
            className="hp-mb-16 hp-mr-16"
          />
          <DatePicker
            className="hp-mb-16 hp-mr-16"
            renderExtraFooter={() => "extra footer"}
            showTime
          />
          <RangePicker
            className="hp-mb-16 hp-mr-16"
            renderExtraFooter={() => "extra footer"}
          />
          <RangePicker
            className="hp-mb-16 hp-mr-16"
            renderExtraFooter={() => "extra footer"}
            showTime
          />
          <DatePicker
            className="hp-mb-16 hp-mr-16"
            renderExtraFooter={() => "extra footer"}
            picker="month"
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {extrafooter}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
