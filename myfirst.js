const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello from the main side ....");
  } else if (req.url == "/about") {
    res.end("hello from the about side ....");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening... the server..");
});
