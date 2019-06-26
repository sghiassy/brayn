class NodeModel {
  constructor(raw) {
    this.id = raw["_fields"][0]["id"]["low"]
    this.name = raw["_fields"][0]["name"] || "N/A"
  }
}

export default NodeModel