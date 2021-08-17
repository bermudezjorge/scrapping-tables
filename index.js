const { fetchHTML } = require("./utils/fetch-html");
const { getHtmlTableToJson } = require("./utils/get-html-table-to-json");
const { writeFile } = require("./utils/write-file");

const { urlsItems, urlMonsters, urlEnchants } = require("./urls");

async function scrappingTablesAndSavingAsJson(url, filename) {
  const html = await fetchHTML(url);

  const data = getHtmlTableToJson(html, { stringify: true });

  await writeFile(`${filename}.json`, data);
}

//scrapping one url
scrappingTablesAndSavingAsJson(urlEnchants.url, urlEnchants.filename);

//scrapping multiples urls
// urls.forEach(({ url, filename }) =>
//   scrappingTablesAndSavingAsJson(url, filename)
// );
