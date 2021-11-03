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
