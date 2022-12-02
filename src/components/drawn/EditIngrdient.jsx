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
  Image,
  Select,
  Space,
} from "antd";
import UploadImageFileIngredient from "../upload-image-avt/UploadImageFileIngredient";
import AlertMessage from "../alert/AlertMessage";
const { Option } = Select;

const EditIngrdient = () => {
  const [open, setOpen] = useState(false);
  const [ingredientName, setIngredientName] = useState(null);
  const [fat, setFat] = useState(null);
  const [protein, setProtein] = useState(null);
  const [carbon, setCarbon] = useState(null);
  const [calories, setCalories] = useState(null);
  const [vitamin, setVitamin] = useState(null);
  const [wate, setWate] = useState(null);
  const [fiber, setFiber] = useState(null);
  const [ash, setAsh] = useState(null);
  const [canxi, setCanxi] = useState(null);
  const [iron, setIron] = useState(null);
  const [zinc, setZinc] = useState(null);
  const [vitaminC, setVitaminC] = useState(null);
  const [vitaminB1, setVitaminB1] = useState(null);
  const [vitaminB2, setVitaminB2] = useState(null);
  const [vitaminB3, setVitaminB3] = useState(null);
  const [vitaminB6A, setVitaminB6A] = useState(null);
  const [vitaminD, setVitaminD] = useState(null);
  const [vitaminB12, setVitaminB12] = useState(null);
  const [vitaminA, setVitaminA] = useState(null);
  const [vitaminA_rae, setVitaminA_rae] = useState(null);
  const [minLimit, setMinLimit] = useState(null);
  const [maxLimit, setMaxLimit] = useState(null);
  const [alert, setAlert] = useState(null);
  const [disableBtn, setDisableBtn] = useState(true);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFormChange = (event) => {
    event.preventDefault();
    if (event.target.name == "ingredientName") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống tên nguyên liệu ",
        });
        setDisableBtn(true);
      } else {
        setIngredientName(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "fat") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất béo ",
        });
        setDisableBtn(true);
      } else {
        setFat(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "protein") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất protein ",
        });
        setDisableBtn(true);
      } else {
        setProtein(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "carbon") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất carbon ",
        });
        setDisableBtn(true);
      } else {
        setCarbon(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "calories") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất calories ",
        });
        setDisableBtn(true);
      } else {
        setCalories(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitamin") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitamin ",
        });
        setDisableBtn(true);
      } else {
        setVitamin(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "wate") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất wate ",
        });
        setDisableBtn(true);
      } else {
        setWate(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "fiber") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất fiber ",
        });
        setDisableBtn(true);
      } else {
        setFiber(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "ash") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất ash ",
        });
        setDisableBtn(true);
      } else {
        setAsh(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "canxi") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất canxi ",
        });
        setDisableBtn(true);
      } else {
        setCanxi(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "iron") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất iron ",
        });
        setDisableBtn(true);
      } else {
        setIron(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "zinc") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất zinc ",
        });
        setDisableBtn(true);
      } else {
        setZinc(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminC") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminC ",
        });
        setDisableBtn(true);
      } else {
        setVitaminC(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminB1") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminB1 ",
        });
        setDisableBtn(true);
      } else {
        setVitaminB1(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminB2") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminB2 ",
        });
        setDisableBtn(true);
      } else {
        setVitaminB2(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminB3") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminB3 ",
        });
        setDisableBtn(true);
      } else {
        setVitaminB3(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminB6A") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminB6A ",
        });
        setDisableBtn(true);
      } else {
        setVitaminB6A(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminD") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminD ",
        });
        setDisableBtn(true);
      } else {
        setVitaminD(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminB12") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminB12 ",
        });
        setDisableBtn(true);
      } else {
        setVitaminB12(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminA") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminA ",
        });
        setDisableBtn(true);
      } else {
        setVitaminA(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "vitaminA_rae") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất vitaminA_rae ",
        });
        setDisableBtn(true);
      } else {
        setVitaminA_rae(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "minLimit") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống giới hạn tối thiểu ",
        });
        setDisableBtn(true);
      } else {
        setMinLimit(event.target.value);
        setDisableBtn(false);
      }
    } else if (event.target.name == "maxLimit") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống giới hạn tối đa ",
        });
        setDisableBtn(true);
      } else {
        setMaxLimit(event.target.value);
        setDisableBtn(false);
      }
    }
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Sửa
      </Button>
      <Drawer
        title="Sửa nguyên liệu vào danh sách"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Về Danh Sách</Button>
            <Button onClick={onClose} type="primary" disabled={disableBtn}>
              Sửa
            </Button>
          </Space>
        }
      >
        <AlertMessage info={alert} />
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Image
                width={300}
                height={250}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col span={12}>
              <Form.Item
                label="Tên thành phần:"
                name={"ingredientName"}
                rules={[
                  {
                    required: true,
                    message: "Bạn không được để trống tên thành phần",
                  },
                ]}
              >
                <Input
                  placeholder="Tên thành phần"
                  name="ingredientName"
                  onChange={onFormChange}
                />
              </Form.Item>
              <Form.Item name="Chọn hình ảnh nguyên liệu" label="Sửa hình ảnh">
                <UploadImageFileIngredient></UploadImageFileIngredient>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="seassonFood"
                label="Mùa của thành phần này:"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập mùa thành phần!",
                  },
                ]}
              >
                <Select placeholder="Chọn mùa" defaultValue={"Xuân"}>
                  <Option value="spring">Xuân</Option>
                  <Option value="summer">Hạ</Option>
                  <Option value="fall">Thu</Option>
                  <Option value="winter">Đông</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Hàm lượng chất béo:"
                name="fat"
                rules={[
                  {
                    required: true,
                    message: "Chất béo của món ăn chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất béo món ăn chứa"
                  name="fat"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Hàm lượng Protein:"
                name="protein"
                rules={[
                  {
                    required: true,
                    message: "Protein chưa nhập!!!",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Protein món ăn chứa"
                  name="protein"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Hàm lượng Carbon:"
                name="carbon"
                rules={[
                  {
                    required: true,
                    message: "Carbon chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Carbon món ăn chứa"
                  name="carbon"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="calories"
                label="Hàm lượng Calories:"
                rules={[
                  {
                    required: true,
                    message: "Calories chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Calories món ăn chứa"
                  name="calories"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng vitamin:"
                rules={[
                  {
                    required: true,
                    message: "vitamin chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Vitamin món ăn chứa"
                  name="vitamin"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Hàm lượng Wate:"
                name="wate"
                rules={[
                  {
                    required: true,
                    message: "Wate chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Wate món ăn chứa"
                  name="wate"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="fiber"
                label="Hàm lượng Fiber:"
                rules={[
                  {
                    required: true,
                    message: "Fiber chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Fiber món ăn chứa"
                  name="fiber"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ash"
                label="Hàm lượng ash:"
                rules={[
                  {
                    required: true,
                    message: "ash chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất ash món ăn chứa"
                  name="ash"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="canxi"
                label="Hàm lượng Canxi:"
                rules={[
                  {
                    required: true,
                    message: "Canxi chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Canxi món ăn chứa"
                  name="canxi"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="iron"
                label="Hàm lượng Iron:"
                rules={[
                  {
                    required: true,
                    message: "Iron chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Iron món ăn chứa"
                  name="iron"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="zinc"
                label="Hàm lượng Zinc:"
                rules={[
                  {
                    required: true,
                    message: "Zinc chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất Zinc món ăn chứa"
                  name="zinc"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminC"
                label="Hàm lượng VitaminC:"
                rules={[
                  {
                    required: true,
                    message: "VitaminC chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminC món ăn chứa"
                  name="vitaminC"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminB1"
                label="Hàm lượng VitaminB1:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB1 chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminB1 món ăn chứa"
                  name="vitaminB1"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminB2"
                label="Hàm lượng VitaminB2:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB2 chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminB2 món ăn chứa"
                  name="vitaminB2"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminB3"
                label="Hàm lượng VitaminB3:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB3 chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminB3 món ăn chứa"
                  name="vitaminB3"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminB6A"
                label="Hàm lượng VitaminB6A:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB6A chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminB6A món ăn chứa"
                  name="vitaminB6A"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminD"
                label="Hàm lượng VitaminD:"
                rules={[
                  {
                    required: true,
                    message: "VitaminD chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminD món ăn chứa"
                  name="vitaminD"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminB12"
                label="Hàm lượng VitaminB12:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB12 chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminB12 món ăn chứa"
                  name="vitaminB12"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminA"
                label="Hàm lượng VitaminA:"
                rules={[
                  {
                    required: true,
                    message: "VitaminA chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminA món ăn chứa"
                  name="vitaminA"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitaminA_rae"
                label="Hàm lượng VitaminA_rae:"
                rules={[
                  {
                    required: true,
                    message: "VitaminA_rae chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất VitaminA_rae món ăn chứa"
                  name="vitaminA_rae"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="minLimit"
                label="Giới hạn tối thiểu:"
                rules={[
                  {
                    required: true,
                    message: "Giới hạn tối thiểu chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất giới hạn tối thiểu món ăn chứa"
                  name="minLimit"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="maxLimit"
                label="Giới hạn tối đa:"
                rules={[
                  {
                    required: true,
                    message: "Giới hạn tối đa chưa nhập",
                  },
                ]}
              >
                <Input
                  placeholder="Hàm lượng chất giới hạn tối đa món ăn chứa"
                  name="maxLimit"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default EditIngrdient;
