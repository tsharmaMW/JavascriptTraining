const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/calc.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
