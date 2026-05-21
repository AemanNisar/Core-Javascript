import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") res.write("<h1>Hello this is home page</h1>");
  else if (req.url == "/about") res.write("<h1>This is about page</h1>");
  else res.write("404 Not Found")
  res.end();
});
server.listen(3000);
console.log(http);