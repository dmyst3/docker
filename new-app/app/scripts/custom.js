"use strict";

class Hello extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello From React! App is running on v1.0.0");
  }
}


var mainElement = document.querySelector("main");
ReactDOM.render(React.createElement(Hello), mainElement);