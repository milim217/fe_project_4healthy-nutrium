import React from "react";
import HeaderUser from "../../components/header/HeaderUser";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/libary.css";
import CardGroupFood from "../../components/groupCard/CardGroupFood";
import CardGroupIngredient from "../../components/groupCard/CardGroupIngredient";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { Input, Select } from "antd";
//Lấy giá trị search
const { Search } = Input;
const onSearch = (value) => console.log(value);
//Phân trang
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
const LibaryPage = () => {
  return (
    <div>
      <HeaderUser></HeaderUser>
      <div className="wrapper-libary">
        <div className="wrapper-search_select">
          <div className="search-input-text_libaryPage">
            Tìm Kiếm Món Ăn
            <Search
              placeholder="Nhập tên món ăn hoặc thành phần mà bạn cần tìm ở đây"
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
              defaultValue="lucy"
              className="select-list_Libary"
              bordered={false}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>

          {/* Kiểu món Ăn */}

          <div className="wrapper_select-libary">
            <div className="name-select_libary">Kiểu món ăn</div>
            <Select
              defaultValue="lucy"
              className="select-list_Libary"
              bordered={false}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>
          {/* Sắp xếp */}
          <div className="wrapper_select-libary">
            <div className="name-select_libary">Sắp xếp theo</div>
            <Select
              defaultValue="lucy"
              className="select-list_Libary"
              bordered={false}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>

          {/* Hiển thị theo */}

          <div className="wrapper_select-libary">
            <div className="name-select_libary">Hiển thị theo</div>
            <Select
              defaultValue="lucy"
              className="select-list_Libary"
              bordered={false}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </div>
        </div>
        {/* Hiển thị danh sách theo món ăn / thành phần khi nhấn vào tab */}
        <Tabs
          defaultActiveKey="Food"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          {/* Danh sách thức ăn hiển thị */}
          <Tab eventKey="Food" title="Món Ăn" activeKey>
            <CardGroupFood></CardGroupFood>
          </Tab>
          {/* Danh sách thành phần hiển thị */}
          <Tab eventKey="Ingredient" title="Thành Phần Món Ăn">
            <CardGroupIngredient></CardGroupIngredient>
          </Tab>
        </Tabs>
      </div>
      <div className="Pageination_libaryPage">
        <Pagination>{items}</Pagination>
      </div>

      <Footers></Footers>
    </div>
  );
};

export default LibaryPage;
