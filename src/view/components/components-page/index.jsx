import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Slider from "react-slick";
import { Row, Col, Card, Tabs } from "antd";

import PageContent from "../../../layout/components/content/page-content";

const { TabPane } = Tabs;

export default function ComponentsPage() {
  const customise = useSelector((state) => state.customise);

  const [category, setCategory] = useState("all");

  const categorys = [
    {
      category: "all",
      title: "All Components",
    },
    {
      category: "general",
      title: "General",
    },
    {
      category: "navigation",
      title: "Navigation",
    },
    {
      category: "data-entry",
      title: "Data Entry",
    },
    {
      category: "data-display",
      title: "Data Display",
    },
    {
      category: "feedback",
      title: "Feedback",
    },
  ];

  const components = [
    {
      category: "general",
      list: [
        {
          img: "typography.svg",
          title: "Style Guide",
          subtitle: "Yoda UI Style with typography and colors.",
          link: "/components/general/style-guide",
        },
        {
          img: "buttons.svg",
          title: "Buttons",
          subtitle: "To trigger an operation.",
          link: "/components/general/buttons",
        },
        {
          img: "icon.svg",
          title: "Icons",
          subtitle: "Remix Icon for Yoda Admin Template",
          link: "/components/general/icons",
        },
      ],
    },
    {
      category: "navigation",
      list: [
        {
          img: "breadcrumb.svg",
          title: "Breadcrumb",
          subtitle: "Examples of ant breadcrumbs",
          link: "/components/navigation/breadcrumb",
        },
        {
          img: "dropdown.svg",
          title: "Dropdown",
          subtitle: "Examples of ant dropdown",
          link: "/components/navigation/dropdown",
        },
        {
          img: "menu.svg",
          title: "Menu",
          subtitle: "Examples of ant menu for navigation",
          link: "/components/navigation/menu",
        },
        {
          img: "pagination.svg",
          title: "Pagination",
          subtitle: "Examples of ant pagination",
          link: "/components/navigation/pagination",
        },
        {
          img: "steps.svg",
          title: "Steps",
          subtitle: "Examples of ant steps",
          link: "/components/navigation/steps",
        },
      ],
    },
    {
      category: "data-entry",
      list: [
        {
          img: "checkbox.svg",
          title: "Checkbox",
          subtitle: "Examples of ant checkbox",
          link: "/components/data-entry/checkbox",
        },
        {
          img: "date-picker.svg",
          title: "Date Picker",
          subtitle: "Examples of ant date picker",
          link: "/components/data-entry/datepicker",
        },
        {
          img: "form.svg",
          title: "Form",
          subtitle: "Examples of ant form",
          link: "/components/data-entry/form",
        },
        {
          img: "input.svg",
          title: "Inputs",
          subtitle: "Examples of ant inputs",
          link: "/components/data-entry/inputs",
        },
        {
          img: "input-number.svg",
          title: "Input Number",
          subtitle: "Examples of ant input number",
          link: "/components/data-entry/input-number",
        },
        {
          img: "radio.svg",
          title: "Radio",
          subtitle: "Examples of ant Radio",
          link: "/components/data-entry/radio",
        },
        {
          img: "rate.svg",
          title: "Rate",
          subtitle: "Examples of ant rate",
          link: "/components/data-entry/rate",
        },
        {
          img: "slider.svg",
          title: "Slider",
          subtitle: "Examples of ant slider",
          link: "/components/data-entry/slider",
        },
        {
          img: "switch.svg",
          title: "Switch",
          subtitle: "Examples of ant switch",
          link: "/components/data-entry/switch",
        },
        {
          img: "upload.svg",
          title: "Upload",
          subtitle: "Examples of ant upload",
          link: "/components/data-entry/upload",
        },
      ],
    },
    {
      category: "data-display",
      list: [
        {
          img: "avatar.svg",
          title: "Avatar",
          subtitle: "Examples of ant avatar",
          link: "/components/data-display/avatar",
        },
        {
          img: "badge.svg",
          title: "Badge",
          subtitle: "Examples of ant badge",
          link: "/components/data-display/badge",
        },
        {
          img: "calendar.svg",
          title: "Calendar",
          subtitle: "Examples of ant calendar",
          link: "/components/data-display/calendar",
        },
        {
          img: "card.svg",
          title: "Card",
          subtitle: "Examples of ant card",
          link: "/components/data-display/card",
        },
        {
          img: "collapse.svg",
          title: "Collapse",
          subtitle: "Examples of ant collapse",
          link: "/components/data-display/collapse",
        },
        {
          img: "comment.svg",
          title: "Comment",
          subtitle: "Examples of ant comment",
          link: "/components/data-display/comment",
        },
        {
          img: "empty.svg",
          title: "Empty",
          subtitle: "Examples of ant empty",
          link: "/components/data-display/empty",
        },
        {
          img: "list.svg",
          title: "List",
          subtitle: "Examples of ant list",
          link: "/components/data-display/list",
        },
        {
          img: "popover.svg",
          title: "Popover",
          subtitle: "Examples of ant popover",
          link: "/components/data-display/popover",
        },
        {
          img: "table.svg",
          title: "Table",
          subtitle: "Examples of ant table",
          link: "/components/data-display/table",
        },
        {
          img: "tabs.svg",
          title: "Tabs",
          subtitle: "Examples of ant tabs",
          link: "/components/data-display/tabs",
        },
        {
          img: "tag.svg",
          title: "Tag",
          subtitle: "Examples of ant tag",
          link: "/components/data-display/tag",
        },
        {
          img: "timeline.svg",
          title: "Timeline",
          subtitle: "Examples of ant timeline",
          link: "/components/data-display/timeline",
        },
        {
          img: "tooltip.svg",
          title: "Tooltip",
          subtitle: "Examples of ant tooltip",
          link: "/components/data-display/tooltip",
        },
      ],
    },
    {
      category: "feedback",
      list: [
        {
          img: "alert.svg",
          title: "Alert",
          subtitle: "Examples of ant alert",
          link: "/components/feedback/alert",
        },
        {
          img: "drawer.svg",
          title: "Drawer",
          subtitle: "Examples of ant drawer",
          link: "/components/feedback/drawer",
        },
        {
          img: "modal.svg",
          title: "Modal",
          subtitle: "Examples of ant modal",
          link: "/components/feedback/modal",
        },
        {
          img: "message.svg",
          title: "Message",
          subtitle: "Examples of ant message",
          link: "/components/feedback/message",
        },
        {
          img: "notification.svg",
          title: "Notification",
          subtitle: "Examples of ant notification",
          link: "/components/feedback/notification",
        },
        {
          img: "popconfirm.svg",
          title: "Popconfirm",
          subtitle: "Examples of ant popconfirm",
          link: "/components/feedback/popconfirm",
        },
        {
          img: "progress.svg",
          title: "Progress",
          subtitle: "Examples of ant progress",
          link: "/components/feedback/progress",
        },
        {
          img: "result.svg",
          title: "Result",
          subtitle: "Examples of ant result",
          link: "/components/feedback/result",
        },
        {
          img: "skeleton.svg",
          title: "Skeleton",
          subtitle: "Examples of ant skeleton",
          link: "/components/feedback/skeleton",
        },
      ],
    },
  ];

  function cardItem(item) {
    return (
      <Card
        bodyStyle={{ padding: 16 }}
        className="hp-border-radius-xl hp-components-item hp-border-none hp-bg-black-10 hp-bg-dark-100"
      >
        <Link to={item.link}>
          <div
            className="hp-border-radius-xl hp-border-1 hp-border-color-dark-70 hp-bg-black-10 hp-bg-dark-100 hp-mb-12 hp-d-flex-full-center hp-components-item-img"
            style={{ minHeight: 140 }}
          >
            <img
              src={require(`../../../assets/images/components/${item.img}`)}
              alt={item.title}
            />
          </div>

          <Row align="bottom" justify="space-between">
            <Col span={24}>
              <h4 className="hp-components-item-title hp-mb-8 hp-text-color-black-bg hp-text-color-dark-0">
                {item.title}
              </h4>
              <p className="hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                {item.subtitle}
              </p>
            </Col>
          </Row>
        </Link>
      </Card>
    );
  }

  return (
    <Row gutter={[0, 48]} className="hp-mb-48">
      <Col span={24}>
        <PageContent
          title="Components"
          desc="Yoda Components has all ant components helps you create beautiful apps."
          breadcrumb={[
            {
              title: "Components",
              link: "/components/components-page",
            },
          ]}
        />
      </Col>

      <Col span={24} className="hp-px-sm-0 hp-px-md-48 hp-px-80">
        <Slider
          dots={false}
          arrows={false}
          infinite={false}
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth={true}
          rtl={customise.direction === "rtl" ? true : false}
          style={{ marginLeft: -8, marginRight: -8 }}
        >
          {categorys.map((item, index) => (
            <div className="hp-px-4" key={index}>
              <div
                onClick={() => setCategory(item.category)}
                className={`${
                  item.category === category
                    ? "hp-bg-black-bg hp-text-color-black-0"
                    : "hp-bg-black-40 hp-bg-dark-70 hp-text-color-black-bg hp-hover-bg-black-bg hp-hover-text-color-black-0"
                } hp-d-inline-block hp-cursor-pointer hp-mx-6 hp-px-16 hp-py-8 hp-text-center h5 hp-font-weight-400 hp-mb-0 hp-border-radius-full hp-transition`}
              >
                {item.title}
              </div>
            </div>
          ))}
        </Slider>
      </Col>

      <Col span={24} className="hp-px-sm-0 hp-px-md-48 hp-px-80">
        <Tabs
          defaultActiveKey={"all"}
          activeKey={category}
          tabBarStyle={{ display: "none" }}
        >
          <TabPane key={"all"}>
            <Row gutter={[24, 24]}>
              {components.map((component) =>
                component.list.map((item, index) => (
                  <Col sm={12} span={24} key={index}>
                    {cardItem(item)}
                  </Col>
                ))
              )}
            </Row>
          </TabPane>

          {components.map((component) => (
            <TabPane key={component.category}>
              <Row gutter={[24, 24]}>
                {component.list.map((item, index) => (
                  <Col sm={12} span={24} key={component.category + index}>
                    {cardItem(item)}
                  </Col>
                ))}
              </Row>
            </TabPane>
          ))}
        </Tabs>
      </Col>
    </Row>
  );
}
