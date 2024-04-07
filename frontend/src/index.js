import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./central/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter scrollRestoration="manual">
  <Provider store={store}>
    <App/>
    <Toaster/>
    </Provider>
  </BrowserRouter>
    

);
