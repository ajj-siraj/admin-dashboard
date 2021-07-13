import ContentArea from "../components/ContentArea";
import SideNav from "../components/SideNav";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Example from "./Example";

function Main() {
  return (
    <>
      <div className="flex">
        <SideNav />
        <Switch>
          <Route path="/example" render={() => <ContentArea view={<Example />} />}/>
          <Route path="/dashboard" render={() => <ContentArea view={<Dashboard />} />}/>
        </Switch>
      </div>
    </>
  );
}

export default Main;
