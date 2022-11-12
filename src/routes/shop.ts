import { Router } from "express";
import path from "path";
const shopRouter = Router();

import { products} from "./admin";


shopRouter.get("/", (req, res, next) => {
  
  const shopProducts = products
  res.render('shop', {prod: shopProducts, docTitle:'shop', path: '/'})
  // res.sendFile(path.join(__dirname, '../../','src', 'views','shop.html'))
});

export default shopRouter;

