import { Link } from "react-router-dom";

import { Dropdown, Col, Divider, Row } from "antd";
import { Calculator } from "iconsax-react";

import avatarImg from "../../../assets/images/memoji/user-avatar-4.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/auth/authActions";

import { FormattedMessage, useIntl, injectIntl } from "react-intl";

export default function HeaderUser() {
  const dispatch = useDispatch();
  const logout = () => {
    localStorage?.setItem("user", null);
    dispatch(logoutUser());
  };

  const menu = (
    <div className="hp-user-dropdown hp-border-radius hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80 hp-py-24 hp-px-18 hp-mt-16">
      <Link
        to="/pages/profile/personel-information"
        className="hp-p1-body hp-font-weight-500 hp-hover-text-color-primary-2"
      >
        <FormattedMessage id="my-profile" />
      </Link>

      <Divider className="hp-mb-18 hp-mt-12" />

      <Row>
        <Col span={24}>
          <Link
            to="/pages/authentication/login"
            onClick={logout}
            className="hp-p1-body hp-font-weight-500 hp-hover-text-color-primary-2"
          >
            <FormattedMessage id="logout" />
          </Link>
        </Col>
      </Row>
    </div>
  );

  return (
    <Col>
      <Dropdown overlay={menu} placement="bottomLeft">
        <div className="hp-border-radius-xl hp-cursor-pointer hp-border-1 hp-border-color-dark-80">
          <div
            className="hp-border-radius-lg hp-overflow-hidden hp-bg-info-4 hp-m-4 hp-d-flex"
            style={{ minWidth: 32, width: 32, height: 32 }}
          >
            <img src={avatarImg} alt="User" height="100%" />
          </div>
        </div>
      </Dropdown>
    </Col>
  );
}
