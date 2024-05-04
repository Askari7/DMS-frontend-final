import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coordinate } from "./code.js";

import { Select, Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

const { Option } = Select;

export default function SelectCoordinate() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const provinceData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>coordinate</h4>
          <p className="hp-p1-body">Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated. <br /> Using the Cascader component is strongly recommended instead as it is more flexible and capable.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Select className="hp-mr-16" defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
            {provinceData.map(province => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>

          <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
            {cities.map(city => (
              <Option key={city}>{city}</Option>
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
          {coordinate}
        </SyntaxHighlighter>
      )}
    </Card >
  );
}
