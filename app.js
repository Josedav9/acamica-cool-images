const fs = require("fs");
const coolImage = require("cool-images");
const moment = require("moment");

const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile("log.txt", data, { encoding: "utf-8" }, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

const logger = (data) => {
  const date = moment().format("YYYY MMMM Do, h:mm:ss a");
  const images = data.join("\n");
  writeFile(`\n${date} \n${images}`);
};

const app = () => {
  const data = coolImage.many(600, 800, 10);
  data.forEach((image) => {
    console.log(image);
  });
  logger(data);
};

app();
