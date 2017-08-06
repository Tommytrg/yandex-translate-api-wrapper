var Mocha = require("mocha");
const chai = require('chai');
const expect =  require('chai').expect;

var mocha = new Mocha({
  ui: "tdd",
  reporter: "spec"
});
mocha.addFile("test.js");

mocha.run();
