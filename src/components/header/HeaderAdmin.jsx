import React, { useState } from "react";
import { PageHeader, Avatar, Dropdown, Modal, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import AdminInfomation from "../../pages/admin/AdminInfomation";
const HeaderLayout = (props) => {
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
  const items = [
    {
      key: "1",
      label: (
        <a type="primary" onClick={showModal}>
          Xem thông tin của bạn
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Đăng xuất
        </a>
      ),
    },
  ];
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title={props.title}
      style={{ backgroundColor: "white" }}
    >
      <div
        style={{
          position: "absolute",
          right: "25px",
          top: "20px",
        }}
      >
        <div className="name_account_admin"> Tên của tài khoản </div>
        <div className="type_account_admin"> Quản trị viên </div>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Avatar
            style={{
              backgroundColor: "#ffbf00",
              verticalAlign: "middle",
            }}
            shape="square"
            size={50}
            icon={
              <UserOutlined
                style={{
                  fontSize: 40,
                }}
              />
            }
            // size="large"
          ></Avatar>
        </Dropdown>
      </div>
      <Modal
        title="Xem thông tin"
        open={isModalOpen}
        onOk={handleOk}
        okText={"Huỷ"}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <AdminInfomation></AdminInfomation>
      </Modal>
    </PageHeader>
  );
};

export default HeaderLayout;
