const Nodes = require('../models/Nodes')

module.exports = {
  get: async function (req, res) {
    let nodes = await Nodes.get()
    res.send(nodes)
  },

  post: async function (req, res) {
    if (req.body.name == undefined) {
      return res.send('Name was undefined in body:' + JSON.stringify(req.body))
    }

    let newNode = await Nodes.create(req.body.name)
    res.send(newNode)
  },

  delete: async function (req, res) {
    if (req.params.id == undefined) {
      return res.send('id is undefined:' + JSON.stringify(req.params))
    }

    let deleted = await Nodes.delete(req.params.id)
    res.send(deleted)
  }
}
