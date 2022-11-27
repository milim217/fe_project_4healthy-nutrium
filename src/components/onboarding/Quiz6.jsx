import React from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space, Input } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";

const Quiz6 = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="65"></Progress>
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
                name="quantity"
                type="number"
                min="1"
                max="4"
              />
            </Card>
            <Card title="Trưa" size="small">
              <Input
                placeholder="Nhập số món bạn ăn trong buổi trưa ( 1 - 4 )"
                className="InputText_Quiz"
                name="quantity"
                type="number"
                min="1"
                max="4"
              />
            </Card>
            <Card title="Tối" size="small">
              <Input
                placeholder="Nhập số món bạn ăn trong buổi tối ( 1 - 4 )"
                className="InputText_Quiz"
                name="quantity"
                type="number"
                min="1"
                max="4"
              />
            </Card>
          </Space>
          <Link to="/onboarding/GetUserDiet">
            <Button variant="success" className="button_Link">
              Tiếp tục
            </Button>
          </Link>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
};

export default Quiz6;
