import React, { useState, useEffect } from "react";
import { PageHeader, Avatar, Dropdown, Modal, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import NutrionExpertInformation from "../../pages/nutrion/NutrionExpertInformation";
import { useHistory } from "react-router-dom";

const HeaderNutritionExpertManager = ({title,user}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect( () => {
     user.then(res => {
      setCurrentUser(res.data);
    })
  }, []);

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem('quiz-data');
    history.push("/login");
  };

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
        <a type="primary" href='/profile'>
          Xem thông tin của bạn
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={logout}>
          Đăng xuất
        </a>
      ),
    },
  ];
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title={title}
      style={{ backgroundColor: "white" }}
    >
      <div
        style={{
          position: "absolute",
          right: "25px",
          top: "20px",
        }}
      >
        <div className="name_account_listPage"> {currentUser?.name} </div>
        <div className="type_account_listPage"> Chuyên gia dinh dưỡng </div>
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
        <NutrionExpertInformation></NutrionExpertInformation>
      </Modal>
    </PageHeader>
  );
};

export default HeaderNutritionExpertManager;
