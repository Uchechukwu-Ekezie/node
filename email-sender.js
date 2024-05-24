// email-sender.js
const nodemailer = require('nodemailer');


const senderEmail = 'akejumariam23@gmail.com';
const senderPassword = '******';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'akejumariam23@gmail.com',
        pass: '****'
    }
});

const mailOptions = {
    from: 'akejumariam23@gmail.com',
    to: 'africanweirdoblog@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from a Node.js application!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
