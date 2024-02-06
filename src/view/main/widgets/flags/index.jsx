import React from "react";

import { Row, Col } from "antd";
import Flags from 'country-flag-icons/react/3x2'

import PageContent from "../../../../layout/components/content/page-content";
import FlagIconItem from "./flagIconItem";

export default function FlagIcons() {
  const data = [
    {
      icon: <Flags.CH style={{ width: 70 }} />,
      title: "Switzerland",
    },
    {
      icon: <Flags.SE style={{ width: 70 }} />,
      title: "Sweden",
    },
    {
      icon: <Flags.TR style={{ width: 70 }} />,
      title: "Turkey",
    },
    {
      icon: <Flags.ES style={{ width: 70 }} />,
      title: "Spain",
    },
    {
      icon: <Flags.GB style={{ width: 70 }} />,
      title: "UK",
    },
    {
      icon: <Flags.US style={{ width: 70 }} />,
      title: "USA",
    },
    {
      icon: <Flags.NL style={{ width: 70 }} />,
      title: "Netherlands",
    },
    {
      icon: <Flags.RO style={{ width: 70 }} />,
      title: "Romania",
    },
    {
      icon: <Flags.MN style={{ width: 70 }} />,
      title: "Mongolia",
    },
    {
      icon: <Flags.ZA style={{ width: 70 }} />,
      title: "South Africa",
    },
    {
      icon: <Flags.UA style={{ width: 70 }} />,
      title: "Ukranie",
    },
    {
      icon: <Flags.MX style={{ width: 70 }} />,
      title: "Mexico",
    },
    {
      icon: <Flags.IN style={{ width: 70 }} />,
      title: "India",
    },
    {
      icon: <Flags.PT style={{ width: 70 }} />,
      title: "Portugal",
    },
    {
      icon: <Flags.MD style={{ width: 70 }} />,
      title: "Moldova",
    },
    {
      icon: <Flags.IT style={{ width: 70 }} />,
      title: "Italy",
    },
    {
      icon: <Flags.BR style={{ width: 70 }} />,
      title: "Brazil",
    },
    {
      icon: <Flags.DE style={{ width: 70 }} />,
      title: "Germany",
    },
    {
      icon: <Flags.AW style={{ width: 70 }} />,
      title: "Aruba",
    },
    {
      icon: <Flags.AX style={{ width: 70 }} />,
      title: "Åland Islands",
    },
    {
      icon: <Flags.AZ style={{ width: 70 }} />,
      title: "Azerbaijan",
    },
    {
      icon: <Flags.BJ style={{ width: 70 }} />,
      title: "Benin",
    },
    {
      icon: <Flags.BB style={{ width: 70 }} />,
      title: "Barbados",
    },
    {
      icon: <Flags.BD style={{ width: 70 }} />,
      title: "Bangladesh",
    },
    {
      icon: <Flags.GE style={{ width: 70 }} />,
      title: "Georgia",
    },
    {
      icon: <Flags.GF style={{ width: 70 }} />,
      title: "French Guiana",
    },
    {
      icon: <Flags.GG style={{ width: 70 }} />,
      title: "Guernsey",
    },
    {
      icon: <Flags.GH style={{ width: 70 }} />,
      title: "Ghana",
    },
    {
      icon: <Flags.GI style={{ width: 70 }} />,
      title: "Gibraltar",
    },
    {
      icon: <Flags.GL style={{ width: 70 }} />,
      title: "Greenland",
    },
    {
      icon: <Flags.TH style={{ width: 70 }} />,
      title: "Thailand",
    },
    {
      icon: <Flags.TJ style={{ width: 70 }} />,
      title: "Tajikistan",
    },
    {
      icon: <Flags.TK style={{ width: 70 }} />,
      title: "Tokelau",
    },
    {
      icon: <Flags.TL style={{ width: 70 }} />,
      title: "Timor-Leste",
    },
    {
      icon: <Flags.TM style={{ width: 70 }} />,
      title: "Turkmenistan",
    },
    {
      icon: <Flags.TN style={{ width: 70 }} />,
      title: "Tunisia",
    },
  ]

  return (
    <Row gutter={[32, 32]} className="hp-mb-48">
      <Col span={24}>
        <PageContent
          title="Flags"
          desc={<span>You can use flags of this page <a className="hp-text-color-primary-2 hp-hover-text-color-black-10" href="https://catamphetamine.gitlab.io/country-flag-icons/3x2/index.html" target="_blank">country-flag-icons</a></span>}
          breadcrumb={[
            {
              title: "Main",
            },
            {
              title: "Widgets",
            },
            {
              title: "Flags",
            }
          ]}
        />
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          {data.map((item, index) => (
            <Col xl={4} lg={6} md={8} span={12} key={index}>
              <FlagIconItem
                icon={item.icon}
                title={item.title}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}