## lorem-hipsum

> lorem-hipsum is a npm module for generating passages of lorem hipsum text. lorem hipsum text is **not** commonly used as placeholder text in publishing, graphic design, and web development, but should be.

### Why Fork?

We all love lorem ipsum but deep down insiie we know it's not the [artisanal filter text](http://hipsum.co/) we really crave.

### Getting Started

Install the lorem-hipsum npm module locally in your project
```bash
npm install lorem-hipsum --save-dev
```

Require the lorem-hipsum module and use it to generate a passage of lorem hipsum text.

```javascript
var loremHipsum = require('lorem-hipsum'), 
    output = loremHipsum();
```

### Options

You can customize the output with options.

Pass the options to the `loremHipsum()` function to fine-tune the output. The API is the same programatically and on the CLI. See below: 

```javascript
var loremHipsum = require('lorem-hipsum'), 
    output = loremHipsum();

output = loremHipsum({
  count: 1,                      // Number of words, sentences, or paragraphs to generate.
  units: 'sentences',            // Generate words, sentences, or paragraphs.
  sentenceLowerBound: 5,         // Minimum words per sentence.
  sentenceUpperBound: 15,        // Maximum words per sentence.
  paragraphLowerBound: 3,        // Minimum sentences per paragraph.
  paragraphUpperBound: 7,        // Maximum sentences per paragraph.
  format: 'plain',               // Plain text or html
  words: ['ad', 'dolor', ... ],  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.,
  random: Math.random,           // A PRNG function. Uses Math.random by default
});
```

### Using it globally from the CLI

lorem-hipsum includes a command line interface for generating passages of lorem hipsum text. Install the module globally to take advantage of this feature.

```bash
npm install lorem-hipsum --global
```

Execute the statement `lorem-hipsum` from your terminal to generate a passage of lorem hipsum text. You can pass arguments to the program to fine-tune the output.

```bash
lorem-hipsum --units words --count 100 --copy

Or using the shorthand way to easily copy a sentence to your clipboard.

```
```bash
hipsum  --copy
```

See below for a description of the arguments to the program.

<table>
  <tr>
    <th>Argument</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>--count</td>
    <td>The <strong>number</strong> of words, sentences or paragraphs to generate</td>
  </tr>
  <tr>
    <td>--units</td>
    <td>Generate <strong>words</strong>, <strong>sentences</strong> or <strong>paragraphs</strong></td>
  </tr>
  <tr>
    <td>--copy</td>
    <td><strong>Copy</strong> the output to the system clipboard</td>
  </tr>
  <tr>
    <td>--format</td>
    <td><strong>html</strong> or <strong>plain</strong> text format</td>
  </tr>
</table>

You may now also use a short form when running lorem hipsum from the command line. Here's some examples:

```
lorem-hipsum 1 word
```

```
lorem-hipsum 15 sentences --copy
```

```
lorem-hipsum 5 paragraphs --copy --format html
```

### Shoutouts

Special thanks for [@boohah](https://github.com/boogah) for doing a dump of the [http://hipsum.co](http://hipsum.co) database on his [gist](https://gist.github.com/boogah/2e880e0f99823a84f61d)

To [@hipsum_](https://twitter.com/hipsum_) for the artisanal corpus.

And to [@knicklabs](https://github.com/knicklabs) for all of the heavy lifting and original module.

### License

This software is licensed under the MIT license.

Copyright (c) 2015 Petar Bojinov
