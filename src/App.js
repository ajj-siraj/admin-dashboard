import Main from "./views/Main";
import { StateProvider } from "./Context";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Example from "./views/Example";

function App() {
  return (
    <>
    <Router>
      <StateProvider>
        <Switch>
          <Route path="/example" component={Example} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Main />
      </StateProvider>
    </Router>
      
    </>
  );
}

export default App;
