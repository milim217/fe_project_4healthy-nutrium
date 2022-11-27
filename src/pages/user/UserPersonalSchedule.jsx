import React from "react";
import { Layout, Card, Col, Row, Image } from "antd";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/UserPersonalSchedule.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import HeaderHasLog from "../../components/header/HeaderHasLog";
import ModalDetailFood from "../../components/modal/ModalDetailFood";

const { Header, Footer, Content } = Layout;
const UserPersonalSchedule = () => {
  return (
    <div>
      <HeaderHasLog></HeaderHasLog>
      <div className="wrapper-schedule_page">
        <div className="site-card-wrapper">
          <div className="title-card-wrapper">
            <div className="title-card-time-schedule">
              Ngày 01, tháng 01, năm 2020
            </div>
            <div className="title-card-amount-calo">1500 calo</div>
          </div>

          <Row gutter={16}>
            <Col span={8}>
              <Card
                title="Sáng"
                bordered={false}
                extra={<ModalDetailFood></ModalDetailFood>}
              >
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
            </Col>
            <Col span={8}>
              <Card
                title="Trưa"
                bordered={false}
                extra={<ModalDetailFood></ModalDetailFood>}
              >
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
            </Col>
            <Col span={8}>
              <Card
                title="Tối  "
                bordered={false}
                extra={<ModalDetailFood></ModalDetailFood>}
              >
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
            </Col>
          </Row>
        </div>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default UserPersonalSchedule;
