const router = require('express').Router();

router.get("/", (req, res)=>{
  res.send(`Welcome to index`);
})

module.exports = router;