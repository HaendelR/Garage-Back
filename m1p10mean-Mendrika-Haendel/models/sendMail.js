var nodemailer = require("nodemailer");

exports.getEmail = function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: "garagemeha@gmail.com",
      pass: "gzkjraomdfksemro",
    },
    secure: true,
  });
  const { to, subject, text } = req.body;
  const mailData = {
    from: "garagemeha@gmail.com",
    to: to,
    subject: subject,
    html: `<b>Madame, Monsieur,</b><br>${text}Pour plus de détails veuillez vous connectez sur http://localhost:4200 <br><br/><b>Cordialement,<b/><br><br/><b>Garage Meha<b/>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
