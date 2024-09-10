import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const now = new Date().toISOString();
        console.log(`[${now} FECHA] ${req.method} ${req.originalUrl}`)
        next();
    }
}