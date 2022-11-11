import {
  BrowserRouter,
  Routes,
  Route,
  useHistory,
  useLocation,
  Link,
  Switch,
} from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UserSwitchOutlined,
  DashboardFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "../../../assets/style/layout.css";
const { Header, Sider, Content } = Layout;

const Slidebar = ({ children }) => {
  useState();
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={isSidebarOpen}>
        <div className="logo" />
        <Menu
          onClick={({ key }) => {
            history.push(key);
          }}
          theme="white"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={[
            {
              key: "/admin/dashboard",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "/listuser",
              icon: <UserSwitchOutlined />,
              label: "Manager User",
            },
            {
              key: "/setting",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            isSidebarOpen ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setIsSidebarOpen(!isSidebarOpen),
            }
          )}
        </Header>
        <div
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </div>
      </Layout>
    </Layout>
  );
};

export default Slidebar;
