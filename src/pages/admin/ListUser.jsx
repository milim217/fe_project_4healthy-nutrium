import {
  Table,
  Tag,
  Image,
  Popconfirm,
  Breadcrumb,
  Modal,
  Input,
  Card,
  Row,
  Col,
  Statistic,
} from "antd";
import React, { useState } from "react";
import HeaderLayout from "../../components/header/HeaderAdmin";
import AddNewUser from "../../components/drawn/AddNewUser";
import "../../assets/style/admin/style.css";
import Slidebar from "./SlidebarAdmin";
import ModalDeleteListUser from "../../components/modal/ModalDeleteListUser";
import ModalViewInfomationUser from "../../components/modal/ModalViewInfomationUser";
import imageUserOfListUser from "../../assets/image/Img_User.png";
const text = "Bạn có chắc chắn muốn xoá tài khoản này?";

const ListUser = () => {
  const columns = [
    {
      title: "Tên người dùng",
      dataIndex: "name",
      justify: "center",
    },
    {
      title: "Ảnh Người Dùng",
      dataIndex: "",
      render: () => (
        <>
          <Image width={50} src={imageUserOfListUser} />
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      justify: "center",
    },
    {
      title: "Địa chỉ",
      dataIndex: "role",
      justify: "center",
    },
    {
      title: "Ngày sinh",
      dataIndex: "role",
      justify: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "role",
      justify: "center",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      justify: "center",
    },
    {
      title: "Thông tin khác",
      dataIndex: "role",
      justify: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      justify: "center",
      render: () => (
        <>
          <Tag color="red">Đã vô hiệu hoá tài khoản </Tag>
          {/* <Tag color="green">Đã kích hoạt </Tag> */}
        </>
      ),
    },
    {
      title: "Thông tin người dùng",
      render: () => <ModalViewInfomationUser></ModalViewInfomationUser>,
    },
    {
      title: "Hành động",
      dataIndex: "",
      key: "x",
      render: () => (
        <>
          <ModalDeleteListUser></ModalDeleteListUser>
        </>
      ),
      justify: "center",
    },
  ];

  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      name: `name ${i}`,
      key: i,
      email: `admin${i}@gmail.com`,
      role: `role number ${i}`,
    });
  }

  // Tìm kiếm người dùng
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <HeaderLayout title={"Danh sách người dùng"}></HeaderLayout>

      <Slidebar>
        {/* đường dẫn */}
        <Breadcrumb
          style={{
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "10px",
            marginTop: "10px",
          }}
        >
          <Breadcrumb.Item>
            <a href="">Trang Quản trị viên</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Danh sách người dùng</Breadcrumb.Item>
        </Breadcrumb>
        <Card bordered={false} className="border-1">
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
        <div className="wrapper__listUser">
          <div className="add_new_user__listUser">
            <AddNewUser></AddNewUser>
          </div>
          <div className="search_user___listUser">
            <Search
              placeholder="Nhập Email người dùng cần tìm"
              allowClear
              enterButton="Tìm Kiếm"
              size="large"
              onSearch={onSearch}
            />
          </div>
        </div>

        {/* thông tin tài khoản người dùng */}
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 1200,
          }}
        />
      </Slidebar>
    </div>
  );
};
export default ListUser;
