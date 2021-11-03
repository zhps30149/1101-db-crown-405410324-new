const serviceCrown2Controller_24 = require('./crown_24/serviceCrown2Controller_24');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_24.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_24.getShop();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.getProductsByCategory =async (req, res) => {
  console.log('category', req.params.category);
  try {
    const data = await serviceCrown2Controller_24.getProductsByCategory(req.params.category);
    //console.log('getProductsByCategory', JSON.stringify(data));
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};