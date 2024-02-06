import React from "react";

import { Row, Col, Select } from "antd";

const { Option } = Select;

export default function HistoryCard(props) {
  return (
    <>
      <Row gutter={[0, 16]} align="middle" justify="space-between">
        <Col sm={12} span={24}>
          <span className="h3 hp-font-weight-600 hp-text-color-black-bg hp-text-color-dark-0 hp-d-block">History</span>
          <p className="hp-p1-body hp-mt-4 hp-mb-0">Transection of last 6 months</p>
        </Col>

        <Col>
          <Select defaultValue="week" style={{ width: 140 }}>
            <Option value="week">This Week</Option>
            <Option value="month">This Mounth</Option>
            <Option value="year">This Year</Option>
          </Select>
        </Col>
      </Row>

      {props.list && (
        <Row gutter={[12, 12]} className="hp-mt-24">
          {props.list.map((item, index) => (
            <Col key={index} span={24} className="hp-bg-black-0 hp-bg-dark-100 hp-border-radius-xxl hp-border-1 hp-border-color-black-10 hp-border-color-dark-80 hp-p-12">
              <Row align="middle" justify="space-between">
                <Col sm={12} span={24} className="hp-mb-sm-16">
                  <Row align="middle" wrap={false}>
                    {
                      item.avatar && (
                        <Col>
                          <div className="hp-border-radius-xl hp-cursor-pointer hp-border-1 hp-border-color-dark-80 hp-mr-16">
                            <div className={`hp-border-radius-lg hp-overflow-hidden hp-m-4 hp-d-flex${item.avatarBg}`} style={{ minWidth: 64, width: 64, height: 64 }}>
                              <img src={item.avatar} alt="User" height="100%" />
                            </div>
                          </div>
                        </Col>
                      )
                    }

                    <Col>
                      {
                        item.name && (
                          <span className="hp-d-block h4">{item.name}</span>
                        )
                      }

                      {
                        item.title && (
                          <span className="hp-d-block hp-p1-body hp-mt-4">{item.title}</span>
                        )
                      }
                    </Col>
                  </Row>
                </Col>

                <Col sm={6} span={12} className="hp-text-sm-left hp-text-right" style={{ minHeight: 50 }}>
                  {
                    item.price && (
                      <span className="hp-d-block h4 hp-font-weight-400">{item.price}</span>
                    )
                  }

                  {
                    item.number && (
                      <span className="hp-d-block hp-p1-body hp-mt-4">{item.number}</span>
                    )
                  }
                </Col>

                <Col sm={6} span={12} className="hp-text-right" style={{ minHeight: 50 }}>
                  {
                    item.percent && (
                      <span className="h4">{item.percent}</span>
                    )
                  }
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
