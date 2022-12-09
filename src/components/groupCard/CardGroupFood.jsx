import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ModalDetailFood from "../modal/ModalDetailFood";
import Button from "react-bootstrap/Button";
import { Col, Row, Pagination, Input, Select } from "antd";
import FoodAPI from "../../service/Actions/FoodAPI";
import React, { useEffect, useState } from "react";
const { Search } = Input;

function CardGroupFood() {
  //Lấy giá trị search
  const onSearch = (value) => console.log(value);
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
        <div className="wrapper_select-libary">
          <div className="name-select_libary">Loại món ăn</div>
          <Select
            defaultValue="Trứng"
            className="select-list_Libary"
            bordered={false}
            options={[
              {
                value: "jack",
                label: "Trứng",
              },
              {
                value: "lucy",
                label: "Rau",
              },
              {
                value: "Yiminghe",
                label: "Canh",
              },
            ]}
          />
        </div>

        {/* Kiểu món Ăn */}

        <div className="wrapper_select-libary">
          <div className="name-select_libary">Lọc theo bữa ăn</div>
          <Select
            defaultValue="lucy"
            className="select-list_Libary"
            bordered={false}
            options={[
              {
                value: "jack",
                label: "Bữa Sáng",
              },
              {
                value: "lucy",
                label: "Bữa Trưa",
              },
              {
                value: "Yiminghe",
                label: "Bữa Tối",
              },
            ]}
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
      {/* Hiển thị danh sách theo món ăn / thành phần khi nhấn vào tab */}
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

export default CardGroupFood;
