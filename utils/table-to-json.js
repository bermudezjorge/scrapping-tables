const HtmlTableToJson = require("html-table-to-json");
const {
  getTextDataInObj,
  getImgsDataInObj,
} = require("./helpers/table-to-json-helpers");

HtmlTableToJson.prototype._processRow = function (tableIndex, index, row) {
  if (index === 0 && this._firstRowUsedAsHeaders[tableIndex] === true) return;

  this._results[tableIndex][index] = {};

  this._$(row)
    .find("td")
    .each((i, cell) => {
      const texts = getTextDataInObj(this._$, cell);

      const imgs = getImgsDataInObj(this._$, cell);

      this._results[tableIndex][index][this._headers[tableIndex][i] || i + 1] =
        { texts, imgs };
    });
};

module.exports = { HtmlTableToJson };
