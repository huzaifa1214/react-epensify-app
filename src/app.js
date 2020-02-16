import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "./styles/styles.scss";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
