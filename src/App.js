import "./App.css";
import { Provider } from "react-redux";
import store from "./app/slices/store";
import Index from "./components/Index";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Index />
      </div>
    </Provider>
  );
}

export default App;
