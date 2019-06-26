import React, { Component } from "react"

class AddNode extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest()

    xhr.open("POST", "/v0/nodes")
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ "name": this.state.value}))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input name="name" id="name" value="" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddNode