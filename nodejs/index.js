// console.log(global)
// console.log(process.platform)
// console.log(process.argv)
// console.log(__dirname);
// console.log(__filename);

// const os = require("os");
// console.log(os.platform());
// console.log(os.homedir());
import fs from "fs";
console.log("moves to call stack first");
fs.readFile("./test.txt", "utf-8", (err, data) => {
  console.log(
    "Handled by os. when os completes reading file it enters callback queue and then event loop checks if call stack is empty and then executes the callback",
  );
  if (data) {
    console.log("File data:", data);
    // return;
  } else {
    console.log("Something went wrong", err);
  }

  console.log("LALALA");
});

console.log("moves to call stack second");
