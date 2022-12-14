import React, { useState } from "react";
import { Select } from "antd";

function SelectionCategories() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div>Lọc theo loại món ăn</div>
      <Select
        defaultValue="Trứng"
        style={{
          width: 300,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Trứng",
            label: "Trứng",
          },
          {
            value: "Bánh",
            label: "Bánh",
          },
          {
            value: "Phở",
            label: "Phở",
          },
          {
            value: "Rau",
            label: "Rau",
          },
          {
            value: "Hoa Quả",
            label: "Hoa Quả",
          },
        ]}
      />
    </>
  );
}

export default SelectionCategories;
