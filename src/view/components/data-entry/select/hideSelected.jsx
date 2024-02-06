import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { hideSelected } from "./code.js";

import { Select, Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function SelectHideSelected() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [selectedItems, setSelectedItems] = useState([])
  const options = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

  const handleChange = selectedItems => {
    setSelectedItems(selectedItems);
  };

  const filteredOptions = options.filter(o => !selectedItems.includes(o));

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Hide Already Selected</h4>
          <p className="hp-p1-body">Hide already selected options in the dropdown.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Select
            mode="multiple"
            placeholder="Inserted are removed"
            value={selectedItems}
            onChange={handleChange}
            style={{ width: '100%' }}
          >
            {filteredOptions.map(item => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {hideSelected}
        </SyntaxHighlighter>
      )}
    </Card >
  );
}
