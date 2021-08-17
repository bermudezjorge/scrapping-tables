const fs = require("fs");
const path = require("path");

let dirExist = false;

const getFullPath = (filename, folderPath) => path.join(folderPath, filename);

const checkIfDirExistIfNotCreateIt = async (folderPath) => {
  const exist = await isDirCreated(folderPath);

  if (exist === false) {
    const success = await createDir(folderPath);
    const msg = console.log(
      `The folder to save the json ${
        success
          ? "was sucessfully created."
          : "had an error creating it, re-run the program."
      }`
    );
    return new Promise((res, rej) => res(msg));
  }
};

const isDirCreated = (folderPath) =>
  new Promise((res, rej) => {
    if (dirExist) return true;

    fs.access(folderPath, (err) => {
      if (err) res(false);
      else res(true);
    });
  });

const createDir = (folderPath) =>
  new Promise((res, rej) =>
    fs.mkdir(folderPath, (err) => {
      if (err) rej(err);

      dirExist = true;
      res(true);
    })
  );

const execSave = async (fullPath, data, { res, rej }) => {
  const saveResponse = await saveFile(fullPath, data);

  if (saveResponse.success) {
    res(saveResponse.msg);
  } else {
    rej(saveResponse.err);
  }
};

const saveFile = (fullPath, data) =>
  new Promise((res, rej) =>
    fs.writeFile(fullPath, data, function (err) {
      if (err) rej({ success: false, err });

      res({
        success: true,
        msg: console.log("\x1b[42m", `File saved sucessful in ${fullPath}`),
      });
    })
  );

module.exports = {
  getFullPath,
  checkIfDirExistIfNotCreateIt,
  execSave,
};
