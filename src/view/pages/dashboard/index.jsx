import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { Row, Col,Image } from "antd";
import { WalletMinus, Login, Add, Logout } from "iconsax-react";
import axios from "axios";
import FeatureCard from "../../main/dashboard/analytics/featureCard";
// import BalanceCard from "../../main/dashboard/analytics/featureCardbalanceCard";
import ListCard from "../../main/dashboard/analytics/listCard";
import AreaChart from "../../main/widgets/charts/areaChart";
import ScatterChart from "../../main/widgets/charts/scatterChart";
import ProtectedAppPage from "../Protected";
import DonutChart from "../../main/widgets/charts/donutChart";
import scurve from "../../.././assets/images/components/s_curve.png";

export default function Analytics() {
  // Redux
  const customise = useSelector((state) => state.customise);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [data, setData] = useState([]);
  const [systemLog, setSystemLog] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/dashboard/stats?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      const logs = [];
      for (const item of response?.data?.logs) {
        logs.push({
          icon: <Login />,
          title: item?.title,
          date: item?.createdAt,
        });
      }
      response.data.logs = logs;
      setData(response.data); // Assuming the response.data is an array of departments

      console.log(response?.data);
    } catch (error) {
      console.error("Error fetching stats", error?.message);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    // Fetch data when the component mounts
    fetchData();
    // fetchSystemLogs();
  }, []);
  return (
    <>
      <Row gutter={[32, 32]} className="hp-mb-32">
        <Col flex="1" className="hp-overflow-hidden">
          <Row gutter={[32, 32]}>
            <Col span={24}>
              <h1 className="hp-mb-0">Dashboard</h1>
            </Col>

            <Image
              src="https://media.licdn.com/dms/image/C4D12AQG6Sl5GOjFXfg/article-inline_image-shrink_1500_2232/0/1520214121931?e=1710374400&v=beta&t=kEFnJOK6FvhUY5hfDDyhS_Blbq20EOh6r3OrAvOXB9g"
              alt="S Curve"
              width={600} // Adjust the width as needed
              height={300} // Adjust the height as needed
            />
            <Col span={24}>
             <DonutChart/>
            </Col>
          </Row>
        </Col>

        {customise.contentWidth === "boxed" && (
          <Col className="hp-dashboard-line hp-px-0">
            <div
              className="hp-bg-black-40 hp-bg-dark-80 hp-h-100 hp-mx-24"
              style={{ width: 1 }}
            ></div>
          </Col>
        )}

        <Col
          // className={`hp-analytics-col-2${
          //   customise.contentWidth && " hp-boxed-active"
          //   }`}
          flex="1"
          className="hp-overflow-hidden"
        >
          <Row gutter={[32, 32]}>
            <Col span={24}>{/* <CreditCard /> */}</Col>
            <Col span={24}>
              <Row gutter={[32, 32]}>
                <Col sm={10} span={24}>
                  <FeatureCard
                    icon={
                      <WalletMinus
                        size="24"
                        variant="Bold"
                        className="hp-text-color-black-bg hp-text-color-dark-0"
                      />
                    }
                    title="Departments"
                    count={data?.departmentCount || "0"}
                  />
                </Col>
                <Col sm={10} span={24}>
                  <FeatureCard
                    icon={
                      <WalletMinus
                        size="24"
                        variant="Bold"
                        className="hp-text-color-black-bg hp-text-color-dark-0"
                      />
                    }
                    title="Projects"
                    count={data?.projectCount || "0"}
                  />
                </Col>
                <Col sm={10} span={24}>
                  <FeatureCard
                    icon={
                      <WalletMinus
                        size="24"
                        variant="Bold"
                        className="hp-text-color-black-bg hp-text-color-dark-0"
                      />
                    }
                    title="MDR"
                    count={data?.mdrCount || "0"}
                  />
                </Col>
                <Col sm={10} span={24}>
                  <FeatureCard
                    icon={
                      <WalletMinus
                        size="24"
                        variant="Bold"
                        className="hp-text-color-black-bg hp-text-color-dark-0"
                      />
                    }
                    title="Employees"
                    count={data?.employeeCount || "0"}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
            {user?.user?.roleId == 1 ? (
  <ListCard title="System Logs" list={data?.logs} />
) : (
  <div />
)}

            </Col>
          </Row>
        </Col>
      </Row>
      <ProtectedAppPage />
    </>
  );
}
