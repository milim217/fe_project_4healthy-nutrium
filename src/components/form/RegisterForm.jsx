import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../service/Actions/AuthAPI";
import AlertMessage from "../alert/AlertMessage";
import { DatePicker, Radio } from "antd";

import moment from "moment";

const RegisterForm = () => {
  //Date
  const [dateValue, setDate] = useState(false);
  function onSelectDate(dateValue, dateString) {
    console.log(dateString);
    setDate(dateString);
    setRegisterForm({
      ...registerForm,
      dob: dateString,
    });
  }
  //password
  const [confirmPassword, setConfirmPassword] = useState(false);
  const onChangePassInput = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Context
  const { registerUser } = useContext(AuthContext);
  // Gender
  const onChangeGender = (e) => {
    console.log(`radio checked:${e.target.value}`);
    setRegisterForm({
      ...registerForm,
      gender: e.target.value,
    });
  };
  // Local state
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    dob: "01/01/2015",
    phone: "",
    gender: "false",
  });
  const { username, password, name, address, dob, phone, gender } =
    registerForm;

  const [alert, setAlert] = useState(null);
  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const register = async (event) => {
    event.preventDefault();
    console.log(registerForm);
    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Passwords do not match" });
      setTimeout(() => setAlert(null), 5000);
      return;
    }

    // try {
    //   const registerData = await registerUser(registerForm);
    //   if (registerData) {
    //     setAlert({ type: "danger", message: registerData.message });
    //     setTimeout(() => setAlert(null), 5000);
    //     console.log("success");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
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
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
            onChange={onChangePassInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="name"
            required
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Address"
            name="address"
            required
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group>
          <DatePicker
            defaultValue={moment("01/01/2015", "DD/MM/YYYY")}
            name="date"
            style={{ width: "100%" }}
            format={"DD/MM/YYYY"}
            onChange={onSelectDate}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            name="phone"
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
            <Radio.Button value="false">Female</Radio.Button>
            <Radio.Button value="true">Male</Radio.Button>
          </Radio.Group>
        </Form.Group>

        <Button variant="success" className="btn_register_1" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link to="/login">
          <Button variant="info" size="sm" className="ml-2">
            Login
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
