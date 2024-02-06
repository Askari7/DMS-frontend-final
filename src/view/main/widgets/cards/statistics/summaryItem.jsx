import React from "react";

import Chart from "react-apexcharts";
import { Row, Col } from "antd";

export default function SummaryItem(props) {
  const { chartData, title, type, dark=false, arrowDown=false } = props

  return (
    <div className="hp-nft-dashboard-summary-item hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-border-radius-xxl hp-bg-black-0 hp-bg-dark-100 hp-p-16 hp-card-1 hp-overflow-hidden">
      <Row wrap={false}>
        <Col flex="1 0 0">
          <span className="hp-ml-4 hp-mt-4 h5 hp-text-color-black-100 hp-text-color-dark-0">{title}</span>

          <div
            className="hp-overflow-hidden"
            style={{
              marginLeft: -16,
              height: 60,
              width: "95%",
            }}>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height="100%"
              legend="legend"
            />
          </div>
        </Col>

        <Col flex="0 0 126px">
          <div
            className={`${dark ? `hp-bg-black-10` : `hp-bg-${type}-4`} hp-border-radius hp-bg-dark-90 hp-text-right hp-p-12 hp-position-relative hp-overflow-hidden hp-d-flex hp-d-flex-justify-center hp-d-flex-column`}
            style={{
              height: 88
            }}
          >
            <span
              className={`${dark ? `hp-bg-black-100` : `hp-bg-${type}-1`} line hp-position-absolute-top-center-left`}
              style={{ width: 5, height: "70%", borderRadius: 10, left: -2 }}
            ></span>

            <span className="h4">$ 58,260</span>

            <div className="hp-d-flex-center hp-d-flex-end hp-mt-6">
              <svg className={dark ? `hp-fill-black-100` : `hp-fill-${type}-1`} width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                {
                  arrowDown ? (
                    <path d="M6.724 7.66931L0.986 1.93131L1.92867 0.988647L7.66667 6.72598L7.66667 1.66931L9 1.66931L9 9.00265L1.66667 9.00265L1.66667 7.66931L6.724 7.66931V7.66931Z" />
                  ) : (
                    <path d="M7.66944 2.276L1.93144 8.014L0.98877 7.07133L6.7261 1.33333H1.66944V0H9.00277V7.33333H7.66944V2.276V2.276Z" />
                  )
                }
              </svg>

              <span className={`${dark ? `hp-text-color-black-100` : `hp-text-color-${type}-1`} hp-p1-body hp-ml-8`}>25.7%</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
