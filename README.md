# isohunt
A Node.js module to search for torrents at Isohunt tracker.

## Installation
* `npm install isohunt`

## Usage
```javascript
const isohunt = require('isohunt')

isohunt.search(keyword, function(err, results) {
  console.log(results) // returns name, size, seeders, url
})
```

## Packages
* [request](https://github.com/request/request)
* [cheerio](https://github.com/cheeriojs/cheerio)

## License
This project is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. But you always need to state that xWeb is the original author of this template.

Project is developed and maintained by [Mike Kokkolios](https://www.linkedin.com/in/kokkolios/).
