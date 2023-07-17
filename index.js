#!/usr/bin/env node

const { newSession } = require('./ls-debugger/logger.js');
const { spawnLS } = require('./ls-debugger/spawner.js');

// const to_server = new JSONRPCClient((jsonRPCRequest) => {
//   const json = JSON.stringify(jsonRPCRequest);
//   const msg = 'Content-Length: ' + json.length + '\r\n\r\n' + json + '\n';
//   log(':👉', msg);
//   lsp.stdin.write(msg);
// });

newSession();
if(!spawnLS()){
  return
}

// setTimeout(() => {
//   to_server.request("setEditorInfo", {
//     "editorInfo": {
//       "name": "fancy-editor",
//       "version": "0.666",
//     },
//     "editorPluginInfo": {
//       "name": "fancy-plygin",
//       "version": "0.666",
//     }
//   })
// }, 5000);
