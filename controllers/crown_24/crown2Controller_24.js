const serviceCrown2Controller_24 = require('./serviceCrown2Controller_24');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_24.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_24/crown2_24', {
      data: results,
      title: 'Crown2_24',
      name: '呂丞凱',
      id: `405410324`,
    });
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_24.getShop();
    res.render('crown_24/products_24', {
      data,
      title: 'All Products',
      name: '呂丞凱',
      id: `405410324`
    });
  } catch (err) {
    console.log('getShop', err);
  }
};

exports.getProductsByCategory =async (req, res) => {
  console.log('category', req.params.category);
  try {
    const data = await serviceCrown2Controller_24.getProductsByCategory(req.params.category);
    res.render('crown_24/products_24', {
      data,
      title: req.params.category,
      name: '呂丞凱',
      id: `405410324`
    });
  } catch (err) {
    res.status(404).json(err);
  }
};
