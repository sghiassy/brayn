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
  props: [
    // 'nodes', // «  The name of the node
  ],

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
  `,

  data: function() {
    return {
      nodes: [{
          id: 0,
          text: 'Vegetables'
        },
        {
          id: 1,
          text: 'Cheese'
        },
        {
          id: 2,
          text: 'Whatever else humans are supposed to eat'
        }
      ]
    }
  }
});
