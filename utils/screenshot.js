const fs = require('fs');

function takeScreenshot(path, image) {

  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.info("File path doesn't exists ... Let's create!")
      fs.mkdir(path, {recursive: true}, err => {})
    }
    // file exists
    browser.saveScreenshot(path + image)
  });
}

module.exports = takeScreenshot