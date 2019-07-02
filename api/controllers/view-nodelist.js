const Nodes = require('../models/Nodes')

module.exports = {


  friendlyName: 'View nodelist',


  description: 'Display "Nodelist" page.',


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/nodelist'
    },
  },

  fn: async function (inputs, exits) {
    let nodes = await Nodes.get()
    exits.success({nodes:nodes})
  }
}
