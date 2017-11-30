#!/usr/bin/env node

const wh = require('.')
const args = require('minimist')(process.argv.slice(2))

if (!args._.length || !args._[0].length) {
  console.log('Usage:\n')
  console.log('wh Electromagnetism')
  console.log('wh Pierre Curie')
  process.exit()
}

async function main () {
  const hyperlinks = await wh(args._.join(' '))
  console.log(hyperlinks.join('\n'))
}

main()
