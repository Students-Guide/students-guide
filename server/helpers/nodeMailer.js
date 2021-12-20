const nodemailer = require("nodemailer");
const { serverEmail, serverPassword } = require("../config/settings");

module.exports = {
  nodeMailer: async (params) => {
   
    const { email, subject, text, html } = params;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // host: "smtp.ethereal.email", // we need this only when we use gmail service
      service: "gmail",
      // port: 587, // no need for this when we use gmail service
      // secure: false, // true for 465, false for other ports // no need for this when we use gmail service
      auth: {
        user: serverEmail, // generated ethereal user
        pass: serverPassword, // generated ethereal password
      },
    });

    try {
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"e-learning 👻" <${serverEmail}>`, // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        // text: "Hello world?", // plain text body
        html: html, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } catch (error) {
      console.error(error)
    }
  },
};
