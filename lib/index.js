require('dotenv').config({path: '../.env'})

const request = require('request');

const apiUrl = 'https://translate.yandex.net/api/v1.5/tr.json';

function getLanguageList(apiKey, language) {
  if (!language) language = 'en';
  return new Promise((resolve, reject) => {
    request(`${apiUrl}/getLangs?ui=${language}&key=${apiKey}`, (err, res) => {
      if (err) reject(err);
      resolve(JSON.parse(res.body));
    });
  });
}

function translateText(apiKey, language, text, format, options) {
  let urlRequest = `https://translate.yandex.net/api/v1.5/tr.json/translate?`;
  if (apiKey) urlRequest += `key=${apiKey}`;
  if (text) urlRequest += `&text=${text}`;
  if (language) urlRequest += `&lang=${language}`;
  if (format) urlRequest += `&format=${format}`;
  if (options) urlRequest += `&options=${options}`;
  return new Promise((resolve, reject) => {
    request(urlRequest, (err, res) => {
      if (err) reject(err);
      resolve(JSON.parse(res.body));
    });
  });
}

module.exports = {
  getLanguageList,
  translateText,
};
