import React, { useState } from "react";
import { Select } from "antd";

function SelectionCategories({categories, searchData, setSearchData}) {
  const [placement, SetPlacement] = useState("bottomLeft");
  const handleChange = (value) => {
    setSearchData({...searchData, categoryId : value});
  };
  return (
    <>
      <div>Lọc theo loại món ăn</div>
      <Select
        defaultValue={null}
        style={{
          width: 300,
        }}
        onChange={handleChange}
        options={categories}
      />
    </>
  );
}

export default SelectionCategories;
