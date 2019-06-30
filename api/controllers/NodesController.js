
module.exports = {
  get: async function (req, res) {
    // eslint-disable-next-line no-undef
    let nodes = await Nodes.get()
    res.send(nodes)
  },
  post: function (req, res) {
    if (req.body.name == undefined) {
      return res.send('Name was undefined in body:' + JSON.stringify(req.body))
    }


  },

  delete: function (req, res) {
    if (req.params.id == undefined) {
      return res.send('id is undefined:' + JSON.stringify(req.params))
    }

  }
}
