<<<<<<< HEAD
import { T } from "../libs/types/common";
import Errors from "../libs/Errors";
import { Request, Response } from "express";
import ProductService from "../models/Product.service";

 

const productrService = new ProductService();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts"); 
=======
import { Request, Response} from "express";
import { T } from "../libs/types/common";
import Errors from "../libs/Errors";
import MemberService from "../models/Member.service";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";


const productService = new ProductService();


const productController: T = {};

productController.getAllproducts = async (req: AdminRequest, res: Response) => {
    try {
        console.log("getAllProducts");
        console.log("req.member", req.member);
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8
        res.render("products");
    } catch (err) {
        console.log("Error, getAllProducts:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
<<<<<<< HEAD
        else res.status(Errors.standard.code).json(Errors.standard);
    } 
};
productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProduct"); 
        res.send("DONE!")
    } catch (err) {
        console.log("Error, createNewProduct:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};
productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct"); 
    } catch (err) {
        console.log("Error, updateChosenProduct:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};


export default productController;
=======
        else res.status(Errors.standard.code).json(Errors.standard)};
    };

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("creatNewProduct");
        
    } catch (err) {
        console.log("Error, creatNewProduct:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)};
    };
 
productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
        
    } catch (err) {
        console.log("Error, updateChosenProduct:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)};
    };

export default productController
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8
