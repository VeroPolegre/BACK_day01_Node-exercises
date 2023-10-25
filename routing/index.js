const http = require("http");

const url = require("url");

const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);

    const filename = "." + q.pathname;

    fs.readFile(filename, (err, data) => {
      try {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.write(data);

        return res.end();
      } catch (error) {
        console.error(error);
      }
    });
  })
  .listen(8080);
