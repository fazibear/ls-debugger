#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const { argv } = require('process');
const { createWriteStream } = require('fs');
const { inspect } = require('util');

const log_file = createWriteStream(require("os").homedir() + '/ls-debugger.log',  {flags : 'a'});

const log = function (sym, msg) {
   msg.toString().split(/Content-Length: \d+\r\n\r\n/g).forEach((data, _) => {
    try {
      if(data.length > 0) {
        json = JSON.parse(data);

        if(json['method']){
          log_file.write(sym + ' ' + json['method']);
          if(json['params']){
            log_file.write(': ' + inspect(json['params'], {colors: true, depth: 50}));
          }
        } else {
          log_file.write(sym + ' result: ' + inspect(json['result'], {colors: true, depth: 50}));
        }
        log_file.write('\n\n');
      }
    } catch (error) {
      log_file.write('❌' + sym + ' message:' + inspect(msg.toString()) + '\n');
      log_file.write('❌' + sym + ' data:' + inspect(data) + '\n');
      log_file.write('❌' + sym + ' error: ' + inspect(error) + '\n');
    }
  });
};

const node = argv.shift();
const index = argv.shift();
const lsp_process = argv.shift();
const lsp_params = argv;

if((node.match(/node$/) || []).size == 0){
  return;
}

if((index.match(/index\.js$/) || []).size == 0){
  return;
}

const lsp = spawn(lsp_process, lsp_params);

lsp.stdout.on('data', (data) => {
  log('👈', data);
  process.stdout.write(data);
});

process.stdin.on('data', (data) => {
  log('👉', data);
  lsp.stdin.write(data);
});
