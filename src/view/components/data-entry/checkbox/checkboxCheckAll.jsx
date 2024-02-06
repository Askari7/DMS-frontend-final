import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { checkall } from "./code.js";

import { Card, Row, Col, Checkbox, Divider, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function CheckboxCheckAll() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Check all</h4>
          <p className="hp-p1-body">
            The indeterminate property can help you to achieve a 'check all'
            effect.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24} className="hp-mb-24">
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>

          <Divider />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {checkall}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
