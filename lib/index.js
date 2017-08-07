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



module.exports = {
  getLanguageList,
};
