const express = require('express');
var router = express.Router();
const {data} = require('../data/links.json');
router.get('/' , (req,res) =>{
  res.render('download', {
    active: {download: true},
    data
  })
})
module.exports = router
