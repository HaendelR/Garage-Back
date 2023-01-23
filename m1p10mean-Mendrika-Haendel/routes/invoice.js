var express = require("express");
var router = express.Router();
var invoice = require("../models/invoice");

router.get("/allInvoice", function (req, res) {
  invoice.getAllInvoice(req, res);
});

router.get("/InvoiceByMatriculeAndStatus/:numberPlate/:status", function (req, res) {
  invoice.findInvoiceByCarMatriculeAndInvoiceStatus(req, res);
});

router.post("/addInvoice", async function (req, res) {
  invoice.insertInvoice(req, res);
});

router.get("/findInvoiceByClient/:clientName/:clientSurname", async function (req, res) {
  invoice.findInvoiceByClient(req, res);
});

router.get("/findInvoiceByUserAndGarage/:garageName/:garageLocation/:userName/:userSurname", async function (req, res) {
  invoice.findInvoiceByUserAndGarage(req, res);
});

router.get("/findInvoiceByGarage/:garageName/:garageLocation", async function(req, res) {
  invoice.findInvoiceByGarage(req, res);
});

router.put("/updateInvoiceStatus", async function(req, res) {
  invoice.updateStatusInvoice(req, res);
});

module.exports = router;
