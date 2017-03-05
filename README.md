# random-quote
> A NodeJS library for generating random quotes

[![NPM](https://nodei.co/npm/random-quote.png)](https://nodei.co/npm/random-quote/)

[![Build Status](https://travis-ci.org/pmbenjamin/random-quote.svg?branch=master)](https://travis-ci.org/pmbenjamin/random-quote)
[![Known Vulnerabilities](https://snyk.io/test/npm/random-quote/badge.svg?style=flat-square)](https://snyk.io/test/npm/random-quote)

## Install
```
npm i -g random-quote
```

## Usage
```js
const randomQuote = require('random-quote');

randomQuote()
  .then(quote => console.log(quote))
  .catch(err => console.error(err));

// [{"ID":2024,"title":"John C Jay","content":"<p>If all else fails, [working harder than anyone else] is the greatest competitive advantage of any career.</p>\n","link":"https://quotesondesign.com/john-c-jay/"}]
```
