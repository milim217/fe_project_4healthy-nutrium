import React, { useState } from "react";
import dayjs from "dayjs";
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
import { useFormik } from "formik";
import * as Yup from "yup";
const { Option } = Select;

const AddNewUser = () => {
  const [open, setOpen] = useState(false);
  //form Add lấy dữ liệu api từ state này
  const [addNewUserForm, setAddNewUserForm] = useState({
    NameAccount: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    date: "",
    gender: "false", //mặc định là nữ
  });

  // Lấy dữ liệu từ formAdd bằng formik
  const formik = useFormik({
    initialValues: {
      NameAccount: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      date: "",
      ComfirmPassword: "",
    },

    //Regex
    validationSchema: Yup.object({
      NameAccount: Yup.string()
        .required("Bạn không được để trống tên tài khoản")
        .matches(
          /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
          "Tên tài khoản chứa 8 - 20 ký tự, không chứa '.' và '_'"
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
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/,
          "Mật khẩu tối thiểu 8 - 10 ký tự, ít nhất chứa một chữ cái và một số:"
        ),
      ComfirmPassword: Yup.string()
        .required("Bạn không được để trống nhập lại mật khẩu")
        .oneOf(
          [Yup.ref("password"), null],
          "mật khẩu nhập lại phải trùng với mật khẩu bạn đã nhập"
        ),
      phoneNumber: Yup.string()
        .required("Bạn không được để trống số điện thoại")
        .matches(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          "Số điện thoại gồm 10 số, và bắt đầu bằng số 0"
        ),
      date: Yup.string()
        .required("Bạn không được để trống ngày sinh")
        .matches(
          /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,
          "Ngày sinh phải đúng định dạng DD/MM/YYYY"
        ),
      address: Yup.string().required("Bạn không được để trống địa chỉ"),
    }),
    //Gửi dữ liệu vào form Add
    onSubmit: (values) => {
      //formik tự biết khi nhập sai sẽ không submit còn khi đúng hết mới cho submit
      console.log("has Ok");
      setAddNewUserForm({
        ...addNewUserForm,
        NameAccount: values.NameAccount.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
        phoneNumber: values.phoneNumber.trim(),
        address: values.address.trim(),
        date: values.date.trim(),
      });
      // console.log(addNewUserForm.gender);
    },
  });

  // // Lấy giá trị ngày
  // function onSelectDate(objectDate, dateString) {
  //   console.log(dateString);
  //   setAddNewUserForm({
  //     ...addNewUserForm,
  //     date: dateString,
  //   });
  // }

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
    document.getElementById("formAddUser").reset();
    formik.handleReset();
  };
  //Lấy dữ liệu
  // console.log(addNewUserForm);
  // console.log(addNewUserForm.gender);
  // console.log(formik.errors.phoneNumber);

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
        title="Tạo tài khoản chuyên gia dinh dưỡng"
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
        <Form layout="vertical" hideRequiredMark id="formAddUser">
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="name" label="Tên Tài Khoản">
                <Input
                  name="NameAccount"
                  placeholder="Nhập tên của chuyên gia dinh dưỡng ở đây"
                  value={formik.values.NameAccount}
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
                <Input.Password
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
            <Col span={24}>
              <Form.Item name="ComfirmPassword" label="Nhập lại mật khẩu:">
                <Input.Password
                  name="ComfirmPassword"
                  placeholder="Nhập lại mật khẩu của bạn"
                  value={formik.values.ComfirmPassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.ComfirmPassword && (
                  <p className="errorMSG">{formik.errors.ComfirmPassword}</p>
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
                <Input
                  placeholder="Nhập thông tin ngày sinh ở đây"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
                {formik.errors.date && (
                  <p className="errorMSG">{formik.errors.date}</p>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewUser;
