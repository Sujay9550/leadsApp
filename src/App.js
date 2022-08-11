import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Layout from "./components/Layout/Layout";
import HomePage from "./components/Layout/HomePage";
import Auth from "./components/Authentication/Auth";
import Leads from "./pages/Leads";
import LeadDetail from "./pages/LeadDetail";
import NewLead from "./pages/NewLead";
import NotFound from "./pages/NotFound";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/home" exact>
              <HomePage></HomePage>
            </Route>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/auth" exact>
              <Auth></Auth>
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/leads" exact>
              <Leads></Leads>
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/leads/:leadId">
              <LeadDetail></LeadDetail>
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/new-lead" exact>
              <NewLead></NewLead>
            </Route>
          )}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
