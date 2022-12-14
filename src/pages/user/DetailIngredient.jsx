import React from "react";
import HeaderUser from "../../components/header/HeaderUser";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/detailPage.css";
import { Col, Row, Image, Card, Divider } from "antd";
import Table from "react-bootstrap/Table";
const gridStyle = {
  width: "25%",
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
              <Card title="Tóm tắt các chất dinh dưỡng chính">
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Calo</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Chất béo</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Chất bột đường</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition"> Chất đạm</div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid>
                {/* <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition">
                    Hàm lượng nước trong nguyên liệu
                  </div>
                  <div className="data_SmaryNutrition"> 120</div>
                </Card.Grid> */}
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
                      <td>Fiber</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>Ash</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>Canxi</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>Water</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>Iron</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>Zinc</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>Vitamin C</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>Vitamin B1</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>vitamin B2</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>vitamin B3</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>vitamin B6A</td>
                      <td>375</td>
                    </tr>
                    <tr>
                      <td>vitamin D</td> <td>375</td>
                    </tr>
                    <tr>
                      <td>vitamin B12</td> <td>375</td>
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
