import React from "react";
import HeaderLayout from "../../components/header/HeaderAdmin";
import SlidebarNutrionExp from "./SlidebarNutrionExp";
import NutriongExpertInformation from "./NutrionExpertInformation";
import NutrionExpertIngredients from "./NutrionExpertIngredients";
import NutrionExpertFood from "./NutrionExpertFood";

function NutrionExpertPage({ changePage }) {
  let body = (
    <>
      {changePage === "information" && <NutriongExpertInformation />}
      {changePage === "food" && <NutrionExpertFood />}
      {changePage === "ingredients" && <NutrionExpertIngredients />}
    </>
  );
  return (
    <div>
      <HeaderLayout title={"Thông tin tài khoản"}></HeaderLayout>
      <SlidebarNutrionExp>{body}</SlidebarNutrionExp>
    </div>
  );
}

export default NutrionExpertPage;
