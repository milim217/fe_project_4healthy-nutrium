import React, { useState } from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";

const Quiz1 = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="50"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Công việc của bạn là gì?</p>
        </div>
        <div className="wrapper-table-option">
          <Radio.Group onChange={onChange} value={value} size="large">
            <Space direction="vertical">
              <Radio value={1} className="btn-radio-quiz">
                Nhân viên
              </Radio>
              <Radio value={2} className="btn-radio-quiz">
                Người lao động
              </Radio>
              <Radio value={3} className="btn-radio-quiz">
                Nông dân
              </Radio>
              <Radio value={4} className="btn-radio-quiz">
                More...
                {value === 4 ? (
                  <Input
                    style={{
                      width: 100,
                      marginLeft: 10,
                    }}
                  />
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
          <Link to="/onboarding/summaryInfo">
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
