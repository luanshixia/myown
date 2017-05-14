#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const open = require('open');

program
  .version('0.0.1')
  .usage('<command> [options] <argument>');

program
  .command('browse <url>')
  .action((url) => {
    console.log(`Opening ${url} in browser...`);
    open(url);
  });

program
  .command('google <kwd>')
  .action((kwd) => {
    kwd = encodeURIComponent(kwd);
    const url = `https://www.google.com/#q=${kwd}`;
    console.log('Opening Google in browser...');
    open(url);
  });

program
  .command('maps <kwd>')
  .action((kwd) => {
    kwd = encodeURIComponent(kwd);
    const url = `https://www.google.com/maps/search/${kwd}`;
    console.log('Opening Google Maps in browser...');
    open(url);
  });

program.parse(process.argv);
