const express = require('express');
var router = express.Router();

router.get('/' , function(req, res){
  res.render('about', {active: {about: true}});
})

module.exports = router
