import nodemailer from 'nodemailer';

export async function sendEmail(req, res, to, subject, text, html) {
    const transporter = nodemailer.createTransport({
        service: `${process.env.SMTP_HOST}`,
        auth: {
          user: `${process.env.SMTP_USERNAME}`,
          pass: `${process.env.SMTP_PASSWORD}`,
        },
      });
    
      const mailOptions = {
        from: `${process.env.SMTP_HOST}`,
        to: to,
        subject: subject,
        text: text,
        html: html
      };
    
      const info = await transporter.sendMail(mailOptions);
    
      console.log('Email sent:', info.messageId);
      return res.status(200).json({ data: {messageId: ` ${info.messageId}`}, message: 'success', status: true })
}
