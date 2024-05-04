import React from "react";

import { Row, Col } from "antd";

import logoImage from "../../../../assets/images/crypto/bitcoin.png";

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxLogoItems() {
  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">Logo</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-logo-item-1"
                name="select-box-item"
                image={logoImage}
                imageHeight={32}
                title="Bitcoin"
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-logo-item-2"
                name="select-box-item"
                image={logoImage}
                imageHeight={32}
                title="Bitcoin"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-logo-item-3"
                name="select-box-item"
                image={logoImage}
                imageHeight={32}
                title="Bitcoin"
                info={<span>From €40/mo. <br /> or € 200</span>}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-logo-item-4"
                name="select-box-item"
                image={logoImage}
                imageHeight={32}
                title="Bitcoin"
                info={<span>From €40/mo. <br /> or € 200</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-logo-item-5"
                name="select-box-item"
                image={logoImage}
                imageHeight={32}
                title="Bitcoin"
                subTitle="Credit Card"
                info={<span>From €40/mo. <br /> or € 200</span>}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-logo-item-6"
                name="select-box-item"
                image={logoImage}
                imageHeight={32}
                title="Bitcoin"
                subTitle="Credit Card"
                info={<span>From €40/mo. <br /> or € 200</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Logo</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-logo-item-7"
                name="select-box-item"
                image={logoImage}
                imageHeight={32}
                title="Bitcoin"
                subTitle="Credit Card"
                info={<span>From €40/mo. <br /> or € 200</span>}
                description={[
                  "Enim est.",
                  "Tempor donec viverra porttitor.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget a nullam.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia sed ut.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.",
                  "Aenean odio faucibus pellentesque urna.",
                ]}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-logo-item-8"
                name="select-box-item"
                image={logoImage}
                imageHeight={32}
                title="Bitcoin"
                subTitle="Credit Card"
                info={<span>From €40/mo. <br /> or € 200</span>}
                description={[
                  "Enim est.",
                  "Tempor donec viverra porttitor.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget a nullam.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia sed ut.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.",
                  "Aenean odio faucibus pellentesque urna.",
                ]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
