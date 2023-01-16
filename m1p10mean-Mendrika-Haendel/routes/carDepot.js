var express = require("express");
var router = express.Router();
var carDepot = require("../models/carDepot");

router.get("/allCarDepot", function (req, res) {
  carDepot.getAllCarDepots(req, res);
});

router.get("/allCarDelivery", function (req, res) {
  carDepot.getCarDelivery(req, res);
});

router.post("/addCarDepot", async function (req, res) {
  carDepot.insertCarDepot(req, res);
});

router.get("/carDepose/:garageName/:garageLocation", async function (req, res) {
  carDepot.getCarDepose(req, res);
});

module.exports = router;
