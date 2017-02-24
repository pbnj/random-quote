const jsonp = require('then-jsonp');

const ENDPOINT = 'http://quotesondesign.com/wp-json/posts';
/**
 * Generates a random quote
 */
module.exports = () => new Promise((resolve, reject) => {
  const params = {
    'filter[orderby]': 'rand',
    'filter[posts_per_page]': 1,
    _: new Date().getTime(),
  };

  jsonp('GET', ENDPOINT, { qs: params, skipJsonpOnServer: true }, (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});
