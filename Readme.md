## Chirpy.io tracking

Install:

```bash
$ npm install chirpy --save
```

Track events:

```js
//Require module
var chirpy = require('chirpy');

//Set tracking id
chirpy.id = xxx;

//Track event*
chirpy.send('my event');
```

You can generate a tracking ID at www.chirpy.io

