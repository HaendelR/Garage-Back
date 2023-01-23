var collections = "invoice";

exports.getAllInvoice = function (req, res) {
  var db = req.db;
  var collection = db.get(collections);

  collection.find({}, {}, function (e, docs) {
    res.status(200).json(docs);
  });
};

exports.insertInvoice = async function (req, res) {
  try {
    var invoice = {
      clientName: req.body.clientName,
      clientSurname: req.body.clientSurname,
      clientContact: req.body.clientContact,
      clientEmail: req.body.clientEmail,

      carMark: req.body.carMark,
      carModel: req.body.carModel,
      numberPlate: req.body.numberPlate,
      color: req.body.color,
      carProblem: req.body.carProblem,

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

    collection.insert(invoice, function (e, docs) {
      res.json(docs);
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};


exports.findInvoiceByClient = async function(req, res) {
  try {
    var db = req.db
    var collection = db.get(collections)

    collection.find(
      {
        clientName: req.params.clientName,
        clientSurname: req.params.clientSurname
      }, 
      {},
      function(e, docs) {
        res.status(200).json(docs)
      }
    )
  } catch(error) {
    res.status(400).json({error})
  }
}

exports.findInvoiceByCarMatriculeAndInvoiceStatus = async function (req, res) {
  try {
    var db = req.db;
    var collection = db.get(collections);

    collection.findOne(
      { numberPlate: req.params.numberPlate, status: req.params.status },
      {},
      function (e, docs) {
        res.status(200).json(docs);
      }
    );
  } catch (error) {}
};

exports.findInvoiceByUserAndGarage = async function (req, res) {
  try {
    var db = req.db;
    var collection = db.get(collections);

    collection.find(
      {
        garageName: req.params.garageName,
        garageLocation: req.params.garageLocation,
        userName: req.params.userName,
        userSurname: req.params.userSurname
      },
      {},
      function (e, docs) {
        res.status(200).json(docs);
      }
    );

  } catch (error) {
    res.status(400).json({error});
  }
}

exports.findInvoiceByGarage = async function(req, res) {
  try {
    var db = req.db;
    var collection = db.get(collections);

    collection.find(
      {
        "garageName": req.params.garageName,
        "garageLocation": req.params.garageLocation
      },
      {},
      function(e,docs) {
        res.status(200).json(docs);
      }
    )

  } catch(error) {
    res.status(400).json({error});
  }
}
