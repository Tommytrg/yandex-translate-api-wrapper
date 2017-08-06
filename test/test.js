
require('./mocha.conf.js')
require('dotenv').config()

const apiWrapper = require('../lib/index.js');
const apiKey = process.env.API_KEY;

describe('function getLanguageList', () => {  
  it('should return an object', () => {
    apiWrapper.getLanguageList(process.env.API_KEY).then((result) =>{
      expect(result).to.be.a('object')
    });
  });
});
