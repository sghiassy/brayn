import React, { Component } from "react"

class Node extends Component {
  constructor(props) {
    super(props)

    this.state = {
      node:props.node
    }
  }

  render() {
    return (
      <div className="node">
        <h1>Node {this.state.node.name}</h1><DeleteButton onClick={()=>{
          var xhr = new XMLHttpRequest()

          xhr.open("DELETE", "/v0/nodes/" + this.state.node.id)
          xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          xhr.send()
        }} />
      </div>
    );
  }
}

class DeleteButton extends Component {
  constructor(props) {
    super(props)

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick()
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        "Delete"
      </button>
    );
  }
}

export default Node