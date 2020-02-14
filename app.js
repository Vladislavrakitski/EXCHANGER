const express = require("express");
const config = require("config");

const app = express();
const PORT = config.get("port") || 5000;

async function start() {
  try {
    app.use('/', express.static(__dirname + '/dist'));
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
};

start();
