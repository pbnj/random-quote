const { describe, it } = require('mocha');
const { expect } = require('chai');

const rq = require('../');

describe('random-quote', () => {
  it('should generate a random quote', () => rq().then(quote => expect(quote[0]).to.have.any.keys('ID', 'title', 'content', 'link', 'custom_meta')));
});
