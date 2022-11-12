

import express, { Application } from 'express';
import { IncomingMessage, ServerResponse } from 'http'; 
import bodyParser from 'body-parser';
import path from 'path';
import adminRouter from './routes/admin';
import shopRouter from './routes/shop';




const app:Application = express();
app.set('view engine', 'pug');
app.set('views', path.join('src','views'));





app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'../','public')))

app.use("/admin",adminRouter); 

app.use(shopRouter); 

app.use( (req, res ,next) =>{
   res.status(404).sendFile(path.join(__dirname, '../', 'src', 'views', 'Error.html'))
})
  


app.listen(3000);