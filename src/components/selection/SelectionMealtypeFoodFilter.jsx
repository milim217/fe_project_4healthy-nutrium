import React, { useState } from "react";
import { Select } from "antd";

function SelectionMealtypeFoodFilter() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div> Lọc theo bữa ăn</div>
      <Select
        defaultValue="Bữa Sáng"
        style={{
          width: 300,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Bữa Sáng",
            label: "Bữa Sáng",
          },
          {
            value: "Bữa Trưa",
            label: "Bữa Trưa",
          },
          {
            value: "Bữa Tối",
            label: "Bữa Tối",
          },
        ]}
      />
    </>
  );
}

export default SelectionMealtypeFoodFilter;
