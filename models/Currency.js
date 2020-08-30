const mongoose = require("mongoose");

const CurrencySchema = new mongoose.Schema({
  currencyId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Currency", CurrencySchema);
