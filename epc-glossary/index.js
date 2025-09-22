const { parse: parseHTML } = require("node-html-parser");
const axios = require("axios");
const { ljust, rjust } = require("justify-text");

const GLOSSARY_PAGE = "https://epc.opendatacommunities.org/docs/guidance";

const loadPage = async (url) => {
  const res = await axios.get(url);

  return res.data;
};

const getDT = (node) => {
  const dt = node.querySelector("dt");

  // for (let i = 0; i < dt.childNodes.length; ++i) {
  //   if (typeof dt.childNodes[i] == 'TextNode')
  //     console.log(i, typeof dt.childNodes[i], dt.childNodes[i].toString());
  //   else console.log(i, typeof dt.childNodes[i], dt.childNodes[i]);
  // }

  let name = dt.childNodes[0].toString().trim();
  let id = dt.childNodes[1].childNodes[0].toString().trim();
  let type = "";

  if (dt.childNodes.length > 3) {
    type = dt.childNodes[3].childNodes[0].toString().trim();
    type = type.replaceAll(/\s+/g, " ");
  }

  return { name, id, type };
};

const getDD = (node) => {
  const dd = node.querySelector("dd");

  return dd.childNodes.length > 0 ? dd.childNodes[0].toString() : "";
};

async function main() {
  const page = await loadPage(GLOSSARY_PAGE);
  const root = parseHTML(page);
  const lists = root.querySelectorAll("dl");
  const allFields = root.querySelectorAll("dl .field");

  console.warn({ lists: lists.length, fields: allFields.length });

  console.log("{");
  //console.log("[");

  for (let idx = 0; idx < 2; ++idx) {
    const fields = lists[idx].querySelectorAll("div.field");

    for (let i = 0; i < fields.length; ++i) {
      const types = getDT(fields[i]);
      const desc = getDD(fields[i]);

      //      console.log(` {
      //    "name": "${types.name.toLowerCase().replaceAll(/ /g, "-")}",

      console.log(`  "${types.name.toLowerCase().replaceAll(/ /g, "-")}": {
     "id": "${types.id}",
     "type": "${types.type}",
     "description": "${desc}"
  },`);

      // console.log(`"${types.name}","${types.id}","${types.type}","${desc}"`);
    }
  }

  console.log("}");
  //console.log("]");

  return "OK";
}

main().then(console.warn);
