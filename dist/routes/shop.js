"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopRouter = (0, express_1.Router)();
shopRouter.get("/", (req, res, next) => {
    res.render('shop');
    // res.sendFile(path.join(__dirname, '../../','src', 'views','shop.html'))
});
exports.default = shopRouter;
