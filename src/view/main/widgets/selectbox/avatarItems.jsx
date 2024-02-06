import React from "react";

import { Row, Col } from "antd";

import userImage from "../../../../assets/images/users/user-1.svg";

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxAvatarItems() {
  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">Avatar</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Avatar</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-avatar-item-1"
                name="select-box-item"
                image={userImage}
                imageType="circle"
                imageHeight={32}
                title="Debi Ç."
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-avatar-item-2"
                name="select-box-item"
                image={userImage}
                imageType="circle"
                imageHeight={32}
                title="Debi Ç."
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Avatar</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-avatar-item-3"
                name="select-box-item"
                image={userImage}
                imageType="circle"
                imageHeight={32}
                title="Debi Ç."
                info={<span className="h5">Get Contact</span>}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-avatar-item-4"
                name="select-box-item"
                image={userImage}
                imageType="circle"
                imageHeight={32}
                title="Debi Ç."
                info={<span className="h5">Get Contact</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Avatar</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-avatar-item-5"
                name="select-box-item"
                image={userImage}
                imageType="circle"
                imageHeight={32}
                title="Debi Ç."
                subTitle="Product Owner"
                info={<span className="h5">Get Contact</span>}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-avatar-item-6"
                name="select-box-item"
                image={userImage}
                imageType="circle"
                imageHeight={32}
                title="Debi Ç."
                subTitle="Product Owner"
                info={<span className="h5">Get Contact</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Avatar</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Price = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Description = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-avatar-item-7"
                name="select-box-item"
                image={userImage}
                imageType="circle"
                imageHeight={32}
                title="Debi Ç."
                subTitle="Product Owner"
                info={<span className="h5">Get Contact</span>}
                description={[
                  "4+ years of product design experience",
                  "Strong visual design skills, sense of aesthetics and beauty",
                  "Pixel-perfect attitude and attention to details",
                  "Knowledge of modern design trends",
                  "Strong conceptualization ability, visual communication ability",
                  "Strong Information Architecture, layout design, User-centered design, UI/UX design",
                ]}
              />
            </Col>

            <Col lg={12} span={24}>
              <SelectBoxItem
                id="select-box-avatar-item-8"
                name="select-box-item"
                image={userImage}
                imageType="circle"
                imageHeight={32}
                title="Debi Ç."
                subTitle="Product Owner"
                info={<span className="h5">Get Contact</span>}
                description={[
                  "4+ years of product design experience",
                  "Strong visual design skills, sense of aesthetics and beauty",
                  "Pixel-perfect attitude and attention to details",
                  "Knowledge of modern design trends",
                  "Strong conceptualization ability, visual communication ability",
                  "Strong Information Architecture, layout design, User-centered design, UI/UX design",
                ]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
