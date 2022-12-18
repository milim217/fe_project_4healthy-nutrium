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
import AlertMessage from "../../../src/components/alert/AlertMessage";

const text = "Nguyên Liệu này sẽ được xoá khỏi danh sách?";

function NutrionExpertIngredients() {
  const [Ingredient, setIngredient] = useState([]);
  const [alert, setAlert] = useState(null);

  const loadIngredientList = async () => {
    await IngredientAPI.getAll()
      .then((res) => {
        setIngredient(res.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    loadIngredientList();
  }, []);

  const deleteIngredient = async (id) => {
    await IngredientAPI.delete(id)
      .then((res) => {
        setAlert({ type: "success", message: "Xóa nguyên liệu thành công" });
        setTimeout(() => setAlert(null), 5000);
        loadIngredientList();
      })
      .catch((e) => {
        setAlert({
          type: "danger",
          message: e.response.data
            ? e.response.data.message
            : "Lỗi xóa nguyên liệu",
        });
        setTimeout(() => setAlert(null), 5000);
      });
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      justify: "center",
    },
    {
      title: "Tên Nguyên Liệu",
      dataIndex: "ingredientName",
      justify: "center",
    },
    {
      title: "Ảnh Nguyên liệu",
      dataIndex: "img",
      render: (imageIngredient) => {
        return <Image width={80} height={60} src={imageIngredient} />;
      },
      justify: "center",
    },
    {
      title: "Giới hạn tối thiểu",
      dataIndex: "minLimit",
      justify: "center",
    },
    {
      title: "Giới hạn tối đa",
      dataIndex: "maxLimit",
      justify: "center",
    },
    {
      title: "Mùa",
      dataIndex: "seasson_id",
      justify: "center",
    },
    {
      title: "Chất béo(g)",
      dataIndex: "fat",
      justify: "center",
    },
    {
      title: "Chất đạm(g)",
      dataIndex: "protein",
      justify: "center",
    },
    {
      title: "Chất bột đường(g)",
      dataIndex: "carb",
      justify: "center",
    },
    {
      title: "Calo(Kcal)",
      dataIndex: "calo",
      justify: "center",
    },
    {
      title: "Nước(g)",
      dataIndex: "water",
      justify: "center",
    },
    {
      title: "Chất xơ(g)",
      dataIndex: "fiber",
      justify: "center",
    },
    {
      title: "Tro(g)",
      dataIndex: "ash",
      justify: "center",
    },
    {
      title: "Canxi(mg)",
      dataIndex: "canxi",
      justify: "center",
    },
    {
      title: "Iron(mg)",
      dataIndex: "iron",
      justify: "center",
    },
    {
      title: "Zinc(mg)",
      dataIndex: "zinc",
      justify: "center",
    },
    {
      title: "VitaminC(mg)",
      dataIndex: "vitaminC",
      justify: "center",
    },
    {
      title: "VitaminB1(mg)",
      dataIndex: "vitaminB1",
      justify: "center",
    },
    {
      title: "VitaminB2(mg)",
      dataIndex: "vitaminB2",
      justify: "center",
    },
    {
      title: "VitaminB3(mg)",
      dataIndex: "vitaminB3",
      justify: "center",
    },
    {
      title: "VitaminB6A(mg)",
      dataIndex: "vitaminB6A",
      justify: "center",
    },
    {
      title: "VitaminD(mg)",
      dataIndex: "vitaminD",
      justify: "center",
    },
    {
      title: "VitaminB12(mcg)",
      dataIndex: "vitaminB12",
      justify: "center",
    },
    {
      title: "VitaminA(mcg)",
      dataIndex: "vitaminA",
      justify: "center",
    },
    {
      title: "VitaminA_rae(mcg)",
      dataIndex: "vitaminARae",
      justify: "center",
    },

    {
      title: "Chỉnh sửa Nguyên Liệu",
      render: (_, record) => (
        <EditIngrdient ingredient={record}></EditIngrdient>
      ),
      fixed: "right",
    },
    {
      title: "Xoá Nguyên Liệu",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          <Popconfirm
            placement="bottomRight"
            title={text}
            onConfirm={() => {
              deleteIngredient(record.id);
            }}
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
          ingredientName: ingredientValue.ingredientName,
          minLimit: ingredientValue.minLimit,
          maxLimit: ingredientValue.maxLimit,
          // seasons: ingredientValue.seasons,
          seasson_id: ingredientValue.seasons.map((s) => s.seasonName + " "),
          fat: ingredientValue.fat,
          protein: ingredientValue.protein,
          carb: ingredientValue.carb,
          calo: ingredientValue.calo,
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
          vitaminARae: ingredientValue.vitaminARae,
          img: `http://localhost:8080/ingredient/${ingredientValue.id}/image`,
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
          <AddNewIngrendient
            loadIngredientList={loadIngredientList}
          ></AddNewIngrendient>
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
      <div className="wrapper__listUser">
        <AlertMessage info={alert} />
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
