# yandex-translate-api-wrapper

> A simple wrapper of the Yandex's translation API.

## Install

```bash
$ npm install yandex-translate-api-wrapper --save
```

## Usage

```js
translateApi.getLanguageList(apiKey);
//=> return the list of supported languages

apiWrapper.translateText(apiKey, supportedLanguage, text);
//=> return translation
```

## Example

```js
const translateApi = require('yandex-translate-api-wrapper')
const apiKey = 'xxxxxxx'
const languageList = translateApi.getLanguageList(apiKey);
//=> {"dirs":["az-ru","be-bg"...]}

const translation = translateApi.translateText(apiKey, 'es-en', 'Hola');
//=> {"code":200,"lang":"es-en","text":["Hello"]}
```

## License

MIT © [Tommytrg](https://github.com/Tommytrg).
