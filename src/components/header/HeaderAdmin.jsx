import React from "react";
import { PageHeader } from "antd";
const HeaderLayout = (props) => {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title={props.title}
    />
  );
};

export default HeaderLayout;
