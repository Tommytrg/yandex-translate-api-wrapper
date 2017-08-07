require('dotenv').config({path: '../.env'});

var Mocha = require("mocha");
const chai = require('chai');
const expect =  require('chai').expect;

const apiWrapper = require('../lib/index.js');
const apiKey = process.env.API_KEY;

// describe('function getLanguageList', () => {  
//   it('should return an object with dirs key that contain a non empty array', () => {
//     apiWrapper.getLanguageList(process.env.API_KEY).then((result) =>{
//       expect(result).to.be.a('object');
//       expect(result).to.include.all.keys('dirs')
//       expect(result.dirs).to.be.an('array').that.is.not.empty;
//     });
//   });
// });

describe('function getLanguageList', function() {
  it('should return an object with dirs key that contain a non empty array', async function() {    
    const result = await apiWrapper.getLanguageList(process.env.API_KEY_YANDEX_TRANSLATE);
    expect(result).to.be.a('object');
    expect(result).to.include.all.keys('dirs')
    expect(result.dirs).to.be.an('array').that.is.not.empty;
  });
});