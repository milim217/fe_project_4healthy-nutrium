import "./assets/style/App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthContextProvider from "./service/Actions/UserAPI";
import "antd/dist/antd.css";
import "./assets/style/layout.css";
import Routes from "./routes/Routes";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Routes></Routes>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
