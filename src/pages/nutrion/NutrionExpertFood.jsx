import React, { useState } from "react";
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
import "../../assets/style/admin/style.css";
import SelectionFoods from "../../components/selection/SelectionFoods";
import SelectionCategories from "../../components/selection/SelectionCategories";
import SelectionDisplayPer from "../../components/selection/SelectionDisplayPer";
import SelectionSeasonFood from "../../components/selection/SelectionSeasonFood";
import AddNewFood from "../../components/drawn/AddNewFood";
const text = "Bạn có chắc chắn muốn món ăn này khỏi danh sách?";

const NutrionExpertFood = () => {
  const confirm = () => {
    message.info("Đã xoá món ăn thành công");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      justify: "center",
    },
    {
      title: "Tên món ăn",
      dataIndex: "food_name",
      justify: "center",
    },
    {
      title: "Ảnh món ăn",
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
      title: "Loại món ăn",
      dataIndex: "category_id",
      justify: "center",
    },
    {
      title: "Mùa",
      dataIndex: "seasson_id",
      justify: "center",
    },
    {
      title: "Công thức",
      dataIndex: "recipe",
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
      title: "Chỉnh sửa món ăn",
      render: () => (
        <Button type="primary" onClick={() => showModal()}>
          Chỉnh sửa
        </Button>
      ),
    },
    {
      title: "Xoá món ăn",
      dataIndex: "",
      key: "x",
      render: () => (
        <>
          <Popconfirm
            placement="bottomRight"
            title={text}
            onConfirm={confirm}
            okText="Xoá món ăn"
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
      food_name: `food_name ${i}`,
      key: i,
      category_id: `category_id${i}@gmail.com`,
      seasson_id: `seasson_id ${i}`,
      recipe: `recipe ${i}`,
      fat: `fat ${i}`,
      protein: `protein ${i}`,
      carbon: `carbon ${i}`,
      calories: `calories ${i}`,
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
        <Breadcrumb.Item>Danh sách món ăn</Breadcrumb.Item>
      </Breadcrumb>
      <div className="wrapper__listUser">
        <div className="add_new_user__listUser">
          <AddNewFood></AddNewFood>
        </div>
        <Space>
          <SelectionFoods />
          <SelectionCategories />
          <SelectionSeasonFood />
          <SelectionDisplayPer />
        </Space>
        <div className="search_user___listUser">
          <Search
            placeholder="Nhập tên món ăn cần tìm"
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
        title="Chỉnh sửa và cập nhật món ăn"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Chỉnh sửa món ăn
      </Modal>
    </div>
  );
};
export default NutrionExpertFood;
