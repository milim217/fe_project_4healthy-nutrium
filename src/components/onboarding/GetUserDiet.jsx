import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space, Row, Col, Image } from "antd";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import Spinner from "react-bootstrap/Spinner";
import React, { useEffect, useState } from "react";
import DietAPI from "../../service/Actions/DietAPI";
import Moment from 'moment';
import AlertMessage from "../alert/AlertMessage";


const GetUserDiet = () => {
  const [diet, setDiet] = useState([]);
  const [breakfastIndex, setBreakfastIndex] = useState(0);
  const [lunchIndex, setLunchIndex] = useState(0);
  const [dinnerIndex, setDinnerIndex] = useState(0);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const quizData = JSON.parse(localStorage.getItem("quiz-data"));
    DietAPI.getDietOptions(quizData)
      .then((res) => {
        console.log('data = ' + JSON.stringify(res.data));
        setDiet(res.data);
      })
      .catch((err) => { });
  }, []);

  const changeBreakfast = (event) => {
    if (breakfastIndex < diet.breakfastOptions.length - 1) {
      setBreakfastIndex(breakfastIndex + 1);
    } else {
      setBreakfastIndex(0);
    }
  };

  const changeLunch = (event) => {
    if (lunchIndex < diet.lunchOptions.length - 1) {
      setLunchIndex(lunchIndex + 1);
    } else {
      setLunchIndex(0);
    }
  };

  const changeDinner = (event) => {
    if (dinnerIndex < diet.dinnerOptions.length - 1) {
      setDinnerIndex(dinnerIndex + 1);
    } else {
      setDinnerIndex(0);
    }
  };

  async function saveDiet(event) {
    event.preventDefault();

    let today = new Date();
    // let toDayStr = new Date(today.toLocaleString("en-US", {t5imeZone: "Asia/Jakarta"}));
    let toDayStr = Moment(today).format('yyyy-MM-DD HH:mm:ss');

    let data = {
      user: diet.user,
      job: diet.job,
      weight: diet.weight,
      height: diet.height,
      date: toDayStr,
      breakfastCalo: diet?.breakfastCalo,
      lunchCalo: diet?.lunchCalo,
      dinnerCalo: diet?.dinnerCalo,
      breakfastCarb: diet?.breakfastCarb,
      lunchCarb: diet?.lunchCarb,
      dinnerCarb: diet?.dinnerCarb,
      breakfastProtein: diet?.breakfastProtein,
      lunchProtein: diet?.lunchProtein,
      dinnerProtein: diet?.dinnerProtein,
      breakfastFat: diet?.breakfastFat,
      lunchFat: diet?.lunchFat,
      dinnerFat: diet?.dinnerFat,
      breakfast: diet?.breakfastOptions[breakfastIndex],
      lunch: diet?.lunchOptions[lunchIndex],
      dinner: diet?.dinnerOptions[dinnerIndex]
    };

    await DietAPI.save(data)
      .then(res => {
        setAlert({ type: "success", message: "Lưu thực đơn thành công" });
        setTimeout(() => setAlert(null), 5000);
      })
      .catch(e => {
        setAlert({ type: "success", message: "Lưu thực đơn không thành công" });
        setTimeout(() => setAlert(null), 5000);
      });

  }

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
          <AlertMessage info={alert} />
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            {/* Sáng */}
            <Card
              title="Bữa Sáng"
              size="small"
              extra={<Button onClick={changeBreakfast}>Đổi món</Button>}
            >
              {diet?.breakfastCalo ? (
                <Row>
                  <div className="CardTitle-Info_Calo">
                    Tổng calo cần xấp xỉ
                  </div>
                  <div className="CardTitle-Info_Number">
                    {diet.breakfastCalo}
                  </div>
                </Row>
              ) : (
                <></>
              )}
              {diet.breakfastOptions ? (
                diet.breakfastOptions[breakfastIndex]?.map((foodMass) => (
                  <Row className="padding_20">
                    <Col span={18} push={6}>
                      <div className="wrapper-food-quantitative">
                        <h5 className="CardName-food">
                          {foodMass.mass.toFixed(1)} suất {foodMass.food.foodName}
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
                      Đang tải món ăn.......
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
              {diet?.lunchCalo ? (
                <Row>
                  <div className="CardTitle-Info_Calo">
                    Tổng calo cần xấp xỉ
                  </div>
                  <div className="CardTitle-Info_Number">
                    {diet.lunchCalo}
                  </div>
                </Row>
              ) : (
                <></>
              )}
              {diet.lunchOptions ? (
                diet.lunchOptions[lunchIndex]?.map((foodMass) => (
                  <Row className="padding_20">
                    <Col span={18} push={6}>
                      <div className="wrapper-food-quantitative">
                        <h5 className="CardName-food">
                          {foodMass.mass.toFixed(1)} suất {foodMass.food.foodName}
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
                      Đang tải món ăn....
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
              {diet?.dinnerCalo ? (
                <Row>
                  <div className="CardTitle-Info_Calo">
                    Tổng calo cần xấp xỉ
                  </div>
                  <div className="CardTitle-Info_Number">
                    {diet.dinnerCalo}
                  </div>
                </Row>
              ) : (
                <></>
              )}
              {diet.dinnerOptions ? (
                diet.dinnerOptions[dinnerIndex]?.map((foodMass) => (
                  <Row className="padding_20">
                    <Col span={18} push={6}>
                      <div className="wrapper-food-quantitative">
                        <h5 className="CardName-food">
                          {foodMass.mass.toFixed(1)} suất {foodMass.food.foodName}
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
                      Đang tải món ăn...
                    </div>
                    <Spinner animation="border" variant="primary" />
                  </div>
                </div>
              )}
            </Card>
          </Space>
          {/* <Link to="/login"> */}
          <Button variant="success" className="button_Link" onClick={saveDiet}>
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
