import Main from "./components/Main";
import { StateProvider } from "./Context";

function App() {
  return (
    <>
      <StateProvider>
        <Main />
      </StateProvider>
    </>
  );
}

export default App;
