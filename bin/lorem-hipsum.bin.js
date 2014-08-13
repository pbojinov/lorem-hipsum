#!/usr/bin/env node

var optimist = require('optimist'),
    generator = require('./../lib/generator'),
    clipper = require('./../lib/clipper');

var options = {},
    arguments = optimist.argv,
    loremHipsum = '';

// Allow CLI user to run command with plain english. E.g. "lorem-hipsum 1 sentence" or "lorem-hipsum 3 words --copy"
var nakedArguments = arguments._;
if (nakedArguments.length >= 2) {
    arguments.count = nakedArguments[0]; // Clobber count.
    arguments.units = nakedArguments[1]; // Clobber units.
}

options.units = arguments.units || 'sentences';
options.count = arguments.count || 1;
options.copy = arguments.copy ? true : false;
options.format = arguments.format || 'plain';

// Generate the lorem ipsum text and print it out.
loremHipsum = generator(options);
console.log(loremHipsum);

// Copy the lorem ipsum text to the clipboard.
if (options.copy) {
    clipper(loremHipsum, function(err) {
        err ? process.exit(1) : process.exit()
    });
} else {
    process.exit(); // Successful exit.
}
