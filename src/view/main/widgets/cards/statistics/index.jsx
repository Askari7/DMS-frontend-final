import React from "react";

import { Row, Col } from "antd";

import PageContent from "../../../../../layout/components/content/page-content";
import SubsColumnCard from "./subsColumnCard";
import OrderColumnCard from "./orderColumnCard";
import CustomerSupportCard from "./customerSupportCard";
import ActiveUserCard from "./activeUserCard";
import StatisticsCard from "./statisticsCard";
import SiteTrafficLineCard from "./siteTrafficLineCard";
import CustomerSupportCardVertical from "./customerSupportCardVertical";
import SubsColumnCardVertical from "./subsColumnCardVertical";
import ActiveUserCardVertical from "./activeUserCardVertical";
import OrderColumnCardVertical from "./orderColumnCardVertical";
import RevenueLineEcommerceList from "../../../dashboard/ecommerce/revenueLineEcommerceList";
import SummaryItem from "./summaryItem";

export default function Statistics() {
  const dataSuccess = {
    series: [
      {
        data: [31, 10, 109, 60, 140, 40, 300],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#00f7bf"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      tooltip: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: [
        {
          show: false,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  };

  const dataDanger = {
    series: [
      {
        data: [31, 10, 500, 60, 300, 40, 10],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#ff455e"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      tooltip: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: [
        {
          show: false,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  };

  const dataSecondary = {
    series: [
      {
        data: [31, 10, 500, 60, 300, 40, 10],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#C903FF"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      tooltip: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: [
        {
          show: false,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  };

  const dataInfo = {
    series: [
      {
        data: [31, 10, 500, 60, 300, 40, 10],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#1BE7FF"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      tooltip: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: [
        {
          show: false,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  };

  const dataWarning = {
    series: [
      {
        data: [31, 10, 500, 60, 300, 40, 10],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#FFC700"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      tooltip: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: [
        {
          show: false,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  };

  const dataBlack = {
    series: [
      {
        data: [31, 10, 500, 60, 300, 40, 10],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#111314"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      tooltip: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: [
        {
          show: false,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  };

  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <PageContent
          title="Statistics Cards"
          desc="You can find special Analytic Cards we designed for Yoda Admin Template"
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "YodaCards",
            },
            {
              title: "Statistics",
            }
          ]}
        />
      </Col>

      <Col xl={6} sm={12} xs={24}>
        <OrderColumnCard />
      </Col>

      <Col xl={6} sm={12} xs={24}>
        <ActiveUserCard />
      </Col>

      <Col xl={6} sm={12} xs={24}>
        <SubsColumnCard />
      </Col>

      <Col xl={6} sm={12} xs={24}>
        <CustomerSupportCard />
      </Col>

      <Col xl={8} sm={24} xs={24}>
        <SiteTrafficLineCard />
      </Col>

      <Col xl={16} sm={24} xs={24}>
        <StatisticsCard />
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col xl={16} span={24}>
            <Row gutter={[32, 32]}>
              <Col md={6} span={12} className="hp-overflow-hidden">
                <OrderColumnCardVertical />
              </Col>

              <Col md={6} span={12} className="hp-overflow-hidden">
                <ActiveUserCardVertical />
              </Col>

              <Col md={6} span={12} className="hp-overflow-hidden">
                <SubsColumnCardVertical />
              </Col>

              <Col md={6} span={12} className="hp-overflow-hidden">
                <CustomerSupportCardVertical />
              </Col>

              <Col md={12} span={24}>
                <SummaryItem
                  chartData={dataSuccess}
                  title="Offer"
                  type="success"
                />
              </Col>

              <Col md={12} span={24}>
                <SummaryItem
                  chartData={dataDanger}
                  title="Favorite"
                  type="danger"
                  arrowDown={true}
                />
              </Col>

              <Col md={12} span={24}>
                <SummaryItem
                  chartData={dataSecondary}
                  title="Offer"
                  type="secondary"
                />
              </Col>

              <Col md={12} span={24}>
                <SummaryItem
                  chartData={dataInfo}
                  title="Favorite"
                  type="info"
                />
              </Col>

              <Col md={12} span={24}>
                <SummaryItem
                  chartData={dataWarning}
                  title="Offer"
                  type="warning"
                />
              </Col>

              <Col md={12} span={24}>
                <SummaryItem
                  chartData={dataBlack}
                  title="Favorite"
                  dark={true}
                />
              </Col>
            </Row>
          </Col>

          <Col xl={8} span={24}>
            <RevenueLineEcommerceList />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
