import "./App.css";
import Counter from "./components/counter/Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "./redux/store";
import {Provider} from 'react-redux';
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
      <Counter />
      </React.Fragment>
    </Provider>
  );
}

export default App;
