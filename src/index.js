/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Web3Provider } from "@chainsafe/web3-context";
import App from "App";

ReactDOM.render(
  <BrowserRouter>
    <Web3Provider
      networkIds={[137]}
      onboardConfig={{
        networkId: 137,
        networkName: "Matic",
        darkMode: true,
        hideBranding: true,
      }}
    >
      <App />
    </Web3Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
