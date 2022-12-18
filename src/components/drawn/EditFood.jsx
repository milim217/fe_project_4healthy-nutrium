import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Image,
  Drawer,
  Form,
  Input,
  Select,
  Checkbox,
  Divider,
  Space,
  Row,
} from "antd";
import UploadImageFile from "../../components/upload-image-avt/uploadImageFile";
import CategoryAPI from "../../service/Actions/CategoryAPI";
import IngredientAPI from "../../service/Actions/IngredientAPI";
import AlertDiv from "../alert/AlertDiv";
import TableEditIngredientFood from "../../pages/nutrion/TableEditIngredientFood";
import { useFormik } from "formik";
import * as Yup from "yup";
import { propTypes } from "react-bootstrap/esm/Image";
import FoodAPI from "../../service/Actions/FoodAPI";

//List mùa
const CheckboxGroup = Checkbox.Group;
const seassonList = [
  {
    label: "Xuân",
    value: {
      id: 1,
      seasonName: "Spring",
    },
  },
  {
    label: "Hạ",
    value: {
      id: 2,
      seasonName: "Summer",
    },
  },
  {
    label: "Thu",
    value: {
      id: 3,
      seasonName: "Autumn",
    },
  },
  {
    label: "Đông",
    value: {
      id: 4,
      seasonName: "Winter",
    },
  },
];
const SeassonValueDefault = [
  {
    label: "Xuân",
    value: {
      id: 1,
      seasonName: "Spring",
    },
  },
];
//list bữa ăn
const MealTypeList = [
  {
    label: "Bữa sáng",
    value: {
      id: 1,
      mealName: "Bữa sáng",
    },
  },
  {
    label: "Bữa trưa",
    value: {
      id: 2,
      mealName: "Bữa trưa",
    },
  },
  {
    label: "Bữa tối",
    value: {
      id: 3,
      mealName: "Bữa tối",
    },
  },
];
const MealTypeValueDefault = [
  {
    label: "Bữa sáng",
    value: {
      id: 1,
      mealName: "Bữa sáng",
    },
  },
];

