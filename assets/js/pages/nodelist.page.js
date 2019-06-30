parasails.registerPage('nodelist', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    syncing: false,
    cloudError: false,
    formErrors: false,
    // Form data
    formData: { /* … */ },

    nodes: []
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS)
  },

  mounted: async function () {
    // var that = this

    // setTimeout(() => {
    //   // dynamically add data after render
    //   that.nodes = _.union(that.nodes, [{
    //     id: 034,
    //     text: '54Vegetables'
    //   },
    //   {
    //     id: 14,
    //     text: '454Cheese'
    //   },
    //   {
    //     id: 24,
    //     text: '23Whatever else humans are supposed to eat'
    //   }
    //   ])
    // }, 1000)
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    handleParsingForm: function () {
      return this.formData
    },
    // submittedForm: async function () {
    //   // Redirect to the account page on success.
    //   // > (Note that we re-enable the syncing state here.  This is on purpose--
    //   // > to make sure the spinner stays there until the page navigation finishes.)
    //   this.syncing = true
    //   console.log("I am syncing", this.formData)
    // },
    submitForm: async function() {
      this.syncing = true
      const that = this
      console.log('I am submitting form', this.formData)
      return new Promise((resolve, reject)=>{
        var xhr = new XMLHttpRequest()

        xhr.open('POST', '/api/v1/node')
        xhr.onreadystatechange = function () {
          if (this.readyState === 4) {
            if (this.status === 200) {
              console.log('POST worked with:', xhr.response)
              that.nodes.push(JSON.parse(xhr.response))
              resolve()
            } else {
              reject()
            }
          }
        }
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.send(JSON.stringify({ 'name': this.formData.nodeName }))

      })
    }
  }
})
