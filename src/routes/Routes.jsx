import React from "react";
import HomePage from "../pages/user/HomePage";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import ListUser from "../pages/admin/ListUser";
import NutrionExpertPage from "../pages/nutrion/NutrionExpertPage";
import userProfile from "../pages/user/userProfile";
import Landing from "../Landing";
import { Route } from "react-router-dom";
// Kiểm tra trước khi Router
import ProtectedRoute from "../Middleware/ProtectedRoute";
import Auth from "../Middleware/AuthScreen";
import Quiz1 from "../components/onboarding/Quiz1";
import Quiz2 from "../components/onboarding/Quiz2";
import Quiz3 from "../components/onboarding/Quiz3";
import Quiz4 from "../components/onboarding/Quiz4";
import Quiz5 from "../components/onboarding/Quiz5";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route
        exact
        path="/login"
        render={(props) => <Auth {...props} authRoute="login" />}
      />
      <Route
        exact
        path="/register"
        render={(props) => <Auth {...props} authRoute="register" />}
      />
      <Route
        exact
        path="/sendmail"
        render={(props) => <Auth {...props} authRoute="sendmail" />}
      />
      <Route
        exact
        path="/resetpassword"
        render={(props) => <Auth {...props} authRoute="resetpassword" />}
      />
      <ProtectedRoute path="/admin/listuser" component={ListUser} />
      <ProtectedRoute path="/admin/dashboard" component={DashboardAdmin} />
      <Route exact path="/home" component={HomePage} />
      <ProtectedRoute exact path="/home/user/profile" component={userProfile} />
      <ProtectedRoute
        exact
        path="/nutrionexpert"
        component={NutrionExpertPage}
      />
      <Route
        exact
        path="/nutrionexpert/information"
        render={(props) => (
          <NutrionExpertPage {...props} changePage="information" />
        )}
      />
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
    </div>
  );
};

export default Routes;
