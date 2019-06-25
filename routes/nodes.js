const express = require('express');
const router = express.Router();
// const config = require('../config.js');
// const path = require('path');

// router.get('/', function (req, res, next) {
//   // GET/users/ route
//   res.send({
//     name: "getNodes4"
//   });
// })

router.get('/', (req, res, next) => {
  session
    .run("MATCH (n) RETURN n LIMIT 25")
    .then(function (result) {
      result.records.forEach(function (record) {
        // console.log(record)
        res.send(record)
      });
    })
    .catch(function (error) {
      // console.log(error);
      res.send(error)
    });
  // neo4j
})

module.exports = router;
