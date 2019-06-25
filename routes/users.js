const express = require('express');
const router = express.Router();
const config = require('../config.js');
const path = require('path');

const neo4j = require('neo4j-driver').v1

const graphenedbURL = process.env.GRAPHENEDB_BOLT_URL || "bolt://localhost:7687"
const graphenedbUser = process.env.GRAPHENEDB_BOLT_USER || "neo4j"
const graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD || "jolt39"

const driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass))
const session = driver.session()

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'index.html'));
})

router.get('/getUsers', function(req, res, next) {
  // GET/users/ route
  res.send({name:config.admin.name});
});

router.get('/postUser', (req, res, next) => {
  session
    .run("CREATE (n {hello: 'world2'}) RETURN n.name")
    .then(function (result) {
      result.records.forEach(function (record) {
        // console.log(record)
        res.send(record)
      });

      session.close();
    })
    .catch(function (error) {
      // console.log(error);
      res.send(error)
    });neo4j
})



module.exports = router;
