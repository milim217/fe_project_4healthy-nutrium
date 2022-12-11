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
import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/header/HeaderNutritionExpertManager";
import "../../assets/style/admin/style.css";
import SelectionFoods from "../../components/selection/SelectionFoods";
import SelectionCategories from "../../components/selection/SelectionCategories";
import SelectionMealtypeFoodFilter from "../../components/selection/SelectionMealtypeFoodFilter";
import SelectionSeasonFood from "../../components/selection/SelectionSeasonFood";
import AddNewIngrendient from "../../components/drawn/AddNewIngrendient";
import SelectionSeasonIngredient from "../../components/selection/SelectionSeasonIngredient";
import EditIngrdient from "../../components/drawn/EditIngrdient";
import IngredientAPI from "../../service/Actions/IngredientAPI";
import FoodAPI from "../../service/Actions/FoodAPI";
const text = "Nguyên Liệu này sẽ được xoá khỏi danh sách?";

function NutrionExpertIngredients() {
  const [Ingredient, setIngredient] = useState([]);

  useEffect(() => {
    IngredientAPI.getAll()
      .then((res) => {
        console.log("data = " + JSON.stringify(res.data));
        setIngredient(res.data);
      })
      .catch((err) => {});
  }, []);

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
      dataIndex: "image_ingredient",
      render: (imageIngredient) => {
        return <Image width={80} height={60} src={imageIngredient} />;
      },
      justify: "center",
    },
    {
      title: "Giới hạn tối thiểu",
      dataIndex: "min_limit",
      justify: "center",
    },
    {
      title: "Giới hạn tối đa",
      dataIndex: "max_limit",
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
      dataIndex: "water",
      justify: "center",
    },
    {
      title: "Fiber",
      dataIndex: "fiber",
      justify: "center",
    },
    {
      title: "Ash",
      dataIndex: "ash",
      justify: "center",
    },
    {
      title: "Canxi",
      dataIndex: "canxi",
      justify: "center",
    },
    {
      title: "Iron",
      dataIndex: "iron",
      justify: "center",
    },
    {
      title: "Zinc",
      dataIndex: "zinc",
      justify: "center",
    },
    {
      title: "Vitamin C",
      dataIndex: "vitaminC",
      justify: "center",
    },
    {
      title: "Vitamin B1",
      dataIndex: "vitaminB1",
      justify: "center",
    },
    {
      title: "Vitamin B2",
      dataIndex: "vitaminB2",
      justify: "center",
    },
    {
      title: "Vitamin B3",
      dataIndex: "vitaminB3",
      justify: "center",
    },
    {
      title: "Vitamin B6A",
      dataIndex: "vitaminB6A",
      justify: "center",
    },
    {
      title: "Vitamin D",
      dataIndex: "vitaminD",
      justify: "center",
    },
    {
      title: "Vitamin B12",
      dataIndex: "vitaminB12",
      justify: "center",
    },
    {
      title: "Vitamin A",
      dataIndex: "vitaminA",
      justify: "center",
    },
    {
      title: "Vitamin A_rae",
      dataIndex: "vitaminArea",
      justify: "center",
    },

    {
      title: "Chỉnh sửa Nguyên Liệu",
      render: () => <EditIngrdient></EditIngrdient>,
      fixed: "right",
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
      fixed: "right",
    },
  ];

  const data = [];
  Ingredient
    ? Ingredient.map((ingredientValue) =>
        data.push({
          id: ingredientValue.id,
          ingredient_name: ingredientValue.ingredientName,
          min_limit: ingredientValue.minLimit,
          max_limit: ingredientValue.maxLimit,
          seasson_id: ingredientValue.seasons.map((s) => s.seasonName + " "),
          fat: ingredientValue.fat,
          protein: ingredientValue.protein,
          carbon: ingredientValue.carb,
          calories: ingredientValue.calo,
          water: ingredientValue.water,
          fiber: ingredientValue.fiber,
          ash: ingredientValue.ash,
          canxi: ingredientValue.canxi,
          iron: ingredientValue.iron,
          zinc: ingredientValue.zinc,
          vitaminC: ingredientValue.vitaminC,
          vitaminB1: ingredientValue.vitaminB1,
          vitaminB2: ingredientValue.vitaminB2,
          vitaminB3: ingredientValue.vitaminB3,
          vitaminB6A: ingredientValue.vitaminB6A,
          vitaminD: ingredientValue.vitaminD,
          vitaminB12: ingredientValue.vitaminB12,
          vitaminA: ingredientValue.vitaminA,
          vitaminArea: ingredientValue.vitaminARae,
          image_ingredient: `http://localhost:8080/ingredient/${ingredientValue.id}/image`,
        })
      )
    : console.log("error");
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
