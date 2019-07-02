const GraphNode = require('./GraphNode')

global.neo4j = require('neo4j-driver').v1

const graphenedbURL = process.env.GRAPHENEDB_BOLT_URL || 'bolt://localhost:7687'
const graphenedbUser = process.env.GRAPHENEDB_BOLT_USER || 'neo4j'
const graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD || 'jolt39'

const driver = global.neo4j.driver(graphenedbURL, global.neo4j.auth.basic(graphenedbUser, graphenedbPass))
const session = driver.session()

module.exports = {
  get: async function () {
    return new Promise((resolve, reject) => {
      session
        .run('MATCH (n) RETURN { id: ID(n), name: n.name } LIMIT 25')
        .then((result) => {
          let nodes = result.records.map((record) => {
            let nodeData = record['_fields'][0]
            let id = nodeData.id.low
            let name = nodeData.name
            return new GraphNode(id, name)
          })
          resolve(nodes)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  create: async function (name) {
    return new Promise((resolve, reject) => {
      session
        .run('CREATE (n:Person { name: \'' + name + '\', title: \'Developer\' }) RETURN { id: ID(n), name: n.name }')
        .then((result) => {
          let nodeData = result.records[0]['_fields'][0]
          let id = nodeData.id.low
          let name = nodeData.name
          let newNode = new GraphNode(id, name)
          resolve(newNode)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  delete: async function (id) {
    return new Promise((resolve, reject) => {
      session
        .run('MATCH (n) where id(n) = ' + id + ' DETACH DELETE n')
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
