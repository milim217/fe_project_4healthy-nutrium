import React from "react";
import { Card, Row, Col, Statistic } from "antd";
import { Breadcrumb } from "antd";
const NutrionExpertInformation = () => {
  return (
    <div>
      <Breadcrumb
        style={{
          paddingLeft: "10px",
          paddingTop: "5px",
          paddingBottom: "10px",
        }}
      >
        <Breadcrumb.Item>
          <a href="">Trang chuyên gia dinh dưỡng</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Thông tin của bạn</Breadcrumb.Item>
      </Breadcrumb>
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
          <Col span={12}>Loại tài khoản: "Chuyên gia dinh dưỡng"</Col>
        </Row>
      </Card>
    </div>
  );
};

export default NutrionExpertInformation;
