const express = require('express')
const app = express()
const logger = require('morgan')

const neo4j = require('neo4j-driver').v1

const graphenedbURL = process.env.GRAPHENEDB_BOLT_URL || "bolt://localhost:7687"
const graphenedbUser = process.env.GRAPHENEDB_BOLT_USER || "neo4j"
const graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD || "jolt39"

const driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass))
const path = require('path')
const serveStatic = require('serve-static')

app.use(logger('dev'))

var session = driver.session()

app.get('/', (req, res) => {

})

app.use(serveStatic(path.join(__dirname, '/build'), {
    maxAge: '1d'
}))


const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}!`))