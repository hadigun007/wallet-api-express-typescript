import {Response, Request} from 'express'
abstract class Controller {
    public abstract index(req:Request, res:Response):Response
    public abstract store(req: Request, res: Response):Response
    public abstract show(req: Request, res: Response):Response
    public abstract update(req: Request, res: Response):Response
    public abstract destroy(req: Request, res: Response):Response
}

export default Controller