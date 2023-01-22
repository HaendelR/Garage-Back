var express = require("express");
var router = express.Router();
var carRepair = require("../models/carRepair");

router.get("/allCarRepair", function (req, res) {
  carRepair.getAllCarRepair(req, res);
});

router.post("/addCarRepair", async function (req, res) {
  carRepair.insertCarRepair(req, res);
});

router.put("/updateCarRepairProblem", async function (req, res) {
  carRepair.updateStatusCarRepairProblem(req, res);
});

router.put("/updateCarRepairAdvanceProblem", async function (req, res) {
  carRepair.updateAdvanceCarRepairProblem(req, res);
});

router.put("/updateStatusCarRepairAndDateFinishAndDuration", async function(req, res) {
  carRepair.updateStatusCarRepairAndDateFinishAndDuration(req, res);
});

router.get("/carRepairStatusClient/:status/:clientName/:clientSurname", function (req, res) {
  carRepair.findCarRepairByStatusAndClient(req, res);
});

router.get("/carRepairStatusGarage/:numberPlate/:status/:garageLocation/:garageName", function (req, res) {
  carRepair.findCarRepairByStatusAndGarageAndMatricule(req, res);
});

module.exports = router;
