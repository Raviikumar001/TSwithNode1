import { writeFile, writeFileSync } from "fs";
import { IncomingMessage, ServerResponse } from "http";

 export const requestHandlerRoutes = (req: IncomingMessage,res: ServerResponse)=>{


const url = req.url;
const method = req.method;
if (url === "/") {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Enter message</title></head>");
  res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Submit</button></form> </body>');
  res.write("</html>");
return  res.end();
}    

if( url === '/message' && method ==='POST')
{
  const body: Array<Buffer> = []
  req.on('data', (chunk: Buffer)=>{
      console.log(chunk);
      body.push(chunk);
  })

 return req.on('end', ()=>
  {
    const parsedBody =Buffer.concat(body).toString();
    const   message = parsedBody.split('=')[1];
    writeFile('message.txt', message , err => {
      res.statusCode = 302;
      res.setHeader('Location','/'  );
 
      return res.end()
       
    });
   
  })


  
}
res.setHeader("Content-Type", "text/html");
res.write("<html>");
res.write("<head><title>My nodejs program</title></head>");
res.write("<body><p>hello</p></body>");
res.write("</html>");
res.end();

}





