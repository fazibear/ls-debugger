#!/usr/bin/env node

const { newSession } = require("./ls-debugger/logger.js");
const { spawnLS } = require("./ls-debugger/spawner.js");

newSession();
if (!spawnLS()) {
  return;
}
