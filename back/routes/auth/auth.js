const express = require("express");
const router = express.Router();
const connection = require('../helpers/db.js')



router.post("/signup", function(req, res, next) {
  const post  = req.body;

    connection.query("INSERT INTO posts SET ?", post, function(error, results, fields) {
         if (error) res.status(500);
    else res.status(200);
    res.end();
  })
      });
    
module.exports = router;
