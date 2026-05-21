import fs from "fs";
function readSynchronously() {
  const data = fs.readFileSync("./test.txt", "utf-8");
  if (data) {
    console.log("data:", data);
  }
  console.log(
    "this will be executed after reading file data because readFileSync is a blocking operation and it blocks the execution of next line until it completes reading file data",
  );
}
function printData() {
  console.log("this will be executed before reading file data because readFile is a non-blocking operation and it does not block the execution of next line until it completes reading file data");
}
readSynchronously();
printData();