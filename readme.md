# import-href

> Imperatively import an HTML document.


## Install

```
$ npm install --save import-href
```


## Usage

```js
var importHref = require('import-href');

importHref('http://example.com/meow-component.html',
						function onLoad(){},
						function onError(){});
```


## API

### importHref(href, onload, onerror)

#### href

URL

*Required*  
Type: `string`

href URL that needs to be imported.

#### onload

onload callback

Type: `function`  

Callback function which will be executed after `load`

#### onerror

onerror callback function

Type: `function`  

Callback function which will be executed if there is an `error`


## License

MIT © [hemanth.hm](http://h3manth.com)
