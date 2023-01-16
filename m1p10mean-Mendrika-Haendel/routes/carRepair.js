var express = require("express");
var router = express.Router();
var carRepair = require("../models/carRepair");

router.get("/allCarRepair", function (req, res) {
  carRepair.getAllCarRepair(req, res);
});

router.post("/addCarRepair", async function (req, res) {
  carRepair.insertCarRepair(req, res);
});

router.get("/carRepairStatusClient/:status/:clientName/:clientSurname", function (req, res) {
  carRepair.findCarRepairByStatusAndClient(req, res);
});

module.exports = router;
