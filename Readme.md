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
  console.log(err);
});

project.track('myEvent', {labels: ['a', 'b', 'c']}, function(err) {

});
```

You can generate a tracking ID by registering at (chirpy.io)[http://chirpy.io]

