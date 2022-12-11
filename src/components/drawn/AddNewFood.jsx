import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
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
import AlertDiv from "../alert/AlertDiv";
import { useFormik } from "formik";
import * as Yup from "yup";
//List mùa
const CheckboxGroup = Checkbox.Group;
const seassonList = ["Xuân", "Hạ", "Thu", "Đông"];
const SeassonValueDefault = ["Xuân"];
//list bữa ăn
const MealTypeList = ["Bữa Sáng", "Bữa Trưa", "Bữa Tối"];
const MealTypeValueDefault = ["Bữa Sáng"];

const { Option } = Select;
const AddNewFood = () => {
  const [open, setOpen] = useState(false);
  //
  //
  //
  // Mùa của món ăn
  //
  //
  //
  const [checkedSessonList, setcheckedSessonList] =
    useState(SeassonValueDefault);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [alert, setAlert] = useState(null);
  const [alert1, setAlert1] = useState(null);

  const onChange_SeassonList = (list) => {
    setcheckedSessonList(list);
    setIndeterminate(!!list.length && list.length < seassonList.length);
    setCheckAll(list.length === seassonList.length);
    if (list.length === 0) {
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
  const onCheckAllChange = (e) => {
    setcheckedSessonList(e.target.checked ? seassonList : []);
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
    setcheckedMealTypeList(e.target.checked ? MealTypeList : []);
    setIndeterminateMealType(false);
    setCheckAllMealType(e.target.checked);
    if (e.target.checked == []) {
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
      carbon: "",
      Calories: "",
      Fiber: "",
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
      carbon: Yup.string()
        .required("Bạn không được để trống hàm lượng chất carbon")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      Calories: Yup.string()
        .required("Bạn không được để trống hàm lượng chất Calories")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      Fiber: Yup.string()
        .required("Bạn không được để trống hàm lượng chất Fiber")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
    }),
  });

  const onSubmit = () => {
    const addNewFoodForm = {
      foodName: formik.values.foodName.trim(),
      recipe: formik.values.recipe.trim(),
      fat: formik.values.fat.trim(),
      protein: formik.values.protein.trim(),
      carbon: formik.values.carbon.trim(),
      Calories: formik.values.Calories.trim(),
      Fiber: formik.values.Fiber.trim(),
      seasonFood: checkedSessonList,
      mealType: checkedMealTypeList,
      ingredientFood: IngredientFoodValue.ingredientFood,
    };
    console.log(addNewFoodForm);
    //
    //Xoá dữ liệu khi submit thành công vào api
    //
    // document.getElementById("formAddNewFoodInput").reset();
  };
  const showDrawer = () => {
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
  const [IngredientFoodValue, setIngredientFoodValue] = useState({
    ingredientFood: "",
  });
  const onChangeSelectIngredientFood = (value) => {
    setIngredientFoodValue({
      ingredientFood: value,
    });
    if (value == "") {
      document.getElementById("btn_EditFood").disabled = true;
    } else {
      document.getElementById("btn_EditFood").disabled = false;
    }
  };

  return (
    <>
      <div
        style={{
          paddingTop: "22px",
          paddingLeft: "10px",
        }}
      >
        <Button type="primary" onClick={showDrawer}>
          Thêm món ăn
        </Button>
      </div>

      <Drawer
        title="Thêm thức ăn mới vào danh sách này"
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
        <Form layout="vertical" hideRequiredMark id="formAddNewFoodInput">
          <Col span={24}>
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
                onChange={formik.handleChange}
              />
              {formik.errors.recipe && (
                <p className="errorMSG">{formik.errors.recipe}</p>
              )}
            </Form.Item>
          </Col>
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
              label="Hàm lượng Carbon:"
              rules={[
                {
                  required: true,
                  message: "Carbon chưa nhập",
                },
              ]}
            >
              <Input
                name="carbon"
                placeholder="Hàm lượng chất carbon món ăn chứa"
                onChange={formik.handleChange}
              />
              {formik.errors.carbon && (
                <p className="errorMSG">{formik.errors.carbon}</p>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Hàm lượng Calories:"
              rules={[
                {
                  required: true,
                  message: "Calories chưa nhập",
                },
              ]}
            >
              <Input
                name="Calories"
                placeholder="Hàm lượng chất Calories món ăn chứa"
                onChange={formik.handleChange}
              />
              {formik.errors.Calories && (
                <p className="errorMSG">{formik.errors.Calories}</p>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
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
          </Col>
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
                  value={checkedSessonList}
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
                mode="multiple"
                style={{
                  width: "100%",
                }}
                name="ingredientFood"
                placeholder="Chọn nguyên liệu"
                defaultValue={["Calo"]}
                onChange={onChangeSelectIngredientFood}
                optionLabelProp="label"
              >
                <Option value="Calo" label="Calo">
                  <div className="demo-option-label-item">Calo</div>
                </Option>
                <Option value="fat" label="fat">
                  <div className="demo-option-label-item">fat</div>
                </Option>
                <Option value="protein" label="protein">
                  <div className="demo-option-label-item">protein</div>
                </Option>
                <Option value="carb" label="carb">
                  <div className="demo-option-label-item">carb</div>
                </Option>
                <Option value="water" label="water">
                  <div className="demo-option-label-item">water</div>
                </Option>
              </Select>
            </Form.Item>
          </Col>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewFood;
