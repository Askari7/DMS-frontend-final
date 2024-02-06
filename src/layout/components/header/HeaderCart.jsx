import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
// import { adjustItemQty, loadCurrentItem, removeFromCart } from '../../../redux/ecommerce/ecommerceActions';

import { Button, Row, Col, Divider, Tag, InputNumber, Empty, Avatar } from "antd";
import { ShoppingBag } from 'iconsax-react';

import EmptyImage from '../../../assets/images/apps/ecommerce/checkout-empty.svg';

export default function HeaderCart() {
  // Basket Dropdwon
  const dispatch = useDispatch()
  const [totalItem, setTotalItem] = useState(0);


  return (
    <Col className="hp-d-flex-center hp-mr-8 hp-basket-dropdown-button">
      <Button
        ghost
        type="primary"
        className="hp-border-none hp-hover-bg-black-10 hp-hover-bg-dark-100"
        icon={
          <ShoppingBag size="22" className="hp-text-color-black-80 hp-text-color-dark-30" />
        }
      />

      <Divider className="hp-mb-4 hp-mt-0" />
    </Col>
  );
};