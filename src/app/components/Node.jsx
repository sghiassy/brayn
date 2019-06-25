import React, { Component } from "react"

class Node extends Component {
  constructor(props) {
    super(props)
    this.state = {
      node: {
        name: ""
      }
    }
  }

  render() {
    return (
      <div className="node">
        <h1>Node {this.state.node.name}</h1>
      </div>
    );
  }
}

export default Node;