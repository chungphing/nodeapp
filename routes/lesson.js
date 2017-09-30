const express = require('express');
const router = express.Router();

//
// router.post('/', (req,res) =>{
//   console.log(req.query);
// });

router.get('/', (req,res) => {
  console.log("Rendering post template");
  res.render('lesson',{active: {lesson: true}});
})

module.exports = router;
