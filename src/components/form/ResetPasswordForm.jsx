import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const ResetPasswordForm = () => {
  return (
    <Form.Group>
      <Form.Control
        placeholder="Nhập mật khẩu mới của bạn"
        className="form_send_mail"
      />
      <Form.Control
        placeholder="Nhập mật khẩu mới của bạn lần nữa"
        className="form_send_mail"
      />

      <Link to="/login">
        <Button
          variant="success"
          className="btn_Return_ResetPasswordForm"
          type="submit"
        >
          Huỷ Bỏ
        </Button>
      </Link>

      <Button
        variant="success"
        className="btn_Next_SendMailForm_2"
        type="submit"
      >
        Đổi mật khẩu
      </Button>
    </Form.Group>
  );
};

export default ResetPasswordForm;
