import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "info@adventureinbosnia.ba", // Your email where you'll receive emails
      from: "info@adventureinbosnia.ba", // your website email address here
      subject: `${req.body.subject}`,
      html: `<h3>Imate novi email od: ${req.body.fullname}, njihov kontakt je: ✉️${req.body.email} </h3>
      <p>Poruka:</p>
      <p>${req.body.message}</p>
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
