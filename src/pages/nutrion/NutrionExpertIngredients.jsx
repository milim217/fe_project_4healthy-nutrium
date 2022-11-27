import {
  Table,
  Button,
  message,
  Tag,
  Image,
  Popconfirm,
  Space,
  Breadcrumb,
  Modal,
  Input,
} from "antd";
import React, { useState } from "react";
import HeaderLayout from "../../components/header/HeaderAdmin";
import "../../assets/style/admin/style.css";
import SelectionFoods from "../../components/selection/SelectionFoods";
import SelectionCategories from "../../components/selection/SelectionCategories";
import SelectionDisplayPer from "../../components/selection/SelectionDisplayPer";
import SelectionSeasonFood from "../../components/selection/SelectionSeasonFood";
import AddNewIngrendient from "../../components/drawn/AddNewIngrendient";
const text = "Thành phần này sẽ được xoá khỏi danh sách?";
function NutrionExpertIngredients() {
  const confirm = () => {
    message.info("Đã xoá thành phần thành công");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      justify: "center",
    },
    {
      title: "Tên thành phần",
      dataIndex: "ingredient_name",
      justify: "center",
    },
    {
      title: "Mùa",
      dataIndex: "seasson_id",
      justify: "center",
    },
    {
      title: "Fat",
      dataIndex: "fat",
      justify: "center",
    },
    {
      title: "Protein",
      dataIndex: "protein",
      justify: "center",
    },
    {
      title: "Carbon",
      dataIndex: "carbon",
      justify: "center",
    },
    {
      title: "Calo",
      dataIndex: "calories",
      justify: "center",
    },
    {
      title: "Vitamin",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Micronutrium",
      dataIndex: "micronutrium",
      justify: "center",
    },

    {
      title: "Chỉnh sửa thành phần",
      render: () => (
        <Button type="primary" onClick={() => showModal()}>
          Chỉnh sửa
        </Button>
      ),
    },
    {
      title: "Xoá thành phần",
      dataIndex: "",
      key: "x",
      render: () => (
        <>
          <Popconfirm
            placement="bottomRight"
            title={text}
            onConfirm={confirm}
            okText="Xoá thành phần"
            cancelText="Huỷ hành động"
          >
            <Button>Xoá</Button>
          </Popconfirm>
        </>
      ),
      justify: "center",
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      id: `id ${i}`,
      ingredient_name: `ingredient_name ${i}`,
      key: i,
      seasson_id: `seasson_id ${i}`,
      fat: `fat ${i}`,
      protein: `protein ${i}`,
      carbon: `carbon ${i}`,
      calories: `calories ${i}`,
      vitamin: `vitamin ${i}`,
      micronutrium: `micronutrium ${i}`,
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
      {/* đường dẫn */}
      <Breadcrumb
        style={{
          paddingLeft: "10px",
          paddingTop: "5px",
          paddingBottom: "10px",
        }}
      >
        <Breadcrumb.Item>
          <a href="">Trang chuyên gia dinh dưỡng</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Danh sách thành phần</Breadcrumb.Item>
      </Breadcrumb>
      <div className="wrapper__listUser">
        <div className="add_new_user__listUser">
          <AddNewIngrendient></AddNewIngrendient>
        </div>
        <div className="search_user___listUser">
          <Search
            placeholder="Nhập tên thành phần bạn cần phải tìm"
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
          y: 580,
        }}
      />
      <Modal
        title="Chỉnh sửa và cập nhật thành phần"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Chỉnh sửa thành phần
      </Modal>
    </div>
  );
}

export default NutrionExpertIngredients;
