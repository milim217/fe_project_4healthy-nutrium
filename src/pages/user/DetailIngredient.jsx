import React from "react";
import HeaderUser from "../../components/header/HeaderUser";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/detailPage.css";
import { Col, Row, Image, Card, Divider } from "antd";
import Table from "react-bootstrap/Table";
const gridStyle = {
  width: "20%",
  height: "235px",
  textAlign: "center",
};
const DetailIngredient = () => {
  return (
    <div>
      <HeaderUser></HeaderUser>
      <div className="wrapper-DetailPage">
        <div className="wrapper-Img_sumary">
          <Row>
            <Col span={18} push={6}>
              <Card title="Tóm tắt dinh dưỡng">
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Calories</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Fat</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Carbs</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Protein</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Fiber</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
              </Card>
            </Col>
            <Col span={6} pull={18}>
              <Image
                width={300}
                height={295}
                src="https://images5.alphacoders.com/826/826208.jpg"
              />
            </Col>
          </Row>
        </div>
        <div className="wrapper-nutrionFacts_RelateFood">
          <Row>
            <Col span={12}>
              <div className="wrapper-nutrionFacts">
                {/* Bảng chưa giá trị dinh dưỡng */}
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Chất Dinh Dưỡng</th>
                      <th>Giá trị dinh dưỡng mỗi 100 g</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A(mvg)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>D(mcg)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>E(mg)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>K(mcg)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>C(mg)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>B1(mg)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>B2(mg)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>B3(mg NE)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>B6(mg)</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>B9(mcg)</td> <td>375</td>
                    </tr>
                    <tr>
                      <td>B12(mcg)</td> <td>375</td>
                    </tr>
                    <tr>
                      <td>Canxi(mg)</td> <td>375</td>
                    </tr>
                    <tr>
                      <td>Iot(mcg)</td> <td>375</td>
                    </tr>
                    <tr>
                      <td>Sắt(mg)</td> <td>375</td>
                    </tr>
                    <tr>
                      <td>Kẽm(mg)</td> <td>375</td>
                    </tr>
                    <tr>
                      <td>Magie(mg)</td> <td>375</td>
                    </tr>
                    <tr>
                      <td>Photpho(mg)</td> <td>375</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col span={12}>
              <div className="wrapper_RelateFood">
                <div className="name_RelateFood">
                  Những món ăn cùng chứa thành phần này
                </div>
                <div className="box_RelateFood">
                  <Image
                    width={150}
                    height={100}
                    src="https://images5.alphacoders.com/826/826208.jpg"
                  />
                  <div className="nameFood_box_RelateFood">Tên món ăn</div>
                </div>
                <div className="box_RelateFood">
                  <Image
                    width={150}
                    height={100}
                    src="https://images5.alphacoders.com/826/826208.jpg"
                  />
                  <div className="nameFood_box_RelateFood">Tên món ăn</div>
                </div>
                <div className="box_RelateFood">
                  <Image
                    width={150}
                    height={100}
                    src="https://images5.alphacoders.com/826/826208.jpg"
                  />
                  <div className="nameFood_box_RelateFood">Tên món ăn</div>
                </div>
                <div className="box_RelateFood">
                  <Image
                    width={150}
                    height={100}
                    src="https://images5.alphacoders.com/826/826208.jpg"
                  />
                  <div className="nameFood_box_RelateFood">Tên món ăn</div>
                </div>
                <div className="box_RelateFood">
                  <Image
                    width={150}
                    height={100}
                    src="https://images5.alphacoders.com/826/826208.jpg"
                  />
                  <div className="nameFood_box_RelateFood">Tên món ăn</div>
                </div>
                <div className="box_RelateFood">
                  <Image
                    width={150}
                    height={100}
                    src="https://images5.alphacoders.com/826/826208.jpg"
                  />
                  <div className="nameFood_box_RelateFood">Tên món ăn</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default DetailIngredient;
