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
import SelectionMealtypeFoodFilter from "../../components/selection/SelectionMealtypeFoodFilter";
import SelectionSeasonFood from "../../components/selection/SelectionSeasonFood";
import AddNewIngrendient from "../../components/drawn/AddNewIngrendient";
import SelectionSeasonIngredient from "../../components/selection/SelectionSeasonIngredient";
import EditIngrdient from "../../components/drawn/EditIngrdient";
const text = "Nguyên Liệu này sẽ được xoá khỏi danh sách?";
function NutrionExpertIngredients() {
  const confirm = () => {
    message.info("Đã xoá Nguyên Liệu thành công");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      justify: "center",
    },
    {
      title: "Tên Nguyên Liệu",
      dataIndex: "ingredient_name",
      justify: "center",
    },
    {
      title: "Ảnh Nguyên liệu",
      dataIndex: "",
      render: () => (
        <Image
          width={80}
          src="https://i.pinimg.com/474x/dd/be/8b/ddbe8b9cb7292f037a8c8e8c62b74d73.jpg"
        />
      ),
      justify: "center",
    },
    {
      title: "Giới hạn tối thiểu",
      dataIndex: "ingredient_name",
      justify: "center",
    },
    {
      title: "Giới hạn tối đa",
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
      title: "Water",
      dataIndex: "calories",
      justify: "center",
    },
    {
      title: "Fiber",
      dataIndex: "calories",
      justify: "center",
    },
    {
      title: "Ash",
      dataIndex: "calories",
      justify: "center",
    },
    {
      title: "Canxi",
      dataIndex: "calories",
      justify: "center",
    },
    {
      title: "Iron",
      dataIndex: "calories",
      justify: "center",
    },
    {
      title: "Zinc",
      dataIndex: "calories",
      justify: "center",
    },
    {
      title: "Vitamin C",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Vitamin B1",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Vitamin B2",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Vitamin B3",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Vitamin B6A",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Vitamin D",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Vitamin B12",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Vitamin A",
      dataIndex: "vitamin",
      justify: "center",
    },
    {
      title: "Vitamin A_rae",
      dataIndex: "vitamin",
      justify: "center",
    },

    {
      title: "Chỉnh sửa Nguyên Liệu",
      render: () => <EditIngrdient></EditIngrdient>,
    },
    {
      title: "Xoá Nguyên Liệu",
      dataIndex: "",
      key: "x",
      render: () => (
        <>
          <Popconfirm
            placement="bottomRight"
            title={text}
            onConfirm={confirm}
            okText="Xoá Nguyên Liệu"
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
        <Breadcrumb.Item>Danh sách nguyên liệu</Breadcrumb.Item>
      </Breadcrumb>
      <div className="wrapper__listUser">
        <div className="add_new_user__listUser">
          <AddNewIngrendient></AddNewIngrendient>
        </div>
        <div className="search_user___listUser">
          <Search
            placeholder="Nhập tên nguyên liệu bạn cần phải tìm"
            allowClear
            enterButton="Tìm Kiếm"
            size="large"
            onSearch={onSearch}
          />
        </div>
        Lọc theo mùa
        <div style={{ paddingTop: 0 }}>
          <SelectionSeasonIngredient></SelectionSeasonIngredient>
        </div>
      </div>

      {/* thông tin tài khoản người dùng */}
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 3700,
          y: 500,
        }}
        expandable={{
          columnWidth: "auto",
          columnTitle: "auto",
        }}
      />
    </div>
  );
}

export default NutrionExpertIngredients;
