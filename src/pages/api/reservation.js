import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      personalizations: req.body.personalizations, // Your email where you'll receive emails
      from: "info@adventureinbosnia.ba", // your website email address here
      subject: "Reservation Confirmation",
      html: `<p>You have successuly booked ${req.body.whereTo}, for date: ${req.body.date}. Number of persons: ${req.body.people} </p>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
