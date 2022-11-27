import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space, Input, Row, Col, Image } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import FoodAPI from "../../service/Actions/FoodAPI";
import React, { useEffect, useState } from "react";


const GetUserDiet = () => {

  const [foods, setFoods] = useState([]);
  const [breakfastIndex, setBreakfastIndex] = useState(0);
  const [lunchIndex, setLunchIndex] = useState(0);
  const [dinnerIndex, setDinnerIndex] = useState(0);

  useEffect(() => {
    const quizData = JSON.parse(localStorage.getItem('quiz-data'));
    FoodAPI.getDiet(quizData)
      .then(res => {
        setFoods(res.data);
      })
      .catch(err => {

      })
  }, []);

  const changeBreakfast = (event) => {
    if (breakfastIndex < foods.breakfast.length - 1) {
      setBreakfastIndex(breakfastIndex + 1);
    }
    else {
      setBreakfastIndex(0);
    }
  }

  const changeLunch = (event) => {
    if (lunchIndex < foods.lunch.length - 1) {
      setLunchIndex(lunchIndex + 1);
    }
    else {
      setLunchIndex(0);
    }
  }

  const changeDinner = (event) => {
    if (dinnerIndex < foods.dinner.length - 1) {
      setDinnerIndex(dinnerIndex + 1);
    }
    else {
      setDinnerIndex(0);
    }
  }

  const save = (event) => {
    event.preventDefault();
    

  }

  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="5"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p> Hoàn thành!! dưới đây là kế hoạch cho bữa ăn hàng ngày của bạn</p>
        </div>
        <div className="wrapper-table-option">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            {/* Sáng */}
            <Card title="Bữa Sáng" size="small">
              {
                foods?.breakfastCalo ?
                  <Row>Tổng calo cần xấp xỉ {foods.breakfastCalo.toFixed(2)}</Row>
                  :
                  <></>
              }
              <Row><Button onClick={changeBreakfast}>Đổi món</Button></Row>
              {
                foods.breakfast ?
                  (
                    foods.breakfast[breakfastIndex]?.map((food) =>
                      <Row className="padding_20">
                        <Col span={8} push={8}>
                          <h5>{food.foodName}</h5>
                          <br />
                          <h5>Calo: {food.calo}</h5>
                        </Col>
                        <Col span={8} pull={8}>
                          <Image
                            width={100}
                            src={`http://localhost:8080/food/${food.id}/image`}
                          />
                        </Col>
                      </Row>
                    )
                  )
                  :
                  (
                    <h2>Rất tiếc chưa thể tìm thấy thực đơn phù hợp cho bữa sáng</h2>
                  )
              }
              {/* <Row className="paddingBottom_20">
                <Col span={18} push={6}>
                  <h5>Food</h5>
                  About
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row>  */}
            </Card>
            {/* Trưa */}
            <Card title="Bữa Trưa" size="small">
              {
                foods?.lunchCalo ?
                  <Row>Tổng calo cần xấp xỉ {foods.lunchCalo.toFixed(2)}</Row>
                  :
                  <></>
              }
              <Row><Button onClick={changeLunch}>Đổi món</Button></Row>
              {
                foods.lunch ?
                  (
                    foods.lunch[lunchIndex]?.map((food) =>
                      <Row className="padding_20">
                        <Col span={18} push={6}>
                          <h5>{food.foodName}</h5>
                          About
                        </Col>
                        <Col span={6} pull={18}>
                          <Image
                            width={100}
                            src={`http://localhost:8080/food/${food.id}/image`}
                          />
                        </Col>
                      </Row>
                    )
                  )
                  :
                  (
                    <h2>Rất tiếc chưa thể tìm thấy thực đơn phù hợp cho bữa trưa</h2>
                  )
              }
              {/* <Row className="paddingBottom_20">
                <Col span={18} push={6}>
                  <h5>Food</h5>
                  About
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row> */}
            </Card>
            {/* Tối */}
            <Card title="Bữa Tối" size="small">
              {
                foods?.dinnerCalo ?
                  <Row>Tổng calo cần xấp xỉ {foods.dinnerCalo.toFixed(2)}</Row>
                  :
                  <></>
              }
              <Row><Button onClick={changeDinner}>Đổi món</Button></Row>
              {
                foods.lunch ?
                  (
                    foods.dinner[dinnerIndex]?.map((food) =>
                      <Row className="padding_20">
                        <Col span={18} push={6}>
                          <h5>{food.foodName}</h5>
                          About
                        </Col>
                        <Col span={6} pull={18}>
                          <Image
                            width={100}
                            src={`http://localhost:8080/food/${food.id}/image`}
                          />
                        </Col>
                      </Row>
                    )
                  )
                  :
                  (
                    <h2>Rất tiếc chưa thể tìm thấy thực đơn phù hợp cho bữa tối</h2>
                  )
              }
              {/* <Row className="paddingBottom_20">
                <Col span={18} push={6}>
                  <h5>Food</h5>
                  About
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row> */}
            </Card>
          </Space>
          {/* <Link to="/login"> */}
          <Button variant="success" className="button_Link" onclick={save}>
            Lưu thực đơn
          </Button>
          {/* </Link> */}
        </div>
      </div>
      <Footers></Footers>
    </>
  );
};

export default GetUserDiet;
