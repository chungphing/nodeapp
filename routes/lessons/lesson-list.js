const express = require('express');
const router = express.Router();


router.get('/', (req,res)=> {
  console.log("user access unauthorized area, redirecting...");
  res.redirect('../');
})

router.get('/lesson-list', (req,res) => {
  console.log("Rendering post template");
  res.render('lesson',{active: {lesson: true}});
})
module.exports = router;
