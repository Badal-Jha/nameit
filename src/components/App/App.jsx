import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");
class App extends Component {
  constructor() {
    super();
    this.state = {
      headerText: "Name It!",
      isExpanded: true,
      suggestedNames: [],
    };
  }
  handleInputChange = (inputText) => {
    this.setState({
      isExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };
  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.isExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
