require('chai').should()
const {describe, it} = require('mocha')
const nixt = require('nixt')

describe('wikipedia-hyperlinks CLI', function () {
  it('displays usage if no args are present', (done) => {
    nixt()
    .run(`node cli.js`)
    .stdout(/Usage:/)
    .end(done)
  })

  it('displays a list of topics', (done) => {
    nixt()
    .run(`node cli.js Pierre Curie`)
    .stdout(/magnetism/)
    .end(done)
  })
})
