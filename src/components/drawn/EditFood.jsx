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
import Ingredient_SelectionRender from "../selectionRender/Ingredient_SelectionRender";
import UploadImageFile from "../../components/upload-image-avt/uploadImageFile";
const { Option } = Select;

const EditFood = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <Button type="primary" onClick={showDrawer}>
          Sửa
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
            <Button onClick={onClose} type="primary">
              Thêm
            </Button>
          </Space>
        }
      >
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
                name="Sửa hình ảnh món ăn mới"
                label="Sửa hình ảnh món ăn mới:"
              >
                <UploadImageFile></UploadImageFile>
              </Form.Item>
              <Form.Item
                name="food_name"
                label="Tên món ăn:"
                rules={[
                  {
                    required: true,
                    message: "Bạn không được để trống tên món ăn",
                  },
                ]}
              >
                <Input placeholder="Tên món ăn" />
              </Form.Item>
              <Form.Item
                name="recipe"
                label="Công thức nấu món này là:"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập công thức!!",
                  },
                ]}
              >
                <Input placeholder="Bạn hãy nhập công thức để có thể nấu ra món ăn này" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="fat"
                label="Hàm lượng chất béo:"
                rules={[
                  {
                    required: true,
                    message: "Chất béo của món ăn chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất béo món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Protein"
                label="Hàm lượng Protein:"
                rules={[
                  {
                    required: true,
                    message: "Protein chưa nhập!!!",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Protein món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Carbon"
                label="Hàm lượng Carbon:"
                rules={[
                  {
                    required: true,
                    message: "Carbon chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Carbon món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Carbon"
                label="Hàm lượng Calories:"
                rules={[
                  {
                    required: true,
                    message: "Calories chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Calories món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Fiber"
                label="Hàm lượng  Fiber:"
                rules={[
                  {
                    required: true,
                    message: "Calories chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Calories món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="Chọn mùa" label="Mùa của món ăn này:">
                <Select>
                  <Option value="Xuân">Xuân</Option>
                  <Option value="Hạ">Hạ</Option>
                  <Option value="Thu">Thu</Option>
                  <Option value="Đông">Đông</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="Chọn bữa ăn" label="Món ăn này ăn vào bữa:">
                <Select>
                  <Option value="Sáng">Bữa Sáng</Option>
                  <Option value="Trưa">Bữa Trưa</Option>
                  <Option value="Tối">Bữa Tối</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
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

export default EditFood;
