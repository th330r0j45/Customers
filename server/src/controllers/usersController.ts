import {Request, Response} from 'express';
import pool from '../database';
class UsersController {
    public index (req:Request, res:Response){
    pool.query('DESCRIBE users');
    res.json('Users')
}
}

const usersController = new UsersController();
export default usersController
