import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Checkbox,
  Divider,
  Drawer,
  Form,
  Image,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import AlertDiv from "../alert/AlertDiv";
import UploadImageFileIngredient from "../upload-image-avt/UploadImageFileIngredient";
import AlertMessage from "../alert/AlertMessage";
import { useFormik } from "formik";
import * as Yup from "yup";

//List mùa
const CheckboxGroup = Checkbox.Group;
const seasonList = [
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

const EditIngrdient = ({ ingredient }) => {
  //
  //
  //
  // Mùa của thành phần
  //
  //
  //
  const [open, setOpen] = useState(false);
  const [checkedSeasonList, setcheckedSeasonList] =
    useState(SeassonValueDefault);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (ingredient) {
      formik.setValues(ingredient);
    }
  }, []);

  const onChange_SeassonList = (list) => {
    setcheckedSeasonList(list);
    setIndeterminate(!!list.length && list.length < seasonList.length);
    setCheckAll(list.length === seasonList.length);
    if (list.length === 0) {
      // console.log("List rỗng");
      setAlert({
        message: "Không được để trống mùa",
      });
      setTimeout(() => setAlert(null), 2000);
    }
  };
  const onCheckAllChange = (e) => {
    const seassonListOnlyName = seasonList.map((data) => data.value);
    setcheckedSeasonList(e.target.checked ? seassonListOnlyName : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    if (e.target.checked == []) {
      console.log("List rỗng");
      setAlert({
        message: "Không được để trống mùa",
      });
      setTimeout(() => setAlert(null), 2000);
    }
  };

  const showDrawer = () => {
    console.log(ingredient.id);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    document.getElementById("formAddNewIngredientInput").reset();
    formik.handleReset();
  };

  const formik = useFormik({
    initialValues: {
      ingredientName: ingredient.ingredientName,
      fat: ingredient.fat,
      protein: ingredient.protein,
      carb: ingredient.carb,
      calo: ingredient.calo,
      vitamin: ingredient.vitamin,
      water: ingredient.water,
      fiber: ingredient.fiber,
      ash: ingredient.ash,
      canxi: ingredient.canxi,
      iron: ingredient.iron,
      zinc: ingredient.zinc,
      vitaminC: ingredient.vitaminC,
      vitaminB1: ingredient.vitaminB1,
      vitaminB2: ingredient.vitaminB2,
      vitaminB3: ingredient.vitaminB3,
      vitaminB6A: ingredient.vitaminB6A,
      vitaminD: ingredient.vitaminD,
      vitaminB12: ingredient.vitaminB12,
      vitaminA: ingredient.vitaminA,
      vitaminARae: ingredient.vitaminARae,
      minLimit: ingredient.minLimit,
      maxLimit: ingredient.maxLimit,
    },
    //regex
    validationSchema: Yup.object({
      ingredientName: Yup.string().required(
        "Bạn không được để trống tên nguyên liệu"
      ),
      fat: Yup.string()
        .required("Bạn không được để trống hàm lượng chât Fat")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      protein: Yup.string()
        .required("Bạn không được để trống hàm lượng chât protein")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      carb: Yup.string()
        .required("Bạn không được để trống hàm lượng chất Carbs")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      calo: Yup.string()
        .required("Bạn không được để trống hàm lượng chât calo")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitamin: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitamin")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      water: Yup.string()
        .required("Bạn không được để trống hàm lượng chât water")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      fiber: Yup.string()
        .required("Bạn không được để trống hàm lượng chât fiber")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      ash: Yup.string().required("Bạn không được để trống hàm lượng chât ash"),
      canxi: Yup.string()
        .required("Bạn không được để trống hàm lượng chât canxi")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      iron: Yup.string()
        .required("Bạn không được để trống hàm lượng chât iron")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      zinc: Yup.string()
        .required("Bạn không được để trống hàm lượng chât zinc")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminC: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminC")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminB1: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminB1")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminB2: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminB2")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminB3: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminB3")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminB6A: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminB6A")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminD: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminD")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminB12: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminB12")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminA: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminA")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      vitaminARae: Yup.string()
        .required("Bạn không được để trống hàm lượng chât vitaminARae")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      minLimit: Yup.string()
        .required("Bạn không được để trống giới hạn tối thiểu")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
      maxLimit: Yup.string()
        .required("Bạn không được để trống giới hạn tối đa")
        .matches(
          /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
          "Bạn chỉ được nhập chữ số nguyên hoặc chữ số thập phân  "
        ),
    }),
  });

  const onSubmit = () => {
    const AddNewIngrendient = {
      ingredientName: formik.values.ingredientName,
      fat: formik.values.fat,
      protein: formik.values.protein,
      carb: formik.values.carb,
      calo: formik.values.calo,
      vitamin: formik.values.vitamin,
      water: formik.values.water,
      fiber: formik.values.fiber,
      ash: formik.values.ash,
      canxi: formik.values.canxi,
      iron: formik.values.iron,
      zinc: formik.values.zinc,
      vitaminC: formik.values.vitaminC,
      vitaminB1: formik.values.vitaminB1,
      vitaminB2: formik.values.vitaminB2,
      vitaminB3: formik.values.vitaminB3,
      vitaminB6A: formik.values.vitaminB6A,
      vitaminD: formik.values.vitaminD,
      vitaminB12: formik.values.vitaminB12,
      vitaminA: formik.values.vitaminB12,
      vitaminARae: formik.values.vitaminARae,
      minLimit: formik.values.minLimit,
      maxLimit: formik.values.maxLimit,
      seasons: checkedSeasonList,
    };
    console.log(AddNewIngrendient);
    //Xoá dữ liệu khi submit thành công vào api
    // document.getElementById("formAddNewIngredientInput").reset();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Sửa
      </Button>
      <Drawer
        title="Sửa dữ liệu thành phần"
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
            >
              Sửa
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark id="formAddNewIngredientInput">
          <Row gutter={16}>
            <Col span={12}>
              <Image
                width={300}
                height={250}
                src={`http://localhost:8080/ingredient/${ingredient.id}/image`}
              />
            </Col>
            <Col span={12}>
              <Form.Item
                name="Chọn hình ảnh nguyên liệu"
                label="Chọn hình ảnh nguyên liệu:"
              >
                <UploadImageFileIngredient></UploadImageFileIngredient>
              </Form.Item>
              <Form.Item
                name="seasons"
                label="Mùa của nguyên liệu này:"
                rules={[
                  {
                    required: true,
                    message: "Please pick an item!",
                  },
                ]}
              >
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
                  options={seasonList}
                  value={checkedSeasonList}
                  defaultValue={[
                    {
                      id: 3,
                      seasonName: "Autumn",
                    },
                  ]}
                  onChange={onChange_SeassonList}
                  required
                />
              </Form.Item>
              <AlertDiv info={alert} />
            </Col>
            <Divider></Divider>
            <Col span={24}>
              <Form.Item label="Tên nguyên liệu:" name="ingredientName">
                <Input
                  placeholder="Tên nguyên liệu"
                  name="ingredientName"
                  onChange={formik.handleChange}
                  value={formik.values.ingredientName}
                />
                {formik.errors.ingredientName && (
                  <p className="errorMSG">{formik.errors.ingredientName}</p>
                )}
              </Form.Item>
            </Col>
            <Divider></Divider>
            <Col span={12}>
              <Form.Item
                name="minLimit"
                label="Giới hạn tối thiểu của nguyên liệu:"
              >
                <Input
                  placeholder="Hàm lượng chất giới hạn tối thiểu món ăn chứa"
                  name="minLimit"
                  onChange={formik.handleChange}
                  value={formik.values.minLimit}
                />{" "}
                {formik.errors.minLimit && (
                  <p className="errorMSG">{formik.errors.minLimit}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="maxLimit"
                label="Giới hạn tối đa của nguyên liệu:"
              >
                <Input
                  placeholder="Hàm lượng chất giới hạn tối đa món ăn chứa"
                  name="maxLimit"
                  onChange={formik.handleChange}
                  value={formik.values.maxLimit}
                />{" "}
                {formik.errors.maxLimit && (
                  <p className="errorMSG">{formik.errors.maxLimit}</p>
                )}
              </Form.Item>
            </Col>
            <Divider></Divider>
            <Col span={12}>
              <Form.Item label="Hàm lượng chất béo(/100g):" name="fat">
                <Input
                  placeholder="Hàm lượng chất béo món ăn chứa"
                  name="fat"
                  onChange={formik.handleChange}
                  value={formik.values.fat}
                />
                {formik.errors.fat && (
                  <p className="errorMSG">{formik.errors.fat}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Hàm lượng đạm(/100g):" name="protein">
                <Input
                  placeholder="Hàm lượng chất đạm món ăn chứa"
                  name="protein"
                  onChange={formik.handleChange}
                  value={formik.values.protein}
                />
                {formik.errors.protein && (
                  <p className="errorMSG">{formik.errors.protein}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Hàm lượng bột đường(/100g):" name="carb">
                <Input
                  placeholder="Hàm lượng chất bột đường món ăn chứa"
                  name="carb"
                  onChange={formik.handleChange}
                  value={formik.values.carb}
                />
                {formik.errors.carb && (
                  <p className="errorMSG">{formik.errors.carb}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="calo" label="Hàm lượng Calo(/100g):">
                <Input
                  placeholder="Hàm lượng Calo món ăn chứa"
                  name="calo"
                  onChange={formik.handleChange}
                  value={formik.values.calo}
                />
                {formik.errors.calo && (
                  <p className="errorMSG">{formik.errors.calo}</p>
                )}
              </Form.Item>
            </Col>
            {/* <Col span={12}>
              <Form.Item name="vitamin" label="Hàm lượng vitamin(/100g):">
                <Input
                  placeholder="Hàm lượng chất Vitamin món ăn chứa"
                  name="vitamin"
                  onChange={formik.handleChange}
                  value={formik.values.vitamin}
                />
                {formik.errors.vitamin && (
                  <p className="errorMSG">{formik.errors.vitamin}</p>
                )}
              </Form.Item>
            </Col> */}
            <Col span={12}>
              <Form.Item label="Hàm lượng nước(/100g):" name="water">
                <Input
                  placeholder="Hàm lượng nước món ăn chứa"
                  name="water"
                  onChange={formik.handleChange}
                  value={formik.values.water}
                />
                {formik.errors.water && (
                  <p className="errorMSG">{formik.errors.water}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="fiber" label="Hàm lượng chất xơ(/100g):">
                <Input
                  placeholder="Hàm lượng chất xơ món ăn chứa"
                  name="fiber"
                  onChange={formik.handleChange}
                  value={formik.values.fiber}
                />{" "}
                {formik.errors.fiber && (
                  <p className="errorMSG">{formik.errors.fiber}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="ash" label="Hàm lượng tro(/100g):">
                <Input
                  placeholder="Hàm lượng tro món ăn chứa"
                  name="ash"
                  onChange={formik.handleChange}
                  value={formik.values.ash}
                />
                {formik.errors.ash && (
                  <p className="errorMSG">{formik.errors.ash}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="canxi" label="Hàm lượng Canxi(/100g):">
                <Input
                  placeholder="Hàm lượng chất Canxi món ăn chứa"
                  name="canxi"
                  onChange={formik.handleChange}
                  value={formik.values.canxi}
                />
                {formik.errors.canxi && (
                  <p className="errorMSG">{formik.errors.canxi}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="iron" label="Hàm lượng sắt(/100g):">
                <Input
                  placeholder="Hàm lượng chất sắt món ăn chứa"
                  name="iron"
                  onChange={formik.handleChange}
                  value={formik.values.iron}
                />{" "}
                {formik.errors.iron && (
                  <p className="errorMSG">{formik.errors.iron}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="zinc" label="Hàm lượng kẽm(/100g):">
                <Input
                  placeholder="Hàm lượng chất kẽm món ăn chứa"
                  name="zinc"
                  onChange={formik.handleChange}
                  value={formik.values.zinc}
                />{" "}
                {formik.errors.zinc && (
                  <p className="errorMSG">{formik.errors.zinc}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vitaminC" label="Hàm lượng VitaminC(/100g):">
                <Input
                  placeholder="Hàm lượng chất VitaminC món ăn chứa"
                  name="vitaminC"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminC}
                />
                {formik.errors.vitaminC && (
                  <p className="errorMSG">{formik.errors.vitaminC}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vitaminB1" label="Hàm lượng VitaminB1(/100g):">
                <Input
                  placeholder="Hàm lượng chất VitaminB1 món ăn chứa"
                  name="vitaminB1"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminB1}
                />{" "}
                {formik.errors.vitaminB1 && (
                  <p className="errorMSG">{formik.errors.vitaminB1}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vitaminB2" label="Hàm lượng VitaminB2(/100g):">
                <Input
                  placeholder="Hàm lượng chất VitaminB2 món ăn chứa"
                  name="vitaminB2"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminB2}
                />{" "}
                {formik.errors.vitaminB2 && (
                  <p className="errorMSG">{formik.errors.vitaminB2}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vitaminB3" label="Hàm lượng VitaminB3(/100g):">
                <Input
                  placeholder="Hàm lượng chất VitaminB3 món ăn chứa"
                  name="vitaminB3"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminB3}
                />{" "}
                {formik.errors.vitaminB3 && (
                  <p className="errorMSG">{formik.errors.vitaminB3}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vitaminB6A" label="Hàm lượng VitaminB6A(/100g):">
                <Input
                  placeholder="Hàm lượng chất VitaminB6A món ăn chứa"
                  name="vitaminB6A"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminB6A}
                />{" "}
                {formik.errors.vitaminB6A && (
                  <p className="errorMSG">{formik.errors.vitaminB6A}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vitaminD" label="Hàm lượng VitaminD(/100g):">
                <Input
                  placeholder="Hàm lượng chất VitaminD món ăn chứa"
                  name="vitaminD"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminD}
                />{" "}
                {formik.errors.vitaminD && (
                  <p className="errorMSG">{formik.errors.vitaminD}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vitaminB12" label="Hàm lượng VitaminB12(/100g):">
                <Input
                  placeholder="Hàm lượng chất VitaminB12 món ăn chứa"
                  name="vitaminB12"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminB12}
                />{" "}
                {formik.errors.vitaminB12 && (
                  <p className="errorMSG">{formik.errors.vitaminB12}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vitaminA" label="Hàm lượng VitaminA(/100g):">
                <Input
                  placeholder="Hàm lượng chất VitaminA món ăn chứa"
                  name="vitaminA"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminA}
                />{" "}
                {formik.errors.vitaminA && (
                  <p className="errorMSG">{formik.errors.vitaminA}</p>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminARae"
                label="Hàm lượng vitaminARae(/100g):"
              >
                <Input
                  placeholder="Hàm lượng chất vitaminARae món ăn chứa"
                  name="vitaminARae"
                  onChange={formik.handleChange}
                  value={formik.values.vitaminARae}
                />{" "}
                {formik.errors.vitaminARae && (
                  <p className="errorMSG">{formik.errors.vitaminARae}</p>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default EditIngrdient;
