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

## License

The MIT License (MIT)

Copyright (c) 2015 Man and Moon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.