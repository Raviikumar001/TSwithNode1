"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopRouter = (0, express_1.Router)();
const admin_1 = require("./admin");
shopRouter.get("/", (req, res, next) => {
    const shopProducts = admin_1.products;
    res.render('shop', { prod: shopProducts, docTitle: 'shop' });
    // res.sendFile(path.join(__dirname, '../../','src', 'views','shop.html'))
});
exports.default = shopRouter;
