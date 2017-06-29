var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'johnpicquette@gmail.com',
    pass: '032042aze'
  }
});

var mailOptions = {
  from: 'johnpicquette@gmail.com',
  to: 'icepjohn@hotmail.com, john_sparks@hotmail.fr',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</P>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});