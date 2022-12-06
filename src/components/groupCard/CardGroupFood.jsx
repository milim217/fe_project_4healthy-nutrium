import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ModalDetailFood from "../modal/ModalDetailFood";
import Button from "react-bootstrap/Button";
import { Col, Row, Pagination } from "antd";
import FoodAPI from "../../service/Actions/FoodAPI";
import React, { useEffect, useState } from "react";
function CardGroupFood() {
  const pageSize = 6;

  const [food, setFood] = useState([]);
  useEffect(() => {
    FoodAPI.getAll()
      .then((res) => {
        console.log("data = " + JSON.stringify(res.data));
        setFood(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <Row gutter={[24, 24]}>
        {food ? (
          food.map((foodValue) => (
            <Col span={6}>
              <Card className="group-card-libaryPage">
                <Card.Img
                  variant="top"
                  width={50}
                  height={250}
                  src={`http://localhost:8080/food/${foodValue.id}/image`}
                />
                <Card.Body>
                  <Card.Title className="title-food_libary">
                    {foodValue.foodName}
                  </Card.Title>
                </Card.Body>
                <Button variant="warning" href="/detailfood">
                  Thông tin thêm
                </Button>
                {/* <ModalDetailFood></ModalDetailFood> */}
              </Card>
            </Col>
          ))
        ) : (
          <div></div>
        )}
      </Row>
      <div className="Pageination_libaryPage">
        <Pagination defaultCurrent={1} total={50} />;
      </div>
    </>
  );
}

export default CardGroupFood;
