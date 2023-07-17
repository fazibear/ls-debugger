const { spawn } = require('child_process');
const { argv } = require('process');
const { log } = require('./logger.js');

exports.spawnLS = function(){
  const node = argv.shift();
  const index = argv.shift();
  const lsp_process = argv.shift();
  const lsp_params = argv;

  if((node.match(/node$/) || []).size == 0){
    return false;
  }

  if((index.match(/index\.js$/) || []).size == 0){
    return false;
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
}
