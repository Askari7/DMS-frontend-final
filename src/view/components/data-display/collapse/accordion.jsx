import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { accordion } from "./code.js";

import { Card, Row, Col, Collapse, Tag, Button } from "antd";
import {
  RiBasketballLine,
  RiArrowRightSLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

const { Panel } = Collapse;

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.";

export default function AccordionCard() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const genExtra = () => (
    <RiArrowRightSLine
      size={24}
      className="hp-collapse-arrow hp-text-color-black-60"
    />
  );

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Accordion</h4>
              <p className="hp-p1-body">
                In accordion mode, only one panel can be expanded at a time.
              </p>
            </Col>

            <Col lg={12} span={4} className="hp-text-right">
              <Button
                onClick={toggleChecked}
                type="text"
                icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Collapse accordion>
            <Panel
              header={
                <p className="hp-d-flex-center hp-p1-body hp-mb-0">
                  <RiBasketballLine
                    size={24}
                    className="remix-icon hp-text-color-primary-1 hp-mr-18"
                  />
                  <span>Lorem Ipsum Collapse Title</span>
                  <Tag className="hp-ml-16" color="blue">
                    Tag
                  </Tag>
                </p>
              }
              key="1"
              showArrow={false}
              extra={genExtra()}
            >
              <p className="hp-p1-body">{text}</p>
            </Panel>

            <Panel
              header={
                <p className="hp-d-flex-center hp-p1-body hp-mb-0">
                  <RiBasketballLine
                    size={24}
                    className="remix-icon hp-text-color-primary-1 hp-mr-18"
                  />
                  <span>Lorem Ipsum Collapse Title</span>
                  <Tag className="hp-ml-16" color="blue">
                    Tag
                  </Tag>
                </p>
              }
              key="2"
              showArrow={false}
              extra={genExtra()}
            >
              <p className="hp-p1-body">{text}</p>
            </Panel>

            <Panel
              header={
                <p className="hp-d-flex-center hp-p1-body hp-mb-0">
                  <RiBasketballLine
                    size={24}
                    className="remix-icon hp-text-color-primary-1 hp-mr-18"
                  />
                  <span>Lorem Ipsum Collapse Title</span>
                  <Tag className="hp-ml-16" color="blue">
                    Tag
                  </Tag>
                </p>
              }
              key="3"
              showArrow={false}
              extra={genExtra()}
            >
              <p className="hp-p1-body">{text}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {accordion}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}