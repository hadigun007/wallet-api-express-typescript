import {Response, Request} from 'express'
interface Controller {
    index(req:Request, res:Response):Response
    // store(req: Request, res: Response):Response
    show(req: Request, res: Response):Response
    update(req: Request, res: Response):Response
    destroy(req: Request, res: Response):Response
}

export default Controller