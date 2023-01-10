const Player = require("./model");
const Voucher = require("../voucher/model");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const voucher = await Voucher.find().select('_id name status category thumbnail').populate("category");

      res.status(200).json({ data: voucher });
    } catch (err) {
      res.status(500).json({ message: err.message || "Internal Server Error" });
    }
  },
};
