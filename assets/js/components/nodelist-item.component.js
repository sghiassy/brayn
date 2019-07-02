/**
 * <node-list-item>
 * -----------------------------------------------------------------------------

 *
 * @type {Component}
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('nodeListItem', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: {
    'node': {
      type: Object,
      required: true
    }
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <li>Node: {{node.name}} <button @click="removeNode(node)"></button></li>

  `,

  methods: {
    removeNode: function(node) {
      console.log('removeNode was called', node)
      const xhr = new XMLHttpRequest()

      xhr.open('DELETE', '/api/v1/node/' + node.id)
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send()
    }
  }
})
