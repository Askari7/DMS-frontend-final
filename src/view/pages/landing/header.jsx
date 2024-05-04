import React from 'react'

import { useSelector } from 'react-redux';

import { Button, Col, Menu, Row, Dropdown } from 'antd'
import { RiMenuFill } from "react-icons/ri";

import MenuLogo from '../../../layout/components/menu/logo'

export default function LandingHeader() {
    // Redux
    const customise = useSelector(state => state.customise)

    const loginButton =
        <Button
            type="primary"
            className="hp-px-sm-16 hp-py-sm-8 hp-px-32 hp-py-16 hp-ml-sm-0 hp-ml-8"
        >
            Login
        </Button>

    const signUpButton =
        <Button
            type="text"
            className="hp-px-sm-16 hp-py-sm-8 hp-px-32 hp-py-16 hp-ml-sm-8 hp-text-color-black-80 hp-text-color-dark-30"
        >
            Sign Up
        </Button>

    const menuItems = <>
        <Menu.Item key={0} className="hp-border-radius">
            <a href="#">Demos</a>
        </Menu.Item>

        <Menu.Item key={1} className="hp-border-radius">
            <a href="#">Features</a>
        </Menu.Item>

        <Menu.Item key={2} className="hp-border-radius">
            <a href="#">Pricing</a>
        </Menu.Item>
    </>

    return (
        <header className="hp-my-8">
            <div className="hp-landing-container">
                <Row align="middle" justify="space-between">
                    <Col>
                        <MenuLogo />
                    </Col>

                    <Col className="hp-landing-header-mobile-button">
                        <Dropdown
                            placement="bottomRight"
                            trigger="click"
                            overlay={
                                <Menu
                                    mode="vertical"
                                    theme={customise.theme == "light" ? "light" : "dark"}
                                    className="hp-bg-dark-90"
                                >
                                    {menuItems}

                                    <Menu.Item key={3}>
                                        <Row justify="space-between">
                                            <Col>
                                                {loginButton}
                                            </Col>

                                            <Col>
                                                {signUpButton}
                                            </Col>
                                        </Row>
                                    </Menu.Item>
                                </Menu>
                            }
                        >
                            <Button
                                type="text"
                                icon={
                                    <RiMenuFill
                                        size={24}
                                        className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
                                    />
                                }
                            />
                        </Dropdown>
                    </Col>

                    <Col flex="1 0 0" className="hp-px-24 hp-landing-header-menu">
                        <Menu
                            mode="horizontal"
                            className="hp-d-flex-full-center hp-bg-dark-90"
                            theme={customise.theme == "light" ? "light" : "dark"}
                        >
                            {menuItems}
                        </Menu>
                    </Col>

                    <Col className="hp-landing-header-buttons">
                        {signUpButton}
                        {loginButton}
                    </Col>
                </Row>
            </div>
        </header>
    )
}