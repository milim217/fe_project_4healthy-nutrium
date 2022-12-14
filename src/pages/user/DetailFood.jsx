import React from "react";
import HeaderUser from "../../components/header/HeaderUser";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/detailPage.css";
import { Col, Row, Image, Card, Divider } from "antd";

const gridStyle = {
  width: "33.33333%",
  height: "auto",
  textAlign: "center",
};
const DetailFood = () => {
  return (
    <div>
      <HeaderUser></HeaderUser>
      <div className="wrapper-DetailPage">
        <div className="wrapper-Img_sumary">
          <Row>
            <Col span={18} push={6}>
              <div className="name_food_DetailPage">Tên món ăn</div>
              <Card title="Thông tin dinh dưỡng">
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition_Food"> Calo </div>
                  <div className="data_SmaryNutrition_Food"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition_Food"> Chất béo </div>
                  <div className="data_SmaryNutrition_Food"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition_Food">
                    Chất bột đường
                  </div>
                  <div className="data_SmaryNutrition_Food"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition_Food"> Chất đạm</div>
                  <div className="data_SmaryNutrition_Food"> 120</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition_Food"> Mùa</div>
                  <div className="data_SmaryNutrition_Food"> Xuân</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="name_SumaryNutrition_Food">Dành cho bữa</div>
                  <div className="data_SmaryNutrition_Food"> Trưa</div>
                </Card.Grid>
              </Card>
            </Col>
            <Col span={6} pull={18}>
              <Image
                width={350}
                height={345}
                src="https://images5.alphacoders.com/826/826208.jpg"
              />
            </Col>
          </Row>
        </div>
        <div className="wrapper_RelateFood">
          <div className="name_RelateFood">Thành phần trong món ăn</div>
          <div className="box_RelateFood">
            <Image
              width={150}
              height={100}
              src="https://images5.alphacoders.com/826/826208.jpg"
            />
            <div className="main-box_RelateFood">
              <div className="nameIngredient_boxDetailFood">Tên thành phần</div>
              <div className="contentIngredient_boxDetailFood">
                Nội dung thành phần
              </div>
              <div className="contentIngredient_boxDetailFood">100 gram</div>
            </div>
          </div>
          <div className="box_RelateFood">
            <Image
              width={150}
              height={100}
              src="https://images5.alphacoders.com/826/826208.jpg"
            />
            <div className="main-box_RelateFood">
              <div className="nameIngredient_boxDetailFood">Tên thành phần</div>
              <div className="contentIngredient_boxDetailFood">
                Nội dung thành phần
              </div>
              <div className="contentIngredient_boxDetailFood">100 gram</div>
            </div>
          </div>
          <div className="box_RelateFood">
            <Image
              width={150}
              height={100}
              src="https://images5.alphacoders.com/826/826208.jpg"
            />
            <div className="main-box_RelateFood">
              <div className="nameIngredient_boxDetailFood">Tên thành phần</div>
              <div className="contentIngredient_boxDetailFood">
                Nội dung thành phần
              </div>
              <div className="contentIngredient_boxDetailFood">100 gram</div>
            </div>
          </div>
        </div>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default DetailFood;
