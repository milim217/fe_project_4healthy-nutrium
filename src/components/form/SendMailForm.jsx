import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const SendMailForm = () => {
  return (
    <Form.Group>
      <InputGroup>
        <Form.Control
          placeholder="Nhập email của bạn"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="form_send_mail"
        />
        <Button
          variant="outline-secondary"
          className="btn_send_mail_register_account"
        >
          Gửi Link xác thực
        </Button>
      </InputGroup>
      <Form.Control
        placeholder="Nhập link xác thực chúng tôi đã gửi vào mail của bạn"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        className="form_send_mail"
      />
      <Link to="/login">
        <Button
          variant="success"
          className="btn_Next_SendMailForm_1"
          type="submit"
        >
          Huỷ Bỏ
        </Button>
      </Link>

      {/* <Link to="/register"> */}
      <Button
        variant="success"
        className="btn_Next_SendMailForm_2"
        type="submit"
      >
        Xác thực
      </Button>
      {/* </Link> */}
    </Form.Group>
  );
};

export default SendMailForm;
