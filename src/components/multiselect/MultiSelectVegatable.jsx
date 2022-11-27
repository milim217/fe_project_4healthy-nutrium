import React, { useState } from "react";
import { Row, Col } from "antd";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Thịt Heo", value: "Thịt Heo" },
  { label: "Thịt Bò", value: "Thịt Bò" },
  { label: "Thịt Gà", value: "Thịt Gà" },
];

const MultiSelectVegatable = () => {
  const [selected, setSelected] = useState([]);
  console.log(JSON.stringify(selected));
  let selectOptionFood = [];
  for (var i = 0; i < selected.length; i++) {
    console.log(selected[i]["value"]);
    selectOptionFood.push(selected[i].value);
  }
  let arr = [selectOptionFood];
  console.log(selectOptionFood);
  let showChoose;
  showChoose = <div>Bạn đã chọn: {" " + arr + " "} </div>;
  return (
    <div>
      <h1>Select Fruits</h1>
      {showChoose}
      <Row gutter={[16, 16]}>
        <Col span={8}>
          {/* <div className="cover-btn-quiz-icon-text"> */}
          {/* <div className="button-opinion-quiz-icon-foodGreen"></div> */}
          <div className="dropdown-multiSelectionChoose">
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Chọn những loại rau bạn thích"
              className="button-opinion-quiz-text"
              shouldToggleOnHover="true"
            />
          </div>
          {/* </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default MultiSelectVegatable;
