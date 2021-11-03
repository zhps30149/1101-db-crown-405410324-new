var express = require('express');
var router = express.Router();
const apiCrown2Controller_24 = require('../controllers/apiCrown2Controller_24');

/* crown_24 */
router.get('/category_24', apiCrown2Controller_24.getCategories);
router.get('/shop_24', apiCrown2Controller_24.getShop);
router.get('/shop_24/:category', apiCrown2Controller_24.getProductsByCategory);

/* midproj_24 */

/* finalproj_24 */

module.exports = router;
