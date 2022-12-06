import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

const AdminInfomation = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tên của bạn</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ngày sinh</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
    </Form>
  );
};
export default AdminInfomation;
