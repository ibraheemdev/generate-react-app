import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import configureStore from "./redux/store";
import "./styles.css";
import {Provider} from "react-redux"

const reduxStore = configureStore()

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);