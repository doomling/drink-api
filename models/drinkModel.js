const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mainIngredient: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Drink", drinkSchema);
