import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space, Input, Row, Col, Image } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import FoodAPI from "../../service/Actions/FoodAPI";
import Spinner from "react-bootstrap/Spinner";
import React, { useEffect, useState } from "react";

const GetUserDiet = () => {
  const [foods, setFoods] = useState([]);
  const [breakfastIndex, setBreakfastIndex] = useState(0);
  const [lunchIndex, setLunchIndex] = useState(0);
  const [dinnerIndex, setDinnerIndex] = useState(0);

  useEffect(() => {
    const quizData = JSON.parse(localStorage.getItem("quiz-data"));
    FoodAPI.getDiet(quizData)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {});
  }, []);

  const changeBreakfast = (event) => {
    if (breakfastIndex < foods.breakfastOptions.length - 1) {
      setBreakfastIndex(breakfastIndex + 1);
    } else {
      setBreakfastIndex(0);
    }
  };

  const changeLunch = (event) => {
    if (lunchIndex < foods.lunchOptions.length - 1) {
      setLunchIndex(lunchIndex + 1);
    } else {
      setLunchIndex(0);
    }
  };

  const changeDinner = (event) => {
    if (dinnerIndex < foods.dinnerOptions.length - 1) {
      setDinnerIndex(dinnerIndex + 1);
    } else {
      setDinnerIndex(0);
    }
  };

  const save = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="100"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>
            {" "}
            <a style={{ color: "#ff8000" }}>Hoàn thành!!</a> dưới đây là kế
            hoạch cho bữa ăn hàng ngày của bạn
          </p>
        </div>
        <div className="wrapper-table-option">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            {/* Sáng */}
            <Card
              title="Bữa Sáng"
              size="small"
              extra={<Button onClick={changeBreakfast}>Đổi món</Button>}
            >
              {foods?.breakfastCalo ? (
                <Row>
                  <div className="CardTitle-Info_Calo">
                    Tổng calo cần xấp xỉ
                  </div>
                  <div className="CardTitle-Info_Number">
                    {foods.breakfastCalo.toFixed(2)}
                  </div>
                </Row>
              ) : (
                <></>
              )}
              {foods.breakfastOptions ? (
                foods.breakfastOptions[breakfastIndex]?.map((foodMass) => (
                  <Row className="padding_20">
                    <Col span={18} push={6}>
                      <div className="wrapper-food-quantitative">
                        <h5 className="CardName-food">
                          {foodMass.mass} suất {foodMass.food.foodName}
                        </h5>

                        <h5 className="CardName-caloFood">
                          Calo: <b> {foodMass.food.calo}</b>
                        </h5>
                      </div>
                    </Col>
                    <Col span={6} pull={18}>
                      <Image
                        width={120}
                        height={80}
                        src={`http://localhost:8080/food/${foodMass.food.id}/image`}
                      />
                    </Col>
                    <Button className="Button-infomation-getuserdiet">
                      Thông tin dinh dưỡng
                    </Button>
                  </Row>
                ))
              ) : (
                <div>
                  <div className="Messageloading-getUserDiet">
                    <div className="title-name">
                      Đang tải món ăn, xin bạn chờ một chút...
                    </div>
                    <Spinner animation="border" variant="primary" />
                  </div>
                </div>
              )}
            </Card>
            {/* Trưa */}
            <Card
              title="Bữa Trưa"
              size="small"
              extra={<Button onClick={changeLunch}>Đổi món</Button>}
            >
              {foods?.lunchCalo ? (
                <Row>
                  <div className="CardTitle-Info_Calo">
                    Tổng calo cần xấp xỉ
                  </div>
                  <div className="CardTitle-Info_Number">
                    {foods.lunchCalo.toFixed(2)}
                  </div>
                </Row>
              ) : (
                <></>
              )}
              {foods.lunchOptions ? (
                foods.lunchOptions[lunchIndex]?.map((foodMass) => (
                  <Row className="padding_20">
                    <Col span={18} push={6}>
                      <div className="wrapper-food-quantitative">
                        <h5 className="CardName-food">
                          {foodMass.mass} suất {foodMass.food.foodName}
                        </h5>

                        <h5 className="CardName-caloFood">
                          Calo: <b> {foodMass.food.calo}</b>
                        </h5>
                      </div>
                    </Col>
                    <Col span={6} pull={18}>
                      <Image
                        width={120}
                        height={80}
                        src={`http://localhost:8080/food/${foodMass.food.id}/image`}
                      />
                    </Col>
                    <Button className="Button-infomation-getuserdiet">
                      Thông tin dinh dưỡng
                    </Button>
                  </Row>
                ))
              ) : (
                <div>
                  <div className="Messageloading-getUserDiet">
                    <div className="title-name">
                      Đang tải món ăn, xin bạn chờ một chút...
                    </div>
                    <Spinner animation="border" variant="primary" />
                  </div>
                </div>
              )}
            </Card>
            {/* Tối */}
            <Card
              title="Bữa Tối"
              size="small"
              extra={<Button onClick={changeDinner}>Đổi món</Button>}
            >
              {foods?.dinnerCalo ? (
                <Row>
                  <div className="CardTitle-Info_Calo">
                    Tổng calo cần xấp xỉ
                  </div>
                  <div className="CardTitle-Info_Number">
                    {foods.dinnerCalo.toFixed(2)}
                  </div>
                </Row>
              ) : (
                <></>
              )}
              {foods.dinnerOptions ? (
                foods.dinnerOptions[dinnerIndex]?.map((foodMass) => (
                  <Row className="padding_20">
                    <Col span={18} push={6}>
                      <div className="wrapper-food-quantitative">
                        <h5 className="CardName-food">
                          {foodMass.mass} suất {foodMass.food.foodName}
                        </h5>

                        <h5 className="CardName-caloFood">
                          Calo: <b> {foodMass.food.calo}</b>
                        </h5>
                      </div>
                    </Col>
                    <Col span={6} pull={18}>
                      <Image
                        width={120}
                        height={80}
                        src={`http://localhost:8080/food/${foodMass.food.id}/image`}
                      />
                    </Col>
                    <Button className="Button-infomation-getuserdiet">
                      Thông tin dinh dưỡng
                    </Button>
                  </Row>
                ))
              ) : (
                <div>
                  <div className="Messageloading-getUserDiet">
                    <div className="title-name">
                      Đang tải món ăn, xin bạn chờ một chút...
                    </div>
                    <Spinner animation="border" variant="primary" />
                  </div>
                </div>
              )}
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
