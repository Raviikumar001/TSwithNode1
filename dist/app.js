"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const port = 3000;
const server = (0, http_1.createServer)((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write('<body><form action="/message" method="POST"> <input type="text"><button type="submit">Submit</button></form> </body>');
        res.write("</html>");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My nodejs program</title></head>");
    res.write("<body><p>hello</p></body>");
    res.write("</html>");
    res.end();
});
server.listen(3000);
