import React from "react";
import { PageHeader } from "antd";
const HeaderLayout = (props) => {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title={props.title}
      style={{ backgroundColor: "white" }}
    />
  );
};

export default HeaderLayout;
