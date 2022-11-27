import React, { useState } from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Space } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";


const Quiz2 = () => {
  const [style, setStyle] = useState("cont");

  const changeStyle = () => {
    setStyle("cont2");
  };
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="15"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Bạn có thường xuyên hoạt động thể chất không?</p>
        </div>
        <div className="wrapper-table-option">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Link to="/onboarding/quiz3">
              <div className="button-opinion-quiz">
                Hầu như không hoạt động thể chất
              </div>
            </Link>
            <Link to="/onboarding/quiz3">
              <div className="button-opinion-quiz">
                Tôi tập thể dục 3-4 lần mỗi tuần
              </div>
            </Link>
            <Link to="/onboarding/quiz3">
              <div className="button-opinion-quiz">
                Tôi tập thể dục hằng ngày
              </div>
            </Link>
          </Space>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
};

export default Quiz2;
