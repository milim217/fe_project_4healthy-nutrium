import React, { useState } from "react";
import { Select } from "antd";

function SelectionSeasonIngredient() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Select
        defaultValue="Mùa Xuân"
        style={{
          width: 300,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Mùa Xuân",
            label: "Mùa Xuân",
          },
          {
            value: "Mùa Hạ",
            label: "Mùa Hạ",
          },
          {
            value: "Mùa Thu",
            label: "Mùa Thu",
          },
          {
            value: "Mùa Đông",
            label: "Mùa Đông",
          },
        ]}
      />
    </>
  );
}

export default SelectionSeasonIngredient;
