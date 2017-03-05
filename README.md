# random-quote
> A NodeJS library for generating random quotes

[![NPM](https://nodei.co/npm/random-quote.png?downloads=true)](https://nodei.co/npm/random-quote/)

[![Build Status](https://travis-ci.org/petermbenjamin/random-quote.svg?branch=master)](https://travis-ci.org/petermbenjamin/random-quote)
[![NSP Status](https://nodesecurity.io/orgs/petermbenjamin/projects/1105d7b7-5d1f-4006-9811-ad01f130110c/badge)](https://nodesecurity.io/orgs/petermbenjamin/projects/1105d7b7-5d1f-4006-9811-ad01f130110c)

## Install
```
npm i -S random-quote
```

## Usage
```js
const randomQuote = require('random-quote');

randomQuote()
  .then(quote => console.log(quote))
  .catch(err => console.error(err));

// [{"ID":2024,"title":"John C Jay","content":"<p>If all else fails, [working harder than anyone else] is the greatest competitive advantage of any career.</p>\n","link":"https://quotesondesign.com/john-c-jay/"}]
```
