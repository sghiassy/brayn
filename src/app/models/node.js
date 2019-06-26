class NodeModel {
  constructor(raw) {
    this.name = raw["_fields"][0]["properties"]["name"] || "N/A"
  }
}

export default NodeModel