### LoremHipsum.js

LoremHipsum.js is a Node.js and Component.js module for generating passages of lorem hipsum text. lorem hipsum text is commonly used as placeholder text in publishing, graphic design, and web development.

### Why Fork?

We all love lorem ipsum but deep down insdie we know it's not the [artisanal filter text](http://hipsum.co/) we really want.

### Getting Started

Install the LoremHipsum.js npm module
```bash
cd ~/MyProject
npm install lorem-hipsum
```

Require the LoremHipsum.js module and use it to generate a passage of lorem hipsum text.

```javascript
var LoremHipsum = require('lorem-hipsum'), 
    output = LoremHipsum();
```

### Customizing the Output with Options (Node.js)

You can pass options to the LoremHipsum() function to fine-tune the output. The API is the same on client and server. See below: 

```javascript
...
output = LoremHipsum({
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

### Using the CLI (Node.js)

LoremHipsum.js includes a command line interface for generating passages of lorem hipsum text. Install the module globally to take advantage of this feature.

```bash
npm install lorem-hipsum --global
```

Execute the statement `lorem-hipsum` from your terminal to generate a passage of lorem hipsum text. You can pass arguments to the program to fine-tune the output.

```bash
lorem-hipsum --units words --count 100 --copy --format html
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

Special thanks for [@boohah](https://github.com/boogah) for doing a dump of the [http://hipsum.co](http://hipsum.co) database.

And of course to [@hipsum_](https://twitter.com/hipsum_), with whom this wouldn't exist without.

### License

This software is licensed under the MIT license.

Copyright (c) 2012-2014 Nickolas Kenyeres

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
