import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { fixedHeader } from "./code.js";

import { Table, Row, Col, Card, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function FixedHeaderTable() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: 'John Brown ' + i,
      age: 32,
      address: 'London, Park Lane no. ' + i,
    });
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={15} span={20}>
          <h4>Fixed Header</h4>
          <p className="hp-p1-body">
            Display large amounts of data in scrollable view.
          </p>
        </Col>

        <Col lg={9} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x: 500, y: 240 }} />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {fixedHeader}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
