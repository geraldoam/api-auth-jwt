import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

class UserController {
  index(req: Request, res: Response) {
    return res.send({
      userID: req.userId,
    });
  }

  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const userService = new UserService();

    const user = await userService.execute({
      email,
      password,
    });

    return res.json(user);
  }
}

export { UserController };
