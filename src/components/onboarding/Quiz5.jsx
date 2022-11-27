import React from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import MultiSelectMeat from "../multiselect/MultiSelectMeat";

const Quiz1 = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="75"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Vui lòng chọn loại thịt mà bạn muốn?</p>
        </div>
        <div className="wrapper-table-option">
          <MultiSelectMeat></MultiSelectMeat>
          <Link to="/onboarding/quiz6">
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
