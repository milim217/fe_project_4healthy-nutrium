import React, { useState, useEffect } from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Card, Space, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import { useHistory } from "react-router-dom";

import JobAPI from "../../service/Actions/JobAPI";

const Quiz4 = () => {

  const history = useHistory();

  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    JobAPI.getAll()
      .then(res => {
        setJobs(res.data);
        console.log('data = ' + JSON.stringify(res.data))
      })
      .catch(err => {

      })
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const submit = (event) => {
    event.preventDefault();

    let data;
    try {
      data = JSON.parse(localStorage.getItem('quiz-data'));
      data.job = value;
    } catch (error) {
      data = {
        user: null,
        height: null,
        weight: null,
        job: value,
        categories: null,
        counts: null
      }
    }

    localStorage.setItem('quiz-data', JSON.stringify(data));
    history.push('/onboarding/quiz5');
  }

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
              {
                jobs ?
                  (
                    jobs.map((job) =>
                      <Radio value={job} className="btn-radio-quiz">
                        {job.jobName}
                      </Radio>
                    )
                  )
                  :
                  (
                    <h2>No job found</h2>
                  )
              }
            </Space>
          </Radio.Group>
          <Button variant="success" className="button_Link" onClick={submit}>
            Tiếp tục
          </Button>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
};

export default Quiz4;
