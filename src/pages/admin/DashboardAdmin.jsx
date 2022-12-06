import React from "react";
import { Card, Row, Col, Statistic } from "antd";
import HeaderLayout from "../../components/header/HeaderAdmin";
import Slidebar from "./SlidebarAdmin";
import { Breadcrumb } from "antd";

const DashboardAdmin = () => {
  return (
    <div>
      <HeaderLayout title={"Thống kê người dùng"}></HeaderLayout>
      <Slidebar></Slidebar>
    </div>
  );
};

export default DashboardAdmin;
