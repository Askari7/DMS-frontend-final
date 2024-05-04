import React from "react";

import { Row, Col } from "antd";
import Flags from 'country-flag-icons/react/3x2'

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxBoxedFlagItems() {
  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">Flag</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-1-1"
                name="select-box-item"
                type="boxed"
                icon={<Flags.CH style={{ width: 70 }} />}
                title="Zurich"
                subTitle={<span className="hp-text-color-black-60">Swithzerland</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-1-2"
                name="select-box-item"
                type="boxed"
                icon={<Flags.TR style={{ width: 70 }} />}
                title="Istanbul"
                subTitle={<span className="hp-text-color-black-60">Turkey</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-1-3"
                name="select-box-item"
                type="boxed"
                icon={<Flags.NO style={{ width: 70 }} />}
                title="Oslo"
                subTitle={<span className="hp-text-color-black-60">Norway</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-1-4"
                name="select-box-item"
                type="boxed"
                icon={<Flags.DK style={{ width: 70 }} />}
                title="Copenhagen"
                subTitle={<span className="hp-text-color-black-60">Denmark</span>}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-2-1"
                name="select-box-item"
                type="boxed"
                icon={<Flags.GB style={{ width: 70 }} />}
                title="UK"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-2-2"
                name="select-box-item"
                type="boxed"
                icon={<Flags.US style={{ width: 70 }} />}
                title="USA"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-2-3"
                name="select-box-item"
                type="boxed"
                icon={<Flags.AU style={{ width: 70 }} />}
                title="Australia"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-2-4"
                name="select-box-item"
                type="boxed"
                icon={<Flags.CA style={{ width: 70 }} />}
                title="Canada"
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-3-1"
                name="select-box-item"
                type="boxed"
                icon={<Flags.CH style={{ width: 70 }} />}
                subTitle={<span className="hp-text-color-black-60">Swithzerland</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-3-2"
                name="select-box-item"
                type="boxed"
                icon={<Flags.TR style={{ width: 70 }} />}
                subTitle={<span className="hp-text-color-black-60">Turkey</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-3-3"
                name="select-box-item"
                type="boxed"
                icon={<Flags.NO style={{ width: 70 }} />}
                subTitle={<span className="hp-text-color-black-60">Norway</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-3-4"
                name="select-box-item"
                type="boxed"
                icon={<Flags.DK style={{ width: 70 }} />}
                subTitle={<span className="hp-text-color-black-60">Denmark</span>}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-4-1"
                name="select-box-item"
                type="boxed"
                icon={<Flags.NL style={{ width: 70 }} />}
                title="Netherlands"
                subTitle={<span className="hp-text-color-black-60">Amsterdam</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-4-2"
                name="select-box-item"
                type="boxed"
                icon={<Flags.FR style={{ width: 70 }} />}
                title="France"
                subTitle={<span className="hp-text-color-black-60">Paris</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-4-3"
                name="select-box-item"
                type="boxed"
                icon={<Flags.BE style={{ width: 70 }} />}
                title="Belgium"
                subTitle={<span className="hp-text-color-black-60">Brussels</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-4-4"
                name="select-box-item"
                type="boxed"
                icon={<Flags.IT style={{ width: 70 }} />}
                title="Italy"
                subTitle={<span className="hp-text-color-black-60">Rome</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-5-1"
                name="select-box-item"
                type="boxed"
                icon={<Flags.CH style={{ width: 70 }} />}
                title="Zurich"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-5-2"
                name="select-box-item"
                type="boxed"
                icon={<Flags.TR style={{ width: 70 }} />}
                title="Istanbul"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-5-3"
                name="select-box-item"
                type="boxed"
                icon={<Flags.NO style={{ width: 70 }} />}
                title="Oslo"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-5-4"
                name="select-box-item"
                type="boxed"
                icon={<Flags.DK style={{ width: 70 }} />}
                title="Copenhagen"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-6-1"
                name="select-box-item"
                type="boxed"
                icon={<Flags.UA style={{ width: 70 }} />}
                subTitle={<span className="hp-text-color-black-60">Ukraine</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-6-2"
                name="select-box-item"
                type="boxed"
                icon={<Flags.FR style={{ width: 70 }} />}
                subTitle={<span className="hp-text-color-black-60">France</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-6-3"
                name="select-box-item"
                type="boxed"
                icon={<Flags.RO style={{ width: 70 }} />}
                subTitle={<span className="hp-text-color-black-60">Romania</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-6-4"
                name="select-box-item"
                type="boxed"
                icon={<Flags.BG style={{ width: 70 }} />}
                subTitle={<span className="hp-text-color-black-60">Bulgaria</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-7-1"
                name="select-box-item"
                type="boxed"
                icon={<Flags.VN style={{ width: 70 }} />}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-7-2"
                name="select-box-item"
                type="boxed"
                icon={<Flags.ES style={{ width: 70 }} />}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-7-3"
                name="select-box-item"
                type="boxed"
                icon={<Flags.SA style={{ width: 70 }} />}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-7-4"
                name="select-box-item"
                type="boxed"
                icon={<Flags.CD style={{ width: 70 }} />}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Flag</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-8-1"
                name="select-box-item"
                type="boxed"
                icon={<Flags.VN style={{ width: 70 }} />}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-8-2"
                name="select-box-item"
                type="boxed"
                icon={<Flags.ES style={{ width: 70 }} />}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-8-3"
                name="select-box-item"
                type="boxed"
                icon={<Flags.SA style={{ width: 70 }} />}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-flag-item-8-4"
                name="select-box-item"
                type="boxed"
                icon={<Flags.CD style={{ width: 70 }} />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
