import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../service/Actions/AuthAPI";
import AlertMessage from "../alert/AlertMessage";

const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext);

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
    try {
      loginUser(loginForm);
    } catch (error) {
      setAlert({ type: "danger", message: error });
      setTimeout(() => setAlert(null), 5000);
      console.log(error);
    }
  };

  return (
    <>
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
        <Button variant="success" className="btn_loginForm_1" type="submit">
          Đăng nhập
        </Button>
      </Form>
      <p>
        <Link to="/sendmail">
          <Button variant="info" size="sm" className="ml-2">
            Đăng kí tài khoản mới
          </Button>
        </Link>
        <Link to="/sendmail">
          <Button variant="info" size="sm" className="ml-2">
            Bạn quên mật khẩu?
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
