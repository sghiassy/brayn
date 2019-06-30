global.neo4j = require('neo4j-driver').v1

const graphenedbURL = process.env.GRAPHENEDB_BOLT_URL || 'bolt://localhost:7687'
const graphenedbUser = process.env.GRAPHENEDB_BOLT_USER || 'neo4j'
const graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD || 'jolt39'

const driver = global.neo4j.driver(graphenedbURL, global.neo4j.auth.basic(graphenedbUser, graphenedbPass))
const session = driver.session()

module.exports = {
  get: function (req, res) {
    session
      .run('MATCH (n) RETURN { id: ID(n), name: n.name } LIMIT 25')
      .then((result) => {
        res.send(result)
      })
      .catch((error) => {
        res.send(error)
      })
  },
  post: function (req, res) {
    if (req.body.name == undefined) {
      return res.send('Name was undefined in body:' + JSON.stringify(req.body))
    }

    session
      .run('CREATE (n:Person { name: \'' + req.body.name + '\', title: \'Developer\' })')
      .then((result) => {
        res.send(result)
      })
      .catch((error) => {
        res.send(error)
      })
  },

  delete: function (req, res) {
    if (req.params.id == undefined) {
      return res.send('id is undefined:' + JSON.stringify(req.params))
    }
    session
      .run('MATCH (n) where id(n) = ' + req.params.id + ' DETACH DELETE n')
      .then((result) => {
        res.send(result)
      })
      .catch((error) => {
        res.send(error)
      })
  }
}
