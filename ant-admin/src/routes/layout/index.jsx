import React from "react";
import { Dropdown, FloatButton, Layout as AntLayout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import {
    DashboardOutlined,
    FileTextOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Header, Footer, Content, Sider } = AntLayout;

const menuItems = [
    {
        key: "dashboard",
        label: <Link to="">Dashboard</Link>,
        icon: <DashboardOutlined />,
    },
    {
        key: "users",
        label: <Link to="users">Users</Link>,
        icon: <UserOutlined />,
    },
    {
        key: "posts",
        label: <Link to="posts">Posts</Link>,
        icon: <FileTextOutlined />,
    },
];

const userItems = [
    {
        key: "profile",
        label: "Profile",
    },
    {
        key: "logout",
        label: "Logout",
    },
];

const Layout = () => {
    return (
        <AntLayout
            style={{
                background: "#f5f5f5",
                minHeight: "100vh",
            }}
        >
            <Sider
                style={{
                    background: "white",
                    position: "fixed",
                    height: "100vh",
                    top: 0,
                    left: 0,
                }}
                width={300}
            >
                <div
                    style={{
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 5px rgba(0 0 0 / 10%)",
                        marginBottom: 10,
                    }}
                >
                    <h1>Logo</h1>
                </div>

                <Menu items={menuItems} style={{ borderRight: 0 }} />
            </Sider>

            <AntLayout style={{ marginLeft: 300 }}>
                <Header
                    style={{
                        position: "sticky",
                        top: 0,
                        left: 300,
                        background: "white",
                        zIndex: 1000,
                        boxShadow: "5px 2px 5px rgba(0 0 0 / 10%)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            height: "100%",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <Dropdown
                            trigger={["click"]}
                            menu={{
                                items: userItems,
                            }}
                        >
                            <UserOutlined />
                        </Dropdown>
                    </div>
                </Header>

                <Content style={{ background: "#f5f5f5", padding: 20 }}>
                    <Outlet />
                </Content>

                <Footer style={{ background: "white" }}>Footer</Footer>
            </AntLayout>

            <FloatButton.BackTop visibilityHeight={100} />
        </AntLayout>
    );
};

export default Layout;
