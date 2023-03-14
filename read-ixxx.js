const { parse: parseHTML } = require('node-html-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { ljust, rjust } = require('justify-text');

async function main() {
  const response = await fetch('https://ixxx.com/a-z');
  const content = await response.text();
  const html = parseHTML(content, 'text/html');
  const links = html.querySelectorAll('a');

  console.log(`Links: ${links.length}`);

  // const link = links[0];
  // const sizeSpan = link.querySelector('span');

  // console.log(link.innerHTML);
  // console.log(`${link.outerHTML} (${sizeSpan.innerText}): ${link.attributes.href}`);

  for (const link of links) {
    const sizeSpan = link.querySelector('span');

    if (sizeSpan) {
      const sizeText = sizeSpan.innerText;
      const nameText = link.innerText.replace(sizeText, '');
      console.log(`${ljust(nameText, 30)}  (${rjust(sizeText, 7)}):  ${link.attributes.href}`);
    }
  }
}

main();
