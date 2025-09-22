const { Resend } = require('resend');

const resend = new Resend('re_dqmuvePz_H9J27sZjFAFPifpSypG6DEBF');

async function main() {
  try {
    const result = await resend.emails.send({
      from: 'no-reply@propertykrowd.com',
      to: 'juliannicholls29@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    console.log({result});

    return 'Mail Sent OK';
  } catch (err) {
    console.error(err);

    return 'Oh dear';
  }
}

main().then(console.log);
