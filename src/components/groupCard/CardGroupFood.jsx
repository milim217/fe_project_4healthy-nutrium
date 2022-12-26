import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ModalDetailFood from "../modal/ModalDetailFood";
import Button from "react-bootstrap/Button";
import { Col, Row, Input, Select } from "antd";
import Pagination from "react-bootstrap/Pagination";
import FoodAPI from "../../service/Actions/FoodAPI";
import React, { useEffect, useState } from "react";

const { Search } = Input;

function CardGroupFood() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentFood = food.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(food.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const loadFoodList = () => {
    FoodAPI.getAll()
      .then((res) => {
        console.log("data = " + JSON.stringify(res.data));
        setFood(res.data);
        setLoading(false);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    loadFoodList();
  }, []);

  //Lấy giá trị search
  const onSearch = async (key) => {
    if (key) {
      await FoodAPI.search(key).then((res) => {
        setFood(res.data);
      });
    } else {
      loadFoodList();
    }
  };

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
                value: "Trứng",
                label: "Trứng",
              },
              {
                value: "Rau",
                label: "Rau",
              },
              {
                value: "Canh",
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
                label: "Mùa Xuân",
              },
              {
                value: "lucy",
                label: "Mùa Hạ",
              },
              {
                value: "Yiminghe",
                label: "Mùa Thu",
              },
              {
                value: "Yiminghe",
                label: "Mùa Đông",
              },
            ]}
          />
        </div>
      </div>
      <div className="wrapper-libary-card">
        {/* Hiển thị danh sách theo món ăn / thành phần khi nhấn vào tab */}
        <Row gutter={[24, 24]}>
          {currentFood ? (
            currentFood.map((f) => (
              <Col span={6}>
                <Card className="group-card-libaryPage">
                  <Card.Img
                    variant="top"
                    width={50}
                    height={250}
                    src={`http://localhost:8080/food/${f.id}/image`}
                  />
                  <Card.Body>
                    <Card.Title className="title-food_libary">
                      {f.foodName}
                    </Card.Title>
                  </Card.Body>
                  <Button className="btn_libaryFood" href={`food/${f.id}`}>
                    Chi tiết
                  </Button>
                  {/* <ModalDetailFood></ModalDetailFood> */}
                </Card>
              </Col>
            ))
          ) : (
            <div></div>
          )}
        </Row>
      </div>
      <Pagination className="libary_pagidivide">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </Pagination>
    </>
  );
}

export default CardGroupFood;
