import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ModalDetailFood from "../modal/ModalDetailFood";
import Button from "react-bootstrap/Button";
import { Col, Row, Pagination, Select, Input } from "antd";
import IngredientAPI from "../../service/Actions/IngredientAPI";
import React, { useEffect, useState } from "react";
const { Search } = Input;
function CardGroupIngredient() {
  const onSearch = (value) => console.log(value);
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
      <div className="wrapper-search_select">
        <div className="search-input-text_libaryPage">
          Tìm Kiếm Món Ăn
          <Search
            placeholder="Nhập tên món ăn mà bạn cần tìm ở đây"
            allowClear
            enterButton="Tìm Kiếm"
            size="large"
            className="search-input-inside_libaryPage"
            onSearch={onSearch}
          />
        </div>
        {/* Lọc theo mùa*/}

        <div className="wrapper_select-libary">
          <div className="name-select_libary">Lọc theo mùa</div>
          <Select
            defaultValue="Xuân"
            className="select-list_Libary"
            bordered={false}
            options={[
              {
                value: "jack",
                label: "Xuân",
              },
              {
                value: "lucy",
                label: "Hạ",
              },
              {
                value: "Yiminghe",
                label: "Thu",
              },
              {
                value: "Yiminghe",
                label: "Đông",
              },
            ]}
          />
        </div>
      </div>
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
                <Button className="btn_libaryFood" href="/detailfood">
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
