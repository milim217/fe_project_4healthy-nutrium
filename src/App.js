import "./assets/style/App.css";
import homepage from "./pages/user/homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Auth from "./pages/AuthScreen";
import AuthContextProvider from "./service/Actions/UserAPI";
import LayoutAdmin from "./layout/Admin/LayoutAdmin";
import "antd/dist/antd.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./assets/style/layout.css";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import ListUser from "./pages/admin/ListUser";
import nutrionExpertPage from "./pages/nutrion/nutrionExpertPage";

function App() {
  return (
    <AuthContextProvider>
      {/* <PostContextProvider> */}
      <Router>
        <Switch>
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
          {/* <ProtectedRoute exact path="/about" component={About} /> */}
        </Switch>
      </Router>
      {/* </PostContextProvider> */}
    </AuthContextProvider>
  );
}

export default App;
