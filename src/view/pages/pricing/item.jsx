import React from "react";
import {
  getPaidLink,
  unsubscribeSubscription,
} from "../../../redux/price/priceActions";

import { Row, Col, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/auth/authActions";

export default function PricingItem(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  console.log(props);
  const getPaid = async (item) => {
    console.log(item);
    let userPaymentCheck = false;
    if (item.unsubscribe) {
      // await dispatch(unsubscribeSubscription());
      await dispatch(unsubscribeSubscription({ id: user?.id }));
    } else {
      userPaymentCheck = await dispatch(
        getPaidLink({
          paymentType: item.paymentType,
          paymentPlan: item.paymentPlan,
          id: user?.id,
        })
      );
    }
    console.log("userPaymentChect", userPaymentCheck);

    // debugger;
    // console.log("userPaymentChect", userPaymentCheck);
    // if (userPaymentCheck) {
    //   dispatch(updateUser({ id: user?.id }));
    // }
  };
  const listSVG = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99992 13.6667C3.31792 13.6667 0.333252 10.682 0.333252 7.00004C0.333252 3.31804 3.31792 0.333374 6.99992 0.333374C10.6819 0.333374 13.6666 3.31804 13.6666 7.00004C13.6666 10.682 10.6819 13.6667 6.99992 13.6667ZM6.99992 12.3334C8.41441 12.3334 9.77096 11.7715 10.7712 10.7713C11.7713 9.77108 12.3333 8.41453 12.3333 7.00004C12.3333 5.58555 11.7713 4.229 10.7712 3.2288C9.77096 2.22861 8.41441 1.66671 6.99992 1.66671C5.58543 1.66671 4.22888 2.22861 3.22868 3.2288C2.22849 4.229 1.66659 5.58555 1.66659 7.00004C1.66659 8.41453 2.22849 9.77108 3.22868 10.7713C4.22888 11.7715 5.58543 12.3334 6.99992 12.3334ZM6.33525 9.66671L3.50659 6.83804L4.44925 5.89537L6.33525 7.78137L10.1059 4.01004L11.0493 4.95271L6.33525 9.66671Z"
        fill="#0010F7"
      />
    </svg>
  );
  const listItem = "hp-pricing-item-list hp-d-flex-center hp-mt-8";
  const listText =
    "hp-d-block hp-ml-8 hp-caption hp-font-weight-400 hp-text-color-dark-0";

  const listMap = props.values.map((item, index) => (
    <Col
      className={`hp-pricing-item hp-p-24 hp-mx-xl-8 hp-mx-16 hp-mb-sm-24 hp-mb-16 hp-border-1 hp-border-radius ${
        item.special
          ? "hp-pricing-item-special"
          : "hp-border-color-black-40 hp-border-color-dark-80"
      }`}
      key={index}
    >
      <div>
        <Row justify="space-between">
          <Col span={item.best ? 15 : 24}>
            <h5 className="hp-mb-0 hp-pricing-item-title">{item.title}</h5>
            <p className="hp-pricing-item-subtitle hp-caption hp-mb-sm-8 hp-mb-32 hp-text-color-black-60">
              {item.subTitle}
            </p>
          </Col>

          {item.best && (
            <Col md={9} span={5}>
              <Button
                type="primary"
                className="hp-pricing-item-best-button hp-caption hp-py-4 hp-px-16 hp-bg-color-primary-4 hp-text-color-primary-1"
              >
                Best Price
              </Button>
            </Col>
          )}
        </Row>

        <span className="hp-pricing-item-price h1">{item.price}</span>
        <p className="hp-pricing-item-billed hp-caption hp-mt-sm-0 hp-mt-4 hp-mb-0 hp-text-color-black-60">
          {item.billed}
        </p>

        <ul className="hp-mt-24 hp-mb-0 hp-p-0">
          {item.list.map((item, index) => (
            <li key={index} className={listItem}>
              {listSVG}
              <span className={listText}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {item.special ? (
        <Button
          onClick={() => getPaid(item)}
          className="hp-mt-32 hp-hover-border-color-primary-2 hp-hover-bg-primary-2 hp-hover-text-color-black-0"
          block
          type="primary"
        >
          {item.button}
        </Button>
      ) : (
        <Button
          onClick={() => getPaid(item)}
          className="hp-mt-32"
          block
          type="primary"
        >
          {item.button}
        </Button>
      )}
    </Col>
  ));

  return (
    <Row align="top" justify="center">
      {listMap}
    </Row>
  );
}
