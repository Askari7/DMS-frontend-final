import React from "react";

import { Row, Col } from "antd";

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxFlatItems() {
  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">Flat</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flat</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-1"
                name="select-box-item"
                title="Pink Xbox Controller"
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-2"
                name="select-box-item"
                title="Pink Xbox Controller"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flat</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-3"
                name="select-box-item"
                title="Pink Xbox Controller"
                info={<span>From €40/mo. <br /> or € 200</span>}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-4"
                name="select-box-item"
                title="Pink Xbox Controller"
                info={<span>From €40/mo. <br /> or € 200</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flat</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-5"
                name="select-box-item"
                title="Pink Xbox Controller"
                subTitle="Microsoft"
                info={<span>From €40/mo. <br /> or € 200</span>}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-6"
                name="select-box-item"
                title="Pink Xbox Controller"
                subTitle="Microsoft"
                info={<span>From €40/mo. <br /> or € 200</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flat</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-7"
                name="select-box-item"
                title="Pink Xbox Controller"
                subTitle="Microsoft"
                info={<span>From €40/mo. <br /> or € 200</span>}
                description={[
                  "Xbox one compatible.",
                  "Xbox series X and S compatible.",
                  "Featuring sculpted surfaces and refined geometry for enhanced comfort.",
                  "Seamlessly capture and share content such as screenshots, recordings.",
                  "This product comes with a minimum one year manufacturer’s guarantee",
                  "Stay on target with the hybrid D-pad, textured",
                ]}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-8"
                name="select-box-item"
                title="Pink Xbox Controller"
                subTitle="Microsoft"
                info={<span>From €40/mo. <br /> or € 200</span>}
                description={[
                  "Xbox one compatible.",
                  "Xbox series X and S compatible.",
                  "Featuring sculpted surfaces and refined geometry for enhanced comfort.",
                  "Seamlessly capture and share content such as screenshots, recordings.",
                  "This product comes with a minimum one year manufacturer’s guarantee",
                  "Stay on target with the hybrid D-pad, textured",
                ]}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-9"
                name="select-box-item"
                title="Main Office"
                subTitle="London"
                info={<span className="h5 hp-text-underline hp-cursor-pointer">Change</span>}
                description={[
                  "151 West Green Road, Seven Sisters, London United Kingdom, N15 5EA",
                  <a href='mailto:hi-london@jobconnect.studio' className="hp-text-color-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-primary-2">hi-london@jobconnect.studio</a>,
                  <a href='tel:+‭447597201543‬' className="hp-text-color-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-primary-2">‭+44-7597-201543‬</a>,
                ]}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-item-10"
                name="select-box-item"
                title="Branch Office"
                subTitle="Turkey"
                info={<span className="h5 hp-text-underline hp-cursor-pointer">Change</span>}
                description={[
                  "Barbaros Mah. Begonya Sok. No: 3 Nidakule Ataşehir Kuzey Kat: 7 Ofis: 101, 34746 Ataşehir",
                  <a href='mailto:hi-london@jobconnect.studio' className="hp-text-color-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-primary-2">hi-london@jobconnect.studio</a>,
                  <a href='tel:+‭447597201543‬' className="hp-text-color-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-primary-2">‭+44-7597-201543‬</a>,
                ]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
