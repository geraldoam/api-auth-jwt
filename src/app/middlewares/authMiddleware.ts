import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

require('dotenv').config();

interface TokenPayLoad {
  sub: string;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.send(401);
  }

  const token = authorization.split(' ')[1];

  try {
    const { sub } = verify(token, process.env.JWT_KEY) as TokenPayLoad;

    req.userId = sub;

    return next();
  } catch {
    return res.sendStatus(401);
  }
}
