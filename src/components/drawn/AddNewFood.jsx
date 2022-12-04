import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Image,
  Space,
} from "antd";
import UploadImageFile from "../../components/upload-image-avt/uploadImageFile";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddNewFood = () => {
  const [open, setOpen] = useState(false);
  const { Option } = Select;

  const [addFood, setAddFood] = useState({
    foodName: "",
    recipe: "",
    fat: "",
    protein: "",
    carbon: "",
    Calories: "",
    Fiber: "",
    ingredientFood: "",
    seasonFood: "spring",
    mealType: "morning",
  });

  const formik = useFormik({
    // Giá trị vào formik để kiểm tra
    initialValues: {
      foodName: "",
      recipe: "",
      fat: "",
      protein: "",
      carbon: "",
      Calories: "",
      Fiber: "",
    },

    //Regex
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
    onSubmit: (values) => {
      //formik tự biết khi nhập sai sẽ không submit còn khi đúng hết mới cho submit
      setAddFood({
        ...addFood,
        foodName: values.foodName.trim(),
        recipe: values.recipe.trim(),
        fat: values.fat.trim(),
        protein: values.protein.trim(),
        carbon: values.carbon.trim(),
        Calories: values.Calories.trim(),
        Fiber: values.Fiber.trim(),
      });
    },
  });
  console.log(addFood);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  //Lấy giá trị của nguyên liệu
  const onChangeSelectIngredientFood = (value) => {
    setAddFood({
      ...addFood,
      ingredientFood: value,
    });
    if (value == "") {
      document.getElementById("btn_EditFood").disabled = true;
    } else {
      document.getElementById("btn_EditFood").disabled = false;
    }
  };
  //Lấy giá trị của mùa mà món ăn này làm
  const onChangeSesssonFood = (value) => {
    setAddFood({
      ...addFood,
      seasonFood: value,
    });
  };
  const onChangeMealType = (value) => {
    setAddFood({
      ...addFood,
      mealType: value,
    });
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
              onClick={formik.handleSubmit}
              type="primary"
              disabled={!formik.isValid}
              id="btn_EditFood"
            >
              Thêm
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
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
          <Col span={24}>
            <Form.Item name="sessonFood" label="Mùa của món ăn này:">
              <Select
                name="seasonFood"
                defaultValue="Xuân"
                onChange={onChangeSesssonFood}
              >
                <Option value="spring">Xuân</Option>
                <Option value="summer">Hạ</Option>
                <Option value="fall">Thu</Option>
                <Option value="winter">Đông</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="Chọn bữa ăn" label="Món ăn này ăn vào bữa:">
              <Select
                name="mealType"
                defaultValue="Bữa Sáng"
                onChange={onChangeMealType}
              >
                <Option value="morning">Bữa Sáng</Option>
                <Option value="noon">Bữa Trưa</Option>
                <Option value="night">Bữa Tối</Option>
              </Select>
            </Form.Item>
          </Col>
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
