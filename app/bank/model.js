const mongoose = require("mongoose");

let bankSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama pemilik rekening harus diisi"],
  },
  nameBank: {
    type: String,
    required: [true, "Nama bank harus diisi"],
  },
  noRekening: {
    type: String,
    required: [true, "Nomor rekening harus diisi"],
  }
});

module.exports = mongoose.model("Bank", bankSchema);
