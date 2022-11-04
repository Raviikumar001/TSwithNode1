"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestHandlerRoutes = void 0;
const fs_1 = require("fs");
const requestHandlerRoutes = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Submit</button></form> </body>');
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            (0, fs_1.writeFile)('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My nodejs program</title></head>");
    res.write("<body><p>hello</p></body>");
    res.write("</html>");
    res.end();
};
exports.requestHandlerRoutes = requestHandlerRoutes;
