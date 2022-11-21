import React, { useState } from "react";
import { Select } from "antd";

function SelectionDisplayPer() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <div className="title_filter">Display per:</div>
      <Select
        defaultValue="Serving"
        style={{ width: 120 }}
        dropdownMatchSelectWidth={false}
        placement={placement}
        options={[
          { value: "Serving 1" },
          { value: "Serving 2" },
          { value: "Serving 3" },
        ]}
      />
    </>
  );
}

export default SelectionDisplayPer;
