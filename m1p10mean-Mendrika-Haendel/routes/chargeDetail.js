var express = require("express");
var router = express.Router();
var chargeDetail = require("../models/chargeDetail");

// router.get("/allChargeDetail", function (req, res) {
//   chargeDetail.getAllChargeDetail(req, res);
// });

router.post("/addChargeDetail", async function (req, res) {
  chargeDetail.insertChargeDetail(req, res);
});

module.exports = router;
