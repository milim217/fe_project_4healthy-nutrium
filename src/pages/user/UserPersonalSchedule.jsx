import React, { useEffect, useState } from "react";
import { Layout, Card, Col, Row, Image } from "antd";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/UserPersonalSchedule.css";
import HeaderHasLog from "../../components/header/HeaderHasLog";
import ModalDetailFood from "../../components/modal/ModalDetailFood";
import DietAPI from "../../service/Actions/DietAPI";
import { useHistory } from "react-router-dom";
import AuthUtil from "../../service/utils/AuthUtil";

const { Header, Footer, Content } = Layout;
const UserPersonalSchedule = () => {

  const history = useHistory();
  const [diet, setDiet] = useState([]);
  const [dateStr, setDateStr] = useState('');


  useEffect(() => {
    // check user
    let user = AuthUtil.getUserFromToken();
    if (user) {
      user.then(res => {
        getDiet(res.data);
      });
    }
    else {
      history.push('/login');
    }
  }, []);

  function getDiet(user) {
    DietAPI.getByUserID(user.id)
      .then(res => {
        let d = res.data;
        let dietDate = new Date(d.date);
        console.log(dietDate);
        let str = 'Ngày ' + dietDate.getDate() + ', tháng ' + dietDate.getMonth() + ', năm ' + dietDate.getFullYear();
        setDateStr(str);
        setDiet(d);
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <div>
      <HeaderHasLog></HeaderHasLog>
      <div className="wrapper-schedule_page">
        <div className="site-card-wrapper">
          <div className="title-card-wrapper">
            <div className="title-card-time-schedule">
              {dateStr}
            </div>
            {
              diet?
              <div className="title-card-amount-calo">{diet?.breakfastCalo + diet?.lunchCalo + diet?.dinnerCalo} calo</div>
              :
              <></>
            }
          </div>

          <Row gutter={16}>
            <Col span={8}>
              <Card
                title="Sáng"
                bordered={false}
                extra={<ModalDetailFood foods={diet.breakfast}></ModalDetailFood>}
              >
                {
                  diet ? (
                    diet.breakfast?.map((foodMass) => (
                      <Row className="padding_20">
                        <Col span={18} push={6}>
                          <div className="wrapper-about">
                            <h5 className="about-title">{foodMass.mass.toFixed(1)} suất {foodMass.food.foodName}</h5>
                          </div>
                        </Col>
                        <Col span={6} pull={18}>
                          <Image
                            width={100}
                            src={`http://localhost:8080/food/${foodMass.food.id}/image`}
                          />
                        </Col>
                      </Row>
                    ))
                  )
                    :
                    (<></>)
                }
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Trưa"
                bordered={false}
                extra={<ModalDetailFood foods={diet.lunch}></ModalDetailFood>}
              >
                {
                  diet ?
                    (
                      diet.lunch?.map((foodMass) => (
                        <Row className="padding_20">
                          <Col span={18} push={6}>
                            <div className="wrapper-about">
                              <h5 className="about-title">{foodMass.mass.toFixed(1)} suất {foodMass.food.foodName}</h5>
                            </div>
                          </Col>
                          <Col span={6} pull={18}>
                            <Image
                              width={100}
                              src={`http://localhost:8080/food/${foodMass.food.id}/image`}
                            />
                          </Col>
                        </Row>
                      ))
                    )
                    :
                    (<></>)
                }
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Tối  "
                bordered={false}
                extra={<ModalDetailFood foods={diet.dinner}></ModalDetailFood>}
              >
                {
                diet ?
                    (
                      diet.dinner?.map((foodMass) => (
                        <Row className="padding_20">
                          <Col span={18} push={6}>
                            <div className="wrapper-about">
                              <h5 className="about-title">{foodMass.mass.toFixed(1)} suất {foodMass.food.foodName}</h5>
                            </div>
                          </Col>
                          <Col span={6} pull={18}>
                            <Image
                              width={100}
                              src={`http://localhost:8080/food/${foodMass.food.id}/image`}
                            />
                          </Col>
                        </Row>
                      ))
                    )
                    :
                    (<></>)
                }
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default UserPersonalSchedule;
