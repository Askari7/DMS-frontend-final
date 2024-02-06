import React from "react";

import { Row, Col } from "antd";

import Breadcrumbs from "../../../../layout/components/content/breadcrumbs";
import PageTitle from "../../../../layout/components/content/page-title";
import BasicGrid from "./basic";
import GridGutter from "./gridGutter";

export default function GridSystem() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Main"
            breadCrumbParent2="Layouts"
            breadCrumbActive="Grid"
          />

          <PageTitle pageTitle="Grid" pageText="24 Grids System." />
        </Row>
      </Col>

      <Col span={24}>
        <Row className="hp-grid-row-bg">
          <Col span={24} className="hp-bg-primary-2 hp-grid-col">
            %100
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row className="hp-grid-row-bg">
          <Col span={6} className="hp-bg-primary-2 hp-grid-col">
            %25
          </Col>

          <Col
            span={6}
            className="hp-bg-black-0 hp-text-color-black-100 hp-grid-col"
          >
            %25
          </Col>

          <Col span={6} className="hp-bg-primary-2 hp-grid-col">
            %25
          </Col>

          <Col
            span={6}
            className="hp-bg-black-0 hp-text-color-black-100 hp-grid-col"
          >
            %25
        </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row className="hp-grid-row-bg">
          <Col span={8} className="hp-bg-primary-2 hp-grid-col">
            %33.33
          </Col>

          <Col
            span={8}
            className="hp-bg-black-0 hp-text-color-black-100 hp-grid-col"
          >
            %33.33
          </Col>

          <Col span={8} className="hp-bg-primary-2 hp-grid-col">
            %33.33
        </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row className="hp-grid-row-bg">
          <Col span={12} className="hp-bg-primary-2 hp-grid-col">
            %50
          </Col>

          <Col
            span={12}
            className="hp-bg-black-0 hp-text-color-black-100 hp-grid-col"
          >
            %50
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row className="hp-grid-row-bg">
          <Col span={16} className="hp-bg-primary-2 hp-grid-col">
            %66.66
          </Col>

          <Col
            span={8}
            className="hp-bg-black-0 hp-text-color-black-100 hp-grid-col"
          >
            %33.33
          </Col>
        </Row>
      </Col>

      <Col span={24} className="hp-mark">
        <p className="hp-my-16 hp-p1-body">
          In most business situations, Ant Design needs to solve a lot of
          information storage problems within the design area, so based on 12
          Grids System, we divided the design area into 24 sections.
        </p>

        <p className="hp-my-16 hp-p1-body">
          We name the divided area 'box'. We suggest four boxes for horizontal
          arrangement at most, one at least. Boxes are proportional to the
          entire screen as shown in the picture above. To ensure a high level of
          visual comfort, we customize the typography inside of the box based on
          the box unit.
        </p>

        <h2 className="hp-mt-32 hp-mb-16">Outline</h2>

        <p className="hp-my-16 hp-p1-body">
          In the grid system, we define the frame outside the information area
          based on row and column, to ensure that every area can have stable
          arrangement.
        </p>

        <p className="hp-my-16 hp-p1-body">Following is a brief look at how it works:</p>

        <ul className="hp-pl-0">
          <li className="hp-text-color-dark-30">
            <p>
              Establish a set of column in the horizontal space defined by row
              (abbreviated col).
            </p>
          </li>

          <li className="hp-text-color-dark-30">
            <p>
              Your content elements should be placed directly in the col, and
              only col should be placed directly in row.
            </p>
          </li>

          <li className="hp-text-color-dark-30">
            <p>
              The column grid system is a value of 1-24 to represent its range
              spans. For example, three columns of equal width can be created by
              &lt;Col span={8} /&gt;.
            </p>
          </li>

          <li className="hp-text-color-dark-30">
            <p>
              If the sum of col spans in a row are more than 24, then the
              overflowing col as a whole will start a new line arrangement.
            </p>
          </li>
        </ul>

        <p className="hp-my-16 hp-p1-body">
          Our grid systems base on Flex layout to allow the elements within the
          parent to be aligned horizontally - left, center, right, wide
          arrangement, and decentralized arrangement. The Grid system also
          supports vertical alignment - top aligned, vertically centered,
          bottom-aligned. You can also define the order of elements by using
          order.
        </p>
      </Col>

      <Col span={24}>
        <BasicGrid />
      </Col>

      <Col span={24}>
        <GridGutter />
      </Col>
    </Row>
  );
}
