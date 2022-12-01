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
        defaultValue="Xuân"
        style={{
          width: 300,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Xuân",
            label: "Xuân",
          },
          {
            value: "Hạ",
            label: "Lucy",
          },
          {
            value: "Thu",
            label: "Thu",
          },
          {
            value: "Đông",
            label: "Đông",
          },
        ]}
      />
    </>
  );
}

export default SelectionCategories;
