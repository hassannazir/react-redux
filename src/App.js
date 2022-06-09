import logo from "./logo.svg";
import "./App.css";
import Cake from "./components/Cake";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCake from "./components/HooksCake";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake></Cake>
        <HooksCake></HooksCake>
      </div>
    </Provider>
  );
}

export default App;
