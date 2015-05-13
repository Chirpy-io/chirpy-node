## Chirpy.io

<img src="https://nodei.co/npm/chirpy.png" />

> Knowing users are using your app is both addictive and motivating, but staring at dashboards isn't productive at all. Drop in our tracking code and we will audiolize your data in realtime. Now you can really start litening to your users!

## Install:

```bash
$ npm install chirpy --save
```

## Usage

```js
//Require module
var Chirpy = require('chirpy');

var project = new Chirpy('your-token');

project.track('myEvent', function(err) { 
  if (!err) console.log('Woo!');
});

project.track('myEvent', {labels: ['a', 'b', 'c']}, function(err) {
  if (!err) console.log('Woo again!');
});
```

You can generate a tracking ID by registering at [chirpy.io](http://chirpy.io)
