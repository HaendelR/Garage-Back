var collections = "carDepot";

exports.getAllCarDepots = function (req, res) {
  var db = req.db;
  var collection = db.get(collections);

  collection.find({}, {}, function (e, docs) {
    res.status(200).json(docs);
  });
};

exports.insertCarDepot = async function (req, res) {
  try {
    var carDepot = {
      garageName: req.body.garageName,
      garageLocation: req.body.garageLocation,
      clientName: req.body.clientName,
      clientSurname: req.body.clientSurname,
      clientContact: req.body.clientContact,
      carMark: req.body.carMark,
      carModel: req.body.carModel,
      numberPlate: req.body.numberPlate,
      color: req.body.color,
      dateTimeDepot: req.body.dateTimeDepot,
      status: req.body.status,
    };

    var db = req.db;
    var collection = db.get(collections);

    collection.insert(carDepot, function (e, docs) {
      res.json(docs);
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};
