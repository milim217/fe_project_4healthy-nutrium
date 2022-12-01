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
const { Option } = Select;

const EditIngrdient = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
                name="ingredient_name"
                label="Tên thành phần:"
                rules={[
                  {
                    required: true,
                    message: "Bạn không được để trống tên thành phần",
                  },
                ]}
              >
                <Input placeholder="Tên thành phần" />
              </Form.Item>
              <Form.Item name="Chọn hình ảnh nguyên liệu" label="Sửa hình ảnh">
                <UploadImageFileIngredient></UploadImageFileIngredient>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="seasson_id"
                label="Mùa của thành phần này:"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập mùa thành phần!",
                  },
                ]}
              >
                <Select placeholder="Chọn mùa">
                  <Option value="spring">Xuân</Option>
                  <Option value="summer">Hạ</Option>
                  <Option value="fall">Thu</Option>
                  <Option value="winter">Đông</Option>
                </Select>
              </Form.Item>
            </Col>
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
                name="Calories"
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
                name="vitamin"
                label="Hàm lượng vitamin:"
                rules={[
                  {
                    required: true,
                    message: "vitamin chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Vitamin món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng Wate:"
                rules={[
                  {
                    required: true,
                    message: "Wate chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Wate món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng Fiber:"
                rules={[
                  {
                    required: true,
                    message: "Fiber chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Fiber món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng ash:"
                rules={[
                  {
                    required: true,
                    message: "ash chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất ash món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng Canxi:"
                rules={[
                  {
                    required: true,
                    message: "Canxi chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Canxi món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng Iron:"
                rules={[
                  {
                    required: true,
                    message: "Iron chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Iron món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng Zinc:"
                rules={[
                  {
                    required: true,
                    message: "Zinc chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Zinc món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminC:"
                rules={[
                  {
                    required: true,
                    message: "VitaminC chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminC món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminB1:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB1 chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminB1 món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminB2:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB2 chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminB2 món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminB3:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB3 chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminB2 món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminB6A:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB3 chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminB2 món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminD:"
                rules={[
                  {
                    required: true,
                    message: "VitaminD chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminD món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminB12:"
                rules={[
                  {
                    required: true,
                    message: "VitaminB12 chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminB12 món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminA:"
                rules={[
                  {
                    required: true,
                    message: "VitaminA chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminA món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminA_rae:"
                rules={[
                  {
                    required: true,
                    message: "VitaminA_rae chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminA_rae món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng VitaminA_rae:"
                rules={[
                  {
                    required: true,
                    message: "VitaminA_rae chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất VitaminA_rae món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Giới hạn tối thiểu"
                label="Giới hạn tối thiểu:"
                rules={[
                  {
                    required: true,
                    message: "Giới hạn tối thiểu chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất giới hạn tối thiểu món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Giới hạn tối đa"
                label="Giới hạn tối đa:"
                rules={[
                  {
                    required: true,
                    message: "Giới hạn tối đa chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất giới hạn tối đa món ăn chứa" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default EditIngrdient;
