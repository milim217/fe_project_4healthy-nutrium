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
import { useFormik } from "formik";
import * as Yup from "yup";
const { Option } = Select;

const AddNewUser = () => {
  const [dateValue, setDate] = useState(false);
  const [open, setOpen] = useState(false);
  // const [alert, setAlert] = useState(null);
  const [disableBtn, setDisableBtn] = useState(true);
  //form Add
  let FormisValid = false;
  const [addNewUserForm, setAddNewUserForm] = useState({
    NameAccount: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    date: "",
    gender: "false",
  });

  // Lấy dữ liệu từ formAdd bằng formik
  const formik = useFormik({
    initialValues: {
      NameAccount: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    },

    //Regex
    validationSchema: Yup.object({
      NameAccount: Yup.string().required(
        "Bạn không được để trống tên tài khoản"
      ),
      email: Yup.string()
        .required("Bạn không được để trống Email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng định dạng email VD: Name@gmail.com"
        ),
      password: Yup.string()
        .required("Bạn không được để trống password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái và một số:"
        ),
      phoneNumber: Yup.string()
        .required("Bạn không được để trống số điện thoại")
        .matches(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          "Số điện thoại gồm 10 số, và bắt đầu bằng số 0"
        ),
      address: Yup.string().required("Bạn không được để trống địa chỉ"),
    }),
    //Gửi dữ liệu vào form Add
    onSubmit: (values) => {
      //formik tự biết khi nhập sai sẽ không submit còn khi đúng hết mới cho submit
      console.log("has Ok");
      setAddNewUserForm({
        ...addNewUserForm,
        NameAccount: values.NameAccount,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        address: values.address,
      });
    },
  });
  console.log(addNewUserForm);
  console.log(formik.errors.phoneNumber);
  // Lấy giá trị ngày
  function onSelectDate(dateValue, dateString) {
    setDate(dateString);
    setAddNewUserForm({
      ...addNewUserForm,
      date: dateString,
    });
  }

  // Lấy giá trị giới tính
  const onChangeGender = (value) => {
    console.log(`selected ${value} - True: Nam/ False: Nữ`);
    setAddNewUserForm({
      ...addNewUserForm,
      gender: value,
    });
  };

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
            <Button
              onClick={formik.handleSubmit}
              disabled={!formik.isValid}
              type="primary"
            >
              Xác nhận
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="name" label="Tên Tài Khoản">
                <Input
                  name="NameAccount"
                  placeholder="Nhập tên của chuyên gia dinh dưỡng ở đây"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.NameAccount && (
                  <p className="errorMSG">{formik.errors.NameAccount}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="email" label="Email">
                <Input
                  type="email"
                  name="email"
                  placeholder="Nhập Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <p className="errorMSG">{formik.errors.email}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="password" label="Mật khẩu">
                <Input
                  name="password"
                  placeholder="Nhập mật khẩu của bạn"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && (
                  <p className="errorMSG">{formik.errors.password}</p>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="gender" label="Giới tính">
                <Select
                  defaultValue={"false"}
                  onChange={onChangeGender}
                  options={[
                    {
                      value: "false",
                      label: "Nữ",
                    },
                    {
                      value: "true",
                      label: "Nam",
                    },
                  ]}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="phone_number" label="Số điện thoại">
                <Input
                  name="phoneNumber"
                  placeholder="Nhập Số điện thoại"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
                {formik.errors.phoneNumber && (
                  <p className="errorMSG">{formik.errors.phoneNumber}</p>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="address" label="Địa chỉ">
                <Input
                  placeholder="Nhập thông tin địa chỉ ở đây"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                {formik.errors.address && (
                  <p className="errorMSG">{formik.errors.address}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="date" label="Ngày sinh">
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                  format={"DD/MM/YYYY"}
                  onChange={onSelectDate}
                  name="date"
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
