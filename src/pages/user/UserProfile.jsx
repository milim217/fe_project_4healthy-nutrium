import React, { useEffect } from "react";
import { Card, Space, Button, Form, Input, Row, Col, Image } from "antd";
import ChangePassword from "../../components/form/ChangePassword";
import { Breadcrumb, Divider } from "antd";
import HeaderUserHasLog from "../../components/header/HeaderHasLog";
import Footers from "../../components/footer/footers";
import SlidebarUser from "./SlidbarUser";
import AuthUtil from "../../service/utils/AuthUtil";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const UserProfile = () => {
  const history = useHistory();

  const [user, setUser] = useState(null);

  useEffect(() => {
    let u = AuthUtil.getUserFromToken();
    if (u) {
      u.then((res) => {
        return res.data;
      });
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <div>
      <HeaderUserHasLog></HeaderUserHasLog>

      <div className="site-card-wrapper">
        <Breadcrumb
          style={{
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "10px",
          }}
        >
          <Breadcrumb.Item>
            <a href="">Trang chủ</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Hồ sơ và bảo mật</Breadcrumb.Item>
        </Breadcrumb>
        <Divider plain>Thông tin cá nhân</Divider>
        <Form layout="vertical">
          <Row gutter={24}>
            <Col span={4}></Col>
            <Col span={16}>
              <Form.Item label="Tên của bạn">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Ngày sinh của bạn">
                <Input placeholder="input placeholder" disabled={true} />
              </Form.Item>
              <Form.Item label="Email của bạn">
                <Input placeholder="input placeholder" disabled={true} />
              </Form.Item>
              <Form.Item label="Giới tính">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Số điện thoại của bạn:">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Địa chỉ của bạn:">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Button type="primary">Chỉnh sửa</Button>
            </Col>
          </Row>
        </Form>
        <Divider plain>Công việc và chỉ số cá nhân</Divider>
        <Form layout="vertical">
          <Row gutter={24}>
            <Col span={4}></Col>
            <Col span={16}>
              <Form.Item label="Công việc của bạn:">
                <Input placeholder="input placeholder" disabled={true} />
              </Form.Item>
              <Form.Item label="Chiều cao:">
                <Input placeholder="input placeholder" disabled={true} />
              </Form.Item>
              <Form.Item label="Cân Nặng:">
                <Input placeholder="input placeholder" disabled={true} />
              </Form.Item>
              <Form.Item label="Tần số tập luyện:">
                <Input placeholder="input placeholder" disabled={true} />
              </Form.Item>
              <Button type="primary">Chỉnh sửa</Button>
            </Col>
          </Row>
        </Form>
        <Divider plain>Bảo mật</Divider>
        <Form layout="vertical">
          <Row gutter={24}>
            <Col span={4}></Col>
            <Col span={16}>
              <Form.Item label="Mật khẩu cũ:">
                <Input type="password" placeholder="nhập mật khẩu hiện tại" />
              </Form.Item>
              <Form.Item label="Mật khẩu mới:">
                <Input
                  type="password"
                  placeholder="nhập mật khẩu mới của bạn"
                />
              </Form.Item>
              <Form.Item label="Nhập lại mật khẩu mới:">
                <Input
                  type="password"
                  placeholder="nhập lại mật khẩu mới bạn vừa điền"
                />
              </Form.Item>
              <Button type="primary">Đổi mật khẩu</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default UserProfile;
