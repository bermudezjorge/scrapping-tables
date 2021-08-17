const getTextDataInObj = ($, cell) => {
  const textElements = $(cell).text();
  const textsWithDashes = replaceSpaceForDash(textElements);
  const textCamelCaseSeparatedBySpace =
    replaceCamelCaseForSpace(textsWithDashes);
  const textsArr = textCamelCaseSeparatedBySpace.split(" ");

  return wrapTextArrInObject(textsArr);
};

const getImgsDataInObj = ($, cell) => {
  const imgsArr = getPositionImgsFromStyleAttrArr($, cell);
  return wrapImgsArrInObject(imgsArr);
};

const replaceSpaceForDash = (str) => str.replace(/(\s+)/g, "-");

const replaceCamelCaseForSpace = (str) =>
  str.replace(/([a-z])([A-Z])/g, "$1 $2");

const hasMoreThanValue = (arr) => arr.length >= 2;

const wrapTextArrInObject = (textsArr) => {
  if (hasMoreThanValue(textsArr)) {
    return textsArr;
  }

  if (textsArr[0] === "") {
    return undefined;
  } else {
    return textsArr[0];
  }
};

const getPositionImgsFromStyleAttrArr = ($, cell) => {
  return $(cell)
    .find("span[class=icon]")
    .toArray()
    .map((element) => $(element).attr("style"));
};

const wrapImgsArrInObject = (imgsArr) => {
  if (hasMoreThanValue(imgsArr)) {
    return imgsArr;
  } else {
    return imgsArr[0];
  }
};

module.exports = {
  getTextDataInObj,
  getImgsDataInObj,
};
