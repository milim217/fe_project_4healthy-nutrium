import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
const { Option } = Select;

const AddNewUser = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined className="plus_add_button" />}
      >
        Thêm tài khoản chuyên gia dinh dưỡng
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Về Danh Sách</Button>
            <Button onClick={onClose} type="primary">
              Xác nhận
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên Tài Khoản"
                rules={[
                  {
                    required: true,
                    message: "Tên chuyên gia dinh dưỡng bạn chưa nhập!!",
                  },
                ]}
              >
                <Input placeholder="Nhập tên của chuyên gia dinh dưỡng ở đây" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Email chưa nhập!!!",
                  },
                ]}
              >
                <Input placeholder="Nhập Email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập Mật khẩu!",
                  },
                ]}
              >
                <Input placeholder="Nhập mật khẩu của bạn" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name="gender"
                label="Giới tính"
                rules={[
                  {
                    required: true,
                    message: "Chọn giới tính",
                  },
                ]}
              >
                <Select placeholder="Chọn giới tính của bạn">
                  <Option value="Female">Nữ</Option>
                  <Option value="male">Nam</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="phone_number"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Số điện thoại chưa nhập!!!",
                  },
                ]}
              >
                <Input placeholder="Nhập Số điện thoại" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[
                  {
                    required: true,
                    message: "Địa chỉ chưa nhập!!!",
                  },
                ]}
              >
                <Input placeholder="Nhập thông tin địa chỉ ở đây" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="dateTime"
                label="Ngày sinh"
                rules={[
                  {
                    required: true,
                    message: "Please choose the dateTime",
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewUser;