const { Option } = Select;
const EditFood = ({ foodData }) => {
  const [alert2, setAlert2] = useState(null);
  const [open, setOpen] = useState(false);
  const [checkedSeasonList, setCheckedSeasonList] = useState();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [alert, setAlert] = useState(null);
  const [alert1, setAlert1] = useState(null);
  const [food, setFood] = useState(null);

  const onChange_SeassonList = (list) => {
    setCheckedSeasonList(list);
    setIndeterminate(!!list.length && list.length < seassonList.length);
    setCheckAll(list.length === seassonList.length);
    if (list.length === 0) {
      // console.log("List rỗng");
      setAlert({
        message: "Không được để trống mùa",
      });
      setTimeout(() => setAlert(null), 2000);
      document.getElementById("btn_EditFood").disabled = true;
    } else {
      document.getElementById("btn_EditFood").disabled = false;
    }
  };
  const onCheckAllChange = (e) => {
    const seassonListOnlyName = seassonList.map((data) => data.value);
    setCheckedSeasonList(e.target.checked ? seassonListOnlyName : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    if (e.target.checked == []) {
      console.log("List rỗng");
      setAlert({
        message: "Không được để trống mùa",
      });
      setTimeout(() => setAlert(null), 2000);
      document.getElementById("btn_EditFood").disabled = true;
    } else {
      document.getElementById("btn_EditFood").disabled = false;
    }
  };
  //
  //
  //
  // Bữa của món ăn
  //
  //
  //
  const [checkedMealTypeList, setcheckedMealTypeList] =
    useState(MealTypeValueDefault);
  const [indeterminateMealType, setIndeterminateMealType] = useState(true);
  const [checkAllMealType, setCheckAllMealType] = useState(false);

  const onChange_MealTypeList = (list) => {
    setcheckedMealTypeList(list);
    setIndeterminateMealType(
      !!list.length && list.length < MealTypeList.length
    );
    setCheckAllMealType(list.length === MealTypeList.length);
    if (list.length === 0) {
      console.log("List rỗng");
      setAlert1({
        message: "Không được để trống bữa ăn",
      });
      setTimeout(() => setAlert1(null), 2000);
      document.getElementById("btn_EditFood").disabled = true;
    } else {
      document.getElementById("btn_EditFood").disabled = false;
    }
  };
  const onCheckAllChangeMealType = (e) => {
    const MealTypeListOnlyName = MealTypeList.map((data) => data.value);
    setcheckedMealTypeList(e.target.checked ? MealTypeListOnlyName : []);
    setIndeterminateMealType(false);
    setCheckAllMealType(e.target.checked);
    if (e.target.checked == []) {
      // console.log("List rỗng");
      setAlert1({
        message: "Không được để trống bữa ăn",
      });
      setTimeout(() => setAlert1(null), 2000);
      document.getElementById("btn_EditFood").disabled = true;
    } else {
      document.getElementById("btn_EditFood").disabled = false;
    }
  };
  //
  //
  //
  // Regex + formik các ô Input còn lại
  //
  //
  //
  const formik = useFormik({
    //
    // Giá trị vào formik để kiểm tra
    //
    initialValues: {
      foodName: "",
      recipe: "",
      fat: "",
      protein: "",
      carb: "",
      calo: "",
      // Fiber: "",
    },
    //
    //Regex
    //
    validationSchema: Yup.object({
      foodName: Yup.string()
        .required("Bạn không được để trống tên món ăn")
        .matches(/^([^0-9]*)$/, "Tên món ăn chỉ chứa chữ cái"),
      recipe: Yup.string().required(
        "Bạn không được để trống công thức nấu món này"
      ),
      fat: Yup.string()
        .required("Bạn không được để hàm lượng trống chất béo")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      protein: Yup.string()
        .required("Bạn không được để trống hàm lượng chất protein")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      carb: Yup.string()
        .required("Bạn không được để trống hàm lượng chất carb")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      calo: Yup.string()
        .required("Bạn không được để trống hàm lượng chất calo")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      // Fiber: Yup.string()
      //   .required("Bạn không được để trống hàm lượng chất Fiber")
      //   .matches(
      //     /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
      //     "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
      //   ),
    }),
  });

  const onSubmit = () => {
    const userData = massFormTable.mass;
    //Kiểm tra loại món ăn
    if (!CategoryFoodValue.categoryName && !CategoryFoodValue.categoryStatus) {
      console.log("TEST/////");
      setAlert2({
        message: "Không được để trống loại món ăn",
      });
      setTimeout(() => setAlert2(null), 2000);
      return;
    }
    // Kiểm tra bảng có rỗng không
    if (!userData || userData.length == 0) {
      return;
    }
    //Tạo ra một mảng mới chưa object + mass
    console.log("INGREDIENT FOOD VALUE", IngredientFoodValue);
    let ingredientMassses = IngredientFoodValueArr.map((data) => {
      const findData = userData.find(
        (userData) => userData.ingredientName == data.ingredientName
      );
      if (findData) {
        return {
          ingredient: data,
          mass: findData.mass,
        };
      }
      return;
    });
    //Xoá các thành phần underfined
    ingredientMassses = ingredientMassses.filter(function (element) {
      return element !== undefined;
    });
    const editFoodForm = {
      foodName: formik.values.foodName.trim(),
      img: "",
      recipe: formik.values.recipe.trim(),
      fat: formik.values.fat.trim(),
      protein: formik.values.protein.trim(),
      carb: formik.values.carb.trim(),
      calo: formik.values.calo.trim(),
      // Fiber: formik.values.Fiber.trim(),
      seasons: checkedSeasonList,
      meals: checkedMealTypeList,
      // ingredientFood: IngredientFoodValue.ingredientFood,
      ingredientMassses: ingredientMassses,
      category: CategoryFoodValue,
    };
    console.log("update food = ", editFoodForm);
  };

  const showDrawer = () => {
    //Lấy ID từ list sau khi ấn nút Sửa
    console.log(foodData);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    // document.getElementById("formAddNewFoodInput").reset();
  };
  //
  //
  //
  //Lấy giá trị của nguyên liệu
  //
  //
  //

  const [massFormTable, setMassFormTable] = useState({
    mass: "",
  });
  const callValueMass = (dataSource) => {
    // Thêm mass vào object IngredientFoodValueArr
    // dataSource.forEach((element1) => {
    //   IngredientFoodValueArr.forEach(function (element) {
    //     element.mass = element1.mass;
    //   });
    // });

    setMassFormTable({
      mass: dataSource,
    });
    // console.log(HamLuong);
    console.log(IngredientFoodValueArr);
  };
  const [listIngredient, setListIngredient] = useState([]);
  const [IngredientFoodValue, setIngredientFoodValue] = useState("");
  const [IngredientFoodValueArr, setIngredientFoodValueArr] = useState("");
  const onChangeSelectIngredientFood = (value) => {
    const finded = listIngredient.find((data) => data.ingredientName == value);
    setIngredientFoodValue(finded);
    setIngredientFoodValueArr([...IngredientFoodValueArr, finded]);
    // console.log(finded);
    if (value == "") {
      document.getElementById("btn_EditFood").disabled = true;
    } else {
      document.getElementById("btn_EditFood").disabled = false;
    }
  };

  // console.log(IngredientFoodValue);
  // console.log(IngredientFoodValueArr);
  //
  //
  //
  //Lấy giá trị của loại món ăn
  //
  //
  //
  const [listCategory, setListCategory] = useState([]);

  useEffect(async () => {
    if (foodData.id) {
      await CategoryAPI.getAll()
        .then((res) => {
          setListCategory(res.data);
        })
        .catch((err) => {});

      await IngredientAPI.getAll()
        .then((res) => {
          setListIngredient(res.data);
        })
        .catch((err) => {});

      await FoodAPI.getById(foodData.id).then((res) => {
        console.log("food = ", res.data);
        const food = res.data;
        formik.setValues(food);
        setFood(food);
        setCheckedSeasonList(food.seasons);
        setcheckedMealTypeList(food.meals);
      });
    }
  }, []);
  const [CategoryFoodValue, setCategoryFoodValue] = useState("");
  const onChangeSelectCategoryFood = (value) => {
    const finded = listCategory.find((data) => data.categoryName == value);
    setCategoryFoodValue(finded);
    console.log(finded);
    if (value == "") {
      document.getElementById("btn_EditFood").disabled = true;
    } else {
      document.getElementById("btn_EditFood").disabled = false;
    }
  };

  return (
    <>
      <div>
        <Button type="primary" onClick={showDrawer}>
          Sửa
        </Button>
      </div>

      <Drawer
        title="Chính sửa món ăn"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Về Danh Sách</Button>
            <Button
              onClick={onSubmit}
              type="primary"
              disabled={!formik.isValid}
              id="btn_EditFood"
            >
              Thêm
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark id="formEditNewFoodInput">
          <Row gutter={16}>
            <Col span={12}>
              <Image
                width={300}
                height={250}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col span={12}>
              <Form.Item name="imageFood" label="Hình ảnh món ăn">
                <UploadImageFile></UploadImageFile>
              </Form.Item>
              <Form.Item label="Tên món ăn:">
                <Input
                  name="foodName"
                  placeholder="Tên món ăn"
                  onChange={formik.handleChange}
                />
                {formik.errors.foodName && (
                  <p className="errorMSG">{formik.errors.foodName}</p>
                )}
              </Form.Item>
              <Form.Item
                label="Công thức nấu món này là:"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập công thức!!",
                  },
                ]}
              >
                <Input
                  name="recipe"
                  placeholder="Bạn hãy nhập công thức để có thể nấu ra món ăn này"
                  value={formik.values.recipe}
                  onChange={formik.handleChange}
                />
                {formik.errors.recipe && (
                  <p className="errorMSG">{formik.errors.recipe}</p>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Col span={24}>
            <Form.Item
              label="Hàm lượng chất béo:"
              rules={[
                {
                  required: true,
                  message: "Chất béo của món ăn chưa nhập",
                },
              ]}
            >
              <Input
                name="fat"
                placeholder="Hàm lượng chất béo món ăn chứa"
                onChange={formik.handleChange}
              />
              {formik.errors.fat && (
                <p className="errorMSG">{formik.errors.fat}</p>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Hàm lượng Protein:"
              rules={[
                {
                  required: true,
                  message: "Protein chưa nhập!!!",
                },
              ]}
            >
              <Input
                name="protein"
                placeholder="Hàm lượng chất Protein món ăn chứa"
                onChange={formik.handleChange}
              />
              {formik.errors.protein && (
                <p className="errorMSG">{formik.errors.protein}</p>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Hàm lượng Carb:"
              rules={[
                {
                  required: true,
                  message: "Carb chưa nhập",
                },
              ]}
            >
              <Input
                name="carb"
                placeholder="Hàm lượng chất carb món ăn chứa"
                onChange={formik.handleChange}
              />
              {formik.errors.carb && (
                <p className="errorMSG">{formik.errors.carb}</p>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Hàm lượng calo:"
              rules={[
                {
                  required: true,
                  message: "calo chưa nhập",
                },
              ]}
            >
              <Input
                name="calo"
                placeholder="Hàm lượng calo món ăn chứa"
                onChange={formik.handleChange}
              />
              {formik.errors.calo && (
                <p className="errorMSG">{formik.errors.calo}</p>
              )}
            </Form.Item>
          </Col>
          {/* <Col span={24}>
            <Form.Item
              label="Hàm lượng Fiber:"
              rules={[
                {
                  required: true,
                  message: "Fiber chưa nhập",
                },
              ]}
            >
              <Input
                name="Fiber"
                placeholder="Hàm lượng chất Fiber món ăn chứa"
                onChange={formik.handleChange}
              />
              {formik.errors.Fiber && (
                <p className="errorMSG">{formik.errors.Fiber}</p>
              )}
            </Form.Item>
          </Col> */}
          <Row span={24}>
            <Col span={12}>
              <Form.Item name="seassonFood" label="Mùa của món ăn này:">
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  defaultChecked={true}
                  checked={checkAll}
                  required
                >
                  Chọn cả bốn mùa
                </Checkbox>
                <Divider />
                <CheckboxGroup
                  options={seassonList}
                  value={checkedSeasonList}
                  onChange={onChange_SeassonList}
                  required
                />
              </Form.Item>
              <AlertDiv info={alert} />
            </Col>
            <Col span={12}>
              <Form.Item name="mealTypeFood" label="Món ăn này ăn vào bữa:">
                <Checkbox
                  indeterminate={indeterminateMealType}
                  onChange={onCheckAllChangeMealType}
                  defaultChecked={true}
                  checked={checkAllMealType}
                  required
                >
                  Chọn cả ba bữa
                </Checkbox>
                <Divider />
                <CheckboxGroup
                  options={MealTypeList}
                  value={checkedMealTypeList}
                  onChange={onChange_MealTypeList}
                  required
                />
              </Form.Item>
              <AlertDiv info={alert1} />
            </Col>
          </Row>

          <Col span={24}>
            <Form.Item
              name="ingredientFood"
              label="Thành phần trong món ăn này"
              rules={[
                {
                  required: true,
                  message: "Thành phần trong món ăn chưa nhập",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChangeSelectIngredientFood}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                {listIngredient ? (
                  listIngredient.map((listIngredient) => (
                    <Option value={listIngredient.ingredientName}></Option>
                  ))
                ) : (
                  <h2>Please add new food ingredient</h2>
                )}
              </Select>

              <TableEditIngredientFood
                ValueIngredient={IngredientFoodValue.ingredientName}
                getDataFromTable={callValueMass}
              ></TableEditIngredientFood>
            </Form.Item>
            <Form.Item
              name="category"
              label="Món ăn này thuộc loại"
              rules={[
                {
                  required: true,
                  message: "Loại món ăn chưa nhập",
                },
              ]}
            >
              <Select onChange={onChangeSelectCategoryFood}>
                {listCategory ? (
                  listCategory.map((listCategory, i) => (
                    <Option value={listCategory.categoryName}></Option>
                  ))
                ) : (
                  <h2>Please add new food category</h2>
                )}
              </Select>
              <AlertDiv info={alert2} />
            </Form.Item>
          </Col>
        </Form>
      </Drawer>
    </>
  );
};

export default EditFood;
