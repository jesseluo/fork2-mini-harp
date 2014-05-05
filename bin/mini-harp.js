#!/usr/bin/env node

var parseArgs = require('minimist');
var port;

argv = parseArgs(process.argv.slice(2));

if (argv.port) {
  port = argv.port;
}
else {
  port = 4000;
};

var createMiniHarp = require("mini-harp")
  , app = createMiniHarp(port);

app.listen(port);