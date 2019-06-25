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

module.exports = router
