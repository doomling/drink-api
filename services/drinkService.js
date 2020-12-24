const Drink = require("./../models/drinkModel");

class DrinkService {
  getDrinkByName(name) {
    const query = Drink.findOne({ name: name }).exec();
    return query;
  }
}

module.exports = DrinkService;
