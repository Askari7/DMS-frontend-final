import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { UserOutlined } from '@ant-design/icons';
import { Col, Avatar,Space, Badge, Menu } from "antd";
import {
  User,
} from "react-iconly";

import menuImg from "../../../assets/images/pages/profile/menu-img.svg";

export default function MenuProfile(props) {
  const [ profile,setProfile] = useState(null)
  console.log(props,"props aye hain");
  const menuIconClass = "remix-icon hp-mr-8";
  function menuFooterItem() {
    if (props.footer !== "none") {
      return (
        <div className="hp-profile-menu-footer">
          <img src={menuImg} alt="Profile Image" />
        </div>
      );
    }
  }


  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const customise = useSelector((state) => state.customise);
  const getprofile = async ()=>{
    
    const getProfile = await axios.post(`https://novacon.live/getProfile`,{companyId:user?.user.companyId,userId:user?.user.id},{
      headers:{
        Authorization: user?.accessToken,
      }
    }) 
    console.log(getProfile.data.msg.image,"logo");
    setProfile(getProfile.data.msg.image)
  }
  useEffect(()=>{
    getprofile() 
  },[profile])

  return (
    <Col flex="240px" className="hp-profile-menu hp-py-24">
      <div className="hp-w-100">
        <div className="hp-profile-menu-header hp-mt-md-16 hp-text-center">
          {/* {moreBtn()} */}
           
          {profile ?  <img
          src={`https://novacon.live/${profile}`}
          alt="Profile"
          style={{ maxWidth: '50%', maxHeight: '25%', borderRadius: '8px' }}
          />:
          <img
          src={`https://novacon.live/R.jpg`}
          alt="Profile"
          style={{ maxWidth: '50%', maxHeight: '25%', borderRadius: '8px' }}
          />
        }

          <h3 className="hp-mt-24 hp-mb-4">{`${user?.user?.firstName} ${user?.user?.lastName}`}</h3>
          <a href={`mailto:${user?.user?.email}`} className="hp-p1-body">
            {user?.user.email}
          </a>
        </div>

        <Menu
          mode="inline"
          className="hp-w-100 hp-profile-menu-body"
          theme={customise.theme == "light" ? "light" : "dark"}
        >
          <Menu.Item
            key="1"
            icon={<User set="curved" className={menuIconClass} />}
            className={`
              hp-mb-16 hp-pl-24 hp-pr-32
              ${
                splitLocation[splitLocation.length - 1] ===
                "personel-information"
                  ? "ant-menu-item-selected"
                  : "ant-menu-item-selected-in-active"
              }
            `}
            onClick={props.onCloseDrawer}
          >
            <Link to="/pages/profile/personel-information">
              Information
            </Link>
          </Menu.Item>


          <Menu.Item
            key="1"
            icon={<User set="curved" className={menuIconClass} />}
            className={`
              hp-mb-16 hp-pl-24 hp-pr-32
              ${
                splitLocation[splitLocation.length - 1] ===
                "password-change"
                  ? "ant-menu-item-selected"
                  : "ant-menu-item-selected-in-active"
              }
            `}
            onClick={props.onCloseDrawer}
          >
            <Link to="/pages/profile/password-change">
              Password Change
            </Link>
          </Menu.Item>

          {user?.user.roleId==1&& <Menu.Item
            key="1"
            icon={<User set="curved" className={menuIconClass} />}
            className={`
              hp-mb-16 hp-pl-24 hp-pr-32
              ${
                splitLocation[splitLocation.length - 1] ===
                "company-information"
                  ? "ant-menu-item-selected"
                  : "ant-menu-item-selected-in-active"
              }
            `}
            onClick={props.onCloseDrawer}
          >
            <Link to="/pages/profile/company-information">
              Company Information
            </Link>
          </Menu.Item>}

          {user?.user.roleId==1&& <Menu.Item
            key="1"
            icon={<User set="curved" className={menuIconClass} />}
            className={`
              hp-mb-16 hp-pl-24 hp-pr-32
              ${
                splitLocation[splitLocation.length - 1] ===
                "change-profile"
                  ? "ant-menu-item-selected"
                  : "ant-menu-item-selected-in-active"
              }
            `}
            onClick={props.onCloseDrawer}
          >
            <Link to="/pages/profile/change-profile">
              Change Company Logo
            </Link>
            
          </Menu.Item>}

          <Menu.Item
            key="1"
            icon={<User set="curved" className={menuIconClass} />}
            className={`
              hp-mb-16 hp-pl-24 hp-pr-32
              ${
                splitLocation[splitLocation.length - 1] ===
                "change-personal-profile"
                  ? "ant-menu-item-selected"
                  : "ant-menu-item-selected-in-active"
              }
            `}
            onClick={props.onCloseDrawer}
          >

            <Link to="/pages/profile/change-personal-profile">
              Change Profile Image
            </Link>
          </Menu.Item>


        </Menu>
      </div>

      {menuFooterItem()}
    </Col>
  );
}
