import React from "react"

import Node from "../components/Node.jsx"
import Menu from "../components/Menu.jsx"
import NodeModel from "../models/node.js"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nodes: []
    }
    this.renderNodes = this.renderNodes.bind(this)
    this.fetchNodes = this.fetchNodes.bind(this)
  }

  componentWillMount() {
    this.fetchNodes()
  }

  render() {
    let nodes = this.renderNodes()
    return (
      <div className="page">
        <Menu />
        <div className="nodes">
          <h1>Nodes Page3</h1>
          {nodes}
        </div>
      </div>
    )
  }

  renderNodes() {
    let nodesToRender = this.state.nodes.map((n) => {
      return (
        <Node name={n.name} />
      )
    })
    return nodesToRender
  }

  fetchNodes() {
    fetch("/v0/nodes")
      .then(response => {
        return response.json()
      })
      .then(json => {
        let models = json["records"].map((entry) => { return new NodeModel(entry) })
        this.setState({
          nodes: models
        });
      });
  }
}

export default Home
