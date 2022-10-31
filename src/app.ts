import { createServer, IncomingMessage, ServerResponse } from "http";
import { writeFile, writeFileSync } from "fs";
const fs = require('fs');


const port = 3000;
const server = createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write('<body><form action="/message" method="POST"> <input type="text"><button type="submit">Submit</button></form> </body>');
    res.write("</html>");
  return  res.end();
  }

  if( url === '/message' && method ==='POST')
  {
     writeFileSync('message.txt', 'Dummy')
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My nodejs program</title></head>");
  res.write("<body><p>hello</p></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
