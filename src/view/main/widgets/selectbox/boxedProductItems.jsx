import React from "react";

import { Row, Col } from "antd";

import productPink from "../../../../assets/images/selectbox/product/product-pink.png";
import productBlue from "../../../../assets/images/selectbox/product/product-blue.png";
import productWhite from "../../../../assets/images/selectbox/product/product-white.png";
import productBlack from "../../../../assets/images/selectbox/product/product-black.png";

import SelectBoxItem from "./selectBoxItem";

export default function SelectBoxBoxedProductItems() {
  return (
    <>
      <span className="h5 hp-d-block hp-mb-16">Product</span>

      <Row gutter={[0, 36]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
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
                id="select-box-boxed-product-item-1-1"
                name="select-box-item"
                type="boxed"
                image={productPink}
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-1-2"
                name="select-box-item"
                type="boxed"
                image={productBlue}
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-1-3"
                name="select-box-item"
                type="boxed"
                image={productWhite}
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-1-4"
                name="select-box-item"
                type="boxed"
                image={productBlack}
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
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
                id="select-box-boxed-product-item-2-1"
                name="select-box-item"
                type="boxed"
                image={productPink}
                title="Pink"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-2-2"
                name="select-box-item"
                type="boxed"
                image={productBlue}
                title="Blue"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-2-3"
                name="select-box-item"
                type="boxed"
                image={productWhite}
                title="White"
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-2-4"
                name="select-box-item"
                type="boxed"
                image={productBlack}
                title="Black"
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
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
                id="select-box-boxed-product-item-3-1"
                name="select-box-item"
                type="boxed"
                image={productPink}
                title="Pink"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-3-2"
                name="select-box-item"
                type="boxed"
                image={productBlue}
                title="Blue"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-3-3"
                name="select-box-item"
                type="boxed"
                image={productWhite}
                title="White"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-3-4"
                name="select-box-item"
                type="boxed"
                image={productBlack}
                title="Black"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
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
                id="select-box-boxed-product-item-4-1"
                name="select-box-item"
                type="boxed"
                image={productPink}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-4-2"
                name="select-box-item"
                type="boxed"
                image={productBlue}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-4-3"
                name="select-box-item"
                type="boxed"
                image={productWhite}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-4-4"
                name="select-box-item"
                type="boxed"
                image={productBlack}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
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
                id="select-box-boxed-product-item-5-1"
                name="select-box-item"
                type="boxed"
                image={productPink}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-5-2"
                name="select-box-item"
                type="boxed"
                image={productBlue}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-5-3"
                name="select-box-item"
                type="boxed"
                image={productWhite}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-5-4"
                name="select-box-item"
                type="boxed"
                image={productBlack}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-6-1"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-6-2"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-6-3"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-6-4"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-7-1"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-7-2"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-7-3"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-7-4"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                subTitle={<span>€ 24/mo. <br /> or € 2,448.00</span>}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-8-1"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-8-2"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-8-3"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                badge="New"
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-8-4"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
                badge="New"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="hp-mb-8">
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Type = <span className="hp-text-color-black-100 hp-text-color-dark-0">Product</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Title = <span className="hp-text-color-black-100 hp-text-color-dark-0">True</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Subtitle = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Badge = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-mx-8">/</span>
              <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30">Image = <span className="hp-text-color-black-100 hp-text-color-dark-0">False</span></span>
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-9-1"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-9-2"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-9-3"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
              />
            </Col>

            <Col md={6} xl={5} span={24}>
              <SelectBoxItem
                id="select-box-boxed-product-item-9-4"
                name="select-box-item"
                type="boxed"
                title="X-Box Cont."
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
