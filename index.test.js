const randomQuote = require('./index');

const desiredOutput = [{
  ID: 804,
  title: 'P.S.C. Trier',
  content: '<p>Propaganda supersedes fact, truth and common sense in all cases.  </p>\n',
  link: 'https://quotesondesign.com/p-s-c-trier/',
}];

describe('random quote', () => {
  test('produces the expected object', () => randomQuote()
    .then((quote) => {
      expect(Object.keys(quote[0])).toHaveLength(Object.keys(desiredOutput[0]).length);
    }));

  test('contains expected object keys', () => randomQuote()
    .then((quote) => {
      expect(Object.keys(quote[0])).toEqual(Object.keys(desiredOutput[0]));
    }));
});
