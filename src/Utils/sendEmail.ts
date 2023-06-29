import { nodemailer } from 'nodemailer';

export const sendEmail = (info: string, action: string) => {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'shumba250@outlook.com',
      pass: 'Workhard',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  let subject: string, emailTo: string;

  switch (action) {
    case 'createUser':
      subject: action;
      emailTo: info;
      break;
  }

  const mailOptions = {
    from: 'shumba250@outlook.com',
    to: emailTo,
    subject,
  };

  try {
    const sendMail = transporter.sendMail(mailOptions, (error) => {
      if (error) {
        throw new Error(error);
      }

      return sendMail;
    });
  } catch (error) {
    return error.message;
  }
};
