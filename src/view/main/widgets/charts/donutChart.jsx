// // import React, { useState } from "react";

// // import { Card, Row, Col, Dropdown, Menu } from "antd";
// // import { RiMoreFill } from "react-icons/ri";
// // import Chart from "react-apexcharts";

// // export default function DonutChart({ projects, projectCount ,projectsStatusCounts}) {
// //   console.log("projects",projects,"projectCount",projectCount,"projectsStatusCounts",projectsStatusCounts);
// //   const menu = (
// //     <Menu>
// //       <Menu.Item>Last 7 Days</Menu.Item>
// //       <Menu.Item>Last Month</Menu.Item>
// //       <Menu.Item>Last Year</Menu.Item>
// //     </Menu>
// //   );

// //   // Initialize counts for each status
// // let initializedCount = 0;
// // let completedCount = 0;
// // let workingCount = 0;

// // // Iterate over each project
// // // projects.forEach(project => {
// // //   // Increment the count based on the status of the project
// // //   switch (project.status) {
// // //     case "Initialized":
// // //       initializedCount++;
// // //       break;
// // //     case "Completed":
// // //       completedCount++;
// // //       break;
// // //     case "Working":
// // //       workingCount++;
// // //       break;
// // //     default:
// // //       break;
// // //   }
// // // });

// // console.log(initializedCount,completedCount,workingCount);
// // const statusCounts = [initializedCount, completedCount, workingCount];

// // console.log("Status Counts:", statusCounts);

// //   const [data] = useState({

// //     series: [statusCounts.length],
    
// //     options: {
// //       chart: {
// //         fontFamily: "Manrope, sans-serif",
// //         type: "donut",
// //         toolbar: {
// //           show: false,
// //         },
// //         zoom: {
// //           enabled: false,
// //         },
// //       },
// //       colors: ["#0010F7", "#55B1F3", "#1BE7FF"],

// //       labels: ["Initialized", "Complete", " Working"],

// //       dataLabels: {
// //         enabled: false,
// //       },
// //       plotOptions: {
// //         pie: {
// //           donut: {
// //             size: "70%",
// //             labels: {
// //               show: true,
// //               name: {
// //                 fontSize: "2rem",
// //               },
// //               value: {
// //                 fontSize: "16px",
// //                 formatter(val) {
// //                   return `${val}`;
// //                 },
// //               },
// //               total: {
// //                 show: true,
// //                 fontSize: "16px",
// //                 label: "Total",
// //                 // formatter(w) {
// //                 //   return `$ `;
// //                 // },
// //                 formatter: function (w) {
// //                   return `${w.globals.seriesTotals.reduce((a, b) => {
// //                     return a + b;
// //                   })}`;
// //                 },
// //               },
// //             },
// //           },
// //         },
// //       },

// //       legend: {
// //         itemMargin: {
// //           horizontal: 24,
// //           vertical: 0,
// //         },
// //         horizontalAlign: "center",
// //         position: "bottom",
// //         fontSize: "14px",

// //         markers: {
// //           radius: 12,
// //         },
// //       },
// //     },
// //   });

// //   return (
// //     <Card className="hp-border-color-black-40">
// //       <Row>
// //         <Col span={24}>
// //           <Row justify="space-between" align="top">
// //             <Col>
// //               <h4 className="hp-mr-8">Overall Projects</h4>
// //             </Col>
            
// //             <Col>
// //               <Dropdown overlay={menu} trigger={["click"]}>
// //                 <RiMoreFill className="hp-text-color-dark-0" size={24} onClick={(e) => e.preventDefault()} />
// //               </Dropdown>
// //             </Col>
// //           </Row>
// //         </Col>

// //         <Col span={24}>
// //           <div id="chart" className="hp-donut-chart">
// //             <Chart
// //               options={data.options}
// //               series={data.series}
// //               type="donut"
// //               height={398}
// //               legend="legend"
// //             />
// //           </div>
// //         </Col>
// //       </Row>
// //     </Card>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { Card, Row, Col, Dropdown, Menu } from "antd";
// import { RiMoreFill } from "react-icons/ri";
// import Chart from "react-apexcharts";

// export default function DonutChart({ projects, projectCount ,projectsStatusCounts}) {
//   console.log("projects",projects,"projectCount",projectCount,"projectsStatusCounts",projectsStatusCounts);
//   const [statusCounts, setStatusCounts] = useState([0, 0, 0]);

//   useEffect(() => {
//     if (projects && projects.length > 0) {
//       let initializedCount = 0;
//       let completedCount = 0;
//       let ongoingCount = 0;

//       projects.forEach((project) => {
//         switch (project.status) {
//           case "Initialized":
//             initializedCount++;
//             break;
//           case "Completed":
//             completedCount++;
//             break;
//           case "Ongoing":
//             ongoingCount++;
//             break;
//           default:
//             break;
//         }
//       });
//       console.log(initializedCount,completedCount,ongoingCount,'counting');
//       setStatusCounts([initializedCount, completedCount, ongoingCount]);
//       console.log(statusCounts,"counts");
//     }
//   }, [projects]);

