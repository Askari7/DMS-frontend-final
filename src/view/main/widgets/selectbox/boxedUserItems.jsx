import React from "react";

import { Row, Col } from "antd";

import userImage1 from "../../../../assets/images/users/user-1.svg";
import userImage2 from "../../../../assets/images/users/user-2.svg";
import userImage3 from "../../../../assets/images/users/user-3.svg";
import userImage4 from "../../../../assets/images/users/user-4.svg";
import userImage5 from "../../../../assets/images/users/user-5.svg";
import userImage6 from "../../../../assets/images/users/user-6.svg";
import userImage7 from "../../../../assets/images/users/user-7.svg";
import userImage8 from "../../../../assets/images/users/user-8.svg";
import userImage9 from "../../../../assets/images/users/user-9.svg";
import userImage10 from "../../../../assets/images/users/user-10.svg";
import userImage11 from "../../../../assets/images/users/user-11.svg";
import userImage12 from "../../../../assets/images/users/user-12.svg";
import userImage13 from "../../../../assets/images/users/user-13.svg";
import userImage14 from "../../../../assets/images/users/user-14.svg";
import userImage16 from "../../../../assets/images/users/user-16.svg";
import userImage17 from "../../../../assets/images/users/user-17.svg";
import userImage18 from "../../../../assets/images/users/user-18.svg";
import userImage19 from "../../../../assets/images/users/user-19.svg";
import userImage20 from "../../../../assets/images/users/user-20.svg";
import userImage21 from "../../../../assets/images/users/user-21.svg";

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxBoxedUserItems() {
  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">User</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">User</span></span>
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
                id="select-box-boxed-user-item-1-1"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage1}
                title="Debi Ç."
                subTitle="Product Designer"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-1-2"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage10}
                title="Yasemin B."
                subTitle="Product Owner"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-1-3"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage9}
                title="Arzu E."
                subTitle="Product Manager"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-1-4"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage21}
                title="Ahmet Y."
                subTitle="Ux Researcher"
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">User</span></span>
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
                id="select-box-boxed-user-item-2-1"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage20}
                title="Edward Y."
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-2-2"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage13}
                title="Tony G."
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-2-3"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage8}
                title="Robert R."
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-2-4"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage16}
                title="Elsa T."
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">User</span></span>
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
                id="select-box-boxed-user-item-3-1"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage12}
                subTitle="Product Designer"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-3-2"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage3}
                subTitle="Product Designer"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-3-3"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage5}
                subTitle="Product Designer"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-3-4"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage7}
                subTitle="Product Designer"
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">User</span></span>
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
                id="select-box-boxed-user-item-4-1"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage2}
                title="Rosa T."
                subTitle="Product Designer"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-4-2"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage4}
                title="Halim İ."
                subTitle="Product Designer"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-4-3"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage9}
                title="Seo Hyun"
                subTitle="Product Designer"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-4-4"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage11}
                title="Ola T."
                subTitle="Product Designer"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">User</span></span>
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
                id="select-box-boxed-user-item-5-1"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage2}
                title="Rosa T."
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-5-2"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage4}
                title="Halim İ."
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-5-3"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage9}
                title="Seo Hyun"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-5-4"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage11}
                title="Ola T."
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">User</span></span>
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
                id="select-box-boxed-user-item-6-1"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage2}
                subTitle="Product Designer"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-6-2"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage4}
                subTitle="Product Designer"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-6-3"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage9}
                subTitle="Product Designer"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-6-4"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage11}
                subTitle="Product Designer"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">User</span></span>
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
                id="select-box-boxed-user-item-7-1"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage12}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-7-2"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage3}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-7-3"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage5}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-7-4"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage7}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">User</span></span>
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
                id="select-box-boxed-user-item-8-1"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage17}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-8-2"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage14}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-8-3"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage7}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-user-item-8-4"
                name="select-box-item"
                type="boxed"
                imageType="circle"
                imageHeight={48}
                image={userImage6}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
