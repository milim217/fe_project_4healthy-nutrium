import React, { useState } from "react";
import { Select } from "antd";

function SelectionSeasonFood() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <div className="title_filter">Sort by:</div>
      <Select
        defaultValue="Fillter by seasson"
        style={{ width: 120 }}
        dropdownMatchSelectWidth={false}
        placement={placement}
        options={[
          { value: "seasson 1" },
          { value: "seasson 2" },
          { value: "seasson 3" },
        ]}
      />
    </>
  );
}

export default SelectionSeasonFood;
