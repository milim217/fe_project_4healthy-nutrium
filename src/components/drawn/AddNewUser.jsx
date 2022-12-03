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
import AlertMessage from "../alert/AlertMessage";
const { Option } = Select;
const AddNewUser = () => {
  const [NameAccount, setNameAccount] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(null);
  const [disableBtn, setDisableBtn] = useState(true);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFormChange = (event) => {
    event.preventDefault();
    if (event.target.name == "NameAccount") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống tên người dùng ",
        });
        setDisableBtn(true);
      } else {
        setNameAccount(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "email") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống Email ",
        });
        setDisableBtn(true);
      } else {
        setEmail(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "password") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống Password ",
        });
        setDisableBtn(true);
      } else {
        setPassword(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "phoneNumber") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống số điện thoại ",
        });
        setDisableBtn(true);
      } else {
        setPhoneNumber(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "address") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống địa chỉ ",
        });
        setDisableBtn(true);
      } else {
        setAddress(event.target.value);
        setDisableBtn(false);
      }
    }
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
            <Button onClick={onClose} type="primary" disabled={disableBtn}>
              Xác nhận
            </Button>
          </Space>
        }
      >
        <AlertMessage info={alert} />
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
                <Input
                  name="NameAccount"
                  placeholder="Nhập tên của chuyên gia dinh dưỡng ở đây"
                  onChange={onFormChange}
                />
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
                <Input
                  name="email"
                  placeholder="Nhập Email"
                  onChange={onFormChange}
                />
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
                <Input
                  name="password"
                  placeholder="Nhập mật khẩu của bạn"
                  onChange={onFormChange}
                />
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
                <Input
                  name="phoneNumber"
                  placeholder="Nhập Số điện thoại"
                  onChange={onFormChange}
                />
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
                <Input
                  placeholder="Nhập thông tin địa chỉ ở đây"
                  name="address"
                  onChange={onFormChange}
                />
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
