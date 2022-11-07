import { Router } from "express";
import path from "path";
const shopRouter = Router();

shopRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../','src', 'views','shop.html'))
});

export default shopRouter;

