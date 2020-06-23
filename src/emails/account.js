var nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendWelcomeEmail = (email, name) => {
    debugger
    const message = {
        from: 'app@allarious.co',
        to: email,
        subject: `Welcome ${name}`,
        text: `Hello ${name}, Have fun in our site!`
    };

    transport.sendMail(message);
}

const sendCancelationEmail = (email, name) => {
    const message = {
        from: "app@allarious.com",
        to: email,
        subject: `Goodbye ${name}`,
        text: `Is the anything we can do to keep you dear ${name}?`
    }

    transport.sendMail(message);
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}