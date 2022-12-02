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
  Space,
} from "antd";
import Ingredient_SelectionRender from "../selectionRender/Ingredient_SelectionRender";
import UploadImageFile from "../../components/upload-image-avt/uploadImageFile";
import AlertMessage from "../alert/AlertMessage";

const { Option } = Select;

const AddNewFood = () => {
  const [open, setOpen] = useState(false);
  const [foodName, setfoodName] = useState(0);
  const [recipe, setRecipe] = useState(0);
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbon, setCarbon] = useState(0);
  const [Calories, setCalories] = useState(0);
  const [Fiber, setFiber] = useState(0);
  const [alert, setAlert] = useState(0);
  const [disableBtn, setDisableBtn] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFormChange = (event) => {
    event.preventDefault();
    if (event.target.name == "foodName") {
      if (event.target.value == "") {
        console.log("Không được để trống");
        setAlert({
          type: "danger",
          message: "Không được để trống tên ",
        });
        setDisableBtn(true);
      } else {
        setfoodName(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "recipe") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống công thức ",
        });
        setTimeout(() => setAlert(null), 5000);
        setDisableBtn(true);
      } else {
        setRecipe(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "fat") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất béo ",
        });
        setTimeout(() => setAlert(null), 5000);
        setDisableBtn(true);
      } else {
        setFat(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "Protein") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất Protein ",
        });
        setTimeout(() => setAlert(null), 5000);
        setDisableBtn(true);
      } else {
        setProtein(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "Carbon") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống chất Carbon ",
        });
        setTimeout(() => setAlert(null), 5000);
        setDisableBtn(true);
      } else {
        setCarbon(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "Calories") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống Calories ",
        });
        setTimeout(() => setAlert(null), 5000);
        setDisableBtn(true);
      } else {
        setCalories(event.target.value);
        setDisableBtn(false);
      }
    }
    if (event.target.name == "Fiber") {
      if (event.target.value == "") {
        setAlert({
          type: "danger",
          message: "Không được để trống Fiber ",
        });
        setTimeout(() => setAlert(null), 5000);
        setDisableBtn(true);
      } else {
        setFiber(event.target.value);
        setDisableBtn(false);
      }
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  console.log(foodName);

  return (
    <>
      <div
        style={{
          paddingTop: "20px",
          float: "right",
        }}
      >
        <Button
          type="primary"
          onClick={showDrawer}
          icon={<PlusOutlined className="plus_add_button" />}
        >
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
            <Button onClick={onSubmit} type="primary" disabled={disableBtn}>
              Thêm
            </Button>
          </Space>
        }
      >
        <AlertMessage info={alert} />
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="foodName"
                label="Tên món ăn:"
                rules={[
                  {
                    required: true,
                    message: "Bạn không được để trống tên món ăn",
                  },
                ]}
              >
                <Input
                  name="foodName"
                  placeholder="Tên món ăn"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
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
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
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
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                  name="Protein"
                  placeholder="Hàm lượng chất Protein món ăn chứa"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                  name="Carbon"
                  placeholder="Hàm lượng chất Carbon món ăn chứa"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Hàm lượng  Fiber:"
                rules={[
                  {
                    required: true,
                    message: "Calories chưa nhập",
                  },
                ]}
              >
                <Input
                  name="Fiber"
                  placeholder="Hàm lượng chất Calories món ăn chứa"
                  onChange={onFormChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="Chọn mùa" label="Mùa của món ăn này:">
                <Select defaultValue="Xuân">
                  <Option value="Xuân">Xuân</Option>
                  <Option value="Hạ">Hạ</Option>
                  <Option value="Thu">Thu</Option>
                  <Option value="Đông">Đông</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="Chọn bữa ăn" label="Bữa ăn của món ăn này:">
                <Select defaultValue="Sáng">
                  <Option value="Sáng">Sáng</Option>
                  <Option value="Trưa">Trưa</Option>
                  <Option value="Tối">Tối</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="ImageFood" label="Chọn hình ảnh món ăn:">
                <UploadImageFile></UploadImageFile>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="Carbon"
                label="Thành phần trong món ăn này"
                rules={[
                  {
                    required: true,
                    message: "Thành phần trong món ăn chưa nhập",
                  },
                ]}
              >
                <Ingredient_SelectionRender></Ingredient_SelectionRender>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewFood;
