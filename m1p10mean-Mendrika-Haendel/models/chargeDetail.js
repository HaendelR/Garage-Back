var collections = "chargeDetail";

// exports.getAllChargeDetail = function (req, res) {
//   var db = req.db;
//   var collection = db.get(collections);

//   collection.find({}, {}, function (e, docs) {
//     res.status(200).json(docs);
//   });
// };

// exports.insertChargeDetail = async function (req, res) {
//   try {
//     var chargeDetail = {
//       expensesTable: req.body.expensesTable,
//       dateTimeCharge: req.body.dateTimeCharge,
//       garageName: req.body.garageName,
//       garageLocation: req.body.garageLocation,
//       garageRent: req.body.garageRent,
//       userName: req.body.userName,
//       userSurname: req.body.userSurname,
//       userSalary: req.body.userSalary,
//     };

//     var db = req.db;
//     var collection = db.get(collections);

//     collection.insert(chargeDetail, function (e, docs) {
//       res.json(docs);
//     });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// };

exports.insertChargeDetail = async function (req,res) {
  try {

    var chargeDetail = {
      intitule: req.body.intitule,
      dateTimeCharge: req.body.dateTimeCharge,
      garageName: req.body.garageName,
      garageLocation: req.body.garageLocation,
      garageRent: req.body.garageRent,
      userName: req.body.userName,
      userSurname: req.body.userSurname,
      userEmail: req.body.userEmail,
      userSalary: req.body.userSalary,
      amount: req.body.amount,
    }

    var db = req.db;
    var collection = db.get(collections);

    collection.insert(chargeDetail, function(e, docs) {
      res.status(200).json(docs);
    });

  } catch(e) {
    res.status(400).json({e});
  }
}
