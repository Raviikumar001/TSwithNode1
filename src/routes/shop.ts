import { Router } from "express";
import path from "path";
const shopRouter = Router();

import { products } from "./admin";


shopRouter.get("/", (req, res, next) => {
  console.log(products)
  res.sendFile(path.join(__dirname, '../../','src', 'views','shop.html'))
});

export default shopRouter;

