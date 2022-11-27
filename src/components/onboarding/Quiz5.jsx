import React, { useEffect } from "react";
import HeaderUser from "../header/HeaderUser";
import Footers from "../footer/footers";
import "../../assets/style/user/quizpage.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Progress from "../progress/Progress";
import CategoryAPI from "../../service/Actions/CategoryAPI";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Quiz5 = () => {

  const history = useHistory();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    CategoryAPI.getAll()
      .then(res => {
        setCategories(res.data);
        console.log('data = ' + JSON.stringify(res.data))
      })
      .catch(err => {

      })
  }, []);

  const submit = (event) => {
    event.preventDefault();

    let data;
    try {
      data = JSON.parse(localStorage.getItem('quiz-data'));
      console.log(1);
      data.categories = categories;
    } catch (error) {
      console.log(0);
      data = {
        user: null,
        height: null,
        weight: null,
        job: null,
        categories: categories,
        counts: null
      }
    }

    console.log(JSON.stringify(data));
    localStorage.setItem('quiz-data', JSON.stringify(data));
    history.push('/onboarding/quiz6');
  }

  return (
    <>
      <HeaderUser></HeaderUser>
      <div className="wrapper-quiz_page">
        <div className="wrapper-ProgressBar">
          <Progress per="75"></Progress>
        </div>
        <div className="wrapper-title-quiz">
          <p>Hãy chọn loại thức ăn bạn muốn</p>
        </div>
        <div className="wrapper-table-option">
          <Row gutter={[16, 16]}>
            {
              categories ?
                (
                  categories.map((category) =>
                    <Col span={8}>
                      <div className="cover-btn-quiz-icon-text">
                        <div className="button-opinion-quiz-icon"></div>
                        <div className="button-opinion-quiz-text">{category.categoryName}</div>
                      </div>
                    </Col>
                  )
                )
                :
                (
                  <h2>Please add new food category</h2>
                )
            }
            {/* <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="cover-btn-quiz-icon-text">
                <div className="button-opinion-quiz-icon"></div>
                <div className="button-opinion-quiz-text">Thịt Bò</div>
              </div>
            </Col> */}
          </Row>
          <Button variant="success" className="button_Link" onClick={submit}>
            Tiếp tục
          </Button>
        </div>
      </div>
      <Footers></Footers>
    </>
  );
};

export default Quiz5;
