import React, { useEffect } from "react";
import { FormattedMessage, useIntl, injectIntl } from 'react-intl'
import { Card, Row, Col } from "antd";

import Breadcrumbs from "../../../layout/components/content/breadcrumbs";
import PricingItem from "./item";
import IntlMessages from "../../../layout/components/lang/IntlMessages";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/auth/authActions";
import ProtectedAppPage from "../Protected";

function Pricing() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state);
  const user = useSelector((state) => state.auth?.user);
  console.log(user)
  console.log(user?.id , "user ID")


  // useEffect(()=>{
  //   dispatch(updateUser({id: user?.id}))
  // },[])
  const intl = useIntl()
  const itemValues = [
    {
      title: <IntlMessages id="pricing-basic" />,
      subTitle: <IntlMessages id="pricing-one-time-purchase" />,
      price: `$ 100`,
      billed: <IntlMessages id="pricing-one-time-purchase" />,
      special: false,
      best: false,
      button: <IntlMessages id="pricing-buy-now" />,
      list: [
        `100 ${intl.formatMessage({
          id: "pricing-token-credit"
        })}`],
      paymentType: "oneTime",
      paymentPlan: "plan100",
    },
    {
      title: <IntlMessages id="pricing-starter" />,
      subTitle: <IntlMessages id="pricing-one-time-purchase" />,
      price: `$ 100`,
      billed: <IntlMessages id="pricing-one-time-purchase" />,
      special: false,
      best: false,
      button: <IntlMessages id="pricing-buy-now" />,
      list: [
        `200 ${intl.formatMessage({
          id: "pricing-token-credit"
        })}`
      ],
      paymentType: "oneTime",
      paymentPlan: "plan200",
    },
  {
      title: "Proffesional",
      subTitle: "Monthly Subscription",
      price: `$ 300`,
      billed: "Montly Subscription",
      special: false,
      best: false,
      unsubscribe: user?.paymentPlan == "plan300"? true :false,
      button: user?.paymentPlan == "plan300"? <IntlMessages id="pricing-unsubscribe" /> : <IntlMessages id="pricing-subscribe" /> ,
      list: [
        `300 ${intl.formatMessage({
          id: "pricing-token-credit"
        })}`],
      paymentType: "monthly",
      paymentPlan: "plan300",
    },
  {
      title: "Advanced",
      subTitle: "Monthly Subscription",
      price: `$ 400`,
      billed: "Montly Subscription",
      special: true,
      best: false,
      unsubscribe: user?.paymentPlan == "plan400"? true :false,
      button: user?.paymentPlan == "plan400"?<IntlMessages id="pricing-unsubscribe" />  : <IntlMessages id="pricing-subscribe" /> ,
      list: [
        `500 ${intl.formatMessage({
          id: "pricing-token-credit"
        })}`
      ],
      paymentType: "monthly",
      paymentPlan: "plan400", 

    },
  ];

  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      {/* <Col span={24}>
        <Row gutter={[32, 32]} justify="space-between">
          <Breadcrumbs breadCrumbParent={`${intl.formatMessage({
          id: "pages"
        })}`} breadCrumbActive={`${intl.formatMessage({
          id: "pricing"
        })}`} />
        </Row>
      </Col> */}

      <Col span={24}>
        <Card className="hp-border-color-black-40 hp-pb-sm-0 hp-pb-64">
          <Row>
            <Col span={24}>
              <h1 className="hp-mb-4">{
                <FormattedMessage id="pricing-simple-flexible-plans" />
              }</h1>
              <p className="hp-p1-body hp-mb-0">
                <FormattedMessage id="pricing-get-your-plan-now" />
              </p>
            </Col>

            <Col span={24}>
              <PricingItem values={itemValues} />
            </Col>
          </Row>
        </Card>
      </Col>
      <ProtectedAppPage />
    </Row>
  );
}

export default injectIntl(Pricing)