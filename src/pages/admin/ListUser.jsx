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
  Button,
} from "antd";
import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/header/HeaderAdmin";
import AddNewUser from "../../components/drawn/AddNewUser";
import "../../assets/style/admin/style.css";
import Slidebar from "./SlidebarAdmin";
import ModalDeleteListUser from "../../components/modal/ModalDeleteListUser";
import ModalViewInfomationUser from "../../components/modal/ModalViewInfomationUser";
import imageUserOfListUser from "../../assets/image/Img_User.png";
import UserAPI from "../../service/Actions/UserAPI";
const text = "Bạn có chắc chắn muốn xoá tài khoản này?";

const ListUser = () => {
  const [listuser, setListUser] = useState([]);
  const [deleteUserRow, setDeleteUserRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    UserAPI.getAll()
      .then((res) => {
        setListUser(res.data);
      })
      .catch((err) => {});
  }, []);

  const valueNutriExpert = listuser.map(
    (listUserNutritionExpert) => listUserNutritionExpert.role.name
  );
  var sizeRoleNutritionExpertUser = 0;
  var sizeRoleAdmin = 0;
  var sizeRoleUser = 0;
  const RoleList = Object.values(valueNutriExpert);
  RoleList.forEach((RoleList) => {
    if (RoleList === "NUTRIENT_EXPERT") {
      sizeRoleNutritionExpertUser++;
    }
    if (RoleList === "ADMIN") {
      sizeRoleAdmin++;
    }
    if (RoleList === "USER") {
      sizeRoleUser++;
    }
  });

  const columns = [
    {
      title: "Tên người dùng",
      dataIndex: "name",
      justify: "center",
    },
    {
      title: "Ảnh Người Dùng",
      dataIndex: "image_user",
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
      dataIndex: "address_user",
      justify: "center",
    },
    {
      title: "Ngày sinh",
      dataIndex: "Birth_Of_Date",
      justify: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber_user",
      justify: "center",
    },
    {
      title: "Vai trò",
      dataIndex: "roleUser",
      justify: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      justify: "center",
      render: (status) => (
        <>
          {!status && <Tag color="red">Vô hiệu hoá</Tag>}
          {status && <Tag color="green">Đã kích hoạt </Tag>}
        </>
      ),
    },
    {
      title: "Thông tin khác",
      dataIndex: "role",
      justify: "center",
    },
    {
      title: "Hành động",
      fixed: "right",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          {/* <ModalDeleteListUser> */}
          <Button
            type="primary"
            onClick={() => {
              showModal();
              setDeleteUserRow(record.key);
            }}
          >
            Vô hiệu hoá
          </Button>
          {/* </ModalDeleteListUser> */}
        </>
      ),
      justify: "center",
    },
  ];

  const data = [];
  listuser
    ? listuser.map((listUser) =>
        data.push({
          key: listUser.id,
          email: listUser.email,
          name: listUser.name,
          address_user: listUser.address,
          Birth_Of_Date: listUser.dob,
          phoneNumber_user: listUser.phone,
          roleUser:
            listUser.role.name === "NUTRIENT_EXPERT"
              ? "Chuyên gia dinh dưỡng"
              : listUser.role.name === "ADMIN"
              ? "Quản Trị Viên"
              : listUser.role.name === "USER"
              ? "Người Dùng"
              : null,
          status: listUser.status,
        })
      )
    : console.log("error");

  // In xem đang xoá ở hàng có ID nào
  console.log(deleteUserRow);
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
            <Col span={6}>
              <Statistic
                title="Số lượng tài khoản"
                value={listuser.length}
                precision={0}
              />
            </Col>
            <Col span={6}>
              <Statistic
                title="Số lượng chuyên gia phân tích"
                value={sizeRoleNutritionExpertUser}
                precision={0}
              />
            </Col>
            <Col span={6}>
              <Statistic
                title="Số lượng quản trị viên"
                value={sizeRoleAdmin}
                precision={0}
              />
            </Col>
            <Col span={6}>
              <Statistic
                title="Số lượng người dùng"
                value={sizeRoleUser}
                precision={0}
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
        {/* vô hiệu hoá tài khoản */}
        <>
          <Modal
            title="Lý do tài khoản này bị vô hiệu hoá"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input placeholder="Lý do xoá tài khoản này?" />
          </Modal>
        </>
        {/* thông tin tài khoản người dùng */}
        <Table
          columns={columns.roleUser === "Quản Trị Viên" ? null : columns}
          dataSource={data}
          scroll={{
            x: 1200,
            y: 450,
          }}
        />
      </Slidebar>
    </div>
  );
};
export default ListUser;
