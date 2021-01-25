import express, { Router } from 'express';

import usersController from '../controllers/usersController';


class UserRoutes {

     router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/',usersController.index);
        
    }

}
export default new UserRoutes().router;
