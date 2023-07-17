// const to_server = new JSONRPCClient((jsonRPCRequest) => {
//   const json = JSON.stringify(jsonRPCRequest);
//   const msg = 'Content-Length: ' + json.length + '\r\n\r\n' + json + '\n';
//   log(':👉', msg);
//   lsp.stdin.write(msg);
// });

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
