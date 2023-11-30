const nodemailer = require('nodemailer');

const EmailController = {}

const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: true,
    auth: {
      user: 'postmaster@sandbox780e6d888b5840ad8e17416ecc533a79.mailgun.org',
      pass: '1d35679edd787946fe173e0e0045dc8e-30b58138-a247788b'
    }
  });

EmailController.enviarEmail = async (req, res) => {

    const info = await transporter.sendMail({
        from: '"Equipo de Argentina Programa 👻" <argentina@programa.com.ar>', // sender address
        to: "upitspedro@gmail.com", // list of receivers
        subject: "Bienvenido", // Subject line
        text: "Bienvenido Pedro", // plain text body
        html: "<b>Bienvenido a Argentina Programa</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
    
      return res.json({mensaje: 'Ingreso correctamente'})
};






module.exports = EmailController;