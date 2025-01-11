const nodemailer = require('nodemailer');
const { emailConfig } = require('../config/email');

exports.sendEmail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport(emailConfig.smtp);

  const mailOptions = {
    from: `"Contact Form" <${emailConfig.smtp.auth.user}>`,
    to: emailConfig.recipient,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
