import React, { useState } from "react";
import { Select } from "antd";

function SelectionCategories() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <div className="title_filter">Categories:</div>
      <Select
        defaultValue="Fillter by category"
        style={{ width: 120 }}
        dropdownMatchSelectWidth={false}
        placement={placement}
        options={[
          { value: "catgory 1" },
          { value: "catgory 2" },
          { value: "catgory 3" },
        ]}
      />
    </>
  );
}

export default SelectionCategories;
