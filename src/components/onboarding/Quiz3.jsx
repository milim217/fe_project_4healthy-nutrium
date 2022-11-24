import React from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Input, Space } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";

const Quiz1 = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="25"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Bạn hãy nhập chiều cao và cân nặng của mình nhé?</p>
        </div>
        <div className="wrapper-table-option">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Card title="Chiều cao của bạn là: " size="small">
              <Input
                placeholder="Nhập số, ví dụ bạn cao 1m75 thì nhập 175"
                className="InputText_Quiz"
              />
            </Card>
            <Card title="Cân nặng của bạn là" size="small">
              <Input
                placeholder="Nhập số, ví dụ bạn nặng 50Kg thì nhập 50"
                className="InputText_Quiz"
              />
            </Card>
          </Space>
          <Link to="/onboarding/quiz4">
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

export default Quiz1;
