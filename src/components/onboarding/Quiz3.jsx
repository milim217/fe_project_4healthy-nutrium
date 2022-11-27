import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Input, Space } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Quiz3 = () => {

  const history = useHistory();

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const onFormChange = (event) => {
    if (event.target.name == 'height') {
      setHeight(event.target.value);
    }
    else {
      setWeight(event.target.value);
    }
  }

  const submit = (event) => {
    event.preventDefault();

    let data;
    try {
      localStorage.removeItem('quiz-data');
       data = JSON.parse(localStorage.getItem('quiz-data'));
       data.height = height;
       data.weight = weight;
    } catch (error) {
      data = {
        user: null,
        height: height,
        weight: weight,
        job: null,
        categories: null,
        counts: null
      }
    }  

    localStorage.setItem('quiz-data', JSON.stringify(data));
    history.push('/onboarding/quiz4');
  }

  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="25"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Bạn hãy nhập chiều cao và cân nặng của mình nhé</p>
        </div>
        <div className="wrapper-table-option">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Card title="Chiều cao của bạn là: " size="small">
              <Input
                placeholder="Chiều cao"
                className="InputText_Quiz"
                type="number"
                name="height"
                required
                onChange={onFormChange}
              />
            </Card>
            <Card title="Cân nặng của bạn là" size="small">
              <Input
                placeholder="Cân nặng"
                className="InputText_Quiz"
                type="number"
                name="weight"
                required
                onChange={onFormChange}
              />
            </Card>
          </Space>
          {/* <Link to="/onboarding/quiz4"> */}
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

export default Quiz3;
