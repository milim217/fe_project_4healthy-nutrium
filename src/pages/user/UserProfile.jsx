import React, { useEffect } from "react";
import {
  Modal,
  Button,
  Select,
  Card,
  Form,
  Space,
  Input,
  Row,
  Col,
  Image,
} from "antd";
import { Breadcrumb, Divider } from "antd";
import HeaderUserHasLog from "../../components/header/HeaderHasLog";
import Footers from "../../components/footer/footers";
import SlidebarUser from "./SlidbarUser";
import AuthUtil from "../../service/utils/AuthUtil";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const UserProfile = () => {
  const { Option } = Select;
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisable, setisDisable] = useState(true);
  const [isDisable2, setisDisable2] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [user, setUser] = useState(null);
  const displayButton = () => {
    var x = document.querySelector("#LuuButton");
    var y = document.querySelector("#HuyButton");
    var a = document.querySelector("#EditButton");
    x.style.display = "block";
    y.style.display = "block";
    a.style.display = "none";
    setisDisable(false);
  };
  const showEditButton = () => {
    var x = document.querySelector("#LuuButton");
    var y = document.querySelector("#HuyButton");
    var a = document.querySelector("#EditButton");
    x.style.display = "none";
    y.style.display = "none";
    a.style.display = "block";
    setisDisable(true);
  };
  const displayButton2 = () => {
    var x = document.querySelector("#LuuButton2");
    var y = document.querySelector("#HuyButton2");
    var a = document.querySelector("#EditButton2");
    x.style.display = "block";
    y.style.display = "block";
    a.style.display = "none";
    setisDisable2(false);
  };
  const showEditButton2 = () => {
    var x = document.querySelector("#LuuButton2");
    var y = document.querySelector("#HuyButton2");
    var a = document.querySelector("#EditButton2");
    x.style.display = "none";
    y.style.display = "none";
    a.style.display = "block";
    setisDisable2(true);
  };
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
                <Input placeholder="input placeholder" disabled={isDisable} />
              </Form.Item>
              <Form.Item label="Ngày sinh của bạn">
                <Input placeholder="input placeholder" disabled={true} />
              </Form.Item>
              <Form.Item label="Email của bạn">
                <Input placeholder="input placeholder" disabled={true} />
              </Form.Item>
              <Form.Item
                name="Giới tính"
                label="Giới tính"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa chọn giới tính!",
                  },
                ]}
              >
                <Select
                  defaultValue={{ value: "male", label: "Nam" }}
                  disabled={isDisable}
                >
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Số điện thoại của bạn:">
                <Input placeholder="input placeholder" disabled={isDisable} />
              </Form.Item>
              <Form.Item label="Địa chỉ của bạn:">
                <Input placeholder="input placeholder" disabled={isDisable} />
              </Form.Item>
              <Space size={3}>
                <Button type="primary" id="EditButton" onClick={displayButton}>
                  Chỉnh sửa
                </Button>
                <Button
                  type="primary"
                  id="LuuButton"
                  style={{ display: "none" }}
                >
                  Lưu
                </Button>
                <Button
                  type="primary"
                  id="HuyButton"
                  style={{ display: "none" }}
                  onClick={showEditButton}
                >
                  Huỷ
                </Button>
              </Space>
              <Button
                type="primary"
                onClick={showModal}
                style={{ float: "right" }}
              >
                Thay đổi mật khẩu
              </Button>
            </Col>
          </Row>
        </Form>
        <Divider plain>Công việc và chỉ số cá nhân</Divider>
        <Form layout="vertical">
          <Row gutter={24}>
            <Col span={4}></Col>
            <Col span={16}>
              <Form.Item label="Công việc của bạn:">
                <Input placeholder="input placeholder" disabled={isDisable2} />
              </Form.Item>
              <Form.Item label="Chiều cao:">
                <Input placeholder="input placeholder" disabled={isDisable2} />
              </Form.Item>
              <Form.Item label="Cân Nặng:">
                <Input placeholder="input placeholder" disabled={isDisable2} />
              </Form.Item>
              <Space size={3}>
                <Button
                  type="primary"
                  id="EditButton2"
                  onClick={displayButton2}
                >
                  Chỉnh sửa
                </Button>
                <Button
                  type="primary"
                  id="LuuButton2"
                  style={{ display: "none" }}
                >
                  Lưu
                </Button>
                <Button
                  type="primary"
                  id="HuyButton2"
                  style={{ display: "none" }}
                  onClick={showEditButton2}
                >
                  Huỷ
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>

        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form.Item
            label="Nhập mật khẩu cũ"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu hiện tại của bạn!",
              },
            ]}
          >
            <Input.Password style={{ width: "285px", float: "right" }} />
          </Form.Item>

          <Form.Item
            label="Nhập mật khẩu mới"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password style={{ width: "285px", float: "right" }} />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu mới"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password style={{ width: "285px", float: "right" }} />
          </Form.Item>
        </Modal>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default UserProfile;
