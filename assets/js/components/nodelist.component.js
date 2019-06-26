/**
 * <node-list>
 * -----------------------------------------------------------------------------

 *
 * @type {Component}
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('nodeList', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'nodes', // «  The name of the node
  ],

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <span>
      <node-list-item name="one"></node-list-item>
      <node-list-item name="two"></node-list-item>
    </span>
  `
});
