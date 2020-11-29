const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/capacity/list", (req, res) => {
  res.send(generateData());
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});

function generateData(length = 1000) {
  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
  };
  function getCapacity(_noise, _multi) {
    return Math.floor(Math.random() * _noise * _multi * 10000);
  }

  const itemList = [];

  for (let i = 0; i < length; i++) {
    let noise = Math.random();

    itemList.push({
      timestamp: new Date(2020, 10, 30, 1, 0, 0).addHours(i),
      AL: getCapacity(noise, 2.15),
      AT: getCapacity(noise, 4.25),
      BA: getCapacity(noise, 1.3),
      BE: getCapacity(noise, 2.25),
      BG: getCapacity(noise, 1.2),
      CH: getCapacity(noise, 3),
      CY: getCapacity(noise, 2.45),
      CZ: getCapacity(noise, 6),
      DE: getCapacity(noise, 13.6),
      DK: getCapacity(noise, 4.1),
      ES: getCapacity(noise, 4.4),
      FI: getCapacity(noise, 3.9),
      FR: getCapacity(noise, 12),
      GB: getCapacity(noise, 4),
      GR: getCapacity(noise, 1),
      HR: getCapacity(noise, 3.98),
      HU: getCapacity(noise, 7),
      IT: getCapacity(noise, 6.66),
      NL: getCapacity(noise, 4.2),
    });
  }
  return { itemList };
}
