# wikipedia-hyperlinks 

Give me a term and I'll give you a list of links found in its Wikipedia article

## Installation

This module requires Node.js 8 or higher, because it uses async functions.

Install as a module for programmatic use in your JavaScript code:

```sh
npm i wikipedia-hyperlinks --save
```

Or install as a command-line tool:

```sh
npm i -g wikipedia-hyperlinks
```

## Module Usage

The module exports a single async function which expects a search string:

```js
const wh = require('wikipedia-hyperlinks')

wh('Pierre Curie').then(links => {
  console.log(links.slice(0, 10))

  // Paris
  // University of Paris
  // Radioactivity
  // Curie-Weiss law
  // Curie constant
  // Curie temperature
  // Piezoelectricity
  // Marie Skłodowska-Curie
  // Irène Joliot-Curie
})
```

If no match is found, an empty array is returned.

## CLI Usage

If you install the module globally, you'll have a command called 
`wikipedia-hyperlinks` on your PATH, and another called `wh` for convenience.

Enter a term:

```sh
wh Pierre Curie | head

Paris
University of Paris
Radioactivity
Curie-Weiss law
Curie constant
Curie temperature
Piezoelectricity
Marie Skłodowska-Curie
Irène Joliot-Curie
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [cheerio](https://github.com/cheeriojs/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [got](): Simplified HTTP requests
- [lodash](): Lodash modular utilities.
- [minimist](https://github.com/substack/minimist): parse argument options
- [urldecode](https://github.com/zhiyelee/urldecode): Decode url

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [nixt](https://github.com/vesln/nixt): Simple and powerful testing for command-line apps
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT
