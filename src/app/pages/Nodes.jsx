import React from "react";
import { render } from "react-dom";

import Node from "../components/Node.jsx";
import Menu from "../components/Menu.jsx";

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <Menu />
        <div className="nodes">
          <h1>Nodes Page</h1>
          <Node />
        </div>
      </div>
    );
  }
}

export default Home;
