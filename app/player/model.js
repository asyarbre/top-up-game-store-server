const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const HASH_ROUND = 10;

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email harus diisi"],
    },
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
      maxlength: [225, "Panjang nama harus antara 3 - 225 karakter"],
      minlength: [3, "Panjang nama harus antara 3 - 225 karakter"],
    },
    username: {
      type: String,
      required: [true, "Username harus diisi"],
      maxlength: [225, "Panjang Username harus antara 3 - 225 karakter"],
      minlength: [3, "Panjang Username harus antara 3 - 225 karakter"],
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
      maxlength: [225, "Panjang Username harus antara 3 - 225 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: [true, "Nomor telepon harus diisi"],
      maxlength: [13, "Panjang No Telepon harus 9-13 digit"],
      minlength: [9, "Panjang No Telepon harus 9-13 digit"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

playerSchema.path("email").validate(async function (value) {
  try {
    const count = await this.model("Player").countDocuments({ email: value});
    return !count;
  } catch (err) {
    throw err;
  }
}, attr => `${attr.value} sudah terdaftar`);

playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model("Player", playerSchema);
