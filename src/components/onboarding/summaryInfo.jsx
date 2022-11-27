import React from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import ChartBMI from "../chart/chartBMI";
import ChartCalo from "../chart/chartCalo";
import ModalChangeInfoUser_Summary from "../modal/ModalChangeInfoUser_Summary";
import Notification from "../toats/Notification";
const summaryInfo = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <Notification
          message="lưu thành công"
          description="lưu thành công tài khoản"
        ></Notification>
        <div className="wrapper-ProgressBar">
          <Progress per="45"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Tóm tắt thông tin</p>
        </div>
        <div className="wrapper-table-option">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Card
              title="Thông tin cơ thể"
              size="small"
              extra={
                <ModalChangeInfoUser_Summary
                  age="20"
                  kg="175"
                  cm="7"
                ></ModalChangeInfoUser_Summary>
              }
            >
              <p>20 tuổi</p>
              <p>175 chiều cao (cm) </p>
              <p>77 cân nặng (kg)</p>
            </Card>
            <Card title="BMI của bạn" size="small">
              <ChartBMI></ChartBMI>
              <p className="center-text">Quá cân</p>
            </Card>
            <Card title="Lượng nước nạp vào" size="small">
              <div className="icon-water">
                <div className="center-icon" />
                <p className="center-text">3.1 L nước</p>
                <p className="center-text">
                  Lượng nước nạp vào được khuyến nghị cho bạn
                </p>
              </div>
            </Card>
            <Card title="Lượng Calo hàng ngày" size="small">
              <ChartCalo></ChartCalo>
              <p className="center-text">
                <p>Được khuyến nghị</p>1500 - 1600 Cal
              </p>
            </Card>
          </Space>
          <Link to="/onboarding/quiz5">
            <Button variant="success" className="button_Link">
              Lưu và tiếp tục
            </Button>
          </Link>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
};

export default summaryInfo;
