import { Request, Response } from 'express';
import { interfaceUser } from '../models/user.model';
import userService from '../services/user.service';

class UserController {
    async createUser(req: Request, res: Response) {
        const { username, email, password } = req.body;

        const newUser: interfaceUser = { username, email, password, profilePicture: `${req.file!.filename.split('.').slice(0, -1)}.webp` };

        try {
            const user = await userService.createUser(newUser);

            res.status(201).json(user);
        } catch (error: any) {
            if (error.name === 'ValidationError' || error.code === 11000) {
                res.status(400).json(error);
            } else {
                res.status(500).json(error);
            }
        }
    }
}

export default new UserController();
