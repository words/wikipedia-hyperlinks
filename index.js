const got = require('got')
const cheerio = require('cheerio')
const {chain} = require('lodash')
const decode = require('urldecode')

module.exports = async function wikipediaHyperlinks (topic) {
  let res
  try {
    res = await got(`https://en.wikipedia.org/wiki/${topic}`)
  } catch (e) {
    return []
  }

  const $ = cheerio.load(res.body)

  const hrefs = $('#content a').map((i, el) => $(el).attr('href')).get()

  return chain(hrefs)
    // remove external links and #named-anchors
    .filter(topic => topic.startsWith('/wiki/'))

    // remove prefixes like Category:, File:, etc
    .filter(topic => !topic.includes(':'))

    .map(topic => topic

      // underscores to spaces
      .replace(/_/g, ' ')

      // remove URL prefix
      .replace(/^\/wiki\//, '')
    )

    // Curie%27s law -> Curie's law
    .map(decode)
    .uniq()
    .value()
}
