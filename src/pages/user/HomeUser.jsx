import React, { useEffect } from "react";
import { Layout, Card, Col, Row, Carousel } from "antd";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/homepage.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import HeaderHasLog from "../../components/header/HeaderHasLog";
import { useState } from "react";
import DietAPI from "../../../src/service/Actions/DietAPI";

const { Header, Footer, Content } = Layout;
const gridStyle = {
  width: "20%",
  textAlign: "center",
};
const HomeUser = ({ checkValidRole, user }) => {
  checkValidRole();

  const [diet, setDiet] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(async () => {
    await user.then((userRes) => {
      const u = userRes.data;
      DietAPI.getByUserID(u.id).then((dietRes) => {
        console.log(dietRes.data);
        setDiet(dietRes.data);
      });
    });
  }, []);

  return (
    <>
      <HeaderHasLog></HeaderHasLog>
      <Layout>
        <Content className="wrapper-cover">
          <div className="wrapper-homeuser">
            <Card
              type="inner"
              title="Tóm tắt hàng ngày của bạn"
              // extra={
              //   // <ButtonGroup aria-label="Basic example">
              //   //   <Button variant="primary">Thay đổi thông tin</Button>
              //   <Link to={"/onboarding/summaryInfo"}>
              //     <Button variant="secondary"> Nhận chế độ ăn của bạn </Button>
              //   </Link>
              //   // </ButtonGroup>
              // }
            >
              <Card>
                <Card.Grid style={gridStyle}>
                Tuổi của bạn
                <p>
                  <b style={{ color: "#ff8000", fontSize: "30px" }}>{diet?.age}</b> tuổi
                </p>
              </Card.Grid>
                <Card.Grid style={gridStyle}>
                  Cân nặng của bạn
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "30px" }}>
                      {diet?.weight}
                    </b>
                    (kg)
                  </p>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  Chiều cao của bạn
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "30px" }}>
                      {diet?.height}
                    </b>{" "}
                    (cm)
                  </p>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  BMI của bạn
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "25px" }}>
                      {diet?.bmi.toFixed(3)}
                    </b>
                  </p>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  Công việc của bạn là
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "30px" }}>
                      {diet?.job.jobName}
                    </b>{" "}
                  </p>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  Lượng calo cần tiêu thụ trên ngày
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "30px" }}>
                      {diet
                        ? diet.breakfastCalo +
                          diet.lunchCalo +
                          diet.dinnerCalo +
                          " calo"
                        : ""}
                    </b>
                  </p>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  Lượng chất bột đường hàng ngày
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "30px" }}>
                      {diet
                        ? diet.breakfastCarb +
                          diet.lunchCarb +
                          diet.dinnerCarb +
                          " g"
                        : ""}
                    </b>
                  </p>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  Lượng đạm hàng ngày
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "30px" }}>
                      {diet
                        ? diet.breakfastProtein +
                          diet.lunchProtein +
                          diet.dinnerProtein +
                          " g"
                        : ""}
                    </b>
                  </p>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  Lượng chất béo hàng ngày
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "30px" }}>
                      {diet
                        ? diet.breakfastFat +
                          diet.lunchFat +
                          diet.dinnerFat +
                          " g"
                        : ""}
                    </b>
                  </p>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  Lượng nước nên uống hàng ngày
                  <p>
                    <b style={{ color: "#ff8000", fontSize: "30px" }}>2</b> lít
                    Nước
                  </p>
                </Card.Grid>
              </Card>
            </Card>
            {diet?.recommendation?
             <Card
             style={{ marginTop: 16 }}
             type="inner"
             title="Khuyến cáo về lượng vitamin và khoáng chất mỗi ngày"
           >
             <Table
               striped
               bordered
               hover
               className="table_recomendation_wrapper"
             >
               <tbody>
                 <tr>
                   <th>Tuổi</th>
                   <th>Giới tính</th>
                   <th>Vitamin A(mvg)</th>
                   <th>Vitamin D(mcg)</th>
                   <th>Vitamin E(mg)</th>
                   <th>Vitamin K(mcg)</th>
                   <th>Vitamin C(mg)</th>
                   <th>Vitamin B1(mg)</th>
                   <th>Vitamin B2(mg)</th>
                   <th>Vitamin B3(mg NE)</th>
                   <th>Vitamin B6(mg)</th>
                   <th>Vitamin B9(mcg)</th>
                   <th>Vitamin B12(mcg)</th>
                   <th>Kẽm(mg)</th>
                   <th>Magie(mg)</th>
                   <th>Photpho(mg)</th>
                   <th>Sắt(mg)</th>
                   <th>Canxi(mg)</th>
                   <th>Iot(mcg)</th>
                 </tr>
                 <tr>
                   <td>{diet.age}</td>
                   <td>{diet.user.gender === true ? 'Nam' : 'Nữ'}</td>
                   <td>{diet.recommendation.vitaminA}</td>
                   <td>{diet.recommendation.vitaminD}</td>
                   <td>{diet.recommendation.vitaminE}</td>
                   <td>{diet.recommendation.vitaminK}</td>
                   <td>{diet.recommendation.vitaminC}</td>
                   <td>{diet.recommendation.vitaminB1}</td>
                   <td>{diet.recommendation.vitaminB2}</td>
                   <td>{diet.recommendation.vitaminB3}</td>
                   <td>{diet.recommendation.vitaminB6}</td>
                   <td>{diet.recommendation.vitaminB9}</td>
                   <td>{diet.recommendation.vitaminB12}</td>
                   <td>{diet.recommendation.zinc}</td>
                   <td>{diet.recommendation.magie}</td>
                   <td>{diet.recommendation.photpho}</td>
                   <td>{diet.recommendation.iron}</td>
                   <td>{diet.recommendation.canxi}</td>
                   <td>{diet.recommendation.iot}</td>
                 </tr>
               </tbody>
             </Table>
           </Card>
            :
            <></>
            }
          
          </div>
        </Content>
        <Footers></Footers>
      </Layout>
    </>
  );
};
export default HomeUser;
