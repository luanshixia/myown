#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const open = require('open');

program
  .version('0.0.1');

program
  .usage('browse <url>')
  .action((cmd, url) => {
    console.log(`Opening ${url} in browser...`);
    open(url);
  });

program.parse(process.argv);