//   const menu = (
//     <Menu>
//       <Menu.Item>Last 7 Days</Menu.Item>
//       <Menu.Item>Last Month</Menu.Item>
//       <Menu.Item>Last Year</Menu.Item>
//     </Menu>
//   );


//   useEffect(() => {
//     console.log("Initialized count:", statusCounts[0]);
//     console.log("Completed count:", statusCounts[1]);
//     console.log("Ongoing count:", statusCounts[2]);
//   }, [statusCounts]);
//   const [data] = useState({
//     series: statusCounts, // No need for wrapping in an extra array    
//     options: {
//       chart: {
//         fontFamily: "Manrope, sans-serif",
//         type: "donut",
//         toolbar: {
//           show: true,
//         },
//         zoom: {
//           enabled: true,
//         },
//       },
//       colors: ["#0010F7", "#55B1F3", "#1BE7FF"],

//       labels: ["Initialized", "Completed", " Ongoing"],

//       dataLabels: {
//         enabled: true,
//       },
//       plotOptions: {
//         pie: {
//           donut: {
//             size: "70%",
//             labels: {
//               show: true,
//               name: {
//                 fontSize: "2rem",
//               },
//               value: {
//                 fontSize: "16px",
//                 formatter(val) {
//                   return `${val}`;
//                 },
//               },
//               total: {
//                 show: true,
//                 fontSize: "16px",
//                 label: "Total",
//                 formatter: function (w) {
//                   return `${w.globals.seriesTotals.reduce((a, b) => {
//                     return a + b;
//                   })}`;
//                 },
//               },
//             },
//           },
//         },
//       },
      

//       legend: {
//         itemMargin: {
//           horizontal: 24,
//           vertical: 0,
//         },
//         horizontalAlign: "center",
//         position: "bottom",
//         fontSize: "14px",

//         markers: {
//           radius: 12,
//         },
//       },
//     },
//   });
//   console.log(data.series,"series");

//  return (
//     <Card className="hp-border-color-black-40">
//       <Row>
//         <Col span={24}>
//           <Row justify="space-between" align="top">
//             <Col>
//               <h4 className="hp-mr-8">Overall Projects</h4>
//             </Col>
//           </Row>
//         </Col>

//         <Col span={24}>
//           <div id="chart" className="hp-donut-chart">
//           <Chart options={data.options} series={data.series} type="donut" height={398} legend="legend" />
//           </div>
//         </Col>
//       </Row>
//     </Card>
//   );
// }



import React, { useEffect, useState } from "react";
import { Card, Row, Col, Dropdown, Menu } from "antd";
import Chart from "react-apexcharts";

export default function DonutChart({ projects, projectCount ,projectsStatusCounts}) {
  console.log("projects",projects,"projectCount",projectCount,"projectsStatusCounts",projectsStatusCounts);
  const [statusCounts, setStatusCounts] = useState([0, 0, 0]);

  useEffect(() => {
    if (projects && projects.length > 0) {
      let initializedCount = 0;
      let completedCount = 0;
      let ongoingCount = 0;

      projects.forEach((project) => {
        switch (project.status) {
          case "Initialized":
            initializedCount++;
            break;
          case "Completed":
            completedCount++;
            break;
          case "Ongoing":
            ongoingCount++;
            break;
          default:
            break;
        }
      });

      setStatusCounts([initializedCount, completedCount, ongoingCount]);
    }
  }, [projects]);

  const menu = (
    <Menu>
      <Menu.Item>Last 7 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  useEffect(() => {
    console.log("Series prop received by Chart component:", statusCounts);
  }, [statusCounts]);

  const [data] = useState({
    series: statusCounts,
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "donut",
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: ["#0010F7", "#55B1F3", "#1BE7FF"],

      labels: ["Initialized", "Completed", " Ongoing"],

      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: {
                fontSize: "2rem",
              },
              value: {
                fontSize: "16px",
                formatter(val) {
                  return `${val}`;
                },
              },
              total: {
                show: true,
                fontSize: "16px",
                label: "Total",
                formatter: function (w) {
                  return `${w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  })}`;
                },
              },
            },
          },
        },
      },
      

      legend: {
        itemMargin: {
          horizontal: 24,
          vertical: 0,
        },
        horizontalAlign: "center",
        position: "bottom",
        fontSize: "14px",

        markers: {
          radius: 12,
        },
      },
    },
  });

 return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <Col>
              <h4 className="hp-mr-8">Overall Projects</h4>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart" className="hp-donut-chart">
            <Chart options={data.options} series={statusCounts} type="donut" height={398} legend="legend" />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
