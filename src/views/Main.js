import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ContentArea from "../components/ContentArea";
import SideNav from "../components/SideNav";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Users from "./Users";
import Login from "./Login";
import Logout from "./Logout";
import { Ctx } from "../Context";

function Main() {
  let state = useContext(Ctx).state;
  let loggedIn = state.loggedIn ? state.loggedIn : false;
  let loggingOut = state.loggingOut ? state.loggingOut : false;

  return (
    <>
      {!loggedIn ? (
        <>
          
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/logout" render={() => <Logout />} />
          </Switch>
          {!loggingOut ? <Redirect to="/login" /> : null}
        </>
      ) : (
        <div className="flex overflow-x-hidden">
          <SideNav />
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/logout" render={() => <Logout />} />
            <Route path="/settings" render={() => <ContentArea view={<Settings />} />} />
            <Route path="/users" render={() => <ContentArea view={<Users />} />} />
            <Route path="/" render={() => <ContentArea view={<Dashboard />} />} />
          </Switch>
        </div>
      )}
    </>
  );
}

export default Main;
