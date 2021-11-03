var express = require('express');
var router = express.Router();
const crown2Controller_24 = require('../controllers/crown_24/crown2Controller_24');

/* GET home page. */
router.get('/', crown2Controller_24.getCategories);
router.get('/shop_24', crown2Controller_24.getShop);
router.get('/shop_24/:category', crown2Controller_24.getProductsByCategory);

module.exports = router;
