import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ModalDetailFood from "../modal/ModalDetailFood";
import Button from "react-bootstrap/Button";
import { Col, Row, Pagination } from "antd";
import IngredientAPI from "../../service/Actions/IngredientAPI";
import React, { useEffect, useState } from "react";
function CardGroupIngredient() {
  const pageSize = 6;
  const [Ingredient, setIngredient] = useState([]);
  useEffect(() => {
    IngredientAPI.getAll()
      .then((res) => {
        console.log("data = " + JSON.stringify(res.data));
        setIngredient(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <Row gutter={[24, 24]}>
        {Ingredient ? (
          Ingredient.map((ingredientValue) => (
            <Col span={6}>
              <Card className="group-card-libaryPage">
                <Card.Img
                  variant="top"
                  width={50}
                  height={250}
                  src={`http://localhost:8080/ingredient/${ingredientValue.id}/image`}
                />
                <Card.Body>
                  <Card.Title className="title-food_libary">
                    {ingredientValue.ingredientName}
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

export default CardGroupIngredient;
