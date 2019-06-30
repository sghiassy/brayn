module.exports = {


  friendlyName: 'View nodelist',


  description: 'Display "Nodelist" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/nodelist'
    }

  },


  fn: async function () {

    // Respond with view.
    return {}

  }


}
