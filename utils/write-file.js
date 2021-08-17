const path = require("path");
const {
  getFullPath,
  checkIfDirExistIfNotCreateIt,
  execSave,
} = require("./helpers/write-file-helpers");

const PROJECT_PATH = process.cwd();
const JSON_DATA_FOLDER_NAME = "json-data";
const JSON_DATA_FOLDER_PATH = path.join(PROJECT_PATH, JSON_DATA_FOLDER_NAME);

const writeFile = (filename, data) => {
  return new Promise(async (res, rej) => {
    try {
      const fullPath = getFullPath(filename, JSON_DATA_FOLDER_PATH);

      await checkIfDirExistIfNotCreateIt(JSON_DATA_FOLDER_PATH);

      execSave(fullPath, data, { res, rej });
    } catch (err) {
      throw new Error(err);
    }
  });
};

module.exports = { writeFile };
