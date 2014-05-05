#!/usr/bin/env node

var parseArgs = require('minimist');
var createMiniHarp = require("mini-harp");

console.log("Starting mini-harp on http://localhost:4000");

argv = parseArgs(process.argv.slice(2));
if (argv._[0]) {
  var root = argv._[0];
}
else {
  var root = process.cwd();
};

var app = createMiniHarp(root);

app.listen(4000);