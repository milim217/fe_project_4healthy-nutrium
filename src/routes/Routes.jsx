import React from "react";
import homepage from "../pages/user/homepage";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import ListUser from "../pages/admin/ListUser";
import nutrionExpertPage from "../pages/nutrion/nutrionExpertPage";
import LayoutAdmin from "../layout/Admin/LayoutAdmin";
import Landing from "../components/Landing";
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
      <ProtectedRoute path="/listuser" component={ListUser} />
      <ProtectedRoute path="/admin/dashboard" component={DashboardAdmin} />
      <ProtectedRoute exact path="/admin" component={LayoutAdmin} />
      <ProtectedRoute exact path="/home" component={homepage} />
      <ProtectedRoute
        exact
        path="/nutrionexpert"
        component={nutrionExpertPage}
      />
    </div>
  );
};

export default Routes;
