import React from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space, Input, Row, Col, Image } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";

const GetUserDiet = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="100"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p> Hoàn thành!! dưới đây là kế hoạch cho bữa ăn hàng ngày của bạn</p>
        </div>
        <div className="wrapper-table-option">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            {/* Sáng */}
            <Card title="Bữa Sáng" size="small">
              <Row className="padding_20">
                <Col span={18} push={6}>
                  <div className="wrapper-about">
                    <h5 className="about-title">Food</h5>
                    <div className="about-detail">about</div>
                  </div>
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row>
              <Row className="padding_20">
                <Col span={18} push={6}>
                  <div className="wrapper-about">
                    <h5 className="about-title">Food</h5>
                    <div className="about-detail">about</div>
                  </div>
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row>
            </Card>
            {/* Trưa */}
            <Card title="Bữa Trưa" size="small">
              <Row className="padding_20">
                <Col span={18} push={6}>
                  <div className="wrapper-about">
                    <h5 className="about-title">Food</h5>
                    <div className="about-detail">about</div>
                  </div>
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row>
              <Row className="padding_20">
                <Col span={18} push={6}>
                  <div className="wrapper-about">
                    <h5 className="about-title">Food</h5>
                    <div className="about-detail">about</div>
                  </div>
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row>
            </Card>
            {/* Tối */}
            <Card title="Bữa Tối" size="small">
              <Row className="padding_20">
                <Col span={18} push={6}>
                  <div className="wrapper-about">
                    <h5 className="about-title">Food</h5>
                    <div className="about-detail">about</div>
                  </div>
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row>
              <Row className="padding_20">
                <Col span={18} push={6}>
                  <div className="wrapper-about">
                    <h5 className="about-title">Food</h5>
                    <div className="about-detail">about</div>
                  </div>
                </Col>
                <Col span={6} pull={18}>
                  <Image
                    width={100}
                    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/24/0/FNK_INSTANT-POT-HUMMUS-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579879895817.jpeg"
                  />
                </Col>
              </Row>
            </Card>
          </Space>
          <Link to="/homeuser">
            <Button variant="success" className="button_Link">
              Nhận kế hoạch
            </Button>
          </Link>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
};

export default GetUserDiet;
