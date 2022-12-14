import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from "antd";
import UserAPI from "../../service/Actions/UserAPI";
import AlertMessage from "../alert/AlertMessage";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
    code: "",
  });
  const [alert, setAlert] = useState(null);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function getUserByEmail(email) {
    return await UserAPI.getByEmail(email)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        return null;
      });
  }

  async function sendMail() {
    let email = form.email;
    if (email !== "") {
      // get user by email
      let user = getUserByEmail([email]);

      // email đã đki
      if (user) {
        // gửi mail
        UserAPI.sendForgotCode([email])
          .then((res) => {
            setAlert({ type: "success", message: res.data });
            setTimeout(() => setAlert(null), 5000);
          })
          .catch((e) => {
            setAlert({ type: "danger", message: e.response.data.message });
            setTimeout(() => setAlert(null), 5000);
          });
      }
      // email chưa đki
      else {
        setAlert({ type: "danger", message: "Vui lòng nhập email đã đăng ký" });
        setTimeout(() => setAlert(null), 5000);
      }
    }
  }

  const checkInput = () => {
    let check = true;

    if (form.password !== form.password2) {
      setAlert({
        type: "danger",
        message: "Vui lòng nhập 2 mật khẩu giống nhau",
      });
      setTimeout(() => setAlert(null), 5000);
      check = false;
    }
    return check;
  };

  const changePassword = async (e) => {
    e.preventDefault();

    if (!checkInput()) {
      return;
    }

    // call api get user từ code
    let user = await UserAPI.getForgotUser(form.code)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        setAlert({ type: "danger", message: e.response.data.message });
        setTimeout(() => setAlert(null), 5000);
        return null;
      });

    // lấy đc user từ code
    if (user) {
      let inputtedEmail = form.email;
      // check email từ code có trùng vs email nhập
      if (user.email !== inputtedEmail) {
        setAlert({
          type: "danger",
          message: "Mã xác thực không dành cho email " + inputtedEmail,
        });
        setTimeout(() => setAlert(null), 5000);
        return;
      }
      user.password = form.password;
      console.log(JSON.stringify(user));
      // đổi mật khẩu
      UserAPI.update(user)
        .then((res) => {
          setAlert({ type: "success", message: "Đổi mật khẩu thành công" });
          setTimeout(() => setAlert(null), 5000);
        })
        .catch((e) => {
          setAlert({ type: "danger", message: e.response.data.message });
          setTimeout(() => setAlert(null), 5000);
        });
    }
    // không lấy đc user từ code
    else {
      return;
    }
  };

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-all">
          <div className="landing-inner-second">
            <Form className="my-4" onSubmit={changePassword}>
              <AlertMessage info={alert} />
              <Form.Group>
                <Form.Group>
                  <Input
                    placeholder="Email của bạn"
                    className="form_send_mail"
                    type="text"
                    name="email"
                    required
                    onChange={updateForm}
                  />
                </Form.Group>

                <Form.Group>
                  <Input.Password
                    placeholder="Nhập mật khẩu mới của bạn"
                    className="form_send_mail"
                    type="password"
                    name="password"
                    required
                    onChange={updateForm}
                  />
                </Form.Group>
                <Form.Group>
                  <Input.Password
                    placeholder="Nhập mật khẩu mới của bạn lần nữa"
                    className="form_send_mail"
                    type="password"
                    name="password2"
                    required
                    onChange={updateForm}
                  />
                </Form.Group>
                <Form.Group>
                  <Input
                    placeholder="Nhập mã xác thực email"
                    className="form_send_mail"
                    type="text"
                    name="code"
                    required
                    onChange={updateForm}
                  />
                </Form.Group>

                <Button
                  variant="success"
                  className="btn_Return_ResetPasswordForm"
                  onClick={sendMail}
                >
                  Gửi mã xác thực Email
                </Button>
                <Button
                  variant="success"
                  className="btn_Next_SendMailForm_2"
                  type="submit"
                >
                  Đổi mật khẩu
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="landing-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
