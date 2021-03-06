'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  res.render('photos', {id: req.params.id});
  //res.send(req.params.id);
});

module.exports = router;