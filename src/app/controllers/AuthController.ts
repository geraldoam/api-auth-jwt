import { Request, response, Response } from 'express';
import { AuthService } from '../services/AuthService';

require('dotenv').config();

class AuthController {
  async execute(req: Request, res: Response) {
    const { email, password } = req.body;
    const authService = new AuthService();

    const token = await authService.execute({
      email,
      password,
    });

    return res.json(token);
  }
}

export { AuthController };
