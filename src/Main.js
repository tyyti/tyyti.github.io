import React, { Component } from "react";
import {
  HashRouter
} from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Header title="Tiinan portfolio" />
        <body>
          <div id="page-container">
            <Content />
            <Footer />
          </div>
        </body>
      </HashRouter>
    );
  }
}

export default Main;
