import express  from 'express'
import path from 'path';
const adminRouter = express.Router();

type Title={
    title: string;
}
export const products: Title[]= [];





//admin/add-prduct  => GET
adminRouter.get('/add-product', (req,res,next)=>{
 
    res.sendFile(path.join(__dirname, '../../', 'src', 'views','addproduct.html'))
 
 });
 //admin/add-product => POST
adminRouter.post('/add-product', (req,res,next) =>{
    products.push( { title: req.body.title})
    res.redirect('/');
 })

export default adminRouter


