import React, { useEffect, useState } from "react";

import { Card, Row, Col, DatePicker } from "antd";
import Chart from "react-apexcharts";
import moment from "moment";
export default function ColumnChart({ inputData, documents,completed,remaining}) {
  console.log(documents,completed,remaining,"getting ");
  const [informtion, setInformation] = useState([]);
  const [document, setDocuments] = useState([]);
  const [remain, setRemaining] = useState([]);
  const [complete, setCompleted] = useState([]);

  


useEffect(() => {
  if (inputData && inputData.length > 0) {
    // Extract titles from inputData
    const titlesArray = inputData.map(obj => obj.title);
  
    // Update state with titlesArray
    setInformation(titlesArray);    

  }
}, [inputData]);


useEffect(() => {
  if (documents && documents.length > 0) {

      const completedCounts = [];
      const remainingCounts = [];

    for (const document of documents) {
      let completedCount = 0;
      let remainingCount = 0;

      for (const statusArray of document.map(doc => doc.status)) {
        console.log(statusArray,"array");
          if (statusArray === "Completed") {
            completedCount++;
          } else {
            remainingCount++;
          }
        }

      completedCounts.push(completedCount);
      remainingCounts.push(remainingCount);
    }

    console.log("Completed Counts:", completedCounts);
    console.log("Remaining Counts:", remainingCounts);

    setCompleted(completedCounts);
    setRemaining(remainingCounts);
  }
}, [documents]);

console.log(inputData, "inputData");
console.log(informtion, "information");



  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  console.log(complete,remain);
  const [data] = useState({
    series: [
      {
        name: "Approved Documents",
        data: complete,
      },
      {
        name: "Remaining Documents",
        data: remain,
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "bar",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      labels: {
        style: {
          fontSize: "14px",
        },
      },

      dataLabels: {
        enabled: true,
      },

      grid: {
        borderColor: "#DFE6E9",
        row: {
          opacity: 0.5,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 2,
          columnWidth: "45%",
          endingShape: "rounded",
        },
        colors: {
          backgroundBarColors: ["#0063F7", "#00F7BF"],
        },
      },

      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      xaxis: {
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#78909C",
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },

        tickPlacement: "between",
        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
        },
        categories: informtion,        
      },
      legend: {
        horizontalAlign: "right",
        offsetX: 40,
        position: "top",
        markers: {
          radius: 12,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
          formatter: (value) => {
            return value;
          },
        },

        min: 0,
        max: 12,
        tickAmount: 4,
      },
    },
  });
  console.log(informtion)

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row justify="space-between">
            <Row align="bottom" className="hp-pb-16">
              <h4 className="hp-mr-8">Document Assessment</h4>
            </Row>
            
            <Col>
              <DatePicker
                onChange={onChange}
                picker="year"
                defaultValue={moment("2019", "YYYY")}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart">
          <Chart
            options={{
              ...data.options,
              xaxis: {
                ...data.options.xaxis,
                categories: informtion,
              },
            }}
            series={[
              { name: "Approved Documents", data: complete },
              { name: "Remaining Documents", data: remain },
            ]}            
            type="bar"
            height={350}
            legend="legend"
          />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
