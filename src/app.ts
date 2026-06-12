import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT} from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions',
});


/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSION  **/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 3 // 3 h
        },
        store: store,
        resave: true,
        saveUninitialized: true

    })
);
<<<<<<< HEAD
app.use(function(req, res, next) {
=======
app.use(function(req,res,next) {
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
});

/** 3-VIEWS **/ 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

/** 4-ROUTERS **/ 
app.use("/admin", routerAdmin);     // SSR
app.use("/", router);              // SPA: REACT


export default app;  //