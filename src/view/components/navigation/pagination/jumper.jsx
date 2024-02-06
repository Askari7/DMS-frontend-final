import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { jumper } from "./code.js";

import { Card, Row, Col, Pagination, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function PaginationJumper() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function onChange(pageNumber) {
    console.log("Page: ", pageNumber);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Jumper</h4>
          <p className="hp-p1-body">Jump to a page directly.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
          />
          
          <br />
          
          <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            disabled
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {jumper}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
