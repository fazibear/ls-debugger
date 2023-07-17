# ls-debugger

## Usage:

- install ls-debugger
- point your editor to `ls-debugger`
- 2nd param is a server you want to debug
- rest od params are passed to the server as well
- whole messages will be logged into `~/ls-debugger.log`

## Instalation:

```bash
$ npm install -g ls-debugger
```

## TODO:

- [x] new session indicator
- [ ] Send info to editor
- [ ] Better errors
- [ ] Custom log file path 
- [ ] Listen on unix socket to send messages to editor/server
- [ ] logfile depends on server name
