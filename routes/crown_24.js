var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_24/crown_24', {
    title: 'Express',
    name: '呂丞凱',
    id: `405410324`,
  });
});

module.exports = router;
