import React from "react";

import { useSelector } from "react-redux";

import { Row, Col } from "antd";

import image1 from "../../../../assets/images/illustrations/ab-testing.svg";
import image2 from "../../../../assets/images/illustrations/welcome.svg";
import image3 from "../../../../assets/images/illustrations/share.svg";
import image4 from "../../../../assets/images/illustrations/bring-solutions.svg";

import imageDark1 from "../../../../assets/images/illustrations/ab-testing-dark.svg";
import imageDark2 from "../../../../assets/images/illustrations/welcome-dark.svg";
import imageDark3 from "../../../../assets/images/illustrations/share-dark.svg";
import imageDark4 from "../../../../assets/images/illustrations/bring-solutions-dark.svg";

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxBoxedIllustrationItems() {
  const theme = useSelector(state => state.customise.theme)

  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">Illustrations</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Illustrations</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-1-1"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark1 : image1}
                imageHeight={200}
                title={<span className="h5">A/B Testing</span>}
                subTitle="Pages"
                badge={<span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">New Services</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-1-2"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark2 : image2}
                imageHeight={200}
                title={<span className="h5">User Interview</span>}
                subTitle="Research"
                badge={<span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">New Services</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-1-3"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark3 : image3}
                imageHeight={200}
                title={<span className="h5">Ads Performance</span>}
                subTitle="Pages"
                badge={<span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">New Services</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-1-4"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark4 : image4}
                imageHeight={200}
                title={<span className="h5">Project Management</span>}
                subTitle="Pages"
                badge={<span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">New Services</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Illustrations</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-2-1"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark1 : image1}
                imageHeight={200}
                title={<span className="h5">A/B Testing</span>}
                badge={<span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">New Services</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-2-2"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark2 : image2}
                imageHeight={200}
                title={<span className="h5">User Interview</span>}
                badge={<span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">New Services</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-2-3"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark3 : image3}
                imageHeight={200}
                title={<span className="h5">Ads Performance</span>}
                badge={<span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">New Services</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-2-4"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark4 : image4}
                imageHeight={200}
                title={<span className="h5">Project Management</span>}
                badge={<span className="hp-text-color-primary-1 hp-text-color-dark-primary-2">New Services</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Illustrations</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-3-1"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark1 : image1}
                imageHeight={200}
                title={<span className="h5">A/B Testing</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-3-2"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark2 : image2}
                imageHeight={200}
                title={<span className="h5">User Interview</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-3-3"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark3 : image3}
                imageHeight={200}
                title={<span className="h5">Ads Performance</span>}
              />
            </Col>

            <Col span={24} md={12} lg={6} xl={5}>
              <SelectBoxItem
                id="select-box-boxed-illustration-item-3-4"
                name="select-box-item"
                type="boxed"
                image={theme === "dark" ? imageDark4 : image4}
                imageHeight={200}
                title={<span className="h5">Project Management</span>}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
