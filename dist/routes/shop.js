"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const shopRouter = (0, express_1.Router)();
const admin_1 = require("./admin");
shopRouter.get("/", (req, res, next) => {
    console.log(admin_1.products);
    res.sendFile(path_1.default.join(__dirname, '../../', 'src', 'views', 'shop.html'));
});
exports.default = shopRouter;
