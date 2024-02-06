import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { cardCalendar } from "./code.js";

import { Card, Row, Col, Calendar, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function CardCalendar() {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

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
          <h4>Card</h4>
          <p className="hp-p1-body">
            Nested inside a container element for rendering in limited space.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col>
          <div className="calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {cardCalendar}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
