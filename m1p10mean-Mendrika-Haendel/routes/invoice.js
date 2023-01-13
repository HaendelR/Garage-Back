var express = require("express");
var router = express.Router();
var invoice = require("../models/invoice");

router.get("/allInvoice", function (req, res) {
  invoice.getAllInvoice(req, res);
});

router.post("/addInvoice", async function (req, res) {
  invoice.insertInvoice(req, res);
});

module.exports = router;
