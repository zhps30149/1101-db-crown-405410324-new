const Category_24 = require('../../models/crown_24/Category_24');
const Shop_24 = require('../../models/crown_24/Shop_24');

exports.getCategories = async (req, res) => {
  try {
    return await Category_24.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    return await Shop_24.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
};

exports.getProductsByCategory = async (category) => {
  console.log('service', category);
  try {
    const cid = await Category_24.fetchCatIdByName(category);
    const results = await Shop_24.fetchByCatId(cid);
    //console.log('server getProductsByCategory', JSON.stringify(results));
    return results;
  } catch (err) {
    console.log(err);
  }
};