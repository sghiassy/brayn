module.exports = {


  friendlyName: 'View nodelist',


  description: 'Display "Nodelist" page.',


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/nodelist'
    },
  },

  fn: async function () {
    return {
      nodes: [{
          id: 0,
          text: '1Vegetables'
        },
        {
          id: 1,
          text: '2Cheese'
        },
        {
          id: 2,
          text: '1Whatever else humans are supposed to eat'
        }
      ]
    }
  }
}
