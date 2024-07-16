let transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "78b8f2001@smtp-brevo.com", // generated ethereal user
    pass: "XSAKfkILTb18J2EO", // generated ethereal password
  },
});

// send mail with defined transport object
let info = await transporter.sendMail({
  from: '"Joe" clarencejordan65@gmail.com', // sender address
  to: "clarencejordan087@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello {{ contact.FIRSTNAME }} , This is an SMTP message with customizations", // plain text body
});
