const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello from node: test123');
});

module.exports = router;