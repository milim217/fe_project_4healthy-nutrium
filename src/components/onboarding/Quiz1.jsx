import React from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";


const Quiz1 = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="5"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>
            Chào mừng bạn đến với 4HealthyNutrium. Bạn hãy cung cấp thêm một số
            thông tin về bản thân để chúng tôi có thể đưa ra lộ trình ăn uống
            thích hợp nhất dành cho bạn nhé!
          </p>
        </div>
        <div className="wrapper-table-option">
          {/* <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Card title="Card" size="small">
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Card" size="small">
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Card" size="small">
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Space> */}
          <Link to="/onboarding/quiz2">
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
