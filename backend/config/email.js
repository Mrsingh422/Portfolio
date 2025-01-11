require('dotenv').config();

exports.emailConfig = {
  smtp: {
    host: 'smtp.gmail.com', // Gmail SMTP server
    port: 587,              // Port for TLS
    secure: false,          // Use TLS (false for TLS, true for SSL)
    auth: {
      user: process.env.SMTP_USER, // Your Gmail address
      pass: process.env.SMTP_PASS, // App Password (NOT your Gmail password)
    },
  },
  recipient: process.env.RECIPIENT_EMAIL, // Where emails will be sent
};

