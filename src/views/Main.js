import Header from "../components/Header";
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
          <Route path="/example" component={ContentArea} children={Example}/>
          <Route path="/dashboard" component={ContentArea} children={Dashboard}/>
        </Switch>
      </div>
    </>
  );
}

export default Main;
