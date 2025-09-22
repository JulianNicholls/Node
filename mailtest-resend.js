const { Resend } = require('resend');

if (!process.env.RESEND_KEY) {
  console.error("No RESEND_KEY in environment.");
  process.exit(-1);
}

const resend = new Resend(process.env.RESEND_KEY);

async function main() {
  try {
    const result = await resend.emails.send({
      from: 'no-reply@propertykrowd.com',
      to: 'juliannicholls29@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    console.log({ result });

    return 'Mail Sent OK';
  } catch (err) {
    console.error(err);

    return 'Oh dear';
  }
}

main().then(console.log);
