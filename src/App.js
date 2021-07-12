import Main from "./views/Main";
import { StateProvider } from "./Context";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <StateProvider>
        <Main />
      </StateProvider>
    </Router>
      
    </>
  );
}

export default App;
