import { Request, Response } from "express";
import winston from 'winston';


const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'src/logs.log' }),
  ],
});

function log(req: Request, res: Response, next: any){
    const header = JSON.stringify(req.headers,)
    const body = JSON.stringify(req.body)
    const date = new Date().toLocaleString()
    const path = req.path
    logger.log({level:'info', message: `date: ${date}, path: ${path}, header: ${header}, body: ${body}`})
    next()
}    

export default log





