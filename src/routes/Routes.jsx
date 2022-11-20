import React from "react";
import homeUser from "../pages/user/homeUser";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import ListUser from "../pages/admin/ListUser";
import NutrionExpertPage from "../pages/nutrion/NutrionExpertPage";
import userProfile from "../pages/user/userProfile";
import Landing from "../Landing";
import { Route } from "react-router-dom";
// Kiểm tra trước khi Router
import ProtectedRoute from "../Middleware/ProtectedRoute";
import Auth from "../Middleware/AuthScreen";

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
      <ProtectedRoute exact path="/home" component={homeUser} />
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
      <Route
        exact
        path="/nutrionexpert/recipes"
        render={(props) => (
          <NutrionExpertPage {...props} changePage="recipes" />
        )}
      />
    </div>
  );
};

export default Routes;
