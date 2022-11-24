import React from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";

const Quiz1 = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="95"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Vui lòng chọn loại rau mà bạn muốn?</p>
        </div>
        <div className="wrapper-table-option">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon-foodGreen"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
          </Row>
          <Link to="/onboarding/pageLoadingQuiz">
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
