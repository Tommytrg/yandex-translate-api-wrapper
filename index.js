const translateApi = require('./lib/index.js');

module.exports = {
  getLanguageList: translateApi.getLanguageList,
  translateText: translateApi.translateText,
};
