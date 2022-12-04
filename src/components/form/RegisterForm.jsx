import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import AlertMessage from "../alert/AlertMessage";
import { DatePicker, Radio } from "antd";
import UserAPI from "../../service/Actions/UserAPI";
import Moment from 'moment';
import moment from "moment";

const RegisterForm = () => {
  //Date
  const [dateValue, setDate] = useState(false);
  // Local state
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    dob: "01/01/2000",
    phone: "",
    gender: "false",
    code: ""
  });
  const { username, password, name, address, dob, phone, gender } =
    registerForm;

  const [alert, setAlert] = useState(null);

  function onSelectDate(dateValue, dateString) {
    let dateParts = dateString.split("/");
    let date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    let dateStr = Moment(date).format('yyyy-MM-DD');

    setDate(dateStr);
    setRegisterForm({
      ...registerForm,
      dob: dateStr,
    });
  }
  //password
  const [confirmPassword, setConfirmPassword] = useState(false);
  const onChangePassInput = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Gender
  const onChangeGender = (e) => {
    console.log(`radio checked:${e.target.value}`);
    setRegisterForm({
      ...registerForm,
      gender: e.target.value,
    });
  };

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const checkIput = () => {
    let check = true;
    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Vui lòng nhập 2 mật khẩu giống nhau" });
      setTimeout(() => setAlert(null), 5000);
      check = false;
    }
    return check;
  }

  async function sendEmail() {
    let email = registerForm.email;
    if (email !== "") {
      let user = await UserAPI.getByEmail([email])
        .then(res => {
          return res.data;
        })
        .catch(e => {
          return null;
        });

      if (user) {
        setAlert({ type: "danger", message: "Vui lòng nhập email chưa đăng ký" });
        setTimeout(() => setAlert(null), 5000);
      }
      else {
        UserAPI.sendRegisterCode([email])
          .then(res => {
            console.log(res);
          })
          .catch(e => {
            setAlert({ type: "danger", message: "Lỗi gửi email" });
            setTimeout(() => setAlert(null), 5000);
          });
      }

    }
  }

  const register = async (event) => {
    event.preventDefault();
    console.log('inputted Data = ' + JSON.stringify(registerForm));

    if (!checkIput()) {
      return;
    }

    // call api lấy email từ code
    let email = await UserAPI.getRegisterUser(registerForm.code)
      .then(res => {
        return res.data;
      })
      .catch(e => {
        setAlert({ type: "danger", message: e.response.data.message });
        setTimeout(() => setAlert(null), 5000);
        return null;
      });

    // lấy đc email từ code
    if (email) {
      let inputtedEmail = registerForm.email;
      // check email từ code có trùng vs email nhập
      if (email !== inputtedEmail) {
        console.log("Mã xác thực không dành cho email " + inputtedEmail);
        setAlert({ type: "danger", message: "Mã xác thực không dành cho email " + inputtedEmail });
        setTimeout(() => setAlert(null), 5000);
        return;
      }
      // add user
      UserAPI.add(registerForm)
      .then(res => {
        setAlert({ type: "success", message: "Đăng kí tài khoản thành công" });
        setTimeout(() => setAlert(null), 5000);
      })
      .catch(e => {
        setAlert({ type: "danger", message: e.response.data.message });
        setTimeout(() => setAlert(null), 5000);
      });
    }
    // không lấy đc email từ code
    else {
      return;
    }
  };

  return (
    <>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-all">
            <div className="landing-inner-second">
              <Form className="my-4" onSubmit={register}>
                <AlertMessage info={alert} />
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={onChangeRegisterForm}
                  />
                  <Form.Control
                    type="password"
                    placeholder="Mật khẩu"
                    name="password"
                    required
                    onChange={onChangeRegisterForm}
                  />
                  <Form.Control
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    required
                    onChange={onChangePassInput}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Tên của bạn"
                    name="name"
                    required
                    onChange={onChangeRegisterForm}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Địa chỉ"
                    name="address"
                    required
                    onChange={onChangeRegisterForm}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Số điện thoại"
                    name="phone"
                    required
                    onChange={onChangeRegisterForm}
                  />
                  <DatePicker
                    defaultValue={moment("01/01/2000", "DD/MM/YYYY")}
                    name="date"
                    style={{ width: "100%" }}
                    format={"DD/MM/YYYY"}
                    onChange={onSelectDate}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Mã xác thực email"
                    name="code"
                    required
                    onChange={onChangeRegisterForm}
                  />
                </Form.Group>
                <Form.Group>
                  <Radio.Group
                    onChange={onChangeGender}
                    defaultValue="Female"
                    preventDefault="Female"
                  >
                    <Radio.Button value="false">Nữ</Radio.Button>
                    <Radio.Button value="true">Nam</Radio.Button>
                  </Radio.Group>
                </Form.Group>

                <Button variant="success" className="btn_register_1" onClick={sendEmail}>
                  Gửi mã xác thực Email
                </Button>
                <Button variant="success" className="btn_register_1" type="submit">
                  Đăng kí
                </Button>
              </Form>
              <p>
                Bạn đã có tài khoản?
                <Link to="/login">
                  <Button variant="info" size="sm" className="ml-2">
                    Login
                  </Button>
                </Link>
              </p>
            </div>
            <div className="landing-inner"></div>
          </div>
        </div>
      </div>

    </>
  );
};

export default RegisterForm;
