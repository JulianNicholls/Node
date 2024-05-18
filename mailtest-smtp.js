const mailer = require('nodemailer');

const { SMTP_MAILAUTH_USER, SMTP_MAILAUTH_PASS } = process.env;

async function main() {
  const transporter = mailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, 
    auth: {
      user: SMTP_MAILAUTH_USER,
      pass: SMTP_MAILAUTH_PASS,
    },
  });

  const mailOptions = {
    from: 'Julian Nicholls at Really Big Shoe via Outlook <julian@reallybigshoe.co.uk>',
    to: 'juliannicholls29+smtp@gmail.com',
    subject: 'Sent using Nodemailer via SMTP',
    html: `
       <body style="margin: 0; padding: 40px; background-color: #f9f9f9; font-family: Arial, Helvetica, sans-serif;">
      <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="60%" height="60%" style="background-color: white; border-collapse: collapse; margin-top: 80px; margin-left: auto; margin-right: auto; max-width: 500px; color: black">
        <tr>
          <td align="center" valign="top" bgcolor="white" style="border-bottom: 1px solid #e9e9e9">
            <img src="https://app.bimdl.com/bimdl-logo.png" style="width: 180px" />
          </td>
        </tr>

        <tr>
          <td align="left" valign="top" bgcolor="white" style="padding: 40px; color: black; font-size: 14px">
            <p>Hello <strong>User</strong></p>
            <p>If you receive this (which you will) everything is set up correctly.</p>
            <p>There should be an attachment.</p>
            <p>Best Regards</p>
            <p style="font-size: 16px; font-family: script; color: #008"><i>Julian N.</i></p>
        </tr>

        <tr>
          <td bgcolor="#f9f9f9" style="padding: 20px">
            <p style="color: #c9c9c9; font-size: 12px">Bimdl and the Bimdl logo are either registered trademarks or trademarks of Bimdl in the United Kingdom and/or other countries. All other trademarks are the property of their respective owners.</p>
            <p style="color: #c9c9c9; font-size: 12px">Registered Office: Bimdl Limited, Platform, New Station Street, Leeds, England, LS1 4JB.</p>
            <p style="color: #c9c9c9; font-size: 12px">Registered number: 12950455</p>
          </td>
        </tr>
      </table>
    </body>`,
    text: `Hi User

    This is the plain text version, but you will hopefully see the formatted version.

    If nothing else, we should be able to set up email to send directly.

    There should be an attachment.

    Best Regards

    Julian N.`,
    attachments: [
      {
        filename: 'test.csv',
        contentType: 'text/csv',
        content: Buffer.from('col1,col2,col2\nvalue1,value2,value3').toString('base64'),
        encoding: 'base64',
      },
    ],
  };

  try {
    transporter.verify((error, success) => {
      if(error) {
        console.error(error);
        process.exit(-1);
      }
      else console.log("Server config is OK");
    });

    await transporter.sendMail(mailOptions);

    return 'Mail Sent OK';
  } catch (err) {
    console.error(err);
  }

  return 'Oh dear';
}

main().then(console.log);
