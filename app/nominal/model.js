const mongoose = require("mongoose");

let nominalSchema = mongoose.Schema({
  coinName: {
    type: String,
    required: [true, "Nama koin harus diisi"],
  },
  CoinQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Nominal", nominalSchema);
