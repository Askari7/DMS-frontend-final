import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { customize } from "./code.js";

import { Card, Row, Col, Rate, Button } from "antd";
import {
  RiEmotionLine,
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionHappyLine,
  RiEmotionLaughLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

export default function RateCustomizeCharacter() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const customIcons = {
    1: <RiEmotionUnhappyLine size={24} />,
    2: <RiEmotionNormalLine size={24} />,
    3: <RiEmotionHappyLine size={24} />,
    4: <RiEmotionLine size={24} />,
    5: <RiEmotionLaughLine size={24} />,
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Customize character</h4>
          <p className="hp-p1-body">
            Can customize each character using (RateProps) => ReactNode.
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
          <Rate defaultValue={2} character={({ index }) => index + 1} />
          <br />
          <br />
          <Rate
            defaultValue={3}
            character={({ index }) => customIcons[index + 1]}
          />
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
