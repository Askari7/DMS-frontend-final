import React from "react";

import { Card } from "antd";

export default function FeatureCard(props) {
  return (
    <Card className="hp-border-radius-xxl hp-dashboard-feature-card hp-cursor-pointer"
    style={{backgroundColor:"#F5F5F5",borderColor:"#CCCCCC" , margin:"4px",padding:'8px'}}
    >

      {props.icon && (
        <div
          className="hp-d-flex-full-center hp-dashboard-feature-card-icon hp-border-radius-lg"
          style={{ width: 48, height: 48 ,color: "#0414f4"}}
        >
          {props.icon}
        </div>
      )}

      <div className="hp-d-flex hp-mt-12">
        {props.title && (
          <span className="h4 hp-mb-0 hp-d-block  hp-font-weight-500 hp-mr-4"
          style={{color: "#333333"}}
          >
            
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
        <span className="hp-d-block hp-mt-12 hp-mb-8 h3" style={{color:"#666666"}}>{props.count}</span>
      )}
    </Card>
  );
}
