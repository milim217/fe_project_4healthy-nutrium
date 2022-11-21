import React, { useState } from "react";
import { Select } from "antd";

function SelectionFoods() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <div className="title_filter">Foods Types:</div>
      <Select
        defaultValue="All food types"
        style={{ width: 120 }}
        dropdownMatchSelectWidth={false}
        placement={placement}
        options={[
          { value: "food 1" },
          { value: "food 2" },
          { value: "food 3" },
        ]}
      />
    </>
  );
}

export default SelectionFoods;
