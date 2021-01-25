import {Request, Response} from 'express';
import pool from '../database';
class UsersController {
    public async list (req:Request, res:Response){
    const users = await pool.query('SELECT * FROM users')
    res.json(users);
    }
    public async getOne (req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const user = await pool.query('SELECT * FROM users WHERE id = ?',[id]);
        if (user.length>0){
            return res.json(user[0]);
        }
        console.log(user);
        res.status(404).json({text: 'User doesn´t exist!'})
        }
    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO users set ?',[req.body])
        console.log(req.body);
        res.json({text:' user created'});
    }
    public  async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE users SET ? WHERE id = ?',[req.body,id]);
        res.json({text:'user was updated '+req.params.id});
    }
    public async delete(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('DELETE FROM users WHERE id = ?',[id]);
        res.json({text:'user was deleted'});
    }
}

const usersController = new UsersController();
export default usersController
