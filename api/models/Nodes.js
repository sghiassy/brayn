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
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  create: async function (name) {
    return new Promise((resolve, reject) => {
      session
        .run('CREATE (n:Person { name: \'' + name + '\', title: \'Developer\' })')
        .then((result) => {
          resolve(result)
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
