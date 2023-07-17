# ls-debugger

## Usage:

- install ls-debugger
- point your editor to `ls-debugger`
- 2nd param is a server you want to debug
- rest params are passed directly to the server
- whole messages will be logged into `~/ls-debugger.log`

## Instalation:

```bash
$ npm install -g ls-debugger
```

## TODO:

- [x] new session indicator
- [ ] Send info to editor via LS
- [ ] Better errors
- [ ] Listen on unix socket to send messages to editor/server
- [ ] Custom log file path
- [ ] logfile depends on server name
