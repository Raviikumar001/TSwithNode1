import express  from 'express'
import path from 'path';
const adminRouter = express.Router();

//admin/add-prduct  => GET
adminRouter.get('/add-product', (req,res,next)=>{
 
    res.sendFile(path.join(__dirname, '../../', 'src', 'views','addproduct.html'))
 
 });
 //admin/add-product => POST
adminRouter.post('/add-product', (req,res) =>{
    console.log(req.body)
    res.redirect('/');
 })

export default adminRouter


