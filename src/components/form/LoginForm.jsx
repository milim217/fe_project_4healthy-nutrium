import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../service/Actions/AuthAPI";
import AlertMessage from "../alert/AlertMessage";
import UserAPI from "../../service/Actions/UserAPI";
import jwt from "jwt-decode";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();

  // Local state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState(null);

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = (event) => {
    event.preventDefault();

    UserAPI.login(loginForm)
      .then((res) => {
        const token = res.data.access_token;
        const user = jwt(token);
        localStorage.setItem("token", JSON.stringify(token));
        if (user.role === "ADMIN") {
          history.push("/admin/dashboard");
          console.log("Account ADMIN");
        } else if (user.role === "USER") {
          history.push("/homeuser");
          console.log("Account USER");
        } else {
          history.push("/nutrionexpert/food");
          console.log("Account NUTRIENT");
        }
      })
      .catch((e) => {
        setAlert({ type: "danger", message: "Sai tên đăng nhập/mật khẩu" });
        setTimeout(() => setAlert(null), 5000);
      });
  };

  return (
    <>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-all">
            <div className="landing-inner-second">
              <Form className="my-4" onSubmit={login}>
                <AlertMessage info={alert} />
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={onChangeLoginForm}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={onChangeLoginForm}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  className="btn_loginForm_1"
                  type="submit"
                >
                  Đăng nhập
                </Button>
              </Form>
              <p>
                <Link to="/register">
                  <Button variant="info" size="sm" className="ml-2">
                    Đăng kí tài khoản mới
                  </Button>
                </Link>
                <Link to="/resetpassword">
                  <Button variant="info" size="sm" className="ml-2">
                    Bạn quên mật khẩu?
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

export default LoginForm;
