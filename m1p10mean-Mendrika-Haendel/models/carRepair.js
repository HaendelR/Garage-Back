var collections = "carRepair";

exports.getAllCarRepair = function (req, res) {
  var db = req.db;
  var collection = db.get(collections);

  collection.find({}, {}, function (e, docs) {
    res.status(200).json(docs);
  });
};

exports.insertCarRepair = async function (req, res) {
  try {
    var carRepair = {
      clientName: req.body.clientName,
      clientSurname: req.body.clientSurname,
      clientContact: req.body.clientContact,

      carMark: req.body.carMark,
      carModel: req.body.carModel,
      numberPlate: req.body.numberPlate,
      color: req.body.color,
      carProblem: req.body.carProblem,

      duration: req.body.duration,
      amount: req.body.amount,
      status: req.body.status,

      garageName: req.body.garageName,
      garageLocation: req.body.garageLocation,

      userName: req.body.userName,
      userSurname: req.body.userSurname,
      userContact: req.body.userContact,
    };

    var db = req.db;
    var collection = db.get(collections);

    collection.insert(carRepair, function (e, docs) {
      res.json(docs);
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};
