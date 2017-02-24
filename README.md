# random-quote
A NodeJS library for generating random quotes

## Install
`npm i -g random-quote`

## Usage
```js
const randomQuote = require('random-quote');

randomQuote()
  .then(quote => console.log(quote))
  .catch(err => console.error(err));
// [{"ID":2024,"title":"John C Jay","content":"<p>If all else fails, [working harder than anyone else] is the greatest competitive advantage of any career.</p>\n","link":"https://quotesondesign.com/john-c-jay/"}]
```
