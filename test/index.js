require('chai').should()
const {describe, it} = require('mocha')
const wh = require('..')

describe('wikipedia-hyperlinks module', function () {
  this.timeout(10 * 1000)

  it('is a function', () => {
    wh.should.be.a('function')
  })

  it('expects a topic as its first argument', async () => {
    const hyperlinks = await wh('Pierre Curie')
    hyperlinks.should.be.an('array')
    hyperlinks.should.include('Crystallography')

    // replaces spaces
    hyperlinks.should.include('Gravitational field')

    // Curie%27s law
    hyperlinks.should.include('Curie\'s law')
  })

  it('yields an empty array for nonexistent articles', async () => {
    const hyperlinks = await wh('lksjdfosdiufsdjlkfjsdoifuds')
    hyperlinks.should.be.an('array')
    hyperlinks.length.should.eq(0)
  })
})
