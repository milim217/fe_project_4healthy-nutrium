
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space, Input } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FoodAPI from "../../service/Actions/FoodAPI";
import UserAPI from "../../service/Actions/UserAPI";


const Quiz6 = () => {

  const history = useHistory();

  const [morning, setMorning] = useState(1);
  const [lunch, setLunch] = useState(1);
  const [dinner, setDinner] = useState(1);

  const onFormChange = (event) => {
    if (event.target.name == 'morning') {
      setMorning(event.target.value);
    }
    else if (event.target.name == 'lunch') {
      setLunch(event.target.value);
    }
    else {
      setDinner(event.target.value);
    }
  }

  const submit = (event) => {
    event.preventDefault();

    let data;
    try {
      data = JSON.parse(localStorage.getItem('quiz-data'));
      data.counts = [morning, lunch, dinner];

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log('user = ' + JSON.stringify(user));
        // get current user
        UserAPI.getByEmail(user.sub)
          .then(res => {
            // data.user = JSON.stringify(res.data);
            data.user = JSON.stringify(res.data);
            console.log('user new = ' + JSON.stringify(res.data));
          })
          .catch(err => {
            console.log('f-user');
          });
  
      } catch (error) {
        history.push('/login');
      }

    } catch (error) {
      data = {
        user: null,
        height: null,
        weight: null,
        job: null,
        categories: null,
        counts: [morning, lunch, dinner]
      }
    }

    

    console.log('quiz-data = ' + JSON.stringify(data));
    localStorage.setItem('quiz-data', JSON.stringify(data));

    // // get diet
    // FoodAPI.getDiet(data)
    //   .then(res => {

    //   })
    //   .catch(err => {
    //     console.log('f-food');
    //   });
    history.push('/onboarding/GetUserDiet');

  }

  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="5"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Số lượng món ăn mà bạn ăn trong bữa Sáng | Trưa | Tối?</p>
        </div>
        <div className="wrapper-table-option">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Card title="Sáng: " size="small">
              <Input
                placeholder="Nhập số món bạn ăn trong buổi sáng ( 1 - 4 )"
                className="InputText_Quiz"
                name="morning"
                type="number"
                min="1"
                max="4"
                required
                onChange={onFormChange}
              />
            </Card>
            <Card title="Trưa" size="small">
              <Input
                placeholder="Nhập số món bạn ăn trong buổi trưa ( 1 - 4 )"
                className="InputText_Quiz"
                name="lunch"
                type="number"
                min="1"
                max="4"
                required
                onChange={onFormChange}
              />
            </Card>
            <Card title="Tối" size="small">
              <Input
                placeholder="Nhập số món bạn ăn trong buổi tối ( 1 - 4 )"
                className="InputText_Quiz"
                name="dinner"
                type="number"
                min="1"
                max="4"
                required
                onChange={onFormChange}
              />
            </Card>
          </Space>
          {/* <Link to="/onboarding/GetUserDiet"> */}
          <Button variant="success" className="button_Link" onClick={submit}>
            Tiếp tục
          </Button>
          {/* </Link> */}
        </div>
      </div>
      <Footers></Footers>
    </>
  );
};

export default Quiz6;
