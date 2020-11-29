"use strict";
const ExampleMainAbl = require("../../abl/example-main-abl.js");

class ExampleMainController {
  init(ucEnv) {
    return ExampleMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new ExampleMainController();
