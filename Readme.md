## Chirpy.io tracking

Install:

```bash
$ npm install chirpy --save
```

Track events:

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

