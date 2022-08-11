const axios = require('axios');

async function main(url) {
  console.log('Allow no redirects');

  try {
    const response = await axios({
      method: 'get',
      url,
      maxRedirects: 0,
      responseType: 'stream',
    });

    console.log(response);
  } catch (err) {
    if (err.response.status === 302) {
      console.log('Redirect to Location:', err.response.headers.location);
    } else console.log('No Redirects Error:', err);
  }

  // console.log('Allow 1 redirects');

  // try {
  //   const response = await axios({
  //     method: 'get',
  //     url,
  //     maxRedirects: 1,
  //     responseType: 'stream',
  //   });

  //   console.log(response);
  // } catch (err) {
  //   console.log('No Redirects Error:', err);
  // }
}

const [, , url] = process.argv;

main(url);
