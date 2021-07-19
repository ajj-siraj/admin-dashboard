import Main from "./views/Main";
import { StateProvider } from "./Context";
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <StateProvider>
        <Main />
      </StateProvider>
    </Router>
      
    </>
  );
}

export default App;
