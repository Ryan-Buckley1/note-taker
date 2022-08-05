const path = require("path");

// gets name from request and creates a path for it
const getStaticFilePath = (fileName) => {
  try {
    const filePath = path.join(__dirname, `../public/${fileName}.html`);
    return filePath;
  } catch (err) {
    console.error(err);
  }
};

// Exports function
module.exports = getStaticFilePath;
