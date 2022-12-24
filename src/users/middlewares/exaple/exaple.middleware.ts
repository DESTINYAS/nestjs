import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class ExapleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("yes")
    console.log(req.headers)
    next();
  }
}
