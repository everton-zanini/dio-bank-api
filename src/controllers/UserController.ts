import { Request, Response } from 'express'

import UserService from '../services/UserService'

export default class UserController{
    createUser = (request:Request,response:Response) =>{
        const userService = new UserService();
        const user = request.body

        if(!user.name){
            return response.status(400).json({message:'Nome obrigatório'})
        }

        if(!user.email){
            return response.status(400).json({message:'E-mail obrigatório'})
        }

        userService.createUser(user.name,user.email)
        return response.status(201).json({message: 'Usuário criado'})
    }

    getAllUsers = (request:Request,response:Response) =>{
        const userService = new UserService();
        return response.status(200).json(userService.getAllUsers());
    }
}

