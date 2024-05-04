import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../layout/components/content/page-content";
import BasicInput from "./basic";
import InputSizes from "./sizes";
import PrePostTab from "./prePostTab";
import SearchBox from "./searchBox";
import TextAreaItem from "./textArea";
import TextAreaCounting from "./textAreaCounting";
import PrefixSuffix from "./prefixSuffix";

export default function Inputs() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Inputs"
          desc="A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page"
            },
            {
              title: "Data Entry",
            },
            {
              title: "Inputs",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <BasicInput />
      </Col>

      <Col span={24}>
        <PrePostTab />
      </Col>

      <Col span={24}>
        <TextAreaItem />
      </Col>

      <Col span={24}>
        <TextAreaCounting />
      </Col>

      <Col span={24}>
        <InputSizes />
      </Col>

      <Col span={24}>
        <SearchBox />
      </Col>

      <Col span={24}>
        <PrefixSuffix />
      </Col>
    </Row>
  );
}
