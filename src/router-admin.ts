import express from "express";
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';
<<<<<<< HEAD
import router from "./router";
=======
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/** Restaurnat */
routerAdmin.get('/',restaurantController.goHome);
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);
routerAdmin
    .get("/signup", restaurantController.getSignup)
<<<<<<< HEAD
    .post(
        "/signup", makeUploader("members").single("memberImage"),
        restaurantController.processSignup);
=======
    .post("/signup",   makeUploader("members").single("memberImage"),
     restaurantController.processSignup);
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */
routerAdmin.get(
<<<<<<< HEAD
    "/product/all", 
    restaurantController.verifyRestaurant, 
    productController.getAllProducts);

routerAdmin.post(
    "/product/create", 
    restaurantController.verifyRestaurant,
    makeUploader("products").array("productImages", 5),
    // uploadProductImage.single("productImage"),
    productController.createNewProduct);
=======
    "/product/all",
    restaurantController.verifyRestaurant, 
    productController.getAllproducts);

routerAdmin.post(
    "/product/create",
    restaurantController.verifyRestaurant, 
    makeUploader("products").array("productImages", 5),
    productController.createNewProduct);
 
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8

routerAdmin.post(
    "/product/:id", 
    restaurantController.verifyRestaurant, 
    productController.updateChosenProduct);

/** User */
export default routerAdmin; 