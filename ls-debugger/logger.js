const { createWriteStream } = require("fs");
const { inspect } = require("util");

const logFile = createWriteStream(
  require("os").homedir() + "/ls-debugger.log",
  { flags: "a" },
);

exports.newSession = function () {
  logFile.write("\n👇👇👇👇👇\n");
};

exports.log = function (sym, msg) {
  msg
    .toString()
    .split(/Content-Length: \d+\r\n\r\n/g)
    .forEach((data, _) => {
      try {
        if (data.length > 0) {
          json = JSON.parse(data);

          if (json["method"]) {
            logFile.write(sym + " " + json["method"]);
            if (json["params"]) {
              logFile.write(
                ": " + inspect(json["params"], { colors: true, depth: 50 }),
              );
            }
          } else {
            logFile.write(
              sym +
                " result: " +
                inspect(json["result"], { colors: true, depth: 50 }),
            );
          }
          logFile.write("\n\n");
        }
      } catch (error) {
        logFile.write(
          "❌" + sym + " message:" + inspect(msg.toString()) + "\n",
        );
        logFile.write("❌" + sym + " data:" + inspect(data) + "\n");
        logFile.write("❌" + sym + " error: " + inspect(error) + "\n");
      }
    });
};
