"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const express_1 = __importDefault(require("express"));
const adminRouter = express_1.default.Router();
exports.products = [];
//admin/add-prduct  => GET
adminRouter.get('/add-product', (req, res, next) => {
    res.render('addproduct', { pageTitle: 'Add product' });
    // res.sendFile(path.join(__dirname, '../../', 'src', 'views','addproduct.html'))
});
//admin/add-product => POST
adminRouter.post('/add-product', (req, res, next) => {
    exports.products.push({ title: req.body.title });
    res.redirect('/');
});
exports.default = adminRouter;
