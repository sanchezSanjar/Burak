import { Request, Response} from "express";
import {T} from "../libs/types/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome ');
        // LOGIC
        // SERVICE MODEL
        // ...
        res.send('You are on Home Page');
    } catch (err) {
        console.log("Error, goHome:", err);
    } 
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try { 
        console.log('getLogin');
        res.send('You are on Login Page');
    } catch (err) {
        console.log("Error, getLogin:", err);
    } 
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.send('You are on SignUp Page');
    } catch (err) {
        console.log("Error, getSignup:", err);
    } 
};

export default restaurantController;


