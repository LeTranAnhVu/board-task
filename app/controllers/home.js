const express = require('express');

const router = express.Router();
const Utils = require('../helpers/utils');

router.get('/', (req, res, next) => {
  const name = Utils.randomString(5);
  console.log(name);

  res.render('index', { title: 'Cu To vãi Lol' });
});

module.exports = router;
