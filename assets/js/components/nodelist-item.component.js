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
    <li>Node: {{node.name}} <button class="destroy" @click="removeNode(node)"></button></li>

  `,

  methods: {
    removeNode: function(node) {
      console.log('removeNode was called', node)
    }
  }
})
