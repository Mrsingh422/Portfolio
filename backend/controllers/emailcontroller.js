const { sendEmail } = require('../utils/emailService');

exports.sendContactEmail = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    await sendEmail({ name, email, message });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    next(error);
  }
};
