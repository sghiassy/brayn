/**
 * <node-listz>
 * -----------------------------------------------------------------------------

 *
 * @type {Component}
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('nodeListz', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: {
    'nodes': {
      type: Array,
      required: true
    }
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
      <ol>
        <node-list-item
          v-for="node in nodes"
          v-bind:node="node"
          v-bind:key="node.id">
        </node-list-item>
      </ol>
  `
});
