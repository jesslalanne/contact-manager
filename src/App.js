import React, { Component } from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact List Manager" />
        <div className="container">
        <Contact name="Jessica Lalanne" email="jessica.lalanne@gmail.com" phone="06 49 39 79 13" />
        <Contact name="Yiskah Teixeira" email="yiskah.teixeira@gmail.com" phone="06 98 76 54 32" />
        </div>
      </div>
    );
  }
}

export default App;
