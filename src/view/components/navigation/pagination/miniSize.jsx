import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { miniSize } from "./code.js";

import { Card, Row, Col, Pagination, Divider, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function PaginationMiniSize() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function showTotal(total) {
    return `Total ${total} items`;
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Mini size</h4>
          <p className="hp-p1-body">Mini size pagination.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Pagination size="small" total={50} className="hp-mb-16" />

          <Divider />

          <Pagination
            size="small"
            total={50}
            showSizeChanger
            showQuickJumper
            className="hp-mb-16"
          />

          <Divider />

          <Pagination
            size="small"
            total={50}
            showTotal={showTotal}
            className="hp-mb-16"
          />

          <Divider />

          <Pagination
            size="small"
            total={50}
            disabled
            showTotal={showTotal}
            showSizeChanger
            showQuickJumper
          />
        </Col>
      </Row>
      
      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {miniSize}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
