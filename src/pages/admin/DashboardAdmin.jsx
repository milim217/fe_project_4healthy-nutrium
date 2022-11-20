import React from "react";
import { Card, Row, Col, Statistic } from "antd";
import HeaderLayout from "../../components/header/HeaderAdmin";
import Slidebar from "./SlidebarAdmin";
import { Breadcrumb } from "antd";

const DashboardAdmin = () => {
  return (
    <div>
      <HeaderLayout title={"Thống kê người dùng"}></HeaderLayout>
      <Slidebar>
        <Breadcrumb
          style={{
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "10px",
          }}
        >
          <Breadcrumb.Item>
            <a href="">Trang Quản trị viên</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Thống kê người dùng</Breadcrumb.Item>
        </Breadcrumb>
        <Card title="Thông tin tài khoản" bordered={false} className="border-1">
          <Row gutter={24}>
            <Col span={12}>
              <Statistic
                title="Số lượng người dùng"
                value={112893}
                precision={2}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Số lượng chuyên gia phân tích"
                value={5}
                precision={2}
              />
            </Col>
          </Row>
        </Card>
        <Card
          title="Thông tin tài khoản"
          bordered={false}
          className="border-1 margin-20"
        >
          <Row gutter={24}>
            <Col span={12}>
              Tên của bạn: "Your Name"<br></br>
              Ngày sinh: "DD/MM/YYYY"<br></br>
              Giới tính: "Custom"<br></br>
              Địa chỉ: "abc, street"
            </Col>
            <Col span={12}>Loại tài khoản: "Quản trị viên"</Col>
          </Row>
        </Card>
      </Slidebar>
    </div>
  );
};

export default DashboardAdmin;
