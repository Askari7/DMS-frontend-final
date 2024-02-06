import React from "react";

import { Row, Col } from "antd";
import Flags from 'country-flag-icons/react/3x2'

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxFlagItems() {
  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">Flag</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-flag-item-1"
                name="select-box-item"
                icon={<Flags.CH style={{ width: 50 }} />}
                title="Zurich"
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-flag-item-2"
                name="select-box-item"
                icon={<Flags.CH style={{ width: 50 }} />}
                title="Zurich"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-flag-item-3"
                name="select-box-item"
                icon={<Flags.CH style={{ width: 50 }} />}
                title="Zurich"
                info={<span>From €40/person <br /> to € 60/person</span>}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-flag-item-4"
                name="select-box-item"
                icon={<Flags.CH style={{ width: 50 }} />}
                title="Zurich"
                info={<span>From €40/person <br /> to € 60/person</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-flag-item-5"
                name="select-box-item"
                icon={<Flags.CH style={{ width: 50 }} />}
                title="Zurich"
                subTitle="Switzerland"
                info={<span>From €40/person <br /> to € 60/person</span>}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-flag-item-6"
                name="select-box-item"
                icon={<Flags.CH style={{ width: 50 }} />}
                title="Zurich"
                subTitle="Switzerland"
                info={<span>From €40/person <br /> to € 60/person</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-flag-item-7"
                name="select-box-item"
                icon={<Flags.CH style={{ width: 50 }} />}
                title="Zurich"
                subTitle="Switzerland"
                info={<span>From €40/person <br /> to € 60/person</span>}
                description={[
                  "Free cancellation",
                  "Covid-19 precautions",
                  "Mobile ticketing",
                  "Duration 3.5 hours",
                  "Instant confirmation",
                  "Live tour guide(English, Spanish)",
                ]}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-flag-item-8"
                name="select-box-item"
                icon={<Flags.CH style={{ width: 50 }} />}
                title="Zurich"
                subTitle="Switzerland"
                info={<span>From €40/person <br /> to € 60/person</span>}
                description={[
                  "Free cancellation",
                  "Covid-19 precautions",
                  "Mobile ticketing",
                  "Duration 3.5 hours",
                  "Instant confirmation",
                  "Live tour guide(English, Spanish)",
                ]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
