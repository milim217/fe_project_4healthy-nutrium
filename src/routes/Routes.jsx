import React from "react";
import HomePage from "../pages/user/HomePage";
import HomeUser from "../pages/user/HomeUser";
import UserPersonalSchedule from "../pages/user/UserPersonalSchedule";
import ListUser from "../pages/admin/ListUser";
import NutrionExpertPage from "../pages/nutrion/NutrionExpertPage";
import UserProfile from "../pages/user/UserProfile";
import Landing from "../Landing";
import { Route } from "react-router-dom";
import ProtectedRoute from "../Middleware/ProtectedRoute";
import Quiz1 from "../components/onboarding/Quiz1";
import Quiz2 from "../components/onboarding/Quiz2";
import Quiz3 from "../components/onboarding/Quiz3";
import Quiz4 from "../components/onboarding/Quiz4";
import Quiz5 from "../components/onboarding/Quiz5";
import Quiz6 from "../components/onboarding/Quiz6";
import AddNewUser from "../components/drawn/AddNewUser";
import summaryInfo from "../components/onboarding/summaryInfo";
import pageLoadingQuiz from "../components/onboarding/pageLoadingQuiz";
import GetUserDiet from "../components/onboarding/GetUserDiet";
import LibaryPage from "../pages/user/libaryPage";
import DetailFood from "../pages/user/DetailFood";
import DetailIngredient from "../pages/user/DetailIngredient";
import LoginForm from "../components/form/LoginForm";
import ResetPasswordForm from "../components/form/ResetPasswordForm";
import RegisterForm from "../components/form/RegisterForm";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/resetpassword" component={ResetPasswordForm} />
      <Route path="/admin/listuser" component={ListUser} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/homeuser/profile" component={UserProfile} />
      <Route exact path="/nutrionexpert" component={NutrionExpertPage} />
      <Route
        exact
        path="/nutrionexpert/food"
        render={(props) => <NutrionExpertPage {...props} changePage="food" />}
      />
      <Route
        exact
        path="/nutrionexpert/ingredients"
        render={(props) => (
          <NutrionExpertPage {...props} changePage="ingredients" />
        )}
      />
      <Route exact path="/onboarding/quiz1" component={Quiz1}></Route>
      <Route exact path="/onboarding/quiz2" component={Quiz2}></Route>
      <Route exact path="/onboarding/quiz3" component={Quiz3}></Route>
      <Route exact path="/onboarding/quiz4" component={Quiz4}></Route>
      <Route exact path="/onboarding/quiz5" component={Quiz5}></Route>
      <Route exact path="/onboarding/quiz6" component={Quiz6}></Route>
      <Route
        exact
        path="/onboarding/summaryInfo"
        component={summaryInfo}
      ></Route>
      <Route
        exact
        path="/onboarding/pageLoadingQuiz"
        component={pageLoadingQuiz}
      ></Route>
      <Route
        exact
        path="/onboarding/GetUserDiet"
        component={GetUserDiet}
      ></Route>
      <Route exact path="/schedule" component={UserPersonalSchedule}></Route>
      <Route exact path="/homeuser" component={HomeUser}></Route>
      <Route exact path="/libary" component={LibaryPage}></Route>
      <Route exact path="/detailfood" component={DetailFood}></Route>
      <Route
        exact
        path="/detailingredient"
        component={DetailIngredient}
      ></Route>
      <Route exact path="/admin/add-nutrient" component={AddNewUser}></Route>
    </div>
  );
};

export default Routes;
