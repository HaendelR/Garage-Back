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

module.exports = router;
