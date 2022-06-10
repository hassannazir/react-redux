import logo from "./logo.svg";
import "./App.css";
import Cake from "./components/Cake";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCake from "./components/HooksCake";
import HooksIcecream from "./components/HooksIcecream";
import NewCake from "./components/NewCake";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake></Cake>
        <HooksCake />
        <HooksIcecream />
        <NewCake />
      </div>
    </Provider>
  );
}

export default App;
