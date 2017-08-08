require('dotenv').config({path: '../.env'});

const chai = require('chai');
const expect =  require('chai').expect;

const apiWrapper = require('../index.js');
const apiKey = process.env.API_KEY;

describe('function getLanguageList', () => {
  it('should return an object with dirs key that contain a non empty array', async () => {    
    const result = await apiWrapper.getLanguageList(process.env.API_KEY_YANDEX_TRANSLATE);
    expect(result).to.be.a('object');
    expect(result).to.include.all.keys('dirs')
    expect(result.dirs).to.be.an('array').that.is.not.empty;
  });
});

describe('function translateText', () => {
  it('should return text translated', async () => {
    const result = await apiWrapper.translateText(process.env.API_KEY_YANDEX_TRANSLATE, 'es-en', 'Francia');
    expect(result).to.be.a('object');
    expect(result.code).to.equal(200)
    expect(result.lang).to.equal('es-en');
    expect(result.text[0]).to.equal('France')
  });
});
