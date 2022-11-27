import React from "react";
import HeaderUser from "../../components/header/HeaderUser";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/libary.css";
import CardGroupFood from "../../components/groupCard/CardGroupFood";
const LibaryPage = () => {
  return (
    <div>
      <HeaderUser></HeaderUser>
      <div className="wrapper-libary">
        <CardGroupFood></CardGroupFood>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default LibaryPage;
