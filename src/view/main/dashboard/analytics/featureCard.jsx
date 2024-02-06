import React from "react";

import { Card } from "antd";

export default function FeatureCard(props) {
  return (
    <Card className="hp-border-radius-xxl hp-dashboard-feature-card hp-cursor-pointer">
      {props.icon && (
        <div
          className="hp-d-flex-full-center hp-dashboard-feature-card-icon hp-border-radius-lg hp-bg-black-20 hp-bg-dark-80"
          style={{ width: 48, height: 48 }}
        >
          {props.icon}
        </div>
      )}

      <div className="hp-d-flex hp-mt-12">
        {props.title && (
          <span className="h4 hp-mb-0 hp-d-block hp-text-color-black-bg hp-text-color-dark-0 hp-font-weight-500 hp-mr-4">
            {props.title}
          </span>
        )}

        {props.titleIcon && props.titleIcon}
      </div>

      {props.date && (
        <span className="hp-caption hp-mt-4 hp-d-block hp-font-weight-400 hp-text-color-black-60">
          {props.date}
        </span>
      )}

      {props.price && (
        <span className="hp-d-block hp-mt-12 hp-mb-8 h3">{props.price}</span>
      )}
      {props.count && (
        <span className="hp-d-block hp-mt-12 hp-mb-8 h3">{props.count}</span>
      )}
    </Card>
  );
}
