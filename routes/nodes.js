const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  session
    .run("MATCH (n) RETURN n LIMIT 25")
    .then(function (result) {
      res.send(result)
    })
    .catch(function (error) {
      res.send(error)
    })
})

router.post('/', (req, res, next) => {
  if (req.body.name == undefined) {
    return res.send("Name was undefined in body:" + JSON.stringify(req.body))
  }

  session
    .run("CREATE (n:Person { name: '" + req.body.name + "', title: 'Developer' })")
    .then(function (result) {
      res.send(result)
    })
    .catch(function (error) {
      res.send(error)
    })
})

module.exports = router
