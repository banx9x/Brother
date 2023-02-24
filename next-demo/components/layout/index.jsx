import React, { useState } from "react";
import { Button, Layout as AntLayout } from "antd";

export default function Layout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <AntLayout style={{ backgroundColor: "#fafafa" }}>
            <AntLayout.Header style={{ backgroundColor: "#fafafa" }}>
                Header
            </AntLayout.Header>

            <AntLayout>
                <AntLayout.Sider
                    collapsed={collapsed}
                    style={{ backgroundColor: "#fafafa" }}
                >
                    Sider
                    <Button onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? "Expand" : "Collapse"}
                    </Button>
                </AntLayout.Sider>
                <AntLayout.Content style={{ backgroundColor: "#ffffff" }}>
                    {children}
                </AntLayout.Content>
            </AntLayout>

            <AntLayout.Footer style={{ backgroundColor: "#fcfcfc" }}>
                Footer
            </AntLayout.Footer>
        </AntLayout>
    );
}
