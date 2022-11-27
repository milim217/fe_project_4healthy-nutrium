import {
  Table,
  Button,
  message,
  Tag,
  Image,
  Popconfirm,
  Breadcrumb,
  Modal,
  Input,
} from "antd";
import React, { useState } from "react";
import HeaderLayout from "../../components/header/HeaderAdmin";
import AddNewUser from "../../components/drawn/AddNewUser";
import "../../assets/style/admin/style.css";
import Slidebar from "./SlidebarAdmin";
const text = "Bạn có chắc chắn muốn xoá tài khoản này?";

const ListUser = () => {
  const confirm = () => {
    message.info("Đã xoá tài khoản thành công");
  };
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
          <Image
            width={80}
            src="https://i.pinimg.com/474x/dd/be/8b/ddbe8b9cb7292f037a8c8e8c62b74d73.jpg"
          />
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      justify: "center",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      justify: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      justify: "center",
      render: () => <Tag color="green">Đã kích hoạt </Tag>,
    },
    {
      title: "Thông tin người dùng",
      render: () => (
        <Button type="primary" onClick={() => showModal()}>
          Xem thông tin
        </Button>
      ),
    },
    {
      title: "Hành động",
      dataIndex: "",
      key: "x",
      render: () => (
        <>
          <Popconfirm
            placement="left"
            title={text}
            onConfirm={confirm}
            okText="Xoá tài khoản"
            cancelText="Huỷ hành động"
          >
            <Button>Xoá Tài Khoản</Button>
          </Popconfirm>
        </>
      ),
      justify: "center",
    },
  ];

  const data2 = [
    {
      name: `name 1`,
      key: 1,
      email: `admin$1@gmail.com`,
      role: `role number 1`,
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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          }}
        >
          <Breadcrumb.Item>
            <a href="">Trang Quản trị viên</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Danh sách người dùng</Breadcrumb.Item>
        </Breadcrumb>
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
            x: 600,
          }}
        />
        <Modal
          title="Thông tin tài khoản"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Tên người dùng:</p>
          <p>Email: </p>
          <p>Địa chỉ: </p>
        </Modal>
      </Slidebar>
    </div>
  );
};
export default ListUser;
