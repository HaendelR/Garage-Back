var express = require("express");
var router = express.Router();
var car = require("../models/car");

router.get("/allCars", function (req, res) {
  car.getAllcars(req, res);
});

router.post("/addCar", async function (req, res) {
  car.insertCar(req, res);
});

module.exports = router;
