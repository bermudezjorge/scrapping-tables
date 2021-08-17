const { HtmlTableToJson } = require("./table-to-json");

const getHtmlTableToJson = ($, { stringify = false }) => {
  const htmlTable = $.html($("table"));

  const {
    results: [data],
  } = HtmlTableToJson.parse(htmlTable);

  if (stringify) {
    return JSON.stringify(data);
  } else {
    return data;
  }
};

module.exports = { getHtmlTableToJson };
