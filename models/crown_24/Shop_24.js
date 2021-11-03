const db = require('../../utils/database');

const Shop_24 = class Shop_24 {
  constructor(id, name, cat_id, price, remote_url, local_url) {
    this.id = id;
    this.name = name;
    this.cat_id = cat_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  // get all categories
  static async fetchAll() {
    try {
      const results = await db.query('SELECT * from shop_24');
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  static async fetchByCatId(id){
    const query = {
      text: 'SELECT * FROM shop_24 WHERE cat_id = $1',
      values: [id]
    }
    try {
      const results = await db.query(query);
      //console.log('server getCatId', JSON.stringify(results));
      return results.rows;
    } catch(err) {
      console.log(err);
    }
  }

};

// const test = async () => {
//   let results = await Shop_24.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// }

// test();
module.exports = Shop_24;
