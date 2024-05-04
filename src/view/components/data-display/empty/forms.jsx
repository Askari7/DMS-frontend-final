import React, { useState } from "react";
import { useSelector } from "react-redux";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { forms } from "./code.js";

import { Card, Row, Col, Button, Empty } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

import emptyImage from "../../../../assets/images/illustrations/empty-forms.svg";
import emptyImageDark from "../../../../assets/images/illustrations/empty-forms-dark.svg";

export default function EmptyForms() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  // Theme
  const theme = useSelector(state => state.customise.theme)

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Forms</h4>
          <p className="hp-p1-body">
            Empty Forms
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
            image={theme === "dark" ? emptyImageDark : emptyImage}
            imageStyle={{
              height: 150,
            }}
            description={false}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {forms}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
