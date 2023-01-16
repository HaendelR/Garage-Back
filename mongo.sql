db.carRepair.insert({
    "clientName": "Rakoto",
      "clientSurname": "Jean",
      "clientContact": "031354646",

      "carMark": "Nissan",
      "carModel": "SUV",
      "numberPlate": "123TAA",
      "color": "Noir",
      "carProblem": [
          {
              "entitled":"pneu",
              "price":"2000",
              "status":0
          },
          {
              "entitled":"vitre",
              "price":"30000",
              "status":0
          }
      ],

      "duration": "",
      "amount": "",
      "status": "en cours de reparation",
      "dateTimeStart": new Date(),
      "dateTimeStop": "", 

      "garageName": "Garage Meha",
      "garageLocation": "Andoram",
 
      "userName": "Rabe",
      "userSurname": "Levent",
      "userContact": "0346466464664"
})

db.carRepair.aggregate([
    {
        $project: {
            hello : { $subtract: [new Date(), "$dateTimeStart"] },
            difference: {
                $divide: [
                    { $subtract: [new Date(), "$dateTimeStart"] },
                    60000
                ]
            }
        }
    }
])